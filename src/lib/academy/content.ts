import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

// ============================================================
// Types
// ============================================================

export type CourseTier = 1 | 2 | 3 | 4 | 5 | 6;

export interface CourseMeta {
  slug: string;            // directory name, e.g. "01-intro-to-commercial-real-estate"
  order: number;           // 1..20
  tier: CourseTier;
  tierTitle: string;       // "Foundations", "Financial Analysis", etc.
  title: string;
  subtitle: string;        // short tagline, e.g. "The CRE gateway course"
  description: string;     // 2-3 sentences
  durationMinutes: number;
  outcomes: string[];      // learning outcomes bullet list
  prerequisites: string[]; // slugs of required courses (usually just prior course)
  keywords: string[];      // SEO keywords
  cireLevel?: string;      // e.g. "CIRE Level 1 — Financial Analysis"
  isSpecialty?: boolean;   // MaxLife specialty badge
  isContentComplete: boolean; // true if all lessons have full content
  hasWorkbook?: boolean;      // true if a PDF workbook is available for email download
}

export interface LessonMeta {
  slug: string;            // filename minus .mdx, e.g. "01-what-is-commercial-real-estate"
  order: number;
  title: string;
  description: string;
  durationMinutes: number;
  keywords: string[];
  courseSlug: string;
}

export interface Lesson extends LessonMeta {
  content: string;         // raw MDX body (for next-mdx-remote)
}

export interface Course extends CourseMeta {
  lessons: LessonMeta[];
}

// ============================================================
// Filesystem helpers
// ============================================================

const CONTENT_ROOT = path.join(process.cwd(), "src", "content", "academy", "courses");

async function readDirSorted(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir);
    return entries.sort();
  } catch {
    return [];
  }
}

// ============================================================
// Course loaders
// ============================================================

export async function getAllCourses(): Promise<Course[]> {
  const slugs = await readDirSorted(CONTENT_ROOT);
  const courses = await Promise.all(
    slugs
      .filter((s) => !s.startsWith("."))
      .map((slug) => getCourse(slug))
  );
  return courses
    .filter((c): c is Course => c !== null)
    .sort((a, b) => a.order - b.order);
}

export async function getCourse(slug: string): Promise<Course | null> {
  const coursePath = path.join(CONTENT_ROOT, slug, "course.json");
  try {
    const raw = await fs.readFile(coursePath, "utf8");
    const meta = JSON.parse(raw) as CourseMeta;
    const lessons = await getLessonsForCourse(slug);
    return { ...meta, slug, lessons };
  } catch {
    return null;
  }
}

// ============================================================
// Lesson loaders
// ============================================================

export async function getLessonsForCourse(courseSlug: string): Promise<LessonMeta[]> {
  const lessonsDir = path.join(CONTENT_ROOT, courseSlug, "lessons");
  const files = await readDirSorted(lessonsDir);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const lessons = await Promise.all(
    mdxFiles.map(async (file, index) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(lessonsDir, file);
      const raw = await fs.readFile(filePath, "utf8");
      const { data } = matter(raw);
      return {
        slug,
        courseSlug,
        order: typeof data.order === "number" ? data.order : index + 1,
        title: data.title ?? slug,
        description: data.description ?? "",
        durationMinutes: data.durationMinutes ?? 10,
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
      } satisfies LessonMeta;
    })
  );

  return lessons.sort((a, b) => a.order - b.order);
}

export async function getLesson(
  courseSlug: string,
  lessonSlug: string
): Promise<Lesson | null> {
  const filePath = path.join(CONTENT_ROOT, courseSlug, "lessons", `${lessonSlug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug: lessonSlug,
      courseSlug,
      order: data.order ?? 1,
      title: data.title ?? lessonSlug,
      description: data.description ?? "",
      durationMinutes: data.durationMinutes ?? 10,
      keywords: Array.isArray(data.keywords) ? data.keywords : [],
      content,
    };
  } catch {
    return null;
  }
}

// ============================================================
// Navigation helpers
// ============================================================

export async function getLessonNav(
  courseSlug: string,
  lessonSlug: string
): Promise<{
  prev: { courseSlug: string; lessonSlug: string; title: string } | null;
  next: { courseSlug: string; lessonSlug: string; title: string } | null;
  courseTitle: string;
}> {
  const course = await getCourse(courseSlug);
  if (!course) return { prev: null, next: null, courseTitle: "" };

  const idx = course.lessons.findIndex((l) => l.slug === lessonSlug);
  if (idx === -1) return { prev: null, next: null, courseTitle: course.title };

  const prevLesson = idx > 0 ? course.lessons[idx - 1] : null;
  const nextLessonInCourse = idx < course.lessons.length - 1 ? course.lessons[idx + 1] : null;

  let next = nextLessonInCourse
    ? {
        courseSlug,
        lessonSlug: nextLessonInCourse.slug,
        title: nextLessonInCourse.title,
      }
    : null;

  // If at end of course, point to first lesson of next course
  if (!next) {
    const allCourses = await getAllCourses();
    const courseIdx = allCourses.findIndex((c) => c.slug === courseSlug);
    const nextCourse = allCourses[courseIdx + 1];
    if (nextCourse && nextCourse.lessons[0]) {
      next = {
        courseSlug: nextCourse.slug,
        lessonSlug: nextCourse.lessons[0].slug,
        title: `${nextCourse.title}: ${nextCourse.lessons[0].title}`,
      };
    }
  }

  return {
    prev: prevLesson
      ? { courseSlug, lessonSlug: prevLesson.slug, title: prevLesson.title }
      : null,
    next,
    courseTitle: course.title,
  };
}

// ============================================================
// Static params (for generateStaticParams)
// ============================================================

export async function getAllLessonParams(): Promise<
  { slug: string; lessonSlug: string }[]
> {
  const courses = await getAllCourses();
  return courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      slug: course.slug,
      lessonSlug: lesson.slug,
    }))
  );
}

export async function getAllCourseParams(): Promise<{ slug: string }[]> {
  const courses = await getAllCourses();
  return courses.map((c) => ({ slug: c.slug }));
}

// ============================================================
// Grouping helpers
// ============================================================

/**
 * The MaxLife Academy curriculum is organized as the
 * CIRE — Certified Investment Real Estate Expert track.
 * Students who complete all 20 courses earn the CIRE certificate of completion.
 */
export const CIRE_PROGRAM_NAME = "CIRE — Certified Investment Real Estate Expert";
export const CIRE_PROGRAM_SHORT = "CIRE";
export const CIRE_PROGRAM_FULL = "Certified Investment Real Estate Expert";

export const TIER_INFO: Record<CourseTier, { title: string; subtitle: string }> = {
  1: {
    title: "Foundations",
    subtitle: "Start here. The vocabulary, concepts, and mental models every CRE investor needs.",
  },
  2: {
    title: "Financial Analysis",
    subtitle: "Master the numbers. Cap rate, NOI, DCF, IRR — the core of every CRE decision.",
  },
  3: {
    title: "Market & Deal Analysis",
    subtitle: "Evaluate markets, analyze user decisions, and quantify investment risk.",
  },
  4: {
    title: "Deal-Making",
    subtitle: "Source deals, run due diligence, finance them, and negotiate to close.",
  },
  5: {
    title: "Asset Classes",
    subtitle: "Deep dives on NNN, multifamily, self-storage, retail, office, and industrial.",
  },
  6: {
    title: "Advanced & Specialized",
    subtitle: "Development, syndication, and tax strategy for serious operators.",
  },
};

export function groupByTier(courses: Course[]): { tier: CourseTier; tierTitle: string; tierSubtitle: string; courses: Course[] }[] {
  const map = new Map<CourseTier, Course[]>();
  for (const course of courses) {
    if (!map.has(course.tier)) map.set(course.tier, []);
    map.get(course.tier)!.push(course);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a - b)
    .map(([tier, courses]) => ({
      tier,
      tierTitle: TIER_INFO[tier].title,
      tierSubtitle: TIER_INFO[tier].subtitle,
      courses,
    }));
}
