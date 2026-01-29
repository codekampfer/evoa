import { HiRocketLaunch, HiCurrencyDollar, HiAcademicCap, HiCheckCircle } from 'react-icons/hi2';

export default function TrustDesignSection({ isVisible, isDark, setRef, SectionTitle, CardContainer }) {
  return (
    <section 
      ref={setRef('trustVerification')}
      className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
        isVisible['trustVerification'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        <SectionTitle>Trust-First Design</SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <CardContainer>
          <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-lg ${
            isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
          }`}>
            <HiRocketLaunch className={`text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
          </div>
          <h3 className={`text-xl font-bold mb-3 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Startup Verification
          </h3>
          <p className={`text-sm mb-4 leading-relaxed ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            Startup verification flow through Private Limited, LLP, MSME, GST, Udyam, or founder ID documents.
          </p>
          <ul className={`space-y-2 text-sm ${
            isDark ? 'text-white/60' : 'text-black/60'
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
          <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-lg ${
            isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
          }`}>
            <HiCurrencyDollar className={`text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
          </div>
          <h3 className={`text-xl font-bold mb-3 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Investor Verification
          </h3>
          <p className={`text-sm mb-4 leading-relaxed ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            For SEBI registered investors: registration number + certificate. For non-SEBI angels: LinkedIn, PAN, ID proof, and manual review.
          </p>
          <ul className={`space-y-2 text-sm ${
            isDark ? 'text-white/60' : 'text-black/60'
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
          <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-lg ${
            isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
          }`}>
            <HiAcademicCap className={`text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
          </div>
          <h3 className={`text-xl font-bold mb-3 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Incubator Verification
          </h3>
          <p className={`text-sm mb-4 leading-relaxed ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            For Government / University / Corporate / Private incubators: upload registration, affiliation, MSME/Udyam, or incorporation documents.
          </p>
          <ul className={`space-y-2 text-sm ${
            isDark ? 'text-white/60' : 'text-black/60'
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
    </section>
  );
}
