export default function PowerfulFeaturesSection({ isVisible, isDark, setRef }) {
  const features = [
    { title: 'Instant AI-Powered Matching', desc: 'Start instantly with AI-powered connections to match startups with the right investors and incubators effortlessly.', side: 'right' },
    { title: 'Secure Enterprise-Grade Platform', desc: 'Built with robust security and verification systems to keep your data protected and reliable at every scale.', side: 'left' },
    { title: 'Instant & Reliable Pitch Creation', desc: 'Generate high-quality pitch videos and decks instantly with consistent performance you can trust.', side: 'right' },
    { title: 'Smart Discovery & Search', desc: 'Find hundreds of quality startups, investors, and opportunities at once to save time and streamline your search.', side: 'left' },
    { title: 'Real-Time Notifications & Updates', desc: 'Stay connected with instant alerts for offers, messages, battlegrounds, and trending updates.', side: 'right' },
    { title: 'Analytics & Performance Insights', desc: 'Access detailed engagement insights anytime with easy-to-track performance metrics and reports.', side: 'left' }
  ];

  return (
    <section 
      ref={setRef('powerfulFeatures')}
      className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
        isVisible['powerfulFeatures'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 px-4">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Everything You Need.{' '}
          <span className={`underline decoration-2 underline-offset-4 ${
            isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
          }`}>
            Nothing You Don't.
          </span>
        </h2>
        <p className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          A powerful platform designed to simplify startup-investor connections, pitch management, and deal tracking, without unnecessary complexity.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Vertical Dashed Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 z-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke={isDark ? 'rgba(176, 255, 250, 0.4)' : 'rgba(0, 184, 169, 0.4)'}
              strokeWidth="2"
              strokeDasharray="8,8"
              className="animate-dash"
            />
            
            <circle
              r="5"
              cx="50%"
              cy="0%"
              fill={isDark ? '#B0FFFA' : '#00B8A9'}
              opacity="0.9"
            >
              <animate
                attributeName="cy"
                from="0%"
                to="100%"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Mobile: Card-based layout */}
        <div className="md:hidden space-y-4 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-5 rounded-xl transition-all duration-700 transform ${
                isVisible['powerfulFeatures'] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              } ${
                isDark 
                  ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-[#B0FFFA]/20 hover:border-[#B0FFFA]/40' 
                  : 'bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 hover:border-[#B0FFFA]/50'
              } shadow-lg hover:shadow-xl`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B0FFFA]/5 via-transparent to-[#80E5FF]/5 rounded-xl"></div>
              
              <div className="relative z-10">
                {/* Number indicator */}
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-3 ${
                  isDark ? 'bg-[#B0FFFA]/20 text-[#B0FFFA]' : 'bg-[#00B8A9]/20 text-[#00B8A9]'
                } text-sm font-bold`}>
                  {index + 1}
                </div>
                
                <h3 className={`text-base sm:text-lg font-bold mb-2 transition-all duration-300 ${
                  isDark ? 'text-white group-hover:text-[#B0FFFA]' : 'text-gray-900 group-hover:text-[#00B8A9]'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-white/70 group-hover:text-white/90' : 'text-gray-600 group-hover:text-gray-800'
                }`}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Timeline layout */}
        <div className="hidden md:block space-y-12 md:space-y-16 lg:space-y-20 relative">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center transition-all duration-700 ${
                isVisible['powerfulFeatures'] 
                  ? 'opacity-100 translate-x-0' 
                  : feature.side === 'right' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8'
              }`} 
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {feature.side === 'left' ? (
                <>
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature.desc}
                    </p>
                  </div>
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 z-10 ${
                    isDark ? 'bg-black border-[#B0FFFA]' : 'bg-white border-[#00B8A9]'
                  }`}></div>
                  <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block md:w-1/2 md:pr-8"></div>
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 z-10 ${
                    isDark ? 'bg-black border-[#B0FFFA]' : 'bg-white border-[#00B8A9]'
                  }`}></div>
                  <div className="w-full md:w-1/2 md:pl-8 md:text-left">
                    <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature.desc}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
