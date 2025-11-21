// landing.jsx
import { Link } from 'react-router-dom';
import startupImage from '../../assets/startup-teamwork-concept.jpg';

export default function Landing() {
    return (
      <div className="bg-white min-h-screen">
        {/* MAIN */}
        {/* Mobile: Full width, no rounded corners, less padding */}
        {/* Desktop: Centered, rounded, more padding */}
        <main className="mx-auto max-w-6xl bg-white px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:rounded-3xl md:px-10 md:pb-20 md:pt-12">


          {/* Hero section */}
          {/* Mobile: Stacked vertically, centered text */}
          {/* Desktop: Side by side, left-aligned text */}
          <section className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-10">
            {/* Text */}
            <div className="w-full text-center md:max-w-xl md:text-left">
              {/* Mobile: Smaller text, tighter spacing */}
              {/* Desktop: Larger text, more spacing */}
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Join the Future of
                <br />
                Startup-Investor
                <br />
                Ecosystem
              </h1>
              <div className="mt-8 flex flex-col items-stretch gap-3 w-full max-w-sm mx-auto
                sm:mt-10 sm:flex-row sm:justify-center sm:max-w-none
                md:justify-start md:mx-0">

                <Link to="/register" className="w-full sm:w-auto rounded-xl border border-gray-900 
                     px-6 py-3 text-sm font-semibold text-gray-900 text-center
                     transition hover:bg-gray-50">
                  Create Your Account
                </Link>

                <Link to="/login" className="w-full sm:w-auto rounded-xl bg-[#152A6D] 
                     px-6 py-3 text-sm font-semibold text-white text-center
                     transition hover:bg-[#012f6b]">
                  Sign in with email
                </Link>

              </div>

            </div>
  
            {/* Hero image - removed for cleaner look as per image */}
          </section>
  
          {/* Section 2 */}
          {/* Mobile: Stacked, content above image */}
          {/* Desktop: Side by side, content on left, image on right */}
          <section className="mt-12 grid gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12">
            {/* Content - Left side on desktop */}
            <div className="order-1 md:order-1">
              {/* Mobile: Smaller heading */}
              {/* Desktop: Larger heading */}
              <h2 className="text-xl font-bold text-[#152A6D] sm:text-2xl md:text-3xl">
                EVOA is Redefining Startup Investments
              </h2>
              {/* Mobile: Smaller text, less spacing */}
              {/* Desktop: Larger text, more spacing */}
              <p className="mt-4 text-base leading-relaxed text-gray-700 sm:mt-5 sm:text-lg md:text-xl">
                EVOA is dedicated to reshaping the landscape of startup investments. Our platform offers an
                innovative approach that revolutionizes how entrepreneurs connect with potential investors.
                We are committed to fostering a vibrant ecosystem that fuels the growth of groundbreaking
                ideas and visionary startups.
              </p>
            </div>
  
            {/* Image - Right side on desktop */}
            <div className="order-2 flex justify-center md:order-2 md:justify-end">
              <div className="relative h-64 w-full max-w-sm sm:h-72 sm:max-w-md md:h-96 md:max-w-lg">
                {/* White rounded frame */}
                <div className="absolute inset-0 rounded-2xl bg-white p-2 shadow-lg sm:rounded-3xl sm:p-3">
                  <div className="h-full w-full rounded-xl overflow-hidden sm:rounded-2xl">
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
          <section className="relative mt-12 sm:mt-16 md:mt-24">
            <div className="text-center">
              {/* Mobile: Smaller label */}
              {/* Desktop: Larger label */}
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
                Why EVO-A?
              </p>
              {/* Mobile: Smaller heading */}
              {/* Desktop: Larger heading */}
              <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
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
            <div className="relative mt-8 flex justify-center sm:mt-10 md:mt-14">
              <div className="relative w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl">
                {/* Phone mockup with UI */}
                <div className="relative rounded-2xl bg-black p-2 shadow-lg sm:rounded-3xl sm:p-3 md:shadow-2xl">
                  <div className="overflow-hidden rounded-xl bg-white sm:rounded-2xl md:rounded-3xl">
                    {/* Image only */}
                    <div className="w-full h-full">
                      <img
                        src={startupImage}
                        alt="Startup teamwork concept"
                        className="h-full w-full object-cover"
                      />
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
  