import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { FROM_EMAIL, REPLY_TO, getResend } from "@/lib/leads/resend";
import { insertLead } from "@/lib/leads/store";
import { workbookEmail } from "@/lib/leads/emailTemplates";
import { getCourse } from "@/lib/academy/content";

export const runtime = "nodejs";

/**
 * Workbook-to-email handler.
 * POST { email, name?, courseSlug }
 * Looks up the course, attaches the matching workbook PDF from
 * public/academy/workbooks/<courseSlug>.pdf, and emails it via Resend.
 */
export async function POST(req: NextRequest) {
  let body: { email?: string; name?: string; courseSlug?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const courseSlug = (body.courseSlug || "").trim();
  const name = body.name?.trim() || null;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!courseSlug) {
    return NextResponse.json({ error: "courseSlug required" }, { status: 400 });
  }

  const course = await getCourse(courseSlug);
  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const pdfPath = path.join(process.cwd(), "public", "academy", "workbooks", `${courseSlug}.pdf`);
  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await fs.readFile(pdfPath);
  } catch {
    return NextResponse.json(
      { error: "Workbook not available for this course yet" },
      { status: 404 }
    );
  }

  const { subject, html } = workbookEmail(course.title);
  const filename = `MaxLife-Academy-${course.title.replace(/[^a-z0-9]+/gi, "-")}-Workbook.pdf`;

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: REPLY_TO,
      subject,
      html,
      attachments: [{ filename, content: pdfBuffer }],
    });
    if (error) {
      console.error("[workbook] resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }
  } catch (e) {
    console.error("[workbook] send threw:", e);
    return NextResponse.json({ error: "Email service unavailable" }, { status: 502 });
  }

  // Log lead asynchronously — don't block the response on it.
  void insertLead({
    email,
    name,
    source: "workbook",
    sourceRef: courseSlug,
    metadata: { courseTitle: course.title },
    userAgent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
    ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
  });

  return NextResponse.json({ ok: true });
}
