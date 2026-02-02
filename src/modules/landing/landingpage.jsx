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
  HiStar,
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


// Generate smoke particles - Reduced for better performance
const generateSmokeParticles = () => {
  const particles = [];
  for (let i = 0; i < 8; i++) { // Reduced from 20 to 8
    particles.push({
      id: i,
      width: 150 + Math.random() * 200,
      height: 150 + Math.random() * 200,
      opacity: 0.15 + Math.random() * 0.25, // More subtle
      top: 10 + Math.random() * 80,
      duration: 10 + Math.random() * 12, // Slower animations
      delay: i * 1.2,
      blur: 'blur-3xl',
    });
  }
  return particles;
};


// Floating Animated Icons Component - Simplified
function FloatingAnimatedIcons({ isDark }) {
  const icons = [
    { icon: <HiRocketLaunch className="text-xl" />, delay: 0, x: '8%', y: '15%' },
    { icon: <HiSparkles className="text-xl" />, delay: 1, x: '88%', y: '20%' },
    { icon: <HiStar className="text-lg" />, delay: 2, x: '12%', y: '75%' },
  ]; // Reduced from 6 to 3

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 hidden xl:block">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${isDark ? 'text-[#B0FFFA]/20' : 'text-[#00B8A9]/20'} animate-float`}
          style={{
            left: item.x,
            top: item.y,
            animationDelay: `${item.delay}s`,
            animationDuration: '8s',
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


// Optimized Animation Styles
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes smokeFlow {
    0% {
      opacity: 0;
      transform: translateX(-100px) translateY(0) scale(0.5);
    }
    10% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
      transform: translateX(200px) translateY(-40px) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateX(400px) translateY(-80px) scale(1.5);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-15px);
      opacity: 0.4;
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.05);
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
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
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
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = useRef({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [smokeParticles] = useState(() => generateSmokeParticles());


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


  // Improved Section Title Component
  const SectionTitle = ({ children }) => (
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 ${
      isDark ? 'text-white' : 'text-black'
    }`}>
      {children}
    </h2>
  );


  // Simplified Card Container
  const CardContainer = ({ children, className = '' }) => (
    <div className={`group relative p-6 md:p-8 lg:p-10 rounded-2xl transition-all duration-300 overflow-hidden ${
      isDark 
        ? 'bg-black/40 backdrop-blur-xl border border-[#B0FFFA]/20 hover:border-[#B0FFFA]/40 hover:shadow-lg hover:shadow-[#B0FFFA]/10' 
        : 'bg-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 hover:border-[#B0FFFA]/50 hover:shadow-xl hover:shadow-[#B0FFFA]/10'
    } ${className}`}>
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
      
      <FloatingAnimatedIcons isDark={isDark} />


      {/* Simplified Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    
        {/* Smoke particles - only on large screens */}
        {smokeParticles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute left-0 rounded-full blur-3xl hidden lg:block`}
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              background: `radial-gradient(circle, rgba(176, 255, 250, ${particle.opacity}) 0%, transparent 70%)`,
              top: `${particle.top}%`,
              animation: `smokeFlow ${particle.duration}s ease-out infinite`,
              animationDelay: `${particle.delay}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>


      <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-20 pt-0 overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative">
          <HeroSection 
            isVisible={isVisible}
            isDark={isDark}
            setRef={setRef}
          />
        </div>


        {/* All sections with consistent spacing */}
        <div className="space-y-32 md:space-y-40 lg:space-y-48">
          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* Transform Journey Section */}
          <div ref={setRef('transformJourney')} className={`transition-all duration-1000 ${
            isVisible['transformJourney'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <TransformJourneySection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
              SectionTitle={SectionTitle}
              CardContainer={CardContainer}
            />
          </div>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* Why EVO-A Section */}
          <div ref={setRef('whyEvoa')} className={`transition-all duration-1000 ${
            isVisible['whyEvoa'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <WhyEvoaSection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
              SectionTitle={SectionTitle}
              getIcon={getIcon}
            />
          </div>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* Who is EVO-A For Section */}
          <div ref={setRef('whoIsEvoa')} className={`transition-all duration-1000 ${
            isVisible['whoIsEvoa'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <WhoIsEvoaSection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
              SectionTitle={SectionTitle}
            />
          </div>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* How It Works Section */}
          <div ref={setRef('howItWorks')} className={`transition-all duration-1000 ${
            isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <HowItWorksSection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
              SectionTitle={SectionTitle}
              getIcon={getIcon}
            />
          </div>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* Powerful Features Section */}
          <div ref={setRef('powerfulFeatures')} className={`transition-all duration-1000 ${
            isVisible['powerfulFeatures'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <PowerfulFeaturesSection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
            />
          </div>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* Trust Design Section */}
          <div ref={setRef('trustDesign')} className={`transition-all duration-1000 ${
            isVisible['trustDesign'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <TrustDesignSection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
              SectionTitle={SectionTitle}
              CardContainer={CardContainer}
            />
          </div>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* User Journey Section */}
          <div ref={setRef('userJourney')} className={`transition-all duration-1000 ${
            isVisible['userJourney'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <UserJourneySection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
              SectionTitle={SectionTitle}
              CardContainer={CardContainer}
            />
          </div>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* Final Call-to-Action */}
          <section 
            ref={setRef('finalCta')}
            className={`relative transition-all duration-1000 ease-out ${
              isVisible['finalCta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-4xl mx-auto text-center py-16 md:py-20 px-6">
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Ready to Transform Your Startup?
              </h2>
              
              <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/60'
              }`}>
                Join thousands of founders, investors, and innovators building the future with EVO-A.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
                <Link 
                  to="/register" 
                  className="group px-8 py-4 bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black font-semibold rounded-xl hover:shadow-xl hover:shadow-[#B0FFFA]/30 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Get Started Free</span>
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/login" 
                  className={`px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-200 hover:scale-105 text-center ${
                    isDark 
                      ? 'border-[#B0FFFA]/50 text-[#B0FFFA] hover:bg-[#B0FFFA]/5' 
                      : 'border-[#00B8A9] text-[#00B8A9] hover:bg-[#00B8A9]/5'
                  }`}
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </section>


          {/* Section Divider */}
          <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#B0FFFA]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00B8A9]/20 to-transparent'}`}></div>


          {/* FAQ Section */}
          <div ref={setRef('faq')} className={`transition-all duration-1000 ${
            isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <FAQSection 
              isVisible={isVisible}
              isDark={isDark}
              setRef={setRef}
              SectionTitle={SectionTitle}
              openFAQ={openFAQ}
              toggleFAQ={toggleFAQ}
            />
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
}
