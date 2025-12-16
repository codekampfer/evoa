import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/layout/footer';
import landingImageSeven from '../../assets/landing image seven.jpg';
import landingImageFive from '../../assets/landing image five.jpg';

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
      className={`group relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${
        isDark 
          ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60' 
          : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDark ? 'bg-gradient-to-br from-white/5 to-transparent' : 'bg-gradient-to-br from-black/5 to-transparent'
      }`}></div>
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
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
      className={`backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isDark 
          ? 'bg-black/40 border-white/20 hover:border-white/40' 
          : 'bg-white border-black/20 hover:border-black/40'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
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
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Stats data
  const statsData = [
    { target: 100, suffix: '+', label: 'Active Startups' },
    { target: 50, suffix: '+', label: 'Verified Investors' },
    { target: 10, prefix: '$', suffix: 'M+', label: 'Total Invested' },
    { target: 95, suffix: '%', label: 'Success Rate' }
  ];

  // Features data
  const featuresData = [
    { title: 'Secure Platform', desc: 'Bank-level encryption' },
    { title: 'Verified Investors', desc: 'Thoroughly vetted' },
    { title: '24/7 Support', desc: 'Always here to help' }
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
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-0 sm:px-6 sm:pb-16 sm:pt-0 md:px-10 md:pb-20 md:pt-0 lg:px-12">

        {/* Enhanced Hero section */}
        <section 
          ref={setRef('hero')}
          className={`flex flex-col items-center justify-center transition-all duration-1000 ease-out 
            py-12 sm:py-16 md:py-20 lg:py-24 mb-0 ${
            isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full text-center max-w-5xl px-2 sm:px-4 md:px-6">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
              <span className={`text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border backdrop-blur-sm flex items-center gap-2 ${
                isDark 
                  ? 'bg-white/10 border-white/30 text-white/90 shadow-lg shadow-white/5' 
                  : 'bg-black/5 border-black/20 text-black/90 shadow-lg shadow-black/5'
              }`}>
              
                Trusted by 1000+ Startups
              </span>
            </div>

            {/* Tagline */}
            <p className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 px-2 flex items-center justify-center gap-2 ${
              isDark ? 'text-white/90' : 'text-gray-700'
            }`}>
              <HiGlobeAlt className="text-2xl" />
              Join the Future of Startup–Investor Ecosystem
            </p>

            {/* Main Heading */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight mb-4 sm:mb-6 md:mb-8 px-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Where Innovation
              <br />
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-white via-white/90 to-white/70' 
                  : 'from-gray-900 via-gray-800 to-gray-700'
              }`}>
                Meets Investment
              </span>
              <br />
              <span className={`${isDark ? 'text-white/90' : 'text-gray-800'}`}>
                Excellence
              </span>
            </h1>

            {/* Description */}
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl tracking-wide leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 ${
              isDark ? 'text-white/80' : 'text-gray-600'
            }`}>
              Connect with verified investors, showcase your startup, and secure funding faster than ever. 
              Join the platform that's transforming how startups meet investors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-12 md:mb-16 w-full max-w-md sm:max-w-none mx-auto px-4">
              <Link 
                to="/register" 
                className={`group relative w-full sm:w-auto rounded-xl px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 text-sm sm:text-base font-semibold text-center
                  overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 ${
                    isDark 
                      ? 'bg-white text-black hover:bg-white/95 shadow-lg shadow-white/20' 
                      : 'bg-black text-white hover:bg-black/95 shadow-lg shadow-black/20'
                  }`}
              >
                <span className="relative z-10">Create Your Account</span>
                <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark ? 'bg-gradient-to-r from-white/20 to-transparent' : 'bg-gradient-to-r from-black/20 to-transparent'
                }`}></div>
              </Link>

              <Link 
                to="/login" 
                className={`w-full sm:w-auto rounded-xl border-2 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 text-sm sm:text-base font-semibold text-center
                  transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2 ${
                    isDark 
                      ? 'border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-white/5' 
                      : 'border-black/40 text-black hover:bg-black/10 hover:border-black/60 bg-black/5'
                  }`}
              >
                <HiLockClosed />
                Sign in with Email
              </Link>
            </div>
            
            {/* Animated Arrow */}
            <div className="mt-12 sm:mt-16 flex justify-center">
              <HiArrowDown 
                className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 animate-bounce ${
                  isDark ? 'text-white/60 hover:text-white/80' : 'text-black/60 hover:text-black/80'
                }`}
              />
            </div>
          </div>
        </section>
  
        {/* Stats Section */}
        <section 
          ref={setRef('stats')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 flex items-center justify-center gap-3 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              <HiTrophy className="text-3xl sm:text-4xl lg:text-5xl" />
              Trusted by Industry Leaders
            </h2>
            <p className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Join thousands of successful startups and investors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {statsData.map((stat, index) => {
              const renderIcon = () => {
                switch(index) {
                  case 0: return <HiRocketLaunch className="text-3xl" />;
                  case 1: return <HiBriefcase className="text-3xl" />;
                  case 2: return <HiCurrencyDollar className="text-3xl" />;
                  case 3: return <HiStar className="text-3xl" />;
                  default: return null;
                }
              };
              
              return (
                <div 
                  key={index}
                  className={`backdrop-blur-sm border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                    isDark 
                      ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60' 
                      : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50'
                  }`}
                >
                  <div className={`flex justify-center mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                    <div className="text-2xl sm:text-3xl">{renderIcon()}</div>
                  </div>
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 ${
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
                  <div className={`text-xs sm:text-sm md:text-base font-medium ${
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
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['userTypes'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block mb-3 sm:mb-4 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white/80' 
                : 'bg-black/5 border-black/30 text-black/80'
            }`}>
              For Everyone
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Choose Your Path
            </h2>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Whether you're building the future or investing in it, EVO-A has you covered
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <HiRocketLaunch className="text-3xl" />,
                title: 'For Startups',
                desc: 'Showcase your pitch, connect with investors, and secure funding',
                features: ['Upload Pitch Video', 'Get Verified', 'Direct Investor Access']
              },
              {
                icon: <HiCurrencyDollar className="text-3xl" />,
                title: 'For Investors',
                desc: 'Discover verified startups and make smart investment decisions',
                features: ['SEBI Verified', 'Deal Flow Access', 'Portfolio Tracking']
              },
              {
                icon: <HiLightBulb className="text-3xl" />,
                title: 'For Incubators',
                desc: 'Find promising startups and manage your acceleration programs',
                features: ['Startup Discovery', 'Program Management', 'Mentor Network']
              },
              {
                icon: <HiUserGroup className="text-3xl" />,
                title: 'For Viewers',
                desc: 'Explore innovative startups and stay updated on startup trends',
                features: ['Free Access', 'Trending Pitches', 'Learn & Support']
              }
            ].map((type, index) => (
              <div
                key={index}
                className={`group relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible['userTypes'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60' 
                    : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                  isDark ? 'bg-white/20 group-hover:bg-white/30' : 'bg-black/10 group-hover:bg-black/20'
                }`}>
                  <div className={isDark ? 'text-white' : 'text-black'}>
                    {type.icon}
                  </div>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {type.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  {type.desc}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <HiCheckCircle className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-white/80' : 'text-black/80'}`} />
                      <span className={`text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>{feature}</span>
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
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block mb-3 sm:mb-4 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white/80' 
                : 'bg-black/5 border-black/30 text-black/80'
            }`}>
              Simple Process
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Get Started in 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                desc: 'Sign up and complete your verification in minutes. Choose your role and get instant access.',
                icon: <HiUserGroup className="text-2xl" />
              },
              {
                step: '02',
                title: 'Upload Your Pitch',
                desc: 'Share your startup story with a 90-second video pitch and detailed business plan.',
                icon: <HiPlayCircle className="text-2xl" />
              },
              {
                step: '03',
                title: 'Connect & Grow',
                desc: 'Get discovered by verified investors, participate in pitch battles, and secure funding.',
                icon: <HiChartBar className="text-2xl" />
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`relative backdrop-blur-sm border rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
                  isVisible['howItWorks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`text-6xl font-bold mb-4 ${
                  isDark ? 'text-white/10' : 'text-black/10'
                }`}>
                  {step.step}
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-white/20' : 'bg-black/10'
                }`}>
                  <div className={isDark ? 'text-white' : 'text-black'}>
                    {step.icon}
                  </div>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 (About) */}
        <section 
          ref={setRef('section2')}
          className={`mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 md:items-center transition-all duration-1000 ease-out ${
            isVisible['section2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="order-1 md:order-1 space-y-6">
            <div>
              <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block ${
                isDark 
                  ? 'bg-white/10 border-white/30 text-white/80' 
                  : 'bg-black/5 border-black/30 text-black/80'
              }`}>
                About EVO-A
              </span>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Redefining Startup Investments
              </h2>
            </div>
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed ${isDark ? 'text-white/70' : 'text-black/60'}`}>
              EVO-A is revolutionizing the startup investment landscape with cutting-edge technology that seamlessly 
              connects ambitious entrepreneurs with forward-thinking investors. Our platform creates a vibrant ecosystem 
              where groundbreaking ideas meet strategic capital, fostering innovation and driving success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {featuresData.map((feature, index) => {
                const renderIcon = () => {
                  switch(index) {
                    case 0: return <HiLockClosed className="text-2xl" />;
                    case 1: return <HiCheckCircle className="text-2xl" />;
                    case 2: return <HiGlobeAlt className="text-2xl" />;
                    default: return null;
                  }
                };
                
                return (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      isDark 
                        ? 'bg-black/40 border-white/20 hover:border-white/40' 
                        : 'bg-white border-black/20 hover:border-black/40'
                    }`}
                  >
                    <div className={`mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                      {renderIcon()}
                    </div>
                    <h3 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
  
          <div 
            ref={setRef('section2Image')}
            className={`order-2 flex justify-center md:order-2 md:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible['section2Image'] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}
          >
            <div className="relative h-48 w-full max-w-xs sm:h-64 sm:max-w-sm md:h-80 md:max-w-md lg:h-96 lg:max-w-lg group mx-auto md:mx-0">
              <div className={`absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}></div>
              <div className={`relative rounded-2xl p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500 ${
                isDark ? 'bg-black/80' : 'bg-white'
              }`}>
                <div className="h-full w-full rounded-xl overflow-hidden">
                  <img
                    src={landingImageFive}
                    alt="Pitch meeting"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section 
          ref={setRef('industries')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['industries'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block mb-3 sm:mb-4 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white/80' 
                : 'bg-black/5 border-black/30 text-black/80'
            }`}>
              Diverse Sectors
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Startups Across All Industries
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              'AI/ML', 'FinTech', 'HealthTech', 'EdTech', 'SaaS', 'E-commerce',
              'GreenTech', 'FoodTech', 'AgriTech', 'Web3', 'DeepTech', 'Mobility'
            ].map((industry, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm border rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isVisible['industries'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40 hover:bg-black/60' 
                    : 'bg-white border-black/20 hover:border-black/40 hover:bg-gray-50'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <HiBolt className={`w-6 h-6 mx-auto mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`} />
                <p className={`text-xs sm:text-sm font-semibold ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section 
          ref={setRef('features')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div 
            ref={setRef('featureImage')}
            className={`flex justify-center transition-all duration-1000 ease-out ${
              isVisible['featureImage'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-7xl group">
              <div className={`absolute inset-0 rounded-3xl blur-2xl transition-all duration-500 group-hover:blur-3xl ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}></div>
              <div className="relative rounded-3xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                <img 
                  src={landingImageSeven} 
                  alt="Startup growth and innovation" 
                  className={`w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-all duration-500 group-hover:scale-110 ${
                    isDark 
                      ? 'brightness-90 contrast-110' 
                      : 'brightness-100 contrast-100'
                  }`}
                />
                <div className={`absolute inset-0 transition-all duration-300 group-hover:opacity-0 ${
                  isDark ? 'bg-black/30' : 'bg-black/20'
                }`}></div>
                
                {/* Text Content Overlay - Directly on Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
                  <div className="text-center max-w-4xl w-full">
                   
                    <h2 className={`mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg ${
                      isDark ? 'text-white' : 'text-white'
                    }`}>
                      Everything You Need to Succeed
                    </h2>
                    <p className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-md ${
                      isDark ? 'text-white/90' : 'text-white/90'
                    }`}>
                      Powerful features designed to help startups connect with the right investors and grow faster
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section 
          ref={setRef('keyFeatures')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['keyFeatures'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <HiShieldCheck className="text-2xl" />,
                title: 'Verified Ecosystem',
                desc: 'All investors and startups undergo thorough verification for maximum trust'
              },
              {
                icon: <HiPlayCircle className="text-2xl" />,
                title: 'Video Pitches',
                desc: 'Showcase your startup with engaging 90-second pitch videos'
              },
              {
                icon: <HiTrophy className="text-2xl" />,
                title: 'Pitch Battles',
                desc: 'Compete in live pitch battles and win investor attention'
              },
              {
                icon: <HiChatBubbleLeftRight className="text-2xl" />,
                title: 'Direct Messaging',
                desc: 'Connect directly with investors and mentors on the platform'
              },
              {
                icon: <HiDocumentText className="text-2xl" />,
                title: 'Smart Matching',
                desc: 'AI-powered matching connects you with the right investors'
              },
              {
                icon: <HiChartBar className="text-2xl" />,
                title: 'Analytics Dashboard',
                desc: 'Track pitch views, engagement, and investor interest in real-time'
              }
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
                delay={index * 100}
                isVisible={isVisible['keyFeatures']}
                isDark={isDark}
              />
            ))}
          </div>
        </section>

        {/* Trust & Security Section */}
        <section 
          ref={setRef('trust')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['trust'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`relative border rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 backdrop-blur-sm overflow-hidden ${
            isDark 
              ? 'bg-black/40 border-white/20' 
              : 'bg-white border-black/20'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block mb-4 ${
                  isDark 
                    ? 'bg-white/10 border-white/30 text-white/80' 
                    : 'bg-black/5 border-black/30 text-black/80'
                }`}>
                  Trust & Security
                </span>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  Your Security is Our Priority
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  isDark ? 'text-white/70' : 'text-black/60'
                }`}>
                  We employ industry-leading security measures to protect your data and ensure safe transactions
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <HiShieldCheck />, label: 'SSL Encrypted' },
                  { icon: <HiCheckBadge />, label: 'SEBI Verified' },
                  { icon: <HiLockClosed />, label: 'Data Protected' },
                  { icon: <HiCheckCircle />, label: 'KYC Compliant' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border text-center transition-all duration-300 hover:scale-105 ${
                      isDark 
                        ? 'bg-black/40 border-white/20 hover:border-white/40' 
                        : 'bg-white border-black/20 hover:border-black/40'
                    }`}
                  >
                    <div className={`text-3xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      {item.icon}
                    </div>
                    <p className={`text-xs sm:text-sm font-semibold ${
                      isDark ? 'text-white/90' : 'text-black/90'
                    }`}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          ref={setRef('testimonials')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block mb-3 sm:mb-4 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white/80' 
                : 'bg-black/5 border-black/30 text-black/80'
            }`}>
              Success Stories
            </span>
            <h2 className={`mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Loved by Entrepreneurs Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="CEO"
              company="TechFlow"
              content="EVO-A transformed how we connected with investors. Within 2 weeks, we secured our Series A funding. This platform is a game-changer!"
              isVisible={isVisible['testimonials']}
              isDark={isDark}
              delay={0}
            />
            <TestimonialCard
              name="Michael Rodriguez"
              role="Founder"
              company="InnovateLab"
              content="The quality of investors on EVO-A is unmatched. Every connection was meaningful and led to real opportunities. Highly recommend!"
              isVisible={isVisible['testimonials']}
              isDark={isDark}
              delay={100}
            />
            <TestimonialCard
              name="Emily Watson"
              role="Co-Founder"
              company="GreenTech Solutions"
              content="As an investor, I love how EVO-A helps me discover promising startups. The platform makes due diligence so much easier."
              isVisible={isVisible['testimonials']}
              isDark={isDark}
              delay={200}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          ref={setRef('faq')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block mb-3 sm:mb-4 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white/80' 
                : 'bg-black/5 border-black/30 text-black/80'
            }`}>
              FAQ
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Common Questions Answered
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Is EVO-A free to use?',
                a: 'Yes! Basic access is completely free. Premium features are available for advanced users.'
              },
              {
                q: 'How long does verification take?',
                a: 'Most verifications complete within 24-48 hours. SEBI-verified investors get instant green badges.'
              },
              {
                q: 'Can I upload multiple pitches?',
                a: 'Absolutely! You can update your pitch anytime and showcase multiple products or services.'
              },
              {
                q: 'What makes EVO-A different?',
                a: 'We focus on verified connections, video pitches, live pitch battles, and direct investor-startup communication.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm border rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-opacity-60 ${
                  isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {faq.q}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section 
          ref={setRef('cta')}
          className={`relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 transition-all duration-1000 ease-out ${
            isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`relative border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center backdrop-blur-sm overflow-hidden ${
            isDark 
              ? 'bg-white/10 border-white/30' 
              : 'bg-black/5 border-black/30'
          }`}>
            <div className={`absolute inset-0 opacity-20 ${
              isDark ? 'bg-gradient-to-r from-white/10 via-transparent to-white/10' : 'bg-gradient-to-r from-black/10 via-transparent to-black/10'
            }`}></div>
            <div className="relative z-10">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Ready to Transform Your Startup Journey?
              </h2>
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4 ${
                isDark ? 'text-white/70' : 'text-black/60'
              }`}>
                Join thousands of entrepreneurs and investors who are revolutionizing the startup ecosystem. 
                Start your journey today - it's free!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link 
                  to="/register" 
                  className={`group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 font-bold rounded-xl text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 overflow-hidden ${
                    isDark 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  <span className="relative z-10">Get Started Free</span>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? 'bg-gradient-to-r from-white/20 to-transparent' : 'bg-gradient-to-r from-black/20 to-transparent'
                  }`}></div>
                </Link>
                <Link 
                  to="/login" 
                  className={`w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-2 font-bold rounded-xl text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'border-white text-white hover:bg-white/10' 
                      : 'border-black text-black hover:bg-black/10'
                  }`}
                >
                  Learn More
                </Link>
              </div>
              <p className={`mt-6 text-sm flex items-center justify-center gap-2 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                <HiSparkles className="text-xs" />
                No credit card required • Free forever plan available
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
