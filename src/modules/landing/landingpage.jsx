import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/layout/footer';
import {
  HeroSection,
  TransformJourneySection,
  WhyEvoaSection,
  WhoIsEvoaSection,
  HowItWorksSection,
  PowerfulFeaturesSection,
  TrustDesignSection,
  UserJourneySection,
  FAQSection
} from './sections';
import {
  HiRocketLaunch,
  HiSparkles,
  HiBolt,
  HiStar,
  HiGlobeAlt,
  HiTrophy,
  HiCheckBadge,
  HiVideoCamera,
  HiMagnifyingGlass,
  HiUserGroup,
  HiHome,
  HiBell,
  HiShieldCheck,
  HiClipboardDocumentCheck,
  HiChatBubbleLeftRight,
  HiArrowRight
} from 'react-icons/hi2';

// Generate smoke particles
const generateSmokeParticles = () => {
  const particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push({
      id: i,
      width: 100 + Math.random() * 250,
      height: 100 + Math.random() * 250,
      opacity: 0.2 + Math.random() * 0.5,
      top: 10 + Math.random() * 80,
      duration: 8 + Math.random() * 15,
      delay: i * 0.4,
      blur: i % 3 === 0 ? 'blur-2xl' : i % 3 === 1 ? 'blur-3xl' : 'blur-[60px]',
    });
  }
  return particles;
};

// Scroll Progress Indicator
function ScrollProgress({ isDark }) {
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

// Floating Animated Icons Component
function FloatingAnimatedIcons({ isDark }) {
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

// Icon mapping helper
const iconMap = {
  HiCheckBadge,
  HiVideoCamera,
  HiMagnifyingGlass,
  HiUserGroup,
  HiHome,
  HiBell,
  HiShieldCheck,
  HiClipboardDocumentCheck,
  HiChatBubbleLeftRight
};

const getIcon = (iconName, className = 'text-2xl') => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

// Animation Styles
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes smokeFlow {
    0% {
      opacity: 0;
      transform: translateX(-200px) translateY(0) scale(0.3);
    }
    5% {
      opacity: 0.4;
    }
    30% {
      opacity: 0.7;
      transform: translateX(100px) translateY(-30px) scale(0.8);
    }
    60% {
      opacity: 0.8;
      transform: translateX(300px) translateY(-60px) scale(1.2);
    }
    100% {
      opacity: 0;
      transform: translateX(600px) translateY(-100px) scale(1.8);
    }
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-20px) rotate(5deg);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-10px) rotate(-5deg);
      opacity: 0.4;
    }
    75% {
      transform: translateY(-15px) rotate(3deg);
      opacity: 0.5;
    }
  }
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
  @keyframes rotate-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes dotMove {
    0% {
      top: -2%;
      opacity: 0;
    }
    3% {
      opacity: 1;
    }
    97% {
      opacity: 1;
    }
    100% {
      top: 102%;
      opacity: 0;
    }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  .animate-rotate-slow {
    animation: rotate-slow 20s linear infinite;
  }
  .animate-dot-move {
    animation: dotMove 15s linear infinite;
  }
`;

export default function Landing() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = useRef({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [smokeParticles] = useState(() => generateSmokeParticles());

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    setIsVisible({ hero: true });
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
        }
      });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const setRef = (section) => (el) => {
    if (el) {
      sectionRefs.current[section] = el;
      el.dataset.section = section;
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const SectionTitle = ({ children }) => (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r ${
      isDark 
        ? 'from-white via-[#B0FFFA] to-white bg-clip-text text-transparent' 
        : 'from-black via-[#00B8A9] to-black bg-clip-text text-transparent'
    }`}>
      {children}
    </h2>
  );

  const CardContainer = ({ children, className = '' }) => (
    <div className={`group relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl transition-all duration-500 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-[#B0FFFA]/20 hover:border-[#B0FFFA]/40 hover:shadow-[0_12px_40px_rgba(176,255,250,0.15),0_0_0_1px_rgba(176,255,250,0.1)] hover:scale-[1.01] sm:hover:scale-[1.02] hover:-translate-y-1' 
        : 'bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 hover:border-[#B0FFFA]/50 hover:shadow-[0_12px_40px_rgba(0,184,169,0.12),0_0_0_1px_rgba(176,255,250,0.2)] hover:scale-[1.01] sm:hover:scale-[1.02] hover:-translate-y-1'
    } ${className}`}>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B0FFFA]/5 via-transparent to-[#80E5FF]/5 rounded-xl sm:rounded-2xl"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <style>{animationStyles}</style>
      
      <ScrollProgress isDark={isDark} />
      <FloatingAnimatedIcons isDark={isDark} />

        {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {smokeParticles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute left-0 rounded-full ${particle.blur} hidden sm:block`}
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              background: `radial-gradient(circle, rgba(176, 255, 250, ${particle.opacity}) 0%, rgba(176, 255, 250, ${particle.opacity * 0.3}) 40%, transparent 80%)`,
              top: `${particle.top}%`,
              animation: `smokeFlow ${particle.duration}s ease-out infinite`,
              animationDelay: `${particle.delay}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
        
        <div 
          className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-3xl transition-all duration-700 opacity-20 sm:opacity-30 md:opacity-40"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
            background: 'radial-gradient(circle, #B0FFFA 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-3xl transition-all duration-700 opacity-20 sm:opacity-30 md:opacity-40"
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
            background: 'radial-gradient(circle, #B0FFFA 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl transition-all duration-700 opacity-10 sm:opacity-15 md:opacity-20"
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.1}px, ${(mousePosition.y - 50) * -0.1}px)`,
            background: 'radial-gradient(circle, #80E5FF 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl transition-all duration-1000 opacity-5 sm:opacity-8 md:opacity-10"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px) translate(-50%, -50%)`,
            background: 'radial-gradient(circle, #B0FFFA 0%, transparent 60%)',
          }}
        />
      </div>

      <main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 pt-0 overflow-x-hidden">
        {/* Hero Section */}
        <div className={`relative ${isDark ? 'bg-gradient-to-b from-black via-black to-black/95' : 'bg-gradient-to-b from-white via-white to-gray-50/30'}`}>
          <HeroSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            mousePosition={mousePosition}
          />
        </div>

        {/* Section Divider */}
        <div className={`h-px w-full my-12 sm:my-16 md:my-20 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* Transform Journey Section */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-gray-900/30 to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <TransformJourneySection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            SectionTitle={SectionTitle}
            CardContainer={CardContainer}
          />
        </div>

        {/* Section Divider */}
        <div className={`h-px w-full my-12 sm:my-16 md:my-20 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* Why EVO-A Section */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-black to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <WhyEvoaSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            SectionTitle={SectionTitle}
            getIcon={getIcon}
          />
        </div>

        {/* Section Divider */}
        <div className={`h-px w-full my-12 sm:my-16 md:my-20 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* Who is EVO-A For Section */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-gray-900/30 to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <WhoIsEvoaSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            SectionTitle={SectionTitle}
          />
        </div>

        {/* Section Divider */}
        <div className={`h-px w-full my-12 sm:my-16 md:my-20 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* How It Works Section */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-black to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <HowItWorksSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            SectionTitle={SectionTitle}
            getIcon={getIcon}
          />
        </div>

        {/* Section Divider - Extra spacing for separation */}
        <div className={`h-px w-full my-16 sm:my-20 md:my-24 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* Powerful Features Section */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-gray-900/30 to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <PowerfulFeaturesSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
          />
        </div>

        {/* Section Divider */}
        <div className={`h-px w-full my-12 sm:my-16 md:my-20 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* Trust Design Section */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-black to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <TrustDesignSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            SectionTitle={SectionTitle}
            CardContainer={CardContainer}
          />
        </div>

        {/* Section Divider - Extra spacing for separation */}
        <div className={`h-px w-full my-16 sm:my-20 md:my-24 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* User Journey Section */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-gray-900/30 to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <UserJourneySection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            SectionTitle={SectionTitle}
            CardContainer={CardContainer}
          />
        </div>

        {/* Section Divider */}
        <div className={`h-px w-full my-12 sm:my-16 md:my-20 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* Final Call-to-Action */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-black to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <section 
            ref={setRef('finalCta')}
            className={`relative transition-all duration-1000 ease-out ${
              isVisible['finalCta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
          <div className={`relative border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center ${
            isDark 
              ? 'bg-black/40 border-[#B0FFFA]/30 shadow-[0_0_30px_rgba(176,255,250,0.2)]' 
              : 'bg-white border-[#B0FFFA]/40 shadow-[0_0_30px_rgba(176,255,250,0.15)]'
          }`}>
            <div className="max-w-2xl mx-auto px-2 sm:px-4">
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight bg-gradient-to-r ${
                isDark 
                  ? 'from-white via-[#B0FFFA] to-white bg-clip-text text-transparent' 
                  : 'from-black via-[#00B8A9] to-black bg-clip-text text-transparent'
              }`}>
                Ready to Transform Your Startup Journey?
              </h2>
              <p className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto ${
                isDark ? 'text-white/80' : 'text-black/70'
              }`}>
                Whether you're a founder ready to pitch your vision, an investor seeking the next big opportunity, or an incubator building the future – EVO-A connects you with the right people at the right time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-4 sm:mb-5">
                <Link 
                  to="/register" 
                  className="group relative w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-4 text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden
                    bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black shadow-xl hover:shadow-[0_0_40px_rgba(176,255,250,0.6)]"
                >
                  <span className="relative z-10">Get Started Free</span>
                  <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#80E5FF] to-[#B0FFFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  to="/login" 
                  className={`w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-4 border-2 rounded-xl text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-center ${
                    isDark 
                      ? 'border-[#B0FFFA]/50 text-[#B0FFFA] hover:bg-[#B0FFFA]/10 hover:border-[#B0FFFA]' 
                      : 'border-[#B0FFFA] text-[#00B8A9] hover:bg-[#B0FFFA]/10 hover:border-[#00B8A9]'
                  }`}
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Section Divider */}
        <div className={`h-px w-full my-12 sm:my-16 md:my-20 ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>

        {/* FAQ Section - Moved to end */}
        <div className={`relative py-12 sm:py-16 md:py-20 ${isDark ? 'bg-gradient-to-b from-black/95 via-gray-900/30 to-black/95' : 'bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30'}`}>
          <FAQSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
            SectionTitle={SectionTitle}
            openFAQ={openFAQ}
            toggleFAQ={toggleFAQ}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
