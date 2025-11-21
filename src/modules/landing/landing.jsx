// landing.jsx
export default function Landing() {
    return (
      <div>
        {/* MAIN */}
        {/* Mobile: Full width, no rounded corners, less padding */}
        {/* Desktop: Centered, rounded, more padding */}
        <main className="mx-auto max-w-6xl bg-white px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:mt-6 md:rounded-3xl md:px-10 md:pb-20 md:pt-12">
          
          {/* Hero section */}
          {/* Mobile: Stacked vertically, centered text */}
          {/* Desktop: Side by side, left-aligned text */}
          <section className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-10">
            {/* Text */}
            <div className="w-full text-center md:max-w-xl md:text-left">
              {/* Mobile: Smaller text, tighter spacing */}
              {/* Desktop: Larger text, more spacing */}
              <h1 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-left md:text-4xl lg:text-5xl">
                Join the Future of
                <br />
                Startup-Investor
                <br />
                Ecosystem
              </h1>
  
              {/* Mobile: Full width buttons, stacked */}
              {/* Desktop: Auto width buttons, inline */}
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center md:justify-start">
                <button className="w-full rounded-full border border-gray-900 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:w-auto sm:px-6 sm:py-3">
                  Create Your Account
                </button>
                <button className="w-full rounded-full bg-[#003F91] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#012f6b] sm:w-auto sm:px-6 sm:py-3">
                  Sign in with email
                </button>
              </div>
            </div>
  
            {/* Hero image */}
            {/* Mobile: Show below text, smaller size */}
            {/* Desktop: Show on right, larger size */}
            <div className="mt-8 w-full md:mt-0 md:flex md:flex-1 md:justify-end">
              <div className="relative mx-auto h-48 w-full max-w-xs sm:h-56 sm:max-w-sm md:h-64 md:max-w-sm">
                <div className="absolute inset-0 rounded-2xl border border-dashed border-gray-300 md:rounded-3xl" />
                <img
                  src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Startup team collaborating"
                  className="relative z-10 h-full w-full rounded-2xl object-cover p-2 md:rounded-3xl md:p-3"
                />
              </div>
            </div>
          </section>
  
          {/* Section 2 */}
          {/* Mobile: Stacked, image below text */}
          {/* Desktop: Side by side, image on right */}
          <section className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              {/* Mobile: Smaller heading */}
              {/* Desktop: Larger heading */}
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#003F91] sm:text-sm">
                EVOA is Redefining Startup Investments
              </h2>
              {/* Mobile: Smaller text, less spacing */}
              {/* Desktop: Larger text, more spacing */}
              <p className="mt-3 text-xs leading-relaxed text-gray-700 sm:mt-4 sm:text-sm">
                EVOA is dedicated to reshaping the landscape of startup investments. Our platform offers an
                innovative approach that revolutionizes how entrepreneurs connect with potential investors.
                We are committed to fostering a vibrant ecosystem that fuels the growth of groundbreaking
                ideas and visionary startups.
              </p>
            </div>
  
            {/* Mobile: Center image, smaller size */}
            {/* Desktop: Right align, larger size */}
            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="relative h-32 w-28 sm:h-40 sm:w-36 md:h-44 md:w-40">
                <div className="absolute inset-0 rounded-2xl border border-dashed border-gray-300 md:rounded-3xl" />
                <img
                  src="https://images.pexels.com/photos/1181641/pexels-photo-1181641.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pitch meeting"
                  className="relative z-10 h-full w-full rounded-2xl object-cover p-1.5 md:rounded-3xl md:p-2"
                />
              </div>
            </div>
          </section>
  
          {/* Section 3 */}
          {/* Mobile: Smaller spacing and text */}
          {/* Desktop: Larger spacing and text */}
          <section className="mt-10 sm:mt-16">
            <div className="text-center">
              {/* Mobile: Smaller label */}
              {/* Desktop: Larger label */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500 sm:text-xs">
                Why EVO-A?
              </p>
              {/* Mobile: Smaller heading */}
              {/* Desktop: Larger heading */}
              <h2 className="mt-2 text-base font-semibold text-gray-900 sm:mt-3 sm:text-lg md:text-2xl">
                Revolutionizing Startup Investments &amp; Networking
              </h2>
            </div>
  
            {/* Mobile: Smaller phone mockup */}
            {/* Desktop: Larger phone mockup */}
            <div className="mt-6 flex justify-center sm:mt-8">
              <div className="w-full max-w-[280px] rounded-2xl border border-gray-200 p-2 shadow-sm sm:max-w-md sm:rounded-3xl sm:p-3">
                {/* Phone mockup */}
                <div className="rounded-3xl bg-black p-1.5 sm:rounded-4xl sm:p-2">
                  <div className="overflow-hidden rounded-3xl bg-white sm:rounded-4xl">
                    <img
                      src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Empowering Startup Success"
                      className="h-36 w-full object-cover sm:h-48"
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
  