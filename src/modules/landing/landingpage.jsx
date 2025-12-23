import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/layout/footer';
import heroDarkTheme from '../../assets/llustration/hero dark them.png';
import heroWhiteTheme from '../../assets/llustration/hero white them.png';

import { 
  HiRocketLaunch,
  HiBriefcase,
  HiCurrencyDollar,
  HiStar,
  HiLockClosed,
  HiCheckCircle,
  HiGlobeAlt,
  HiSparkles,
  HiArrowDown,
  HiUserGroup,
  HiChartBar,
  HiLightBulb,
  HiShieldCheck,
  HiTrophy,
  HiChatBubbleLeftRight,
  HiPlayCircle,
  HiDocumentText,
  HiArrowRight,
  HiBolt,
  HiCheckBadge,
  HiHandThumbUp,
  HiMagnifyingGlass,
  HiBell,
  HiBookmark,
  HiHeart,
  HiShare,
  HiEye,
  HiQuestionMarkCircle,
  HiAcademicCap,
  HiBuildingOffice,
  HiUsers,
  HiArrowPath,
  HiClipboardDocumentCheck,
  HiVideoCamera,
  HiDocumentMagnifyingGlass,
  HiBanknotes,
  HiHome,
  HiFire,
  HiTag,
  HiEnvelope,
  HiPhone
} from 'react-icons/hi2';

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
    <div className={`fixed top-0 left-0 right-0 h-1 z-50 ${
      isDark ? 'bg-white/20' : 'bg-black/20'
    }`}>
      <div 
        className="h-full transition-all duration-300 bg-white"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, isVisible = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isVisible]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, delay = 0, isVisible, isDark }) {
  return (
    <div
      className={`group relative backdrop-blur-sm border p-6 transition-all duration-700 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      } ${
        isDark 
          ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60 hover:scale-105' 
          : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50 hover:scale-105'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDark ? 'bg-gradient-to-br from-white/5 to-transparent' : 'bg-gradient-to-br from-black/5 to-transparent'
      }`}></div>
      <div className="relative z-10">
        <div className={`w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
          isDark ? 'bg-white/20 group-hover:bg-white/30' : 'bg-black/10 group-hover:bg-black/20'
        }`}>
          <div className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <h3 className={`text-base sm:text-lg font-bold mb-3 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
          isDark ? 'text-white/60' : 'text-black/60'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
}

// FAQ Accordion Component
function FAQItem({ question, answer, isOpen, onToggle, isDark }) {
  return (
    <div className={`border transition-all duration-300 ${
      isDark ? 'border-white/20 bg-black/40' : 'border-black/20 bg-white'
    }`}>
      <button
        onClick={onToggle}
        className={`w-full px-4 py-4 text-left flex items-center justify-between transition-all duration-300 ${
          isDark ? 'hover:bg-black/60' : 'hover:bg-gray-50'
        }`}
      >
        <span className={`font-semibold text-sm sm:text-base transition-all duration-300 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          {question}
        </span>
        <HiArrowDown className={`w-5 h-5 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        } ${isDark ? 'text-white' : 'text-black'}`} />
      </button>
      {isOpen && (
        <div className={`px-4 pb-4 animate-slide-up ${
          isDark ? 'text-white/70' : 'text-black/70'
        }`}>
          <p className="text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Landing() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = useRef({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

  useEffect(() => {
    // Set initial hero visibility
    setIsVisible({ hero: true, heroImage: true });

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

  // FAQ Data
  const faqData = [
    {
      question: 'Is EVO-A free?',
      answer: 'Currently, EVO-A provides free access for startups, investors, and viewers. Advanced features and premium services may be added in the future.'
    },
    {
      question: 'Is verification compulsory?',
      answer: 'Verification is strongly recommended for high trust and visibility. In some critical flows (investor offers, incubator matching), verification may be mandatory.'
    },
    {
      question: 'Can I have multiple roles?',
      answer: 'Currently, an account starts with one primary role. Future updates may add multi-role support if you need multiple perspectives.'
    },
    {
      question: 'How long should the pitch video be?',
      answer: 'Minimum 90 seconds (1.5 minutes) and maximum 3 minutes. This maintains investor attention span and keeps the message clear.'
    },
    {
      question: 'Is GST/CIN mandatory for startup verification?',
      answer: 'No. If you are a registered entity, you can use GST or CIN. Otherwise, founder ID proof and optional business proof are sufficient.'
    },
    {
      question: 'Is SEBI registration required for investors?',
      answer: 'No. SEBI registered investors get an instant green badge. Non-SEBI angels can pass manual review with LinkedIn + PAN + ID proof.'
    },
    {
      question: 'Can incubators be unregistered?',
      answer: 'Every incubator should have verification documents (government, university, corporate affiliation, MSME, etc.). These establish credibility.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Scroll Progress Indicator */}
      <ScrollProgress isDark={isDark} />

      {/* Decorative background elements with mouse tracking */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${
            isDark ? 'bg-white/5' : 'bg-black/5'
          }`}
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
          }}
        ></div>
        <div 
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${
            isDark ? 'bg-white/3' : 'bg-black/3'
          }`}
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.1}px, ${(mousePosition.y - 50) * -0.1}px)`,
          }}
        ></div>
      </div>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 pt-0">

        {/* Hero Section */}
        <section 
          ref={setRef('hero')}
          className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center transition-all duration-1000 ease-out 
            py-6 sm:py-8 md:py-10 lg:py-12 mb-0 ${
            isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="order-2 md:order-1 space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-0">
            {/* Main Heading */}
            <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-1000 ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isDark ? 'text-white' : 'text-black'}`} style={{ transitionDelay: '200ms' }}>
              Join the Future of Startup–Investor Ecosystem
            </h1>

            {/* Description */}
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl transition-all duration-1000 ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isDark ? 'text-white/80' : 'text-gray-700'}`} style={{ transitionDelay: '400ms' }}>
              EVO-A is a smart platform that connects startups, investors, incubators, and viewers in one place – pitching, funding, and discovery all in one app.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-1000 ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              <Link 
                to="/register" 
                className={`group w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base font-semibold text-center
                  transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                    isDark 
                      ? 'bg-white text-black' 
                      : 'bg-black text-white'
                  }`}
              >
                <span>Create Your Account</span>
                <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>

              <Link 
                to="/login" 
                className={`w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border text-sm sm:text-base font-semibold text-center
                  transition-all duration-300 hover:opacity-80 hover:scale-105 active:scale-95 ${
                    isDark 
                      ? 'border-white text-white bg-transparent' 
                      : 'border-black text-black bg-white'
                  }`}
              >
                Sign in with Email
              </Link>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div 
            ref={setRef('heroImage')}
            className={`order-1 md:order-2 hidden md:flex justify-center md:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible['heroImage'] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <div className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] w-full overflow-hidden relative flex items-center justify-center">
                <img
                  src={isDark ? heroDarkTheme : heroWhiteTheme}
                  alt="EVO-A platform interface"
                  className="h-full w-full object-contain transition-all duration-700 ease-in-out"
                />
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
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
              Startup Funding and Discovery Made Easy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Problem */}
            <div className={`border p-6 sm:p-8 md:p-10 ${
              isDark ? 'bg-black/40 border-white/20' : 'bg-white border-black/20'
            }`}>
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                <HiQuestionMarkCircle className="text-2xl sm:text-3xl" />
                <span>The Problem</span>
                </h3>
              <ul className={`space-y-3 text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-white/70' : 'text-black/70'
                }`}>
                <li className="flex items-start gap-2">
                  <HiArrowRight className="mt-1 shrink-0" />
                  <span>Startups struggle to reach the right investors</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiArrowRight className="mt-1 shrink-0" />
                  <span>Investors don't get quality, verified deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiArrowRight className="mt-1 shrink-0" />
                  <span>Incubators need a scalable way to showcase their startups</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className={`border p-6 sm:p-8 md:p-10 ${
              isDark ? 'bg-black/40 border-white/20' : 'bg-white border-black/20'
            }`}>
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                <HiLightBulb className="text-2xl sm:text-3xl" />
                <span>The Solution</span>
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                EVO-A is a verified, structured, and interactive platform where startups share their pitch decks and videos, investors view deal terms, and incubators highlight their portfolio companies.
                </p>
              </div>
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
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Why EVO-A?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            <FeatureCard
              icon={<HiCheckBadge className="text-2xl sm:text-3xl" />}
              title="Verified Profiles & Documents"
              description="Details like CIN, GST, Udyam, and SEBI registration help build trust between startups and investors."
              delay={0}
              isVisible={isVisible['whyEvoa']}
              isDark={isDark}
            />
            <FeatureCard
              icon={<HiVideoCamera className="text-2xl sm:text-3xl" />}
              title="Investor-First Pitch Experience"
              description="Pitch video, deck, and deal terms (amount raising, equity, valuation) all on one screen – for quick and informed decisions."
              delay={100}
              isVisible={isVisible['whyEvoa']}
              isDark={isDark}
            />
            <FeatureCard
              icon={<HiMagnifyingGlass className="text-2xl sm:text-3xl" />}
              title="Smart Matching & Filters"
              description="Personalized recommendations for investors and incubators based on sector, ticket size, startup stage, and location."
              delay={200}
              isVisible={isVisible['whyEvoa']}
              isDark={isDark}
            />
            <FeatureCard
              icon={<HiUserGroup className="text-2xl sm:text-3xl" />}
              title="Multi-Role Ecosystem"
              description="Customized dashboard and experience for everyone – Startup, Investor, Incubator, and Viewer."
              delay={300}
              isVisible={isVisible['whyEvoa']}
              isDark={isDark}
            />
          </div>
        </section>

        {/* User Roles Section */}
        <section 
          ref={setRef('userRoles')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['userRoles'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Who is EVO-A For?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* For Startups */}
            <div className={`border p-6 sm:p-8 transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-black/40 border-white/20 hover:border-white/40' : 'bg-white border-black/20 hover:border-black/40'
            }`}>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20' : 'bg-black/10'
              }`}>
                <HiRocketLaunch className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`} />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                For Startups
              </h3>
              <p className={`text-sm sm:text-base mb-4 leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                Founder details, startup basics, industry & stage, verification docs, pitch video & deck, team info – all in one clean form.
              </p>
              <ul className={`space-y-2 mb-6 text-sm ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Register multiple founders</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Upload pitch video (90 sec to 3 min)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Upload pitch deck (PDF format)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Add deal terms (amount, equity, valuation)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Social links integration</span>
                </li>
              </ul>
              <Link 
                to="/register/startup"
                className={`inline-block px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                For Startups – Create Your Account
              </Link>
          </div>

            {/* For Investors */}
            <div className={`border p-6 sm:p-8 transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-black/40 border-white/20 hover:border-white/40' : 'bg-white border-black/20 hover:border-black/40'
            }`}>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20' : 'bg-black/10'
              }`}>
                <HiCurrencyDollar className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`} />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                For Investors
              </h3>
              <p className={`text-sm sm:text-base mb-4 leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                Ticket size, sector focus, deal preferences, SEBI or LinkedIn-based verification, portfolio info – so the right deals come to you.
              </p>
              <ul className={`space-y-2 mb-6 text-sm ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Investor type selection (Angel, VC, Fund, etc.)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Investment range setting (10L to 10Cr+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Sector focus multi-select</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>SEBI registration ya LinkedIn verification</span>
                </li>
              </ul>
              <Link 
                to="/register/investor"
                className={`inline-block px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                For Investors – Join EVO-A
              </Link>
            </div>

            {/* For Incubators */}
            <div className={`border p-6 sm:p-8 transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-black/40 border-white/20 hover:border-white/40' : 'bg-white border-black/20 hover:border-black/40'
            }`}>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20' : 'bg-black/10'
              }`}>
                <HiAcademicCap className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`} />
                  </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                For Incubators
                </h3>
              <p className={`text-sm sm:text-base mb-4 leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                Create a trusted incubator profile with program details, sector focus, facilities, portfolio startups, and verification documents.
              </p>
              <ul className={`space-y-2 mb-6 text-sm ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Incubator type (Government, University, Corporate, Private)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Program type (Pre-Incubation, Incubation, Acceleration)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Portfolio startups showcase</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Verification documents upload</span>
                </li>
              </ul>
              <Link 
                to="/register/incubator"
                className={`inline-block px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                For Incubators – Get Started
              </Link>
                    </div>

            {/* For Viewers */}
            <div className={`border p-6 sm:p-8 transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-black/40 border-white/20 hover:border-white/40' : 'bg-white border-black/20 hover:border-black/40'
            }`}>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20' : 'bg-black/10'
              }`}>
                <HiUsers className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`} />
                </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                For Viewers
              </h3>
              <p className={`text-sm sm:text-base mb-4 leading-relaxed ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>
                Trending pitches, startup stories, learning content, and events – all in a personalized feed.
              </p>
              <ul className={`space-y-2 mb-6 text-sm ${
                isDark ? 'text-white/60' : 'text-black/60'
              }`}>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Interest-based content feed</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Explore curated pitches</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Like, comment, share, save features</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Follow startups and investors</span>
                </li>
              </ul>
              <Link 
                to="/register/viewer"
                className={`inline-block px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                For Viewers – Start Exploring
              </Link>
              </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          ref={setRef('howItWorks')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              How It Works?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Account',
                desc: 'Sign up with email/phone, choose your role – Startup, Investor, Incubator, or Viewer.',
                icon: <HiUserGroup className="text-2xl" />
              },
              {
                step: '02',
                title: 'Complete Your Profile',
                desc: 'Startups: founder details, verification & pitch. Investors: ticket size, sector focus, verification. Incubators: program & documents.',
                icon: <HiClipboardDocumentCheck className="text-2xl" />
              },
              {
                step: '03',
                title: 'Discover & Pitch',
                desc: 'Discover pitches from Home feed, Explore page, and Battleground. Watch pitch reels, like, comment, share, and support.',
                icon: <HiMagnifyingGlass className="text-2xl" />
              },
              {
                step: '04',
                title: 'Connect & Close Deals',
                desc: 'Comments, messages, offers, battlegrounds – all lead you to real conversations and deals.',
                icon: <HiChatBubbleLeftRight className="text-2xl" />
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`relative backdrop-blur-sm border p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 ${
                  isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 ${
                  isDark ? 'text-white/10' : 'text-black/10'
                }`}>
                  {step.step}
                </div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4 ${
                  isDark ? 'bg-white/20' : 'bg-black/10'
                }`}>
                  <div className={`${isDark ? 'text-white' : 'text-black'} text-xl sm:text-2xl`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  {step.desc}
                </p>
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
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Powerful Features For Every Role
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                icon: <HiHome className="text-2xl" />,
                title: 'Role-Specific Dashboards',
                description: 'Startup, Investor, Incubator, Viewer – everyone gets a customized home page with metrics, pitch cards, and interactions.'
              },
              {
                icon: <HiVideoCamera className="text-2xl" />,
                title: 'Pitch Reel & Detail View',
                description: 'Vertical pitch videos, like/share/comment/support buttons, deal info, and pitch deck viewer (for investors & incubators).'
              },
              {
                icon: <HiMagnifyingGlass className="text-2xl" />,
                title: 'Explore & Smart Search',
                description: 'Search investors, startups, hashtags; curated lists like Top Performing Pitch, Investor Spotlight, Battleground Spotlight.'
              },
              {
                icon: <HiBell className="text-2xl" />,
                title: 'Notifications & Offers',
                description: 'Offers, battlegrounds, trending rankings, system alerts – all managed from one notification center.'
              },
              {
                icon: <HiShieldCheck className="text-2xl" />,
                title: 'Secure Account & OTP Verification',
                description: 'Email/phone OTP, password reset, role-based access – secure and compliant experience.'
              }
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
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
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Trust-First Design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Startup Verification */}
            <div className={`border p-6 sm:p-8 ${
              isDark ? 'bg-black/40 border-white/20' : 'bg-white border-black/20'
            }`}>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20' : 'bg-black/10'
              }`}>
                <HiRocketLaunch className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`} />
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
                  <HiCheckCircle className="shrink-0" />
                  <span>Auto-Verify: CIN upload</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Manual-Verify: GST or Udyam</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>For Unregistered: Founder ID proof</span>
                </li>
              </ul>
            </div>

            {/* Investor Verification */}
            <div className={`border p-6 sm:p-8 ${
              isDark ? 'bg-black/40 border-white/20' : 'bg-white border-black/20'
            }`}>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20' : 'bg-black/10'
              }`}>
                <HiCurrencyDollar className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`} />
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
                  <HiCheckCircle className="shrink-0" />
                  <span>SEBI: Instant auto-verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Non-SEBI: LinkedIn + PAN + ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Community Verified badge</span>
                </li>
              </ul>
            </div>

            {/* Incubator Verification */}
            <div className={`border p-6 sm:p-8 ${
              isDark ? 'bg-black/40 border-white/20' : 'bg-white border-black/20'
            }`}>
              <div className={`w-16 h-16 flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/20' : 'bg-black/10'
              }`}>
                <HiAcademicCap className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`} />
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
                  <HiCheckCircle className="shrink-0" />
                  <span>Government Registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>University Affiliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="shrink-0" />
                  <span>Corporate Legal Certificate</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Features Snapshot */}
        <section 
          ref={setRef('featuresSnapshot')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible['featuresSnapshot'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Complete Feature List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className={`w-full border-collapse ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              <thead>
                <tr className={`border-b ${
                  isDark ? 'border-white/20 bg-black/40' : 'border-black/20 bg-gray-50'
                }`}>
                  <th className={`px-4 py-3 text-left text-sm font-bold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Feature</th>
                  <th className={`px-4 py-3 text-left text-sm font-bold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Description</th>
                  <th className={`px-4 py-3 text-left text-sm font-bold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Who Uses It</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Profile Verification', description: 'Multi-level document verification for trust building', users: 'Startups, Investors, Incubators' },
                  { feature: 'Pitch Video Upload', description: '90 seconds to 3 minutes verified pitch video', users: 'Startups' },
                  { feature: 'Pitch Deck Viewer', description: 'PDF viewer with bookmarking and notes', users: 'Investors, Incubators' },
                  { feature: 'Deal Terms Display', description: 'Amount raising, equity %, pre-money valuation', users: 'All roles' },
                  { feature: 'Home Feed', description: 'Role-specific personalized pitch feed', users: 'All roles' },
                  { feature: 'Pitch Reel', description: 'Vertical short-form pitch videos', users: 'All roles' },
                  { feature: 'Comment System', description: 'Nested comments on pitches with timestamps', users: 'All roles' },
                  { feature: 'Direct Messaging', description: 'Private pitch/offer messaging between users', users: 'Startups, Investors, Incubators' },
                  { feature: 'Notifications Hub', description: 'Categorized notifications (offers, battleground, trends)', users: 'All roles' },
                  { feature: 'Explore Page', description: 'Search, suggested tags, curated sections', users: 'All roles' },
                  { feature: 'Battleground', description: 'Pitch competition events and contests', users: 'Investors, Startups, Incubators' },
                  { feature: 'Saved/Bookmarks', description: 'Save pitches, offers, startup profiles', users: 'All roles' },
                  { feature: 'Follow System', description: 'Follow startups, investors, and incubators', users: 'All roles' },
                  { feature: 'Social Integration', description: 'LinkedIn, Instagram, YouTube, AngelList links', users: 'All roles' },
                  { feature: 'OTP Security', description: 'Email/phone OTP verification', users: 'All roles' }
                ].map((row, index) => (
                  <tr 
                    key={index}
                    className={`border-b transition-colors ${
                      isDark 
                        ? 'border-white/10 hover:bg-black/60' 
                        : 'border-black/10 hover:bg-gray-50'
                    }`}
                  >
                    <td className={`px-4 py-3 text-sm font-semibold ${
                      isDark ? 'text-white' : 'text-black'
                    }`}>{row.feature}</td>
                    <td className={`px-4 py-3 text-sm ${
                      isDark ? 'text-white/70' : 'text-black/70'
                    }`}>{row.description}</td>
                    <td className={`px-4 py-3 text-sm ${
                      isDark ? 'text-white/70' : 'text-black/70'
                    }`}>{row.users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Your EVO-A Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
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
            ].map((journey, index) => (
              <div
                key={index}
                className={`border p-6 sm:p-8 transition-all duration-300 ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
              >
                <div className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  isDark ? 'text-white/50' : 'text-black/50'
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
              </div>
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
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Frequently Asked Questions
            </h2>
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
          <div className={`relative border p-4 sm:p-6 md:p-8 text-center ${
            isDark 
              ? 'bg-black/40 border-white/20' 
              : 'bg-white border-black/20'
          }`}>
            <div className="max-w-2xl mx-auto px-2 sm:px-4">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 leading-tight ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Ready to Pitch, Invest or Incubate with Confidence?
              </h2>
              <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 ${
                isDark ? 'text-white/90' : 'text-black/90'
              }`}>
                Join EVO-A Today – India's Startup-Investor Ecosystem Platform
              </h3>
              <p className={`text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed ${
                isDark ? 'text-white/80' : 'text-black/70'
              }`}>
                Whether you're a founder pitching your dream, an investor discovering the next unicorn, or an incubator scaling impact – EVO-A is your trusted partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4">
                <Link 
                  to="/register" 
                  className={`group relative w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                    isDark 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  <span>Create Your Account Now</span>
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/login" 
                  className={`w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 border text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isDark 
                      ? 'border-white text-white hover:bg-white/10' 
                      : 'border-black text-black hover:bg-black/10'
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
