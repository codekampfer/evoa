import { useState } from 'react';

// Why EVO-A Features
const whyEvoaFeatures = [
  {
    iconName: 'HiCheckBadge',
    title: "Verified Profiles & Documents",
    description: "Details like CIN, GST, Udyam, and SEBI registration help build trust between startups and investors."
  },
  {
    iconName: 'HiVideoCamera',
    title: "Investor-First Pitch Experience",
    description: "Pitch video, deck, and deal terms (amount raising, equity, valuation) all on one screen – for quick and informed decisions."
  },
  {
    iconName: 'HiMagnifyingGlass',
    title: "Smart Matching & Filters",
    description: "Personalized recommendations for investors and incubators based on sector, ticket size, startup stage, and location."
  },
  {
    iconName: 'HiUserGroup',
    title: "Multi-Role Ecosystem",
    description: "Customized dashboard and experience for everyone – Startup, Investor, Incubator, and Viewer."
  }
];

// Animated GIF Icon Component
function AnimatedGifIcon({ src, alt = '', className = '', fallbackIcon = null }) {
  const [hasError, setHasError] = useState(false);

  if (hasError && fallbackIcon) {
    return <div className={className}>{fallbackIcon}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${hasError ? 'hidden' : ''}`}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, delay = 0, isVisible, isDark, gifIcon = null }) {
  return (
    <div
      className={`group relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      } ${
        isDark 
          ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-[#B0FFFA]/20 hover:border-[#B0FFFA]/40 hover:shadow-[0_8px_32px_rgba(176,255,250,0.15),0_0_0_1px_rgba(176,255,250,0.1)] hover:scale-[1.01] sm:hover:scale-[1.02] hover:-translate-y-1' 
          : 'bg-gradient-to-br from-white/90 via-white/70 to-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 hover:border-[#B0FFFA]/50 hover:shadow-[0_8px_32px_rgba(0,184,169,0.12),0_0_0_1px_rgba(176,255,250,0.2)] hover:scale-[1.01] sm:hover:scale-[1.02] hover:-translate-y-1'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B0FFFA]/5 via-transparent to-[#80E5FF]/5 rounded-xl sm:rounded-2xl"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        {/* Icon with modern styling */}
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
          isDark 
            ? 'bg-gradient-to-br from-[#B0FFFA]/20 to-[#80E5FF]/20 group-hover:from-[#B0FFFA]/30 group-hover:to-[#80E5FF]/30 shadow-lg shadow-[#B0FFFA]/10' 
            : 'bg-gradient-to-br from-[#B0FFFA]/25 to-[#80E5FF]/25 group-hover:from-[#B0FFFA]/35 group-hover:to-[#80E5FF]/35 shadow-lg shadow-[#00B8A9]/10'
        }`}>
          {gifIcon ? (
            <AnimatedGifIcon
              src={gifIcon}
              alt={title}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain animate-pulse-glow"
              fallbackIcon={
                <div className={`transition-transform duration-300 group-hover:scale-110 ${
                  isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
                }`}>
                  {icon}
                </div>
              }
            />
          ) : (
            <div className={`transition-transform duration-300 group-hover:scale-110 ${
              isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
            }`}>
              {icon}
            </div>
          )}
        </div>
        
        <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 transition-all duration-300 ${
          isDark ? 'text-white group-hover:text-[#B0FFFA]' : 'text-gray-900 group-hover:text-[#00B8A9]'
        }`}>
          {title}
        </h3>
        <p className={`text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-300 ${
          isDark ? 'text-white/70 group-hover:text-white/90' : 'text-gray-600 group-hover:text-gray-800'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyEvoaSection({ isVisible, isDark, setRef, SectionTitle, getIcon }) {
  return (
    <section 
      ref={setRef('whyEvoa')}
      className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
        isVisible['whyEvoa'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        <SectionTitle>Why EVO-A?</SectionTitle>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {whyEvoaFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={getIcon(feature.iconName, 'text-xl sm:text-2xl md:text-3xl')}
            title={feature.title}
            description={feature.description}
            delay={index * 100}
            isVisible={isVisible['whyEvoa']}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
