import { useEffect, useState } from 'react';
import { 
  HiArrowDown, 
  HiArrowRight,
  HiRocketLaunch,
  HiSparkles,
  HiBolt,
  HiStar,
  HiGlobeAlt,
  HiTrophy
} from 'react-icons/hi2';

// Scroll Progress Indicator
export function ScrollProgress({ isDark }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      setProgress((scrolled / documentHeight) * 100);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 h-1.5 z-50 ${
      isDark ? 'bg-white/10' : 'bg-black/10'
    }`}>
      <div 
        className="h-full transition-all duration-300 shadow-lg"
        style={{ 
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #B0FFFA 0%, #80E5FF 100%)',
          boxShadow: '0 0 10px rgba(176, 255, 250, 0.5)'
        }}
      />
    </div>
  );
}

// Animated GIF Icon Component
export function AnimatedGifIcon({ src, alt = '', className = '', fallbackIcon = null }) {
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

// Feature Card Component - Modern Glassmorphism Design
export function FeatureCard({ icon, title, description, delay = 0, isVisible, isDark, gifIcon = null }) {
  return (
    <div
      className={`group relative p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      } ${
        isDark 
          ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-[#B0FFFA]/20 hover:border-[#B0FFFA]/40 hover:shadow-[0_8px_32px_rgba(176,255,250,0.15),0_0_0_1px_rgba(176,255,250,0.1)] hover:scale-[1.02] hover:-translate-y-1' 
          : 'bg-gradient-to-br from-white/90 via-white/70 to-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 hover:border-[#B0FFFA]/50 hover:shadow-[0_8px_32px_rgba(0,184,169,0.12),0_0_0_1px_rgba(176,255,250,0.2)] hover:scale-[1.02] hover:-translate-y-1'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B0FFFA]/5 via-transparent to-[#80E5FF]/5 rounded-2xl"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        {/* Icon with modern styling */}
        <div className={`w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-5 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
          isDark 
            ? 'bg-gradient-to-br from-[#B0FFFA]/20 to-[#80E5FF]/20 group-hover:from-[#B0FFFA]/30 group-hover:to-[#80E5FF]/30 shadow-lg shadow-[#B0FFFA]/10' 
            : 'bg-gradient-to-br from-[#B0FFFA]/25 to-[#80E5FF]/25 group-hover:from-[#B0FFFA]/35 group-hover:to-[#80E5FF]/35 shadow-lg shadow-[#00B8A9]/10'
        }`}>
          {gifIcon ? (
            <AnimatedGifIcon
              src={gifIcon}
              alt={title}
              className="w-8 h-8 object-contain animate-pulse-glow"
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
        
        <h3 className={`text-lg sm:text-xl font-bold mb-3 transition-all duration-300 ${
          isDark ? 'text-white group-hover:text-[#B0FFFA]' : 'text-gray-900 group-hover:text-[#00B8A9]'
        }`}>
          {title}
        </h3>
        <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
          isDark ? 'text-white/70 group-hover:text-white/90' : 'text-gray-600 group-hover:text-gray-800'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
}

// FAQ Accordion Component - Modern Design
export function FAQItem({ question, answer, isOpen, onToggle, isDark }) {
  return (
    <div className={`group relative rounded-2xl transition-all duration-500 overflow-hidden ${
      isDark 
        ? `bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-[#B0FFFA]/20 ${isOpen ? 'border-[#B0FFFA]/40 shadow-[0_8px_32px_rgba(176,255,250,0.15)]' : 'hover:border-[#B0FFFA]/30'}` 
        : `bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 ${isOpen ? 'border-[#B0FFFA]/50 shadow-[0_8px_32px_rgba(0,184,169,0.12)]' : 'hover:border-[#B0FFFA]/40'}`
    }`}>
      {isOpen && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#B0FFFA]/5 via-transparent to-[#80E5FF]/5 rounded-2xl"></div>
      )}
      <button
        onClick={onToggle}
        className={`relative z-10 w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between transition-all duration-300 rounded-2xl ${
          isDark 
            ? `hover:bg-[#B0FFFA]/5 ${isOpen ? 'bg-[#B0FFFA]/10' : ''}` 
            : `hover:bg-[#B0FFFA]/5 ${isOpen ? 'bg-[#B0FFFA]/10' : ''}`
        }`}
      >
        <span className={`font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 pr-4 ${
          isDark 
            ? `text-white ${isOpen ? 'text-[#B0FFFA]' : ''}` 
            : `text-gray-900 ${isOpen ? 'text-[#00B8A9]' : ''}`
        }`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
          isDark 
            ? `bg-[#B0FFFA]/20 ${isOpen ? 'bg-[#B0FFFA]/30 rotate-180' : 'group-hover:bg-[#B0FFFA]/25'}`
            : `bg-[#B0FFFA]/20 ${isOpen ? 'bg-[#B0FFFA]/30 rotate-180' : 'group-hover:bg-[#B0FFFA]/25'}`
        }`}>
          <HiArrowDown className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          } ${isDark ? `text-[#B0FFFA]` : 'text-[#00B8A9]'}`} />
        </div>
      </button>
      {isOpen && (
        <div className={`relative z-10 px-5 sm:px-6 pb-5 sm:pb-6 animate-slide-up ${
          isDark ? 'text-white/80' : 'text-gray-700'
        }`}>
          <p className="text-sm sm:text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

// Floating Animated Icons Component
export function FloatingAnimatedIcons({ isDark }) {
  const icons = [
    { icon: <HiRocketLaunch className="text-2xl" />, delay: 0, x: '10%', y: '20%' },
    { icon: <HiSparkles className="text-2xl" />, delay: 0.5, x: '85%', y: '25%' },
    { icon: <HiBolt className="text-2xl" />, delay: 1, x: '15%', y: '70%' },
    { icon: <HiStar className="text-2xl" />, delay: 1.5, x: '80%', y: '75%' },
    { icon: <HiGlobeAlt className="text-xl" />, delay: 2, x: '5%', y: '45%' },
    { icon: <HiTrophy className="text-xl" />, delay: 2.5, x: '90%', y: '50%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${isDark ? 'text-[#B0FFFA]/30' : 'text-[#00B8A9]/30'} animate-float`}
          style={{
            left: item.x,
            top: item.y,
            animationDelay: `${item.delay}s`,
            animationDuration: '6s',
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

