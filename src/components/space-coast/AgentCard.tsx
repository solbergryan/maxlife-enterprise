import Link from "next/link";
import { spaceCoastAgent } from "@/data/space-coast/agent";

export default function AgentCard({
  context = "buyer",
}: {
  context?: "buyer" | "tenant";
}) {
  const a = spaceCoastAgent;
  const headline =
    context === "tenant"
      ? "Your Space Coast Tenant-Rep Broker"
      : "Your Space Coast Broker";
  return (
    <div className="bg-white/[0.04] border border-gold/30 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
      <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/40 shrink-0 flex items-center justify-center text-gold text-2xl font-bold">
        {a.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div className="flex-1">
        <p className="text-gold text-xs tracking-widest uppercase mb-1">
          {headline}
        </p>
        <h3 className="text-white text-xl font-semibold mb-1">{a.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{a.title}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{a.bio}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={a.phoneHref}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-4 py-2 rounded-md text-sm transition-colors"
          >
            {a.phone}
          </a>
          <a
            href={`mailto:${a.email}`}
            className="inline-flex items-center gap-2 border border-gold/40 hover:bg-gold/10 text-gold font-semibold px-4 py-2 rounded-md text-sm transition-colors"
          >
            Email
          </a>
          <Link
            href={a.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-gold/40 text-gray-300 hover:text-gold font-semibold px-4 py-2 rounded-md text-sm transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
        <p className="text-gray-500 text-xs mt-4">
          {a.brokerage} · {a.brokerLicense}
        </p>
      </div>
    </div>
  );
}
