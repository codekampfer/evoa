// How It Works Steps
const howItWorksSteps = [
  {
    step: '01',
    title: 'Create Your Account',
    desc: 'Sign up with email/phone, choose your role – Startup, Investor, Incubator, or Viewer.',
    iconName: 'HiUserGroup'
  },
  {
    step: '02',
    title: 'Complete Your Profile',
    desc: 'Startups: founder details, verification & pitch. Investors: ticket size, sector focus, verification. Incubators: program & documents.',
    iconName: 'HiClipboardDocumentCheck'
  },
  {
    step: '03',
    title: 'Discover & Pitch',
    desc: 'Discover pitches from Home feed, Explore page, and Battleground. Watch pitch reels, like, comment, share, and support.',
    iconName: 'HiMagnifyingGlass'
  },
  {
    step: '04',
    title: 'Connect & Close Deals',
    desc: 'Comments, messages, offers, battlegrounds – all lead you to real conversations and deals.',
    iconName: 'HiChatBubbleLeftRight'
  }
];

export default function HowItWorksSection({ isVisible, isDark, setRef, SectionTitle, getIcon }) {
  return (
    <section 
      ref={setRef('howItWorks')}
      className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
        isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        <SectionTitle>How It Works?</SectionTitle>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 relative z-10">
        {howItWorksSteps.map((step, index) => (
          <div
            key={index}
            className={`group relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl transition-all duration-500 overflow-hidden ${
              isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${
              isDark 
                ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl hover:shadow-[0_8px_32px_rgba(176,255,250,0.15),0_0_0_1px_rgba(176,255,250,0.1)] hover:scale-[1.02] hover:-translate-y-1' 
                : 'bg-gradient-to-br from-white/90 via-white/70 to-white/90 backdrop-blur-xl hover:shadow-[0_8px_32px_rgba(0,184,169,0.12),0_0_0_1px_rgba(176,255,250,0.2)] hover:scale-[1.02] hover:-translate-y-1'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B0FFFA]/5 via-transparent to-[#80E5FF]/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className={`text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-5 flex items-baseline`}>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>{step.step.charAt(0)}</span>
                <span className={`bg-gradient-to-br ${
                  isDark ? 'from-[#B0FFFA]/30 to-[#80E5FF]/30 bg-clip-text text-transparent' : 'from-[#00B8A9] to-[#008C81] bg-clip-text text-transparent'
                }`}>
                  {step.step.charAt(1)}
                </span>
              </div>
              
              <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-5 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                isDark 
                  ? 'bg-gradient-to-br from-[#B0FFFA]/20 to-[#80E5FF]/20 group-hover:from-[#B0FFFA]/30 group-hover:to-[#80E5FF]/30 shadow-lg shadow-[#B0FFFA]/10' 
                  : 'bg-gradient-to-br from-[#B0FFFA]/25 to-[#80E5FF]/25 group-hover:from-[#B0FFFA]/35 group-hover:to-[#80E5FF]/35 shadow-lg shadow-[#00B8A9]/10'
              }`}>
                <div className={`${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'} text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110`}>
                  {getIcon(step.iconName, 'text-2xl')}
                </div>
              </div>
              
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 transition-all duration-300 ${
                isDark ? 'text-white group-hover:text-[#B0FFFA]' : 'text-gray-900 group-hover:text-[#00B8A9]'
              }`}>
                {step.title}
              </h3>
              
              <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-white/70 group-hover:text-white/90' : 'text-gray-600 group-hover:text-gray-800'
              }`}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
