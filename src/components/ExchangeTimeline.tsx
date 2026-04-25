"use client";

import { useMemo, useState } from "react";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function daysUntil(targetDate: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export default function ExchangeTimeline() {
  const today = new Date().toISOString().split("T")[0];
  const [saleDate, setSaleDate] = useState(today);

  const { identifyDeadline, closingDeadline, daysToIdentify, daysToClose } =
    useMemo(() => {
      const sale = new Date(saleDate + "T12:00:00");
      const ident = addDays(sale, 45);
      const close = addDays(sale, 180);
      return {
        identifyDeadline: ident,
        closingDeadline: close,
        daysToIdentify: daysUntil(ident),
        daysToClose: daysUntil(close),
      };
    }, [saleDate]);

  const statusIdentify =
    daysToIdentify < 0
      ? "expired"
      : daysToIdentify <= 7
      ? "urgent"
      : daysToIdentify <= 21
      ? "warning"
      : "ok";
  const statusClose =
    daysToClose < 0
      ? "expired"
      : daysToClose <= 14
      ? "urgent"
      : daysToClose <= 45
      ? "warning"
      : "ok";

  const statusColors: Record<string, string> = {
    ok: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    warning: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    urgent: "text-red-400 bg-red-500/10 border-red-500/30",
    expired: "text-gray-500 bg-gray-500/10 border-gray-500/30",
  };

  const statusLabel: Record<string, string> = {
    ok: "On Track",
    warning: "Action Needed Soon",
    urgent: "Urgent",
    expired: "Deadline Passed",
  };

  return (
    <div className="space-y-8">
      {/* Input */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
        <label className="block">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-2 block">
            Date You Sold (or Will Sell) the Relinquished Property
          </span>
          <input
            type="date"
            value={saleDate}
            onChange={(e) => setSaleDate(e.target.value)}
            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
          />
          <p className="text-gray-500 text-xs mt-2">
            The 45-day and 180-day clocks both start on the day your sale
            closes.
          </p>
        </label>
      </div>

      {/* Deadlines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 45-day */}
        <div
          className={`border rounded-xl p-6 ${statusColors[statusIdentify]}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">
              Day 45
            </span>
            <span className="text-xs font-semibold">
              {statusLabel[statusIdentify]}
            </span>
          </div>
          <h3 className="text-white text-xl font-bold mb-1">
            Identification Deadline
          </h3>
          <p className="text-white text-lg mb-4">
            {formatDate(identifyDeadline)}
          </p>
          <div className="bg-dark/40 rounded-lg p-3 mb-3">
            <p className="text-3xl font-bold text-white">
              {daysToIdentify < 0 ? "Expired" : `${daysToIdentify} days`}
            </p>
            <p className="text-xs opacity-80">
              {daysToIdentify < 0 ? "Identification period ended" : "remaining"}
            </p>
          </div>
          <p className="text-xs leading-relaxed opacity-90">
            You must formally identify up to 3 potential replacement properties
            (or more under the 200% rule) in writing to your qualified
            intermediary by this date.
          </p>
        </div>

        {/* 180-day */}
        <div className={`border rounded-xl p-6 ${statusColors[statusClose]}`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">
              Day 180
            </span>
            <span className="text-xs font-semibold">
              {statusLabel[statusClose]}
            </span>
          </div>
          <h3 className="text-white text-xl font-bold mb-1">
            Closing Deadline
          </h3>
          <p className="text-white text-lg mb-4">
            {formatDate(closingDeadline)}
          </p>
          <div className="bg-dark/40 rounded-lg p-3 mb-3">
            <p className="text-3xl font-bold text-white">
              {daysToClose < 0 ? "Expired" : `${daysToClose} days`}
            </p>
            <p className="text-xs opacity-80">
              {daysToClose < 0 ? "Exchange deadline ended" : "remaining"}
            </p>
          </div>
          <p className="text-xs leading-relaxed opacity-90">
            You must close on one or more of your identified replacement
            properties by this date. Missing this deadline triggers full
            capital gains tax recognition.
          </p>
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
          Your Exchange Timeline
        </h3>
        <div className="relative">
          <div className="h-1.5 bg-dark-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-dark"
              style={{
                width: `${Math.min(
                  Math.max(((180 - daysToClose) / 180) * 100, 0),
                  100
                )}%`,
              }}
            />
          </div>
          <div className="flex justify-between mt-3 text-xs">
            <div className="text-left">
              <p className="text-gold font-semibold">Day 0</p>
              <p className="text-gray-500">Sale Closes</p>
              <p className="text-gray-300 mt-1">
                {new Date(saleDate + "T12:00:00").toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div
              className="text-center"
              style={{ marginLeft: "-2rem", width: "4rem" }}
            >
              <p className="text-gold font-semibold">Day 45</p>
              <p className="text-gray-500">Identify</p>
              <p className="text-gray-300 mt-1">
                {identifyDeadline.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gold font-semibold">Day 180</p>
              <p className="text-gray-500">Close</p>
              <p className="text-gray-300 mt-1">
                {closingDeadline.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Rules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "3-Property Rule",
            desc: "You may identify up to 3 replacement properties regardless of value.",
          },
          {
            title: "200% Rule",
            desc: "You may identify more than 3 if the combined FMV doesn't exceed 200% of the relinquished property's value.",
          },
          {
            title: "95% Rule",
            desc: "You may identify any number of properties if you close on at least 95% of the combined value.",
          },
        ].map((rule) => (
          <div
            key={rule.title}
            className="bg-white/[0.04] border border-white/10 rounded-lg p-4"
          >
            <p className="text-gold font-semibold text-sm mb-2">{rule.title}</p>
            <p className="text-gray-300 text-xs leading-relaxed">{rule.desc}</p>
          </div>
        ))}
      </div>

      {/* Critical reminder */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
        <h4 className="text-red-300 font-semibold text-sm mb-2">
          Critical Reminders
        </h4>
        <ul className="space-y-1.5 text-xs text-gray-300 leading-relaxed">
          <li>
            • Both deadlines are <strong>calendar days</strong>, not business
            days. Weekends and holidays don&apos;t extend them.
          </li>
          <li>
            • You must engage a Qualified Intermediary (QI){" "}
            <strong>before</strong> closing the relinquished property sale.
          </li>
          <li>
            • You cannot take constructive receipt of the sale proceeds at any
            point.
          </li>
          <li>
            • If the 180th day falls after your tax return due date (including
            extensions), the deadline is the earlier of the two.
          </li>
        </ul>
      </div>
    </div>
  );
}
