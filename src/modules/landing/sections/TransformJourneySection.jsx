import { HiQuestionMarkCircle, HiLightBulb, HiSparkles, HiXMark, HiCheckCircle } from 'react-icons/hi2';

export default function TransformJourneySection({ isVisible, isDark, setRef, SectionTitle }) {
  const problems = [
    'Startups waste 6+ months searching for the right investors',
    'Investors miss quality deals buried in thousands of cold emails',
    'Incubators struggle to showcase their portfolio value',
  ];

  const solutions = [
    'AI-powered matching connects startups with ideal investors instantly',
    'Verified profiles build trust and eliminate noise from the pipeline',
    'All-in-one platform showcases pitch decks, metrics, and traction',
  ];

  return (
    <section 
      ref={setRef('problemSolution')}
      className={`relative py-10 sm:py-12 md:py-16 transition-all duration-1000 ease-out ${
        isVisible['problemSolution'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-8 sm:mb-10 transition-all duration-700 delay-100 overflow-visible ${
            isVisible['problemSolution'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight overflow-visible ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          style={{ lineHeight: '1.3' }}
          >
            From Chaos to Clarity.{' '}
            <span className={`inline-block overflow-visible ${isDark 
              ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-[#00B8A9] to-[#00C9B7] bg-clip-text text-transparent'
            }`}
            style={{ 
              animation: isVisible['problemSolution'] ? 'gradient-shift 3s ease infinite' : 'none',
              display: 'inline-block',
              lineHeight: '1.3'
            }}
            >
              One Growing Ecosystem.
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}>
            Everything you need in one place.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Column */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible['problemSolution'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                isDark ? 'bg-red-500/10' : 'bg-red-100'
              }`}>
                <HiQuestionMarkCircle className={`text-3xl ${
                  isDark ? 'text-red-400' : 'text-red-600'
                }`} />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                The Problem
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                The funding ecosystem is broken
              </p>
            </div>

            {/* Problem List */}
            <div className="space-y-4">
              {problems.map((problem, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-3 transition-all duration-500 hover:translate-x-2 ${
                    isVisible['problemSolution'] 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 transition-all duration-300 hover:scale-110 ${
                    isDark ? 'bg-red-500/10 hover:bg-red-500/20' : 'bg-red-100 hover:bg-red-200'
                  }`}>
                    <HiXMark className={`text-lg ${
                      isDark ? 'text-red-400' : 'text-red-600'
                    }`} />
                  </div>
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible['problemSolution'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-all duration-300 hover:scale-110 hover:-rotate-6 ${
                isDark ? 'bg-[#B0FFFA]/10' : 'bg-[#00B8A9]/10'
              }`}>
                <HiLightBulb className={`text-3xl ${
                  isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
                }`} />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                The Solution
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                EVO-A brings everyone together
              </p>
            </div>

            {/* Solution List */}
            <div className="space-y-4">
              {solutions.map((solution, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-3 transition-all duration-500 hover:translate-x-2 ${
                    isVisible['problemSolution'] 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 transition-all duration-300 hover:scale-110 ${
                    isDark ? 'bg-[#B0FFFA]/10 hover:bg-[#B0FFFA]/20' : 'bg-[#00B8A9]/10 hover:bg-[#00B8A9]/20'
                  }`}>
                    <HiCheckCircle className={`text-lg ${
                      isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
                    }`} />
                  </div>
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    {solution}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div 
              className={`mt-6 pt-6 border-t transition-all duration-700 delay-500 hover:scale-105 ${
                isVisible['problemSolution'] ? 'opacity-100' : 'opacity-0'
              }`} 
              style={{
                borderColor: isDark ? 'rgba(176, 255, 250, 0.1)' : 'rgba(0, 184, 169, 0.1)'
              }}
            >
              <p className={`text-sm font-bold mb-1 flex items-center gap-2 ${
                isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
              }`}>
                <HiSparkles className="text-base animate-pulse" />
                All verified. All trusted. All in one place.
              </p>
              <p className={`text-xs ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                Join thousands transforming the funding ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
      `}</style>
    </section>
  );
}
