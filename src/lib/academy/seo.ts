import type { Course, Lesson, LessonMeta } from "./content";

const siteUrl = "https://maxlifedevelopment.com";
const orgName = "MaxLife Realty";
const instructorName = "Ryan Solberg";

/**
 * Build a BreadcrumbList schema.org JSON-LD object.
 * https://schema.org/BreadcrumbList
 */
export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * Build a Course schema.org JSON-LD object for a course landing page.
 * https://schema.org/Course
 */
export function buildCourseJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${siteUrl}/academy/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: orgName,
      sameAs: siteUrl,
    },
    instructor: {
      "@type": "Person",
      name: instructorName,
      jobTitle: "Licensed FL Broker",
    },
    educationalLevel: course.tier <= 2 ? "Beginner" : course.tier <= 4 ? "Intermediate" : "Advanced",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "Free",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${course.durationMinutes}M`,
      instructor: {
        "@type": "Person",
        name: instructorName,
      },
    },
    syllabusSections: course.lessons.map((lesson, idx) => ({
      "@type": "Syllabus",
      name: lesson.title,
      description: lesson.description,
      position: idx + 1,
    })),
    keywords: course.keywords.join(", "),
    teaches: course.outcomes,
  };
}

/**
 * Build a LearningResource schema.org JSON-LD object for an individual lesson.
 * https://schema.org/LearningResource
 */
export function buildLessonJsonLd(
  course: Course,
  lesson: Lesson | LessonMeta
) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: lesson.description,
    url: `${siteUrl}/academy/courses/${course.slug}/lessons/${lesson.slug}`,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    educationalUse: "instruction",
    learningResourceType: "lesson",
    timeRequired: `PT${lesson.durationMinutes}M`,
    isPartOf: {
      "@type": "Course",
      name: course.title,
      url: `${siteUrl}/academy/courses/${course.slug}`,
    },
    author: {
      "@type": "Person",
      name: instructorName,
    },
    publisher: {
      "@type": "Organization",
      name: orgName,
      url: siteUrl,
    },
    keywords: lesson.keywords.join(", "),
  };
}

/**
 * Build an ItemList schema for the /academy landing page.
 */
export function buildCourseListJsonLd(courses: Course[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MaxLife Academy — CIRE Certified Investment Real Estate Expert Curriculum",
    description:
      "A free 20-course curriculum covering commercial real estate from fundamentals through development, tax strategy, and syndication.",
    itemListElement: courses.map((course, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        url: `${siteUrl}/academy/courses/${course.slug}`,
        provider: {
          "@type": "Organization",
          name: orgName,
          sameAs: siteUrl,
        },
      },
    })),
  };
}

/**
 * Render any JSON-LD object as a script tag.
 * Use like: <JsonLdScript data={buildCourseJsonLd(course)} />
 */
export function renderJsonLd(data: object) {
  return JSON.stringify(data);
}
