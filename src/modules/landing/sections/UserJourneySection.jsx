// User Journey Data
const userJourneyData = [
  {
    day: 'Day 1',
    title: 'Signup & Profile',
    description: 'Create account → Choose role → Complete profile form → Upload verification docs'
  },
  {
    day: 'Day 2-3',
    title: 'Discovery & Exploration',
    description: 'Browse home feed and explore page → Discover pitches and investors → Like, comment, save'
  },
  {
    day: 'Day 4+',
    title: 'Active Engagement',
    description: 'Send messages to interested parties → Receive offers and notifications → Participate in battlegrounds → Close connections'
  }
];

export default function UserJourneySection({ isVisible, isDark, setRef, SectionTitle, CardContainer }) {
  return (
    <section 
      ref={setRef('userJourney')}
      className={`relative transition-all duration-1000 ease-out ${
        isVisible['userJourney'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 backdrop-blur-xl border ${
          isDark 
            ? 'bg-[#B0FFFA]/5 border-[#B0FFFA]/20 text-[#B0FFFA]' 
            : 'bg-[#00B8A9]/5 border-[#00B8A9]/20 text-[#00B8A9]'
        }`}>
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">Timeline</span>
        </div>
        <SectionTitle>Your EVO-A Journey</SectionTitle>
        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 ${
          isDark ? 'text-white/70' : 'text-gray-600'
        }`}>
          What to expect in your first week
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {userJourneyData.map((journey, index) => (
          <CardContainer key={index} className="relative">
            {/* Timeline connector for desktop */}
            {index < userJourneyData.length - 1 && (
              <div className={`hidden lg:block absolute top-1/2 -right-5 w-10 h-0.5 ${
                isDark ? 'bg-gradient-to-r from-[#B0FFFA]/50 to-transparent' : 'bg-gradient-to-r from-[#00B8A9]/50 to-transparent'
              }`}></div>
            )}
            <div className={`inline-block px-3 py-1 rounded-lg mb-4 ${
              isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#00B8A9]/10'
            }`}>
              <div className={`text-lg sm:text-xl md:text-2xl font-bold ${
                isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
              }`}>
                {journey.day}
              </div>
            </div>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {journey.title}
            </h3>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${
              isDark ? 'text-white/80' : 'text-black/80'
            }`}>
              {journey.description}
            </p>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
