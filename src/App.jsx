// landing.jsx
export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar / navbar */}
      <header className="bg-[#003F91] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
              <span className="tracking-tight">EV</span>
            </div>
            <span className="text-lg font-semibold tracking-wide">EVO-A</span>
          </div>

          {/* Hamburger icon */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/0 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-white mb-1" />
            <span className="block h-0.5 w-5 bg-white mb-1" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>

          {/* Desktop nav placeholder (you can add links later) */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <button className="rounded-full border border-white/60 px-4 py-1.5 text-xs tracking-wide hover:bg-white/10">
              For Startups
            </button>
            <button className="rounded-full border border-white/60 px-4 py-1.5 text-xs tracking-wide hover:bg-white/10">
              For Investors
            </button>
            <button className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#003F91]">
              Sign in
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-6xl bg-white px-4 pb-16 pt-10 md:mt-6 md:rounded-3xl md:px-10 md:pb-20">
        {/* Hero section */}
        <section className="md:flex md:items-center md:justify-between md:gap-10">
          {/* Text */}
          <div className="md:max-w-xl">
            <h1 className="text-center text-3xl font-extrabold leading-tight text-gray-900 md:text-left md:text-4xl lg:text-5xl">
              Join the Future of
              <br />
              Startup-Investor
              <br />
              Ecosystem
            </h1>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button className="w-full rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:w-auto">
                Create Your Account
              </button>
              <button className="w-full rounded-full bg-[#003F91] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#012f6b] sm:w-auto">
                Sign in with email
              </button>
            </div>
          </div>

          {/* Optional hero image on desktop */}
          <div className="mt-10 hidden flex-1 justify-end md:flex">
            <div className="relative h-64 w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl border border-dashed border-gray-300" />
              <img
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Startup team collaborating"
                className="relative z-10 h-full w-full rounded-3xl object-cover p-3"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-14 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003F91]">
              EVOA is Redefining Startup Investments
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              EVOA is dedicated to reshaping the landscape of startup investments. Our platform offers an
              innovative approach that revolutionizes how entrepreneurs connect with potential investors.
              We are committed to fostering a vibrant ecosystem that fuels the growth of groundbreaking
              ideas and visionary startups.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-44 w-40">
              <div className="absolute inset-0 rounded-3xl border border-dashed border-gray-300" />
              <img
                src="https://images.pexels.com/photos/1181641/pexels-photo-1181641.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pitch meeting"
                className="relative z-10 h-full w-full rounded-3xl object-cover p-2"
              />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Why EVO-A?
            </p>
            <h2 className="mt-3 text-lg font-semibold text-gray-900 md:text-2xl">
              Revolutionizing Startup Investments &amp; Networking
            </h2>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-gray-200 p-3 shadow-sm">
              {/* Phone mockup */}
              <div className="rounded-[2rem] bg-black p-2">
                <div className="overflow-hidden rounded-[1.6rem] bg-white">
                  <img
                    src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Empowering Startup Success"
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
