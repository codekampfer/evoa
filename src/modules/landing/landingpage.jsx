import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/layout/footer';
import illustration1 from '../../assets/llustration/16748996_ICO_S03-WB_Bus3-12.png';
import illustration2 from '../../assets/llustration/1221.svg';
import illustration3 from '../../assets/llustration/20177166_Web_Services_33_.svg';
import illustration4 from '../../assets/llustration/08.png';

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
  HiHandThumbUp
} from 'react-icons/hi2';

// Rotating Text and Image Component
function RotatingContent({ texts, images, interval = 5000, isDark, onIndexChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % texts.length;
          if (onIndexChange) {
            onIndexChange(newIndex);
          }
          return newIndex;
        });
        setIsVisible(true);
      }, 600);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval, onIndexChange]);

  return (
    <span className="inline-block min-h-[1.2em]">
      <span
        key={currentIndex}
        className={`inline-block transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } ${isDark ? 'text-white' : 'text-black'}`}
      >
        {texts[currentIndex]},
      </span>
    </span>
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

// Interactive Feature Card Component
function FeatureCard({ icon, title, description, delay = 0, isVisible, isDark }) {
  return (
    <div
      className={`group relative backdrop-blur-sm border p-6 transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${
        isDark 
          ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60' 
          : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50'
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

// Testimonial Card Component
function TestimonialCard({ name, role, company, content, isVisible, isDark, delay = 0 }) {
  return (
    <div
      className={`backdrop-blur-sm border p-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isDark 
          ? 'bg-black/40 border-white/20 hover:border-white/40' 
          : 'bg-white border-black/20 hover:border-black/40'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 flex items-center justify-center text-xl font-bold ${
          isDark ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
        }`}>
          {name.charAt(0)}
        </div>
        <div>
          <h4 className={`text-sm sm:text-base font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{name}</h4>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>{role} at {company}</p>
        </div>
      </div>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
        "{content}"
      </p>
    </div>
  );
}

export default function Landing() {
  const [isVisible, setIsVisible] = useState({ hero: true, heroFeatures: true, heroImage: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const sectionRefs = useRef({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Hero content data
  const heroContent = [
    {
      text: 'Join the Future of Startup–Investor',
      image: illustration1
    },
    {
      text: 'Where Innovation Meets Investment',
      image: illustration2
    },
    {
      text: '90-Second Video Pitches That Get Funded',
      image: illustration3
    },
    {
      text: 'Connect Verified Startups with Investors',
      image: illustration4
    },
    {
      text: 'Transform Your Startup Journey Today',
      image: illustration1
    }
  ];

  // Stats data
  const statsData = [
    { target: 100, suffix: '+', label: 'Active Startups' },
    { target: 50, suffix: '+', label: 'Verified Investors' },
    { target: 20, suffix: '+', label: 'SEBI-Certified Investors' },
    { target: 95, suffix: '%', label: 'Success Rate' }
  ];


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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Enhanced Decorative background elements with mouse tracking */}
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

        {/* Hero Section - Monochromatic Style */}
        <section 
          ref={setRef('hero')}
          className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center transition-all duration-1000 ease-out 
            py-6 sm:py-8 md:py-10 lg:py-12 mb-0 ${
            isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="order-2 md:order-1 space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-0">
            {/* Main Heading with Rotating Text */}
            <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              <RotatingContent
                texts={heroContent.map(item => item.text)}
                images={heroContent.map(item => item.image)}
                interval={5000}
                isDark={isDark}
                onIndexChange={setCurrentHeroIndex}
              />
            </h1>

            {/* Description */}
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl ${
              isDark ? 'text-white/80' : 'text-gray-700'
            }`}>
              EVO-A is redefining startup investments through video-first pitch platform. Startups upload 90-second pitch videos, investors discover verified opportunities, incubators find promising talent, and viewers explore entrepreneurship content. Join the platform where funding happens in weeks, not months.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link 
                to="/register" 
                className={`group w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base font-semibold text-center
                  transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 ${
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
                  transition-all duration-300 hover:opacity-80 ${
                    isDark 
                      ? 'border-white text-white bg-transparent' 
                      : 'border-black text-black bg-white'
                  }`}
              >
                Sign in with Email
              </Link>
            </div>
          </div>

          {/* Right Side - Rotating Image */}
          <div 
            ref={setRef('heroImage')}
            className={`order-1 md:order-2 hidden md:flex justify-center md:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible['heroImage'] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <div className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] w-full overflow-hidden relative flex items-center justify-center">
                {heroContent.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={`${item.text} - EVO-A platform`}
                    className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-in-out ${
                      currentHeroIndex === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                    style={{
                      filter: isDark 
                        ? 'brightness(0) invert(1)' 
                        : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section - Below Hero */}
        <section 
          ref={setRef('heroFeatures')}
          className={`relative mt-6 sm:mt-8 md:mt-12 lg:mt-16 transition-all duration-1000 ease-out ${
            isVisible['heroFeatures'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              {
                title: 'Video Pitch Platform',
                description: 'Upload engaging 90-second pitch videos instead of boring PDFs. Get discovered by SEBI-verified investors instantly. Your startup story, told visually.'
              },
              {
                title: 'Verified Ecosystem',
                description: 'SEBI-certified investors with green badges. CIN/GST verified startups with blue badges. Government-affiliated incubators with orange badges. Maximum trust, zero fraud.'
              },
              {
                title: 'Live Pitch Battles',
                description: 'Compete in real-time pitch competitions. Win investor attention and funding. Track views, engagement, and investor interest through analytics dashboard.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`border p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
              >
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${
                  isDark ? 'text-white/70' : 'text-black/70'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Stats Section */}
        <section 
          ref={setRef('stats')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 transition-all duration-1000 ease-out ${
            isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              <HiTrophy className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
              <span>Trusted by Industry Leaders</span>
            </h2>
            <p className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Join thousands of successful startups and investors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {statsData.map((stat, index) => {
              const renderIcon = () => {
                switch(index) {
                  case 0: return <HiRocketLaunch className="text-3xl" />;
                  case 1: return <HiBriefcase className="text-3xl" />;
                  case 2: return <HiCheckBadge className="text-3xl" />;
                  case 3: return <HiStar className="text-3xl" />;
                  default: return null;
                }
              };
              
              return (
                <div 
                  key={index}
                  className={`backdrop-blur-sm border p-3 sm:p-4 md:p-5 lg:p-6 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                    isDark 
                      ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60' 
                      : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50'
                  }`}
                >
                  <div className={`flex justify-center mb-1 sm:mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                    <div className="text-xl sm:text-2xl md:text-3xl">{renderIcon()}</div>
                  </div>
                  <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    <AnimatedCounter 
                      target={stat.target} 
                      suffix={stat.suffix || ''} 
                      prefix={stat.prefix || ''}
                      isVisible={isVisible['stats']} 
                      duration={2000} 
                    />
                  </div>
                  <div className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-medium ${
                    isDark ? 'text-white/70' : 'text-black/70'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* User Types Section */}
        <section 
          ref={setRef('userTypes')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 transition-all duration-1000 ease-out ${
            isVisible['userTypes'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 border inline-block mb-2 sm:mb-3 md:mb-4 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white/80' 
                : 'bg-black/5 border-black/30 text-black/80'
            }`}>
              For Everyone
            </span>
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Choose Your Path
            </h2>
            <p className={`text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Whether you're building the future or investing in it, EVO-A has you covered
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                icon: <HiRocketLaunch className="text-3xl" />,
                title: 'For Startups',
                desc: 'Upload 90-second pitch video, get CIN/GST verified, connect with SEBI investors, compete in pitch battles, secure funding faster',
                features: ['90-Second Video Pitch', 'CIN/GST Verification', 'Pitch Battle Access']
              },
              {
                icon: <HiCurrencyDollar className="text-3xl" />,
                title: 'For Investors',
                desc: 'Browse verified startup pitches, filter by industry/stage/ticket size, get SEBI-verified badge, direct messaging with founders',
                features: ['SEBI Badge', 'Deal Flow Access', 'Direct Messaging']
              },
              {
                icon: <HiLightBulb className="text-3xl" />,
                title: 'For Incubators',
                desc: 'Discover promising startups, manage cohort programs, provide mentorship, track program success metrics',
                features: ['Startup Discovery', 'Program Management', 'Government Affiliation']
              },
              {
                icon: <HiUserGroup className="text-3xl" />,
                title: 'For Viewers',
                desc: 'Explore trending startup pitches, learn from founder stories, support startups you believe in, access free entrepreneurship content',
                features: ['Free Access', 'Trending Content', 'Learn & Support']
              }
            ].map((type, index) => (
              <div
                key={index}
                className={`group relative backdrop-blur-sm border p-4 sm:p-5 md:p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible['userTypes'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60' 
                    : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 ${
                  isDark ? 'bg-white/20 group-hover:bg-white/30' : 'bg-black/10 group-hover:bg-black/20'
                }`}>
                  <div className={`${isDark ? 'text-white' : 'text-black'} text-xl sm:text-2xl md:text-3xl`}>
                    {type.icon}
                  </div>
                </div>
                <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {type.title}
                </h3>
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  {type.desc}
                </p>
                <div className="space-y-1.5 sm:space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                      <HiCheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ${isDark ? 'text-white/80' : 'text-black/80'}`} />
                      <span className={`text-[10px] sm:text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          ref={setRef('howItWorks')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 transition-all duration-1000 ease-out ${
            isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 border inline-block mb-2 sm:mb-3 md:mb-4 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white/80' 
                : 'bg-black/5 border-black/30 text-black/80'
            }`}>
              Simple Process
            </span>
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Get Started in 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                desc: 'Sign up in 30 seconds. Choose your role: Startup, Investor, Incubator, or Viewer. Complete email and phone OTP verification. Get instant platform access.',
                icon: <HiUserGroup className="text-2xl" />
              },
              {
                step: '02',
                title: 'Get Verified & Upload',
                desc: 'Startups: Upload CIN/GST and 90-second pitch video. Investors: Add SEBI certificate for green badge. Incubators: Upload government affiliation proof.',
                icon: <HiPlayCircle className="text-2xl" />
              },
              {
                step: '03',
                title: 'Connect & Grow',
                desc: 'Startups get discovered by verified investors. Investors browse pitch reels like social media. Direct messaging for deal discussions. Track everything in dashboard.',
                icon: <HiChartBar className="text-2xl" />
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

        {/* Enhanced CTA Section */}
        <section 
          ref={setRef('cta')}
          className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 transition-all duration-1000 ease-out ${
            isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`relative border p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center ${
            isDark 
              ? 'bg-black/40 border-white/20' 
              : 'bg-white border-black/20'
          }`}>
            <div className="max-w-3xl mx-auto px-2 sm:px-4">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Ready to Transform Your Startup Journey?
              </h2>
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed ${
                isDark ? 'text-white/80' : 'text-black/70'
              }`}>
                Join thousands of entrepreneurs and investors who are revolutionizing the startup ecosystem. 
                Start your journey today - it's free!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
                <Link 
                  to="/register" 
                  className={`group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                    isDark 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  <span>Get Started Free</span>
                  <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className={`w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-2 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'border-white text-white hover:bg-white/10' 
                      : 'border-black text-black hover:bg-black/10'
                  }`}
                >
                  Learn More
                </Link>
              </div>
              <p className={`mt-6 sm:mt-8 text-xs sm:text-sm md:text-base flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <HiSparkles className="text-sm sm:text-base" />
                  <span>No credit card required</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Free forever plan available</span>
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
