import React from "react";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function SectionsHeaderWithStats() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gray-900 text-white"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1663051092082-cd8347e4353d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        minHeight: "32rem",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Decorative gradients – keep hidden on very small screens */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute -top-10 right-1/2 -z-10 mr-10 w-[274px] aspect-[1097/845] transform-gpu blur-3xl"
        style={{
          clipPath:
            "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
          background: "linear-gradient(135deg,#ff4694,#776fff)",
          opacity: 0.2,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem] sm:left-0 sm:translate-x-0 sm:ml-16"
        style={{
          width: "274px",
          aspectRatio: "1097/845",
          clipPath:
            "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
          background: "linear-gradient(135deg,#ff4694,#776fff)",
          opacity: 0.2,
        }}
      />

      {/* Content wrapper */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Header text */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Work with us
          </h2>
          <p className="mt-4 text-base text-gray-300 sm:text-lg lg:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat.
          </p>
        </div>

        {/* Links & stats – stacked on mobile, side‑by‑side on larger screens */}
        <div className="mt-8 flex flex-col gap-8 md:mt-12">
          {/* Links */}
          <nav className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center text-white hover:underline"
              >
                {link.name}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-300">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
