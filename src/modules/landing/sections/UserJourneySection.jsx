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
      className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
        isVisible['userJourney'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        <SectionTitle>Your EVO-A Journey</SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {userJourneyData.map((journey, index) => (
          <CardContainer key={index}>
            <div className={`text-2xl sm:text-3xl font-bold mb-2 ${
              isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
            }`}>
              {journey.day}
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-3 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {journey.title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-white/70' : 'text-black/70'
            }`}>
              {journey.description}
            </p>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
