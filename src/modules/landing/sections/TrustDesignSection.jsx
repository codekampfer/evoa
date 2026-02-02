import { HiRocketLaunch, HiCurrencyDollar, HiAcademicCap, HiCheckCircle } from 'react-icons/hi2';

// Security/Trust Illustration Component
function SecurityIllustration({ isDark }) {
  return (
    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#B0FFFA' : '#00B8A9'} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isDark ? '#80E5FF' : '#008C81'} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Shield shape */}
        <path
          d="M 100 30 L 140 50 L 140 100 Q 140 140, 100 170 Q 60 140, 60 100 L 60 50 Z"
          fill={isDark ? 'rgba(176,255,250,0.1)' : 'rgba(0,184,169,0.1)'}
          stroke={isDark ? '#B0FFFA' : '#00B8A9'}
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Check mark */}
        <path
          d="M 80 100 L 95 115 L 120 85"
          fill="none"
          stroke={isDark ? '#B0FFFA' : '#00B8A9'}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
        {/* Lock icon */}
        <rect x="85" y="120" width="30" height="25" rx="2" fill="none" stroke={isDark ? '#B0FFFA' : '#00B8A9'} strokeWidth="2" opacity="0.3" />
        <path
          d="M 95 120 Q 100 115, 105 120"
          fill="none"
          stroke={isDark ? '#B0FFFA' : '#00B8A9'}
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

export default function TrustDesignSection({ isVisible, isDark, setRef, SectionTitle, CardContainer }) {
  return (
    <section 
      ref={setRef('trustVerification')}
      className={`relative transition-all duration-1000 ease-out ${
        isVisible['trustVerification'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 backdrop-blur-xl border ${
          isDark 
            ? 'bg-[#B0FFFA]/5 border-[#B0FFFA]/20 text-[#B0FFFA]' 
            : 'bg-[#00B8A9]/5 border-[#00B8A9]/20 text-[#00B8A9]'
        }`}>
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">Security & Trust</span>
        </div>
        <SectionTitle>Trust-First Design</SectionTitle>
        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 ${
          isDark ? 'text-white/70' : 'text-gray-600'
        }`}>
          Verified profiles and documents build trust between startups and investors
        </p>
      </div>

      <div className="relative">
        <SecurityIllustration isDark={isDark} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <CardContainer>
          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4 rounded-lg ${
            isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
          }`}>
            <HiRocketLaunch className={`text-2xl sm:text-2xl md:text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
          </div>
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Startup Verification
          </h3>
          <p className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-5 leading-relaxed ${
            isDark ? 'text-white/80' : 'text-black/80'
          }`}>
            Verification through Private Limited, LLP, MSME, GST, Udyam, or founder ID documents.
          </p>
          <ul className={`space-y-2 sm:space-y-3 text-sm sm:text-base ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Auto-Verify: CIN upload</span>
            </li>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Manual-Verify: GST or Udyam</span>
            </li>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>For Unregistered: Founder ID proof</span>
            </li>
          </ul>
        </CardContainer>

        <CardContainer>
          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4 rounded-lg ${
            isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
          }`}>
            <HiCurrencyDollar className={`text-2xl sm:text-2xl md:text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
          </div>
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Investor Verification
          </h3>
          <p className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-5 leading-relaxed ${
            isDark ? 'text-white/80' : 'text-black/80'
          }`}>
            SEBI registered: registration number + certificate. Non-SEBI angels: LinkedIn, PAN, ID proof, and manual review.
          </p>
          <ul className={`space-y-2 sm:space-y-3 text-sm sm:text-base ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>SEBI: Instant auto-verification</span>
            </li>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Non-SEBI: LinkedIn + PAN + ID</span>
            </li>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Community Verified badge</span>
            </li>
          </ul>
        </CardContainer>

        <CardContainer>
          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4 rounded-lg ${
            isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
          }`}>
            <HiAcademicCap className={`text-2xl sm:text-2xl md:text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
          </div>
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Incubator Verification
          </h3>
          <p className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-5 leading-relaxed ${
            isDark ? 'text-white/80' : 'text-black/80'
          }`}>
            Government / University / Corporate / Private incubators: upload registration, affiliation, MSME/Udyam, or incorporation documents.
          </p>
          <ul className={`space-y-2 sm:space-y-3 text-sm sm:text-base ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Government Registration</span>
            </li>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>University Affiliation</span>
            </li>
            <li className="flex items-center gap-2">
              <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Corporate Legal Certificate</span>
            </li>
          </ul>
        </CardContainer>
      </div>
      </div>
    </section>
  );
}
