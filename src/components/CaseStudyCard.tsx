import Image from "next/image";
import { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden">
      {study.image && (
        <div className="relative aspect-[21/9] w-full overflow-hidden border-b border-white/10">
          <Image
            src={study.image}
            alt={study.imageAlt ?? study.title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
        </div>
      )}
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gold uppercase tracking-wider font-medium">
            {study.type}
          </span>
          <span className="text-xs text-gray-500">{study.location}</span>
        </div>
        <h3 className="text-white font-semibold text-lg">{study.title}</h3>
      </div>

      {/* Problem / Strategy / Result */}
      <div className="divide-y divide-dark-border">
        <div className="px-6 py-4">
          <p className="text-red-400/80 text-xs uppercase tracking-wider font-medium mb-1.5">
            The Challenge
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {study.problem}
          </p>
        </div>
        <div className="px-6 py-4">
          <p className="text-gold text-xs uppercase tracking-wider font-medium mb-1.5">
            Our Strategy
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {study.strategy}
          </p>
        </div>
        <div className="px-6 py-4">
          <p className="text-green-400/80 text-xs uppercase tracking-wider font-medium mb-1.5">
            The Result
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {study.result}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="px-6 py-4 bg-white/10/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {study.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-gold font-bold text-lg">{metric.value}</p>
            <p className="text-gray-500 text-xs">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
