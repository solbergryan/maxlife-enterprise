import Link from "next/link";

interface CTABannerProps {
  heading: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "default" | "gold-border";
}

export default function CTABanner({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: CTABannerProps) {
  const wrapperClass =
    variant === "gold-border"
      ? "bg-dark-card/50 border border-gold/20 rounded-xl"
      : "bg-dark-card/50 border-t border-dark-border";

  return (
    <section className={wrapperClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
