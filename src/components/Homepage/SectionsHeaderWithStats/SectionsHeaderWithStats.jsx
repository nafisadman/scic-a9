const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function SectionsHeaderWithStats() {
  return (
    <div
      className="hero min-h-[32rem] bg-gray-900 text-white relative isolate overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      <div className="hero-overlay bg-black/60"></div>

      {/* Decorative clipped gradients (kept as inline elements) */}
      <div
        aria-hidden="true"
        className="hidden sm:block sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            width: '274.25px',
            aspectRatio: '1097/845',
            background: 'linear-gradient(135deg,#ff4694,#776fff)',
            opacity: 0.2,
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem] sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            width: '274.25px',
            aspectRatio: '1097/845',
            background: 'linear-gradient(135deg,#ff4694,#776fff)',
            opacity: 0.2,
          }}
        />
      </div>

      <div className="hero-content w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">Work with us</h2>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat.
          </p>
        </div>

        <div className="mt-10 max-w-2xl lg:mt-12 lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-base font-semibold">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="link link-hover text-white">
                {link.name} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="stat bg-transparent p-0">
                <div className="stat-value text-4xl font-semibold text-white">{stat.value}</div>
                <div className="stat-desc text-gray-300">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
