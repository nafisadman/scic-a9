import React from "react";

export default function StatsSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/* Transactions */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-400">
              Transactions per day
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              1.2 million
            </dd>
          </div>

          {/* Gross merchandise value */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-400">
              Gross Merchandise Value (GMV)
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              ৳ 3.8 billion
            </dd>
          </div>

          {/* New users */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-400">New users annually</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              850 k
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
