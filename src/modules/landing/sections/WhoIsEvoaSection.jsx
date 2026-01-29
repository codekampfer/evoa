import { Link } from 'react-router-dom';
import { HiRocketLaunch, HiCurrencyDollar, HiAcademicCap, HiUsers } from 'react-icons/hi2';

export default function WhoIsEvoaSection({ isVisible, isDark, setRef, SectionTitle }) {
  return (
    <section 
      ref={setRef('userRoles')}
      className={`relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 py-12 transition-all duration-1000 ease-out ${
        isVisible['userRoles'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 backdrop-blur-xl border ${
          isDark 
            ? 'bg-[#B0FFFA]/5 border-[#B0FFFA]/20 text-[#B0FFFA]' 
            : 'bg-[#00B8A9]/5 border-[#00B8A9]/20 text-[#00B8A9]'
        }`}>
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">For Everyone</span>
        </div>
        
        <SectionTitle>Who is EVO-A For?</SectionTitle>
        
        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 ${
          isDark ? 'text-white/70' : 'text-gray-600'
        }`}>
          Choose your role and join the ecosystem
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="hidden md:block">
          <div className="relative mx-auto flex items-center justify-center" 
            style={{ 
              width: 'min(650px, 90vw)', 
              height: 'min(650px, 85vh)', 
              maxWidth: '100%',
              aspectRatio: '1/1'
            }}>
            
            {/* Center Circle */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
              w-36 h-36 lg:w-44 lg:h-44 rounded-full flex flex-col items-center justify-center backdrop-blur-2xl border-4
              shadow-[0_0_60px_rgba(176,255,250,0.3)] ${
              isDark 
                ? 'bg-gradient-to-br from-black/80 via-black/60 to-black/80 border-[#B0FFFA]/40' 
                : 'bg-gradient-to-br from-white/90 via-white/80 to-white/90 border-[#B0FFFA]/50'
            }`}>
              <div className={`absolute inset-0 rounded-full blur-2xl opacity-50 animate-pulse ${
                isDark ? 'bg-[#B0FFFA]/30' : 'bg-[#00B8A9]/20'
              }`}></div>
              
              <div className="relative z-10 text-center px-4">
                <div className={`text-2xl lg:text-3xl font-black mb-1 lg:mb-2 bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-[#B0FFFA] via-white to-[#80E5FF]' 
                    : 'from-[#00B8A9] via-teal-600 to-[#008C81]'
                }`}>
                  EVO-A
                </div>
                <p className={`text-xs lg:text-sm font-semibold ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  One Platform
                </p>
                <p className={`text-[10px] lg:text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Four Possibilities
                </p>
              </div>
            </div>

            {/* SVG Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg 
                width="100%" 
                height="100%"
                viewBox="0 0 650 650"
                className="absolute"
                style={{ 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <circle
                  cx="325"
                  cy="325"
                  r="245"
                  fill="none"
                  stroke={isDark ? 'rgba(176, 255, 250, 0.3)' : 'rgba(0, 184, 169, 0.3)'}
                  strokeWidth="2"
                  strokeDasharray="15 10"
                  className="animate-dash-rotate"
                />
                
                <circle
                  r="6"
                  fill={isDark ? '#B0FFFA' : '#00B8A9'}
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path="M 325,80 a 245,245 0 1,1 0,490 a 245,245 0 1,1 0,-490"
                  />
                </circle>
                
                <circle
                  r="6"
                  fill={isDark ? '#80E5FF' : '#00E5D0'}
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path="M 325,80 a 245,245 0 1,1 0,490 a 245,245 0 1,1 0,-490"
                    begin="-4s"
                  />
                </circle>
              </svg>
            </div>

            {/* Role Cards */}
            {[
              { icon: HiRocketLaunch, title: 'For Startups', desc: 'Pitch your vision &<br/>get funded', link: '/register/startup', cta: 'Create Account', position: { top: '0', left: '50%', transform: 'translate(-50%, 0)' }, delay: '100ms' },
              { icon: HiCurrencyDollar, title: 'For Investors', desc: 'Discover & fund<br/>unicorns', link: '/register/investor', cta: 'Join EVO-A', position: { top: '50%', right: '0', transform: 'translate(0, -50%)' }, delay: '250ms' },
              { icon: HiAcademicCap, title: 'For Incubators', desc: 'Nurture & scale<br/>startups', link: '/register/incubator', cta: 'Get Started', position: { bottom: '0', left: '50%', transform: 'translate(-50%, 0)' }, delay: '400ms' },
              { icon: HiUsers, title: 'For Viewers', desc: 'Explore & learn<br/>daily', link: '/register/viewer', cta: 'Start Exploring', position: { top: '50%', left: '0', transform: 'translate(0, -50%)' }, delay: '550ms' }
            ].map((role, index) => (
              <Link 
                key={index}
                to={role.link}
                className={`absolute transition-all duration-700 group/card ${
                  isVisible['userRoles'] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{ 
                  ...role.position,
                  transitionDelay: role.delay
                }}
              >
                <div className={`relative rounded-full 
                  w-40 h-40 lg:w-44 lg:h-44
                  group-hover/card:w-48 group-hover/card:h-48 lg:group-hover/card:w-52 lg:group-hover/card:h-52
                  flex flex-col items-center justify-center
                  transition-all duration-500 cursor-pointer p-5 ${
                  isDark 
                    ? 'bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl border-2 border-[#B0FFFA]/30 group-hover/card:border-[#B0FFFA] shadow-[0_12px_40px_rgba(176,255,250,0.2)] group-hover/card:shadow-[0_20px_60px_rgba(176,255,250,0.6)]' 
                    : 'bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border-2 border-[#B0FFFA]/40 group-hover/card:border-[#B0FFFA] shadow-[0_12px_40px_rgba(0,184,169,0.15)] group-hover/card:shadow-[0_20px_60px_rgba(0,184,169,0.5)]'
                }`}>
                  
                  <div className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover/card:opacity-60 transition-opacity duration-500 ${
                    isDark ? 'bg-[#B0FFFA]/40' : 'bg-[#00B8A9]/30'
                  }`}></div>

                  <div className="relative z-10 text-center flex flex-col items-center justify-between h-full w-full">
                    <div className="flex-shrink-0"></div>

                    <div className={`w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full 
                      transition-all duration-500 group-hover/card:scale-110 flex-shrink-0 ${
                      isDark 
                        ? 'bg-[#B0FFFA]/20 group-hover/card:bg-[#B0FFFA]/30' 
                        : 'bg-[#B0FFFA]/30 group-hover/card:bg-[#B0FFFA]/40'
                    }`}>
                      <role.icon className={`text-3xl lg:text-4xl transition-all ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                    </div>
                    
                    <div className="flex-grow flex flex-col items-center justify-center gap-1 py-2">
                      <h3 className={`text-base lg:text-lg font-bold transition-all duration-300 ${
                        isDark 
                          ? 'text-white group-hover/card:text-[#B0FFFA]' 
                          : 'text-black group-hover/card:text-[#00B8A9]'
                      }`}>
                        {role.title}
                      </h3>
                      
                      <p className={`text-xs lg:text-sm leading-relaxed transition-all duration-300 ${
                        isDark 
                          ? 'text-white/70 group-hover/card:text-white/90' 
                          : 'text-black/70 group-hover/card:text-black/90'
                      }`} dangerouslySetInnerHTML={{ __html: role.desc }} />
                    </div>

                    <div className={`transition-all duration-500 transform flex-shrink-0
                      opacity-0 scale-75 h-0 overflow-hidden
                      group-hover/card:opacity-100 group-hover/card:scale-100 group-hover/card:h-auto`}>
                      <div className={`px-5 py-2 rounded-full text-xs lg:text-sm font-bold whitespace-nowrap ${
                        isDark 
                          ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black' 
                          : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white'
                      }`}>
                        {role.cta}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {[
            { icon: HiRocketLaunch, title: 'For Startups', desc: 'Pitch your vision & get funded', link: '/register/startup', cta: 'Create Account' },
            { icon: HiCurrencyDollar, title: 'For Investors', desc: 'Discover & fund unicorns', link: '/register/investor', cta: 'Join EVO-A' },
            { icon: HiAcademicCap, title: 'For Incubators', desc: 'Nurture & scale startups', link: '/register/incubator', cta: 'Get Started' },
            { icon: HiUsers, title: 'For Viewers', desc: 'Explore & learn daily', link: '/register/viewer', cta: 'Start Exploring' }
          ].map((role, index) => (
            <div
              key={index}
              className={`group relative w-full max-w-sm mx-auto transition-all duration-700 ${
                isVisible['userRoles'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`relative p-6 rounded-3xl backdrop-blur-xl border-2 transition-all duration-500 hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-br from-black/80 via-black/60 to-black/80 border-[#B0FFFA]/30 hover:border-[#B0FFFA]/60 shadow-[0_12px_40px_rgba(176,255,250,0.2)]' 
                  : 'bg-gradient-to-br from-white/95 via-white/85 to-white/95 border-[#B0FFFA]/40 hover:border-[#B0FFFA]/70 shadow-[0_12px_40px_rgba(0,184,169,0.15)]'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl ${
                    isDark 
                      ? 'bg-gradient-to-br from-[#B0FFFA]/30 to-[#80E5FF]/30' 
                      : 'bg-gradient-to-br from-[#B0FFFA]/40 to-[#80E5FF]/40'
                  }`}>
                    <role.icon className={`text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                      {role.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {role.desc}
                    </p>
                  </div>
                </div>
                <Link 
                  to={role.link}
                  className={`mt-4 block w-full text-center px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg ${
                    isDark 
                      ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black' 
                      : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white'
                  }`}
                >
                  {role.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
