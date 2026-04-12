/**
 * Generate branded workbook PDFs for all MaxLife Academy courses.
 *
 * Usage:  node scripts/generate-workbooks.mjs
 *
 * Reads each course's course.json + lesson MDX files, then generates
 * a professional PDF workbook at public/academy/workbooks/<slug>.pdf
 *
 * Skips courses that already have a PDF unless --force is passed.
 */

import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COURSES_DIR = path.join(__dirname, "..", "src", "content", "academy", "courses");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "academy", "workbooks");

const GOLD = [212, 175, 55];     // #D4AF37
const DARK = [10, 10, 10];       // #0a0a0a
const WHITE = [255, 255, 255];
const GRAY = [107, 114, 128];    // #6b7280
const LIGHT_GOLD = [255, 248, 225]; // very light gold tint for boxes
const BORDER_GRAY = [209, 213, 219];

const FORCE = process.argv.includes("--force");

// ─── helpers ───────────────────────────────────────────────────────

function readCourseJson(slug) {
  const raw = fs.readFileSync(path.join(COURSES_DIR, slug, "course.json"), "utf8");
  return JSON.parse(raw);
}

function readLessons(slug) {
  const lessonsDir = path.join(COURSES_DIR, slug, "lessons");
  if (!fs.existsSync(lessonsDir)) return [];
  const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith(".mdx")).sort();
  return files.map(f => {
    const raw = fs.readFileSync(path.join(lessonsDir, f), "utf8");
    return parseMdx(raw);
  });
}

function parseMdx(raw) {
  // Extract frontmatter
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/);
  let title = "Lesson";
  let description = "";
  if (fmMatch) {
    const fm = fmMatch[1];
    const titleMatch = fm.match(/^title:\s*(.+)$/m);
    const descMatch = fm.match(/^description:\s*(.+)$/m);
    if (titleMatch) title = titleMatch[1].trim().replace(/^["']|["']$/g, "");
    if (descMatch) description = descMatch[1].trim().replace(/^["']|["']$/g, "");
  }

  // Get body (after frontmatter)
  const body = fmMatch ? raw.slice(fmMatch[0].length) : raw;

  // Extract key takeaways / bullet points / callouts
  const takeaways = [];
  const sections = [];
  let currentSection = null;

  for (const line of body.split("\n")) {
    const h2 = line.match(/^## (.+)/);
    const h3 = line.match(/^### (.+)/);
    const bullet = line.match(/^[-*]\s+\*\*(.+?)\*\*\s*[—–-]\s*(.*)/);
    const simpleBullet = line.match(/^[-*]\s+(.+)/);
    const callout = line.match(/<Callout[^>]*>\s*(.*)/);

    if (h2) {
      currentSection = { heading: h2[1].replace(/\*\*/g, ""), bullets: [] };
      sections.push(currentSection);
    } else if (h3 && currentSection) {
      currentSection.bullets.push({ type: "subheading", text: h3[1].replace(/\*\*/g, "") });
    } else if (bullet && currentSection) {
      currentSection.bullets.push({ type: "keybullet", term: bullet[1], desc: cleanMd(bullet[2]) });
    } else if (simpleBullet && currentSection) {
      currentSection.bullets.push({ type: "bullet", text: cleanMd(simpleBullet[1]) });
    } else if (callout) {
      takeaways.push(cleanMd(callout[1]));
    }
  }

  return { title, description, sections, takeaways };
}

function cleanMd(s) {
  return s
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

// ─── PDF generation ────────────────────────────────────────────────

function generateWorkbook(slug, course, lessons) {
  const outPath = path.join(OUTPUT_DIR, `${slug}.pdf`);

  const doc = new PDFDocument({
    size: "letter",
    margins: { top: 60, bottom: 60, left: 56, right: 56 },
    info: {
      Title: `${course.title} — Workbook`,
      Author: "MaxLife Academy",
      Subject: course.description,
      Creator: "MaxLife Realty · maxlifedevelopment.com",
    },
  });

  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

  // ── Cover page ───────────────────────────────────────────────
  // Dark background
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(DARK);

  // Gold accent line
  doc.rect(doc.page.margins.left, 120, pageWidth, 3).fill(GOLD);

  // Title
  doc.fontSize(11).fillColor(GOLD).text("MAXLIFE ACADEMY", doc.page.margins.left, 145, { width: pageWidth });
  doc.fontSize(28).fillColor(WHITE).text(course.title, doc.page.margins.left, 175, { width: pageWidth, lineGap: 4 });

  if (course.subtitle) {
    doc.moveDown(0.5);
    doc.fontSize(14).fillColor(GRAY).text(course.subtitle, { width: pageWidth });
  }

  // Workbook label
  doc.moveDown(2);
  doc.fontSize(16).fillColor(GOLD).text("STUDENT WORKBOOK", { width: pageWidth });

  // Gold accent line
  doc.rect(doc.page.margins.left, 340, pageWidth, 1).fill(GOLD);

  // Course info
  doc.fontSize(10).fillColor(GRAY);
  doc.text(`${lessons.length} Lessons · ${course.durationMinutes} Minutes`, doc.page.margins.left, 360, { width: pageWidth });
  if (course.tierTitle) {
    doc.text(`${course.tierTitle} · Course ${course.order} of 20`, { width: pageWidth });
  }

  // Footer
  doc.fontSize(9).fillColor(GRAY);
  doc.text("maxlifedevelopment.com/academy", doc.page.margins.left, doc.page.height - 80, { width: pageWidth, align: "center" });
  doc.text("© MaxLife Realty · Orlando, FL", { width: pageWidth, align: "center" });

  // ── Learning outcomes page ──────────────────────────────────
  doc.addPage();
  sectionHeader(doc, pageWidth, "What You Will Learn");

  doc.fontSize(11).fillColor([31, 41, 55]);
  doc.text(course.description, { width: pageWidth, lineGap: 3 });
  doc.moveDown(1.5);

  if (course.outcomes && course.outcomes.length > 0) {
    doc.fontSize(13).fillColor(DARK).text("Learning Outcomes", { width: pageWidth });
    doc.moveDown(0.5);
    doc.fontSize(10).fillColor([55, 65, 81]);
    course.outcomes.forEach((outcome, i) => {
      const bullet = `${i + 1}.`;
      doc.text(`${bullet}  ${outcome}`, { width: pageWidth, indent: 4, lineGap: 3 });
    });
  }

  if (course.prerequisites && course.prerequisites.length > 0) {
    doc.moveDown(1.5);
    doc.fontSize(10).fillColor(GRAY).text("Prerequisites: " + course.prerequisites.join(", "), { width: pageWidth });
  }

  // ── Lesson pages ─────────────────────────────────────────────
  lessons.forEach((lesson, idx) => {
    doc.addPage();

    // Lesson header
    doc.fontSize(9).fillColor(GOLD).text(`LESSON ${idx + 1} OF ${lessons.length}`, { width: pageWidth });
    doc.moveDown(0.3);
    doc.fontSize(18).fillColor(DARK).text(lesson.title, { width: pageWidth });

    if (lesson.description) {
      doc.moveDown(0.3);
      doc.fontSize(10).fillColor(GRAY).text(lesson.description, { width: pageWidth, lineGap: 2 });
    }

    doc.moveDown(0.8);

    // Key concepts from sections
    const conceptSections = lesson.sections.filter(s => s.bullets.length > 0);
    conceptSections.forEach(section => {
      checkPageSpace(doc, 80);
      doc.fontSize(12).fillColor(DARK).text(section.heading, { width: pageWidth });
      doc.moveDown(0.3);

      section.bullets.forEach(b => {
        checkPageSpace(doc, 30);
        if (b.type === "keybullet") {
          doc.fontSize(10).fillColor([31, 41, 55]);
          doc.text(`• ${b.term}`, { width: pageWidth, continued: true }).fillColor(GRAY).text(` — ${b.desc}`, { width: pageWidth, lineGap: 2 });
        } else if (b.type === "subheading") {
          doc.moveDown(0.3);
          doc.fontSize(11).fillColor([55, 65, 81]).text(b.text, { width: pageWidth });
        } else if (b.type === "bullet") {
          doc.fontSize(10).fillColor([55, 65, 81]).text(`• ${b.text}`, { width: pageWidth, indent: 8, lineGap: 2 });
        }
      });
      doc.moveDown(0.5);
    });

    // Callout / key takeaways
    if (lesson.takeaways.length > 0) {
      checkPageSpace(doc, 60);
      drawBox(doc, pageWidth, "Key Takeaway", lesson.takeaways.join("\n"));
      doc.moveDown(0.5);
    }

    // Notes section
    checkPageSpace(doc, 120);
    notesSection(doc, pageWidth, `Lesson ${idx + 1} Notes`);

    // Exercise / reflection
    checkPageSpace(doc, 140);
    exerciseSection(doc, pageWidth, lesson, idx, course);
  });

  // ── Summary / action plan page ──────────────────────────────
  doc.addPage();
  sectionHeader(doc, pageWidth, "Action Plan");

  doc.fontSize(11).fillColor([31, 41, 55]);
  doc.text("Now that you've completed the course, use this page to plan your next steps.", { width: pageWidth, lineGap: 3 });
  doc.moveDown(1);

  const prompts = [
    "Three key concepts I want to apply immediately:",
    "One deal or market I will analyze this week:",
    "Questions I still have (email Ryan@MaxLifeRealty.com):",
    "My 30-day CRE goal:",
  ];
  prompts.forEach(prompt => {
    checkPageSpace(doc, 100);
    doc.fontSize(10).fillColor(DARK).text(prompt, { width: pageWidth });
    doc.moveDown(0.3);
    // Lined space for writing
    for (let i = 0; i < 4; i++) {
      const y = doc.y;
      doc.moveTo(doc.page.margins.left, y).lineTo(doc.page.margins.left + pageWidth, y).strokeColor(BORDER_GRAY).lineWidth(0.5).stroke();
      doc.moveDown(1.1);
    }
    doc.moveDown(0.5);
  });

  // ── Back cover ────────────────────────────────────────────────
  doc.addPage();
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(DARK);

  doc.fontSize(11).fillColor(GOLD).text("MAXLIFE ACADEMY", doc.page.margins.left, 200, { width: pageWidth, align: "center" });
  doc.moveDown(1);
  doc.fontSize(20).fillColor(WHITE).text("Keep going.", { width: pageWidth, align: "center" });
  doc.moveDown(0.5);
  doc.fontSize(11).fillColor(GRAY).text(
    "This workbook is one piece of a 20-course curriculum that takes you from zero to underwriting real deals.",
    { width: pageWidth, align: "center", lineGap: 3 }
  );
  doc.moveDown(2);
  doc.fontSize(11).fillColor(GOLD).text("maxlifedevelopment.com/academy", { width: pageWidth, align: "center", link: "https://maxlifedevelopment.com/academy" });
  doc.moveDown(3);
  doc.fontSize(9).fillColor(GRAY).text("Ryan Solberg · Broker · MaxLife Realty", { width: pageWidth, align: "center" });
  doc.text("(321) 586-2121 · Ryan@MaxLifeRealty.com", { width: pageWidth, align: "center" });
  doc.moveDown(1);
  doc.text("© MaxLife Realty · Orlando, FL", { width: pageWidth, align: "center" });

  doc.end();
  return new Promise((resolve) => stream.on("finish", resolve));
}

// ── Shared drawing helpers ──────────────────────────────────────

function sectionHeader(doc, pageWidth, title) {
  doc.rect(doc.page.margins.left, doc.y, pageWidth, 2).fill(GOLD);
  doc.moveDown(0.5);
  doc.fontSize(18).fillColor(DARK).text(title, { width: pageWidth });
  doc.moveDown(0.8);
}

function checkPageSpace(doc, needed) {
  if (doc.y + needed > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
}

function drawBox(doc, pageWidth, heading, content) {
  const boxX = doc.page.margins.left;
  const startY = doc.y;

  // Measure content height
  doc.fontSize(10);
  const textHeight = doc.heightOfString(content, { width: pageWidth - 24 });
  const boxHeight = textHeight + 44;

  checkPageSpace(doc, boxHeight + 10);
  const y = doc.y;

  // Background
  doc.rect(boxX, y, pageWidth, boxHeight).fill(LIGHT_GOLD);
  // Left accent
  doc.rect(boxX, y, 3, boxHeight).fill(GOLD);

  doc.fontSize(9).fillColor(GOLD).text(heading.toUpperCase(), boxX + 14, y + 10, { width: pageWidth - 24 });
  doc.fontSize(10).fillColor([31, 41, 55]).text(content, boxX + 14, y + 26, { width: pageWidth - 28, lineGap: 3 });

  doc.y = y + boxHeight + 4;
}

function notesSection(doc, pageWidth, heading) {
  doc.fontSize(11).fillColor(DARK).text(heading, { width: pageWidth });
  doc.moveDown(0.4);
  for (let i = 0; i < 5; i++) {
    const y = doc.y;
    doc.moveTo(doc.page.margins.left, y).lineTo(doc.page.margins.left + pageWidth, y).strokeColor(BORDER_GRAY).lineWidth(0.5).stroke();
    doc.moveDown(1.1);
  }
}

function exerciseSection(doc, pageWidth, lesson, lessonIdx, course) {
  // Generate contextual exercise based on lesson content
  const exercises = generateExercises(lesson, lessonIdx, course);

  doc.fontSize(11).fillColor(GOLD).text("EXERCISE", { width: pageWidth });
  doc.moveDown(0.3);
  doc.fontSize(10).fillColor([31, 41, 55]);

  exercises.forEach(ex => {
    checkPageSpace(doc, 80);
    doc.text(ex, { width: pageWidth, lineGap: 2 });
    doc.moveDown(0.3);
    // Answer lines
    for (let i = 0; i < 3; i++) {
      const y = doc.y;
      doc.moveTo(doc.page.margins.left, y).lineTo(doc.page.margins.left + pageWidth, y).strokeColor(BORDER_GRAY).lineWidth(0.5).stroke();
      doc.moveDown(1.1);
    }
    doc.moveDown(0.3);
  });
}

function generateExercises(lesson, lessonIdx, course) {
  // Pull 2-3 exercises from the lesson's key concepts
  const exercises = [];
  const sections = lesson.sections.filter(s => s.bullets.length > 0);

  if (sections.length >= 1) {
    exercises.push(`In your own words, explain the main idea behind "${sections[0].heading}":`);
  }

  // Find a key bullet to quiz on
  const keyBullets = sections.flatMap(s => s.bullets.filter(b => b.type === "keybullet"));
  if (keyBullets.length >= 2) {
    exercises.push(`Define "${keyBullets[0].term}" and explain why it matters for investors:`);
  } else if (keyBullets.length === 1) {
    exercises.push(`What is "${keyBullets[0].term}" and how does it apply to a real deal?`);
  }

  // Application question
  exercises.push(`How would you apply what you learned in this lesson to evaluate a real Central Florida property?`);

  return exercises.slice(0, 3);
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const courseDirs = fs.readdirSync(COURSES_DIR).filter(d => {
    const stat = fs.statSync(path.join(COURSES_DIR, d));
    return stat.isDirectory();
  }).sort();

  console.log(`Found ${courseDirs.length} courses.\n`);

  let generated = 0;
  let skipped = 0;

  for (const slug of courseDirs) {
    const outPath = path.join(OUTPUT_DIR, `${slug}.pdf`);

    if (fs.existsSync(outPath) && !FORCE) {
      console.log(`  SKIP  ${slug} (already exists)`);
      skipped++;
      continue;
    }

    const course = readCourseJson(slug);
    const lessons = readLessons(slug);

    if (lessons.length === 0) {
      console.log(`  SKIP  ${slug} (no lessons)`);
      skipped++;
      continue;
    }

    await generateWorkbook(slug, course, lessons);
    console.log(`  ✓     ${slug} (${lessons.length} lessons)`);
    generated++;
  }

  console.log(`\nDone. Generated: ${generated}, Skipped: ${skipped}`);
}

main().catch(err => { console.error(err); process.exit(1); });
