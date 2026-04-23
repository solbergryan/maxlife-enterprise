import Link from "next/link";
import JsonLd from "./JsonLd";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visible breadcrumb trail + BreadcrumbList JSON-LD. The last item renders
 * as plain text (the current page). All prior items are clickable. Pass
 * absolute or site-relative `href` values; the JSON-LD serializer fills in
 * the origin.
 */
export default function Breadcrumbs({ items, className = "" }: Props) {
  if (items.length === 0) return null;

  const origin = "https://maxlifedevelopment.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.href.startsWith("http") ? it.href : `${origin}${it.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav
        aria-label="Breadcrumb"
        className={`text-xs text-gray-500 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={it.href} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <span aria-hidden="true" className="text-gray-700">
                    /
                  </span>
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-gray-400 line-clamp-1 max-w-[320px]"
                  >
                    {it.name}
                  </span>
                ) : (
                  <Link
                    href={it.href}
                    className="hover:text-gold transition-colors"
                  >
                    {it.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
