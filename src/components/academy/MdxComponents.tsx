import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Custom MDX components used across all academy lessons.
 * Passed into <MDXRemote components={mdxComponents} />.
 */

type CalloutType = "info" | "warning" | "key" | "formula";

interface CalloutProps {
  type?: CalloutType;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, { border: string; bg: string; label: string; icon: string }> = {
  info: {
    border: "border-gold/40",
    bg: "bg-gold/5",
    label: "Insight",
    icon: "i",
  },
  warning: {
    border: "border-red-500/40",
    bg: "bg-red-500/5",
    label: "Warning",
    icon: "!",
  },
  key: {
    border: "border-gold/60",
    bg: "bg-gold/10",
    label: "Key point",
    icon: "★",
  },
  formula: {
    border: "border-blue-400/40",
    bg: "bg-blue-400/5",
    label: "Formula",
    icon: "ƒ",
  },
};

export function Callout({ type = "info", children }: CalloutProps) {
  const style = calloutStyles[type];
  return (
    <aside
      className={`my-6 rounded-xl border ${style.border} ${style.bg} px-5 py-4`}
      role="note"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-bold">
          {style.icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
          {style.label}
        </span>
      </div>
      <div
        className={
          type === "formula"
            ? "font-mono text-base text-white"
            : "text-gray-200"
        }
      >
        {children}
      </div>
    </aside>
  );
}

// Styled heading with anchor (rehype-slug adds the id)
function h2(props: ComponentProps<"h2">) {
  return <h2 {...props} className="mt-10 mb-4 text-2xl font-bold text-white scroll-mt-24" />;
}

function h3(props: ComponentProps<"h3">) {
  return <h3 {...props} className="mt-8 mb-3 text-xl font-semibold text-white scroll-mt-24" />;
}

function h4(props: ComponentProps<"h4">) {
  return <h4 {...props} className="mt-6 mb-2 text-lg font-semibold text-white scroll-mt-24" />;
}

function p(props: ComponentProps<"p">) {
  return <p {...props} className="my-4 text-gray-300 leading-relaxed" />;
}

function ul(props: ComponentProps<"ul">) {
  return <ul {...props} className="my-4 ml-6 list-disc space-y-2 text-gray-300" />;
}

function ol(props: ComponentProps<"ol">) {
  return <ol {...props} className="my-4 ml-6 list-decimal space-y-2 text-gray-300" />;
}

function li(props: ComponentProps<"li">) {
  return <li {...props} className="leading-relaxed marker:text-gold" />;
}

function strong(props: ComponentProps<"strong">) {
  return <strong {...props} className="font-semibold text-white" />;
}

function em(props: ComponentProps<"em">) {
  return <em {...props} className="italic text-gray-200" />;
}

function code(props: ComponentProps<"code">) {
  return (
    <code
      {...props}
      className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-sm text-gold border border-white/10"
    />
  );
}

function pre(props: ComponentProps<"pre">) {
  return (
    <pre
      {...props}
      className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.04] p-5 font-mono text-sm text-gray-200 leading-relaxed"
    />
  );
}

function blockquote(props: ComponentProps<"blockquote">) {
  return (
    <blockquote
      {...props}
      className="my-6 border-l-4 border-gold pl-5 italic text-gray-300"
    />
  );
}

function table(props: ComponentProps<"table">) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
      <table {...props} className="w-full border-collapse text-sm" />
    </div>
  );
}

function thead(props: ComponentProps<"thead">) {
  return <thead {...props} className="bg-white/[0.04]" />;
}

function th(props: ComponentProps<"th">) {
  return (
    <th
      {...props}
      className="border-b border-white/10 px-4 py-3 text-left font-semibold text-gold"
    />
  );
}

function td(props: ComponentProps<"td">) {
  return <td {...props} className="border-b border-white/10 px-4 py-3 text-gray-300" />;
}

function a(props: ComponentProps<"a">) {
  const href = props.href ?? "#";
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const className = "text-gold underline underline-offset-4 hover:text-gold-light transition-colors";

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {props.children}
      </Link>
    );
  }
  return <a {...props} className={className} target="_blank" rel="noopener noreferrer" />;
}

function hr(props: ComponentProps<"hr">) {
  return <hr {...props} className="my-10 border-white/10" />;
}

export const mdxComponents = {
  Callout,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  strong,
  em,
  code,
  pre,
  blockquote,
  table,
  thead,
  th,
  td,
  a,
  hr,
};
