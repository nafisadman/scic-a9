import Link from "next/link";
import React from "react";

export default function ProductNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-primary text-primary-content mx-auto mb-6 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold mb-2">Product not found</h1>
        <p className="text-base-content/70 mb-6">The product you're looking for doesn't seem to exist or may have been removed.</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" passHref className="btn btn-primary btn-md">
            Go to homepage
          </Link>

          <Link href="/products" passHref className="btn btn-outline btn-md">
            Browse products
          </Link>
        </div>

        <div className="mt-6 text-sm text-base-content/60">
          <p>Tip: check the URL or try searching for a different product.</p>
        </div>
      </div>
    </main>
  );
}
