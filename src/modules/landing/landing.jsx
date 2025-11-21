// landing.jsx
export default function Landing() {
    return (
      <div className="bg-white">
        {/* MAIN */}
        {/* Mobile: Full width, no rounded corners, less padding */}
        {/* Desktop: Centered, rounded, more padding */}
        <main className="mx-auto max-w-6xl bg-white px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 md:rounded-3xl md:px-10 md:pb-20 md:pt-8">


          {/* Hero section */}
          {/* Mobile: Stacked vertically, centered text */}
          {/* Desktop: Side by side, left-aligned text */}
          <section className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-10">
            {/* Text */}
            <div className="w-full text-center md:max-w-xl md:text-left">
              {/* Mobile: Smaller text, tighter spacing */}
              {/* Desktop: Larger text, more spacing */}
              <h1 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                Join the Future of
                <br />
                Startup-Investor
                <br />
                Ecosystem
              </h1>
              <div className="mt-6 flex flex-col items-center gap-3 
                sm:mt-8 sm:flex-row sm:justify-center 
                md:justify-start">

  <button className="w-[80%] sm:w-auto rounded-xl border border-gray-900 
                     px-5 py-2.5 text-sm font-semibold text-gray-900 
                     transition hover:bg-gray-50">
    Create Your Account
  </button>

  <button className="w-[80%] sm:w-auto rounded-xl bg-[#152A6D] 
                     px-5 py-2.5 text-sm font-semibold text-white 
                     transition hover:bg-[#012f6b]">
    Sign in with email
  </button>

</div>

            </div>
  
            {/* Hero image - removed for cleaner look as per image */}
          </section>
  
          {/* Section 2 */}
          {/* Mobile: Stacked, content above image */}
          {/* Desktop: Side by side, content on left, image on right */}
          <section className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 md:items-center md:gap-10">
            {/* Content - Left side on desktop */}
            <div className="order-1 md:order-1">
              {/* Mobile: Smaller heading */}
              {/* Desktop: Larger heading */}
              <h2 className="text-base font-bold text-[#152A6D] sm:text-lg md:text-xl">
                EVOA is Redefining Startup Investments
              </h2>
              {/* Mobile: Smaller text, less spacing */}
              {/* Desktop: Larger text, more spacing */}
              <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:mt-4 sm:text-base md:text-lg">
                EVOA is dedicated to reshaping the landscape of startup investments. Our platform offers an
                innovative approach that revolutionizes how entrepreneurs connect with potential investors.
                We are committed to fostering a vibrant ecosystem that fuels the growth of groundbreaking
                ideas and visionary startups.
              </p>
            </div>
  
            {/* Image - Right side on desktop */}
            <div className="order-2 flex justify-center md:order-2 md:justify-end">
              <div className="relative h-56 w-full max-w-xs sm:h-64 sm:max-w-sm md:h-80 md:max-w-lg">
                {/* White rounded frame */}
                <div className="absolute inset-0 rounded-3xl bg-white p-2 shadow-lg">
                  <div className="h-full w-full rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1181641/pexels-photo-1181641.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Pitch meeting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 3 */}
          {/* Mobile: Smaller spacing and text */}
          {/* Desktop: Larger spacing and text */}
          <section className="relative mt-10 sm:mt-16 md:mt-20">
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
  
            {/* Decorative shapes - hidden on mobile, visible on larger screens */}
            <div className="absolute right-0 top-0 -z-10 hidden h-32 w-32 text-orange-400 opacity-30 sm:block sm:h-40 sm:w-40 md:h-48 md:w-48">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 hidden h-24 w-24 text-pink-400 opacity-30 sm:block sm:h-32 sm:w-32 md:h-40 md:w-40">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor" />
              </svg>
            </div>
  
            {/* Mobile: Smaller phone mockup */}
            {/* Desktop: Larger phone mockup */}
            <div className="relative mt-6 flex justify-center sm:mt-8 md:mt-12">
              <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg">
                {/* Phone mockup with UI */}
                <div className="relative rounded-2xl bg-black p-2 shadow-sm sm:rounded-3xl sm:p-3 md:shadow-2xl">
                  <div className="overflow-hidden rounded-xl bg-white sm:rounded-2xl md:rounded-3xl">
                    {/* Top bar with logo */}
                    <div className="flex items-center gap-2 bg-[#152A6D] px-3 py-2 sm:px-4 sm:py-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                        <span className="text-[10px] font-bold text-[#152A6D] sm:text-xs">EV</span>
                      </div>
                      <span className="text-xs font-semibold text-white sm:text-sm">EVOA</span>
                    </div>
                    
                    {/* Content area */}
                    <div className="relative flex">
                      {/* Red vertical bar */}
                      <div className="w-1.5 bg-red-600 sm:w-2"></div>
                      
                      {/* Main content */}
                      <div className="flex-1 p-3 sm:p-4 md:p-6">
                        <h3 className="text-sm font-bold text-gray-900 sm:text-lg md:text-2xl lg:text-3xl">
                          Empowering Startup Success
                        </h3>
                        <p className="mt-1 text-[10px] text-gray-600 sm:mt-2 sm:text-xs md:text-sm lg:text-base">
                          Helping startup secure funding and scale faster
                        </p>
                      </div>
                      
                      {/* Right side image - hidden on mobile, visible on larger screens */}
                      <div className="hidden w-24 overflow-hidden sm:block sm:w-32 md:w-40 lg:w-48">
                        <img
                          src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=800"
                          alt="Team collaboration"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  