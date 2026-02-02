import { HiQuestionMarkCircle, HiLightBulb, HiArrowRight } from 'react-icons/hi2';

// Journey Flow Illustration Component
function JourneyIllustration({ isDark }) {
  return (
    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#B0FFFA' : '#00B8A9'} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isDark ? '#80E5FF' : '#008C81'} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Flow path */}
        <path
          d="M 20 100 Q 50 50, 100 50 T 180 100"
          fill="none"
          stroke={isDark ? '#B0FFFA' : '#00B8A9'}
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
          className="animate-dash"
        />
        {/* Start point */}
        <circle cx="20" cy="100" r="8" fill={isDark ? '#B0FFFA' : '#00B8A9'} opacity="0.6" />
        {/* Middle points */}
        <circle cx="100" cy="50" r="6" fill={isDark ? '#B0FFFA' : '#00B8A9'} opacity="0.4" />
        {/* End point */}
        <circle cx="180" cy="100" r="10" fill={isDark ? '#B0FFFA' : '#00B8A9'} opacity="0.8">
          <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export default function TransformJourneySection({ isVisible, isDark, setRef, SectionTitle, CardContainer }) {
  return (
    <section 
      ref={setRef('problemSolution')}
      className={`relative transition-all duration-1000 ease-out ${
        isVisible['problemSolution'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 backdrop-blur-xl border ${
          isDark 
            ? 'bg-[#B0FFFA]/5 border-[#B0FFFA]/20 text-[#B0FFFA]' 
            : 'bg-[#00B8A9]/5 border-[#00B8A9]/20 text-[#00B8A9]'
        }`}>
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">Problem & Solution</span>
        </div>
        <SectionTitle>Transform Your Startup Journey</SectionTitle>
        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 ${
          isDark ? 'text-white/70' : 'text-gray-600'
        }`}>
          From pitch to funding, we've got you covered
        </p>
      </div>

      <div className="relative">
        <JourneyIllustration isDark={isDark} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <CardContainer className="hover:scale-[1.01] sm:hover:scale-[1.02]">
          <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 flex items-center gap-2 ${
            isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
          }`}>
            <HiQuestionMarkCircle className="text-xl sm:text-2xl md:text-3xl flex-shrink-0" />
            <span>The Problem</span>
          </h3>
          <ul className={`space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? 'text-white/80' : 'text-black/80'
          }`}>
            <li className="flex items-start gap-3">
              <HiArrowRight className={`mt-1 shrink-0 text-lg ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Startups waste months searching for the right investors</span>
            </li>
            <li className="flex items-start gap-3">
              <HiArrowRight className={`mt-1 shrink-0 text-lg ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Investors miss out on quality deals buried in noise</span>
            </li>
            <li className="flex items-start gap-3">
              <HiArrowRight className={`mt-1 shrink-0 text-lg ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Incubators struggle to showcase their portfolio effectively</span>
            </li>
          </ul>
        </CardContainer>

        <CardContainer className="hover:scale-[1.01] sm:hover:scale-[1.02]">
          <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 flex items-center gap-2 ${
            isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
          }`}>
            <HiLightBulb className="text-xl sm:text-2xl md:text-3xl flex-shrink-0" />
            <span>The Solution</span>
          </h3>
          <div className={`space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? 'text-white/80' : 'text-black/80'
          }`}>
            <p>
              <strong className={isDark ? 'text-white' : 'text-black'}>EVO-A brings everything together</strong> in one intelligent platform.
            </p>
            <p>
              Startups pitch with confidence. Investors discover verified opportunities instantly. Incubators showcase their success stories.
            </p>
            <p className={`font-semibold ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`}>
              All verified. All trusted. All in one place.
            </p>
          </div>
        </CardContainer>
      </div>
      </div>
    </section>
  );
}
