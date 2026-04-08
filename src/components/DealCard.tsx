import Link from "next/link";
import { Deal, formatPrice } from "@/data/deals";

const statusColors: Record<Deal["status"], string> = {
  Active: "bg-green-500/20 text-green-400 border-green-500/30",
  "Under Contract": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Sold: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <Link
      href={`/opportunities/${deal.slug}`}
      className="group block bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
    >
      {/* Status Badge + Type */}
      <div className="px-5 pt-5 flex items-center justify-between">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[deal.status]}`}
        >
          {deal.status}
        </span>
        <span className="text-xs text-gray-500 uppercase tracking-wider">
          {deal.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 pt-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-gold transition-colors mb-1">
          {deal.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{deal.location}</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">
              Price
            </p>
            <p className="text-white font-semibold">
              {formatPrice(deal.price)}
            </p>
          </div>
          {deal.capRate && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Cap Rate
              </p>
              <p className="text-gold font-semibold">{deal.capRate}%</p>
            </div>
          )}
          {deal.noi && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                NOI
              </p>
              <p className="text-white font-semibold">
                {formatPrice(deal.noi)}
              </p>
            </div>
          )}
          {deal.sqft && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Size
              </p>
              <p className="text-white font-semibold">
                {deal.sqft.toLocaleString()} SF
              </p>
            </div>
          )}
          {deal.acreage && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Acreage
              </p>
              <p className="text-white font-semibold">{deal.acreage} AC</p>
            </div>
          )}
        </div>

        {/* Tenant / Lease Info */}
        {deal.tenant && (
          <div className="border-t border-dark-border pt-3 flex items-center justify-between text-sm">
            <span className="text-gray-400">{deal.tenant}</span>
            {deal.leaseTermRemaining && (
              <span className="text-gray-500">
                {deal.leaseTermRemaining} remaining
              </span>
            )}
          </div>
        )}

        {/* Upside Callout */}
        {deal.upsidePotential && deal.status === "Active" && (
          <div className="mt-3 bg-gold/5 border border-gold/20 rounded-lg px-3 py-2">
            <p className="text-gold text-xs font-medium">Upside Potential</p>
            <p className="text-gray-400 text-xs mt-0.5 line-clamp-2">
              {deal.upsidePotential}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
