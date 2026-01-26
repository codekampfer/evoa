import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/layout/footer';
import { ScrollProgress, FloatingAnimatedIcons, FeatureCard, FAQItem } from './components';
import heroImage from '../../assets/handshake.png';
import {
  faqData,
  whyEvoaFeatures,
  howItWorksSteps,
  powerfulFeatures,
  userJourneyData,
  generateSmokeParticles
} from './constants';
import {
  HiRocketLaunch,
  HiCurrencyDollar,
  HiCheckCircle,
  HiArrowRight,
  HiQuestionMarkCircle,
  HiLightBulb,
  HiAcademicCap,
  HiUsers,
  HiArrowDown,
  HiCheckBadge,
  HiVideoCamera,
  HiMagnifyingGlass,
  HiUserGroup,
  HiHome,
  HiBell,
  HiShieldCheck,
  HiClipboardDocumentCheck,
  HiChatBubbleLeftRight,
  HiBolt
} from 'react-icons/hi2';

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
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  .animate-rotate-slow {
    animation: rotate-slow 20s linear infinite;
  }
`;

// Typing words - moved outside component to prevent recreation
const TYPING_WORDS = ["Next Unicorn", "Right Investors", "Top Startups", "Your Future", "Success Stories", "Dream Team"];

export default function Landing() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = useRef({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [smokeParticles] = useState(() => generateSmokeParticles());
  
  // Auto-typing state
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingText, setTypingText] = useState('');
  const typingTimeoutRef = useRef(null);
  const typingTextRef = useRef('');
  const isDeletingRef = useRef(false);
  const textIndexRef = useRef(0);
  const isFirstRender = useRef(true);

  // Keep refs in sync
  useEffect(() => {
    typingTextRef.current = typingText;
    isDeletingRef.current = isDeleting;
    textIndexRef.current = textIndex;
  }, [typingText, isDeleting, textIndex]);

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

  // Reset when word index changes
  useEffect(() => {
    setTypingText('');
    setIsDeleting(false);
  }, [textIndex]);

  // Auto-typing effect - properly fixed with refs
  useEffect(() => {
    // Clear any existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    const currentWord = TYPING_WORDS[textIndexRef.current];
    if (!currentWord) return;

    const typeSpeed = isDeletingRef.current ? 80 : 180;
    
    const type = () => {
      const currentText = typingTextRef.current;
      const currentWord = TYPING_WORDS[textIndexRef.current];
      const deleting = isDeletingRef.current;
      
      if (!deleting) {
        // Typing mode
        const newText = currentWord.substring(0, currentText.length + 1);
        
        if (newText.length === currentWord.length) {
          // Word complete, wait then start deleting
          setTypingText(newText);
          setTimeout(() => {
            setIsDeleting(true);
          }, 2500);
          return;
        }
        
        // Continue typing
        setTypingText(newText);
        typingTimeoutRef.current = setTimeout(type, typeSpeed);
      } else {
        // Deleting mode
        const newText = currentWord.substring(0, currentText.length - 1);
        
        if (newText.length === 0) {
          // Word deleted, move to next word
          setTypingText('');
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPING_WORDS.length);
          return;
        }
        
        // Continue deleting
        setTypingText(newText);
        typingTimeoutRef.current = setTimeout(type, typeSpeed);
      }
    };

    // Initial delay on first render
    const initialDelay = isFirstRender.current ? 500 : 0;
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    
    typingTimeoutRef.current = setTimeout(type, typeSpeed + initialDelay);

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [isDeleting, textIndex]);

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
    <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${
      isDark 
        ? 'from-white via-[#B0FFFA] to-white bg-clip-text text-transparent' 
        : 'from-black via-[#00B8A9] to-black bg-clip-text text-transparent'
    }`}>
      {children}
    </h2>
  );

  const CardContainer = ({ children, className = '' }) => (
    <div className={`group relative p-6 sm:p-8 md:p-10 rounded-2xl transition-all duration-500 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-[#B0FFFA]/20 hover:border-[#B0FFFA]/40 hover:shadow-[0_12px_40px_rgba(176,255,250,0.15),0_0_0_1px_rgba(176,255,250,0.1)] hover:scale-[1.02] hover:-translate-y-1' 
        : 'bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 hover:border-[#B0FFFA]/50 hover:shadow-[0_12px_40px_rgba(0,184,169,0.12),0_0_0_1px_rgba(176,255,250,0.2)] hover:scale-[1.02] hover:-translate-y-1'
    } ${className}`}>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B0FFFA]/5 via-transparent to-[#80E5FF]/5 rounded-2xl"></div>
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
            className={`absolute left-0 rounded-full ${particle.blur}`}
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
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl transition-all duration-700 opacity-40"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
            background: 'radial-gradient(circle, #B0FFFA 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl transition-all duration-700 opacity-40"
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
            background: 'radial-gradient(circle, #B0FFFA 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl transition-all duration-700 opacity-20"
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.1}px, ${(mousePosition.y - 50) * -0.1}px)`,
            background: 'radial-gradient(circle, #80E5FF 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-1000 opacity-10"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px) translate(-50%, -50%)`,
            background: 'radial-gradient(circle, #B0FFFA 0%, transparent 60%)',
          }}
        />
      </div>

      <main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 pt-0">
        {/* Hero Section */}
{/* Hero Section - BIGGER IMAGE WITH ADJUSTED BUBBLE GAPS */}
        <section 
          ref={setRef('hero')}
          className={`relative flex items-center min-h-[85vh] transition-all duration-1000 ease-out 
            py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${
            isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto z-10">
            
            {/* Two Column Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* ========== LEFT COLUMN - Content ========== */}
              <div className={`space-y-6 sm:space-y-7 transition-all duration-1000 delay-200 ${
                isVisible['hero'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                
                {/* Main Headline with Typing Animation */}
                <div>
                  <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <span className="block mb-2">Connect with</span>
                    <span className={`bg-gradient-to-r bg-clip-text text-transparent block ${
                      isDark 
                        ? 'from-[#B0FFFA] via-white to-[#80E5FF]' 
                        : 'from-[#00B8A9] via-teal-600 to-[#00B8A9]'
                    }`}>
                      {typingText || '\u00A0'}
                      <span className={`inline-block w-1 h-[0.9em] align-middle ml-1 animate-pulse ${isDark ? 'bg-[#B0FFFA]' : 'bg-[#00B8A9]'}`}></span>
                    </span>
                  </h1>
                </div>

                {/* Subheading/Description */}
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  India's most trusted platform where 
                  <span className={isDark ? 'text-white font-medium' : 'text-black font-medium'}> startups meet investors</span>, 
                  incubators showcase talent, and 
                  <span className={isDark ? 'text-white font-medium' : 'text-black font-medium'}> dreams turn into reality</span>.
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg">
                  
                  {/* Feature 1 */}
                  <div className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-800/30 hover:bg-gray-800/50' : 'bg-gray-50/50 hover:bg-gray-100/80'
                  }`}>
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-[#00B8A9]/20' : 'bg-[#00B8A9]/10'
                    }`}>
                      <HiBolt className="w-4 h-4 sm:w-5 sm:h-5 text-[#00B8A9]" />
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Instant Matching
                      </h4>
                      <p className={`text-[10px] sm:text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        AI-powered connections
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-800/30 hover:bg-gray-800/50' : 'bg-gray-50/50 hover:bg-gray-100/80'
                  }`}>
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-purple-500/20' : 'bg-purple-500/10'
                    }`}>
                      <HiShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        100% Secure
                      </h4>
                      <p className={`text-[10px] sm:text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Bank-level encryption
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-800/30 hover:bg-gray-800/50' : 'bg-gray-50/50 hover:bg-gray-100/80'
                  }`}>
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-cyan-500/20' : 'bg-cyan-500/10'
                    }`}>
                      <HiCurrencyDollar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        ₹125Cr+ Funded
                      </h4>
                      <p className={`text-[10px] sm:text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        2,800+ startups
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-800/30 hover:bg-gray-800/50' : 'bg-gray-50/50 hover:bg-gray-100/80'
                  }`}>
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-pink-500/20' : 'bg-pink-500/10'
                    }`}>
                      <HiUsers className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        10,000+ Users
                      </h4>
                      <p className={`text-[10px] sm:text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Active community
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-2">
                  <Link 
                    to="/register" 
                    className={`group px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 text-center shadow-md hover:shadow-lg ${
                      isDark 
                        ? 'bg-[#00B8A9] text-white hover:bg-[#00A896] hover:scale-[1.02]' 
                        : 'bg-[#00B8A9] text-white hover:bg-[#00A896] hover:scale-[1.02]'
                    }`}
                  >
                    Get Started Free
                    <HiArrowRight className="inline-block ml-1.5 w-4 h-4 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    to="/login" 
                    className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base border-2 transition-all duration-300 text-center ${
                      isDark 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    Watch Demo
                  </Link>
                </div>

              </div>

              {/* ========== RIGHT COLUMN - ADJUSTED GAPS ========== */}
              <div className={`relative h-[500px] sm:h-[550px] lg:h-[600px] flex items-center justify-center transition-all duration-1000 delay-400 ${
                isVisible['hero'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                
                {/* Center Hero Image - BIGGER */}
                <div className={`relative z-40 text-center group cursor-pointer`}>
                  <img 
                    src={heroImage} 
                    alt="EVO-A Platform" 
                    className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl mx-auto"
                  />
                </div>

                {/* Floating Bubbles - ADJUSTED POSITIONS FOR BIGGER IMAGE */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  
                  {/* Bubble 1 - Top Right Corner (MOVED CLOSER TO EDGE) */}
                  <div 
                    className={`hidden md:flex absolute w-[120px] h-[120px] sm:w-[135px] sm:h-[135px] lg:w-[145px] lg:h-[145px] rounded-full ${
                      isDark ? 'bg-gradient-to-br from-[#00B8A9]/15 to-[#B0FFFA]/8' : 'bg-white/95'
                    } backdrop-blur-md border-2 ${
                      isDark ? 'border-[#00B8A9]/30' : 'border-[#00B8A9]/20'
                    } shadow-2xl animate-float1 flex-col items-center justify-center p-3 sm:p-4 group cursor-pointer hover:scale-110 transition-all duration-300 pointer-events-auto`}
                    style={{
                      top: '5%',
                      right: '5%',
                      boxShadow: isDark 
                        ? '0 8px 32px rgba(0, 184, 169, 0.25)' 
                        : '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${
                      isDark ? 'bg-[#00B8A9]/25' : 'bg-[#00B8A9]/15'
                    } flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300`}>
                      <HiRocketLaunch className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B8A9]" />
                    </div>
                    <h3 className={`text-xs sm:text-sm font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } text-center leading-tight`}>For Startups</h3>
                    <p className={`text-[9px] sm:text-[10px] text-center mt-0.5 leading-tight ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Pitch & get funded</p>
                  </div>

                  {/* Bubble 2 - Bottom Right Corner (MOVED CLOSER TO EDGE) */}
                  <div 
                    className={`hidden md:flex absolute w-[120px] h-[120px] sm:w-[135px] sm:h-[135px] lg:w-[145px] lg:h-[145px] rounded-full ${
                      isDark ? 'bg-gradient-to-br from-purple-500/15 to-blue-500/8' : 'bg-white/95'
                    } backdrop-blur-md border-2 ${
                      isDark ? 'border-purple-500/30' : 'border-purple-500/20'
                    } shadow-2xl animate-float2 flex-col items-center justify-center p-3 sm:p-4 group cursor-pointer hover:scale-110 transition-all duration-300 pointer-events-auto`}
                    style={{
                      bottom: '5%',
                      right: '5%',
                      boxShadow: isDark 
                        ? '0 8px 32px rgba(147, 51, 234, 0.25)' 
                        : '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${
                      isDark ? 'bg-purple-500/25' : 'bg-purple-500/15'
                    } flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300`}>
                      <HiCurrencyDollar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                    </div>
                    <h3 className={`text-xs sm:text-sm font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } text-center leading-tight`}>For Investors</h3>
                    <p className={`text-[9px] sm:text-[10px] text-center mt-0.5 leading-tight ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Discover unicorns</p>
                  </div>

                  {/* Bubble 3 - Bottom Left Corner (MOVED CLOSER TO EDGE) */}
                  <div 
                    className={`hidden md:flex absolute w-[120px] h-[120px] sm:w-[135px] sm:h-[135px] lg:w-[145px] lg:h-[145px] rounded-full ${
                      isDark ? 'bg-gradient-to-br from-cyan-500/15 to-emerald-500/8' : 'bg-white/95'
                    } backdrop-blur-md border-2 ${
                      isDark ? 'border-cyan-500/30' : 'border-cyan-500/20'
                    } shadow-2xl animate-float3 flex-col items-center justify-center p-3 sm:p-4 group cursor-pointer hover:scale-110 transition-all duration-300 pointer-events-auto`}
                    style={{
                      bottom: '5%',
                      left: '5%',
                      boxShadow: isDark 
                        ? '0 8px 32px rgba(6, 182, 212, 0.25)' 
                        : '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${
                      isDark ? 'bg-cyan-500/25' : 'bg-cyan-500/15'
                    } flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300`}>
                      <HiAcademicCap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                    </div>
                    <h3 className={`text-xs sm:text-sm font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } text-center leading-tight`}>For Incubators</h3>
                    <p className={`text-[9px] sm:text-[10px] text-center mt-0.5 leading-tight ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Nurture startups</p>
                  </div>

                  {/* Bubble 4 - Top Left Corner (MOVED CLOSER TO EDGE) */}
                  <div 
                    className={`hidden md:flex absolute w-[120px] h-[120px] sm:w-[135px] sm:h-[135px] lg:w-[145px] lg:h-[145px] rounded-full ${
                      isDark ? 'bg-gradient-to-br from-pink-500/15 to-rose-500/8' : 'bg-white/95'
                    } backdrop-blur-md border-2 ${
                      isDark ? 'border-pink-500/30' : 'border-pink-500/20'
                    } shadow-2xl animate-float4 flex-col items-center justify-center p-3 sm:p-4 group cursor-pointer hover:scale-110 transition-all duration-300 pointer-events-auto`}
                    style={{
                      top: '5%',
                      left: '5%',
                      boxShadow: isDark 
                        ? '0 8px 32px rgba(236, 72, 153, 0.25)' 
                        : '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${
                      isDark ? 'bg-pink-500/25' : 'bg-pink-500/15'
                    } flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300`}>
                      <HiUsers className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                    </div>
                    <h3 className={`text-xs sm:text-sm font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } text-center leading-tight`}>For Viewers</h3>
                    <p className={`text-[9px] sm:text-[10px] text-center mt-0.5 leading-tight ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Explore daily</p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>



        {/* Problem & Solution Section */}
        <section 
          ref={setRef('problemSolution')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['problemSolution'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <SectionTitle>Transform Your Startup Journey</SectionTitle>
            <p className={`text-base sm:text-lg mt-4 max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              From pitch to funding, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <CardContainer className="hover:scale-[1.02]">
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
              }`}>
                <HiQuestionMarkCircle className="text-2xl sm:text-3xl" />
                <span>The Problem</span>
              </h3>
              <ul className={`space-y-3 text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                <li className="flex items-start gap-2">
                  <HiArrowRight className={`mt-1 shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Startups waste months searching for the right investors</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiArrowRight className={`mt-1 shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Investors miss out on quality deals buried in noise</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiArrowRight className={`mt-1 shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Incubators struggle to showcase their portfolio effectively</span>
                </li>
              </ul>
            </CardContainer>

            <CardContainer className="hover:scale-[1.02]">
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'
              }`}>
                <HiLightBulb className="text-2xl sm:text-3xl" />
                <span>The Solution</span>
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                EVO-A brings everything together in one intelligent platform. Startups pitch with confidence, investors discover verified opportunities instantly, and incubators showcase their success stories. All verified, all trusted, all in one place.
              </p>
            </CardContainer>
          </div>
        </section>
  
        {/* Why EVO-A? Section */}
        <section 
          ref={setRef('whyEvoa')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['whyEvoa'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <SectionTitle>Why EVO-A?</SectionTitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {whyEvoaFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={getIcon(feature.iconName, 'text-2xl sm:text-3xl')}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
                isVisible={isVisible['whyEvoa']}
                isDark={isDark}
              />
            ))}
          </div>
        </section>
{/* User Roles Section */}
<section 
  ref={setRef('userRoles')}
  className={`relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 py-12 transition-all duration-1000 ease-out ${
    isVisible['userRoles'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
    {/* Badge */}
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

  {/* Circular Layout Container */}
  <div className="relative max-w-7xl mx-auto px-4">
    
    {/* Desktop & Tablet: Circular Layout */}
    <div className="hidden md:block">
      <div className="relative mx-auto flex items-center justify-center" 
        style={{ 
          width: 'min(650px, 90vw)', 
          height: 'min(650px, 85vh)', 
          maxWidth: '100%',
          aspectRatio: '1/1'
        }}>
        
        {/* Center Circle - Platform Logo/Name */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
          w-36 h-36 lg:w-44 lg:h-44 rounded-full flex flex-col items-center justify-center backdrop-blur-2xl border-4
          shadow-[0_0_60px_rgba(176,255,250,0.3)] ${
          isDark 
            ? 'bg-gradient-to-br from-black/80 via-black/60 to-black/80 border-[#B0FFFA]/40' 
            : 'bg-gradient-to-br from-white/90 via-white/80 to-white/90 border-[#B0FFFA]/50'
        }`}>
          {/* Animated Glow */}
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

        {/* SVG Animated Dashed Circle */}
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
            
            {/* Dashed Circle */}
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
            
            {/* Animated Glowing Dots */}
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

        {/* Card 1 - Startups (Top) */}
       {/* Card 1 - Startups (Top) - FIXED SPACING */}
<Link 
  to="/register/startup"
  className={`absolute transition-all duration-700 group/card ${
    isVisible['userRoles'] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
  }`}
  style={{ 
    top: '0',
    left: '50%',
    transform: 'translate(-50%, 0)',
    transitionDelay: '100ms'
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
    
    {/* Glow Effect */}
    <div className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover/card:opacity-60 transition-opacity duration-500 ${
      isDark ? 'bg-[#B0FFFA]/40' : 'bg-[#00B8A9]/30'
    }`}></div>

    {/* Content with Proper Spacing */}
    <div className="relative z-10 text-center flex flex-col items-center justify-between h-full w-full">
      
      {/* Top Spacer */}
      <div className="flex-shrink-0"></div>

      {/* Icon */}
      <div className={`w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full 
        transition-all duration-500 group-hover/card:scale-110 flex-shrink-0 ${
        isDark 
          ? 'bg-[#B0FFFA]/20 group-hover/card:bg-[#B0FFFA]/30' 
          : 'bg-[#B0FFFA]/30 group-hover/card:bg-[#B0FFFA]/40'
      }`}>
        <HiRocketLaunch className={`text-3xl lg:text-4xl transition-all ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
      </div>
      
      {/* Text Content */}
      <div className="flex-grow flex flex-col items-center justify-center gap-1 py-2">
        <h3 className={`text-base lg:text-lg font-bold transition-all duration-300 ${
          isDark 
            ? 'text-white group-hover/card:text-[#B0FFFA]' 
            : 'text-black group-hover/card:text-[#00B8A9]'
        }`}>
          For Startups
        </h3>
        
        <p className={`text-xs lg:text-sm leading-relaxed transition-all duration-300 ${
          isDark 
            ? 'text-white/70 group-hover/card:text-white/90' 
            : 'text-black/70 group-hover/card:text-black/90'
        }`}>
          Pitch your vision &<br/>get funded
        </p>
      </div>

      {/* Button - Appears on Hover */}
      <div className={`transition-all duration-500 transform flex-shrink-0
        opacity-0 scale-75 h-0 overflow-hidden
        group-hover/card:opacity-100 group-hover/card:scale-100 group-hover/card:h-auto`}>
        <div className={`px-5 py-2 rounded-full text-xs lg:text-sm font-bold whitespace-nowrap ${
          isDark 
            ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black' 
            : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white'
        }`}>
          Create Account
        </div>
      </div>
      
    </div>
  </div>
</Link>

{/* Card 2 - Investors (Right) */}
<Link 
  to="/register/investor"
  className={`absolute transition-all duration-700 group/card ${
    isVisible['userRoles'] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
  }`}
  style={{ 
    top: '50%',
    right: '0',
    transform: 'translate(0, -50%)',
    transitionDelay: '250ms'
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
        <HiCurrencyDollar className={`text-3xl lg:text-4xl transition-all ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center gap-1 py-2">
        <h3 className={`text-base lg:text-lg font-bold transition-all duration-300 ${
          isDark 
            ? 'text-white group-hover/card:text-[#B0FFFA]' 
            : 'text-black group-hover/card:text-[#00B8A9]'
        }`}>
          For Investors
        </h3>
        
        <p className={`text-xs lg:text-sm leading-relaxed transition-all duration-300 ${
          isDark 
            ? 'text-white/70 group-hover/card:text-white/90' 
            : 'text-black/70 group-hover/card:text-black/90'
        }`}>
          Discover & fund<br/>unicorns
        </p>
      </div>

      <div className={`transition-all duration-500 transform flex-shrink-0
        opacity-0 scale-75 h-0 overflow-hidden
        group-hover/card:opacity-100 group-hover/card:scale-100 group-hover/card:h-auto`}>
        <div className={`px-5 py-2 rounded-full text-xs lg:text-sm font-bold whitespace-nowrap ${
          isDark 
            ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black' 
            : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white'
        }`}>
          Join EVO-A
        </div>
      </div>
      
    </div>
  </div>
</Link>

{/* Card 3 - Incubators (Bottom) */}
<Link 
  to="/register/incubator"
  className={`absolute transition-all duration-700 group/card ${
    isVisible['userRoles'] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
  }`}
  style={{ 
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 0)',
    transitionDelay: '400ms'
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
        <HiAcademicCap className={`text-3xl lg:text-4xl transition-all ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center gap-1 py-2">
        <h3 className={`text-base lg:text-lg font-bold transition-all duration-300 ${
          isDark 
            ? 'text-white group-hover/card:text-[#B0FFFA]' 
            : 'text-black group-hover/card:text-[#00B8A9]'
        }`}>
          For Incubators
        </h3>
        
        <p className={`text-xs lg:text-sm leading-relaxed transition-all duration-300 ${
          isDark 
            ? 'text-white/70 group-hover/card:text-white/90' 
            : 'text-black/70 group-hover/card:text-black/90'
        }`}>
          Nurture & scale<br/>startups
        </p>
      </div>

      <div className={`transition-all duration-500 transform flex-shrink-0
        opacity-0 scale-75 h-0 overflow-hidden
        group-hover/card:opacity-100 group-hover/card:scale-100 group-hover/card:h-auto`}>
        <div className={`px-5 py-2 rounded-full text-xs lg:text-sm font-bold whitespace-nowrap ${
          isDark 
            ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black' 
            : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white'
        }`}>
          Get Started
        </div>
      </div>
      
    </div>
  </div>
</Link>

{/* Card 4 - Viewers (Left) */}
<Link 
  to="/register/viewer"
  className={`absolute transition-all duration-700 group/card ${
    isVisible['userRoles'] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
  }`}
  style={{ 
    top: '50%',
    left: '0',
    transform: 'translate(0, -50%)',
    transitionDelay: '550ms'
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
        <HiUsers className={`text-3xl lg:text-4xl transition-all ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center gap-1 py-2">
        <h3 className={`text-base lg:text-lg font-bold transition-all duration-300 ${
          isDark 
            ? 'text-white group-hover/card:text-[#B0FFFA]' 
            : 'text-black group-hover/card:text-[#00B8A9]'
        }`}>
          For Viewers
        </h3>
        
        <p className={`text-xs lg:text-sm leading-relaxed transition-all duration-300 ${
          isDark 
            ? 'text-white/70 group-hover/card:text-white/90' 
            : 'text-black/70 group-hover/card:text-black/90'
        }`}>
          Explore & learn<br/>daily
        </p>
      </div>

      <div className={`transition-all duration-500 transform flex-shrink-0
        opacity-0 scale-75 h-0 overflow-hidden
        group-hover/card:opacity-100 group-hover/card:scale-100 group-hover/card:h-auto`}>
        <div className={`px-5 py-2 rounded-full text-xs lg:text-sm font-bold whitespace-nowrap ${
          isDark 
            ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black' 
            : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white'
        }`}>
          Start Exploring
        </div>
      </div>
      
    </div>
  </div>
</Link>


      </div>
    </div>

    {/* Mobile: Grid Layout */}
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

{/* Animations */}
<style>{`
  @keyframes dash-rotate {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 200;
    }
  }

  .animate-dash-rotate {
    animation: dash-rotate 20s linear infinite;
  }
`}</style>


        {/* How It Works Section */}
        <section 
          ref={setRef('howItWorks')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <SectionTitle>How It Works?</SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className={`group relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl transition-all duration-500 overflow-hidden ${
                  isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  isDark 
                    ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-[#B0FFFA]/20 hover:border-[#B0FFFA]/40 hover:shadow-[0_8px_32px_rgba(176,255,250,0.15),0_0_0_1px_rgba(176,255,250,0.1)] hover:scale-[1.02] hover:-translate-y-1' 
                    : 'bg-gradient-to-br from-white/90 via-white/70 to-white/90 backdrop-blur-xl border border-[#B0FFFA]/30 hover:border-[#B0FFFA]/50 hover:shadow-[0_8px_32px_rgba(0,184,169,0.12),0_0_0_1px_rgba(176,255,250,0.2)] hover:scale-[1.02] hover:-translate-y-1'
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

        {/* Powerful Features Section */}
        <section 
          ref={setRef('powerfulFeatures')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['powerfulFeatures'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <SectionTitle>Powerful Features For Every Role</SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {powerfulFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={getIcon(feature.iconName, 'text-2xl')}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
                isVisible={isVisible['powerfulFeatures']}
                isDark={isDark}
              />
            ))}
          </div>
        </section>

        {/* Trust & Verification Section */}
        <section 
          ref={setRef('trustVerification')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['trustVerification'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <SectionTitle>Trust-First Design</SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <CardContainer>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-lg ${
                isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
              }`}>
                <HiRocketLaunch className={`text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Startup Verification
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                Startup verification flow through Private Limited, LLP, MSME, GST, Udyam, or founder ID documents.
              </p>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Auto-Verify: CIN upload</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Manual-Verify: GST or Udyam</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>For Unregistered: Founder ID proof</span>
                </li>
              </ul>
            </CardContainer>

            <CardContainer>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-lg ${
                isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
              }`}>
                <HiCurrencyDollar className={`text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Investor Verification
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                For SEBI registered investors: registration number + certificate. For non-SEBI angels: LinkedIn, PAN, ID proof, and manual review.
              </p>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>SEBI: Instant auto-verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Non-SEBI: LinkedIn + PAN + ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Community Verified badge</span>
                </li>
              </ul>
            </CardContainer>

            <CardContainer>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-lg ${
                isDark ? 'bg-[#B0FFFA]/20' : 'bg-[#B0FFFA]/20'
              }`}>
                <HiAcademicCap className={`text-3xl ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Incubator Verification
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                For Government / University / Corporate / Private incubators: upload registration, affiliation, MSME/Udyam, or incorporation documents.
              </p>
              <ul className={`space-y-2 text-sm ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Government Registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>University Affiliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className={`shrink-0 ${isDark ? 'text-[#B0FFFA]' : 'text-[#00B8A9]'}`} />
                  <span>Corporate Legal Certificate</span>
                </li>
              </ul>
            </CardContainer>
          </div>
        </section>
      
        {/* User Journey Summary */}
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

        {/* FAQ Section */}
        <section 
          ref={setRef('faq')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
                isDark={isDark}
              />
            ))}
          </div>
        </section>

        {/* Final Call-to-Action */}
        <section 
          ref={setRef('finalCta')}
          className={`relative mt-8 sm:mt-12 md:mt-16 transition-all duration-1000 ease-out ${
            isVisible['finalCta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`relative border-2 rounded-xl p-4 sm:p-6 md:p-8 text-center ${
            isDark 
              ? 'bg-black/40 border-[#B0FFFA]/30 shadow-[0_0_30px_rgba(176,255,250,0.2)]' 
              : 'bg-white border-[#B0FFFA]/40 shadow-[0_0_30px_rgba(176,255,250,0.15)]'
          }`}>
            <div className="max-w-2xl mx-auto px-2 sm:px-4">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 leading-tight bg-gradient-to-r ${
                isDark 
                  ? 'from-white via-[#B0FFFA] to-white bg-clip-text text-transparent' 
                  : 'from-black via-[#00B8A9] to-black bg-clip-text text-transparent'
              }`}>
                Ready to Transform Your Startup Journey?
              </h2>
              <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 ${
                isDark ? 'text-white/90' : 'text-black/90'
              }`}>
                Join EVO-A Today – Where Dreams Meet Opportunities
              </h3>
              <p className={`text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed ${
                isDark ? 'text-white/80' : 'text-black/70'
              }`}>
                Whether you're a founder ready to pitch your vision, an investor seeking the next big opportunity, or an incubator building the future – EVO-A connects you with the right people at the right time. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4">
                <Link 
                  to="/register" 
                  className="group relative w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden
                    bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black shadow-lg hover:shadow-[0_0_30px_rgba(176,255,250,0.5)]"
                >
                  <span className="relative z-10">Create Your Account Now</span>
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#80E5FF] to-[#B0FFFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  to="/login" 
                  className={`w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 border-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isDark 
                      ? 'border-[#B0FFFA]/50 text-[#B0FFFA] hover:bg-[#B0FFFA]/10 hover:border-[#B0FFFA]' 
                      : 'border-[#B0FFFA] text-[#00B8A9] hover:bg-[#B0FFFA]/10 hover:border-[#00B8A9]'
                  }`}
                >
                  Sign in with Email
                </Link>
              </div>
              <p className={`text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <span>Already have an account? Sign in with email or continue with Google.</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
