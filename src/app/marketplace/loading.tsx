export default function MarketplaceLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header skeleton */}
      <div className="mb-8 space-y-3">
        <div className="h-9 w-64 rounded bg-dark-card animate-pulse" />
        <div className="h-5 w-96 max-w-full rounded bg-dark-card animate-pulse" />
      </div>

      {/* Search bar skeleton */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="h-11 flex-1 rounded-lg bg-dark-card animate-pulse" />
        <div className="h-11 w-full sm:w-40 rounded-lg bg-dark-card animate-pulse" />
      </div>

      {/* Card grid skeleton — mirrors real grid breakpoints */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-dark-border bg-dark-card"
          >
            <div className="h-44 w-full bg-dark animate-pulse" />
            <div className="space-y-3 p-5">
              <div className="flex gap-2">
                <div className="h-5 w-20 rounded bg-dark animate-pulse" />
                <div className="h-5 w-14 rounded bg-dark animate-pulse" />
              </div>
              <div className="h-6 w-4/5 rounded bg-dark animate-pulse" />
              <div className="h-4 w-3/5 rounded bg-dark animate-pulse" />
              <div className="h-7 w-28 rounded bg-dark animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
