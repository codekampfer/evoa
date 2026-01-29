import { HiQuestionMarkCircle, HiLightBulb, HiArrowRight } from 'react-icons/hi2';

export default function TransformJourneySection({ isVisible, isDark, setRef, SectionTitle, CardContainer }) {
  return (
    <section 
      ref={setRef('problemSolution')}
      className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
        isVisible['problemSolution'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        <SectionTitle>Transform Your Startup Journey</SectionTitle>
        <p className={`text-base sm:text-lg mt-4 max-w-2xl mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          From pitch to funding, we've got you covered
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <CardContainer className="hover:scale-[1.01] sm:hover:scale-[1.02]">
          <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 ${
            isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
          }`}>
            <HiQuestionMarkCircle className="text-xl sm:text-2xl md:text-3xl flex-shrink-0" />
            <span>The Problem</span>
          </h3>
          <ul className={`space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            <li className="flex items-start gap-2">
              <HiArrowRight className={`mt-0.5 sm:mt-1 shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Startups waste months searching for the right investors</span>
            </li>
            <li className="flex items-start gap-2">
              <HiArrowRight className={`mt-0.5 sm:mt-1 shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Investors miss out on quality deals buried in noise</span>
            </li>
            <li className="flex items-start gap-2">
              <HiArrowRight className={`mt-0.5 sm:mt-1 shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              <span>Incubators struggle to showcase their portfolio effectively</span>
            </li>
          </ul>
        </CardContainer>

        <CardContainer className="hover:scale-[1.01] sm:hover:scale-[1.02]">
          <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 ${
            isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
          }`}>
            <HiLightBulb className="text-xl sm:text-2xl md:text-3xl flex-shrink-0" />
            <span>The Solution</span>
          </h3>
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${
            isDark ? 'text-white/70' : 'text-black/70'
          }`}>
            EVO-A brings everything together in one intelligent platform. Startups pitch with confidence, investors discover verified opportunities instantly, and incubators showcase their success stories. All verified, all trusted, all in one place.
          </p>
        </CardContainer>
      </div>
    </section>
  );
}
