// landing.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/layout/footer';

// Animated Counter Component
function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, isVisible = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
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

export default function Landing() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
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

    // Observe all sections with a slight delay to ensure refs are set
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
        isDark 
          ? 'bg-black' 
          : 'bg-white'
      }`}>
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-white/5' : 'bg-black/5'
          }`}></div>
          <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-white/3' : 'bg-black/3'
          }`} style={{ animationDelay: '1s' }}></div>
        </div>

        {/* MAIN */}
        {/* Full width, seamless design, no box appearance */}
        <main className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 md:px-10 md:pb-20 md:pt-20">


          {/* Hero section */}
          <section 
            ref={setRef('hero')}
            className={`flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-10 transition-all duration-1000 ease-out ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Text */}
            <div className="w-full text-center md:max-w-xl md:text-left">
              <h1 className={`text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl lg:text-5xl ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Join the Future of
                <br />
                <span className={isDark ? 'text-white' : 'text-black'}>
                  Startup-Investor
                </span>
                <br />
                Ecosystem
              </h1>
              <p className={`mt-5 text-base md:text-lg ${
                isDark ? 'text-white/70' : 'text-black/60'
              }`}>
                Connect with investors and grow your startup.
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-3 w-full max-w-sm mx-auto
                sm:mt-8 sm:flex-row sm:justify-center sm:max-w-none
                md:justify-start md:mx-0">

                <Link to="/register" className={`w-full sm:w-auto rounded-xl border-2 px-6 py-3.5 text-sm font-semibold text-center
                     transition-all duration-300 hover:scale-105 ${
                       isDark 
                         ? 'border-white text-white hover:bg-white/10' 
                         : 'border-black text-black hover:bg-black/10'
                     }`}>
                  Create Your Account
                </Link>

                <Link to="/login" className={`w-full sm:w-auto rounded-xl px-6 py-3.5 text-sm font-semibold text-center
                     transition-all duration-300 hover:scale-105 ${
                       isDark 
                         ? 'bg-white text-black hover:bg-white/90' 
                         : 'bg-black text-white hover:bg-black/90'
                     }`}>
                  Sign in with email
                </Link>
              </div>
            </div>
  
            {/* Hero decorative element */}
            <div 
              ref={setRef('heroStats')}
              className="hidden md:block w-full md:w-1/2 mt-8 md:mt-0"
            >
              <div className="relative">
                <div className={`absolute inset-0 rounded-3xl blur-2xl transform rotate-6 ${
                  isDark ? 'bg-white/10' : 'bg-black/10'
                }`}></div>
                <div className={`relative rounded-3xl p-8 border ${
                  isDark 
                    ? 'bg-white/10 border-white/30' 
                    : 'bg-black/5 border-black/30'
                }`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`rounded-xl p-4 border ${
                      isDark 
                        ? 'bg-black/50 border-white/20' 
                        : 'bg-white border-black/20'
                    }`}>
                      <div className={`text-3xl font-bold ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        <AnimatedCounter target={100} suffix="+" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className={`text-sm mt-1 ${
                        isDark ? 'text-white/60' : 'text-black/60'
                      }`}>Startups</div>
                    </div>
                    <div className={`rounded-xl p-4 border ${
                      isDark 
                        ? 'bg-black/50 border-white/20' 
                        : 'bg-white border-black/20'
                    }`}>
                      <div className={`text-3xl font-bold ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        <AnimatedCounter target={50} suffix="+" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className={`text-sm mt-1 ${
                        isDark ? 'text-white/60' : 'text-black/60'
                      }`}>Investors</div>
                    </div>
                    <div className={`rounded-xl p-4 border ${
                      isDark 
                        ? 'bg-black/50 border-white/20' 
                        : 'bg-white border-black/20'
                    }`}>
                      <div className={`text-3xl font-bold ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        $<AnimatedCounter target={10} suffix="M+" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className={`text-sm mt-1 ${
                        isDark ? 'text-white/60' : 'text-black/60'
                      }`}>Invested</div>
                    </div>
                    <div className={`rounded-xl p-4 border ${
                      isDark 
                        ? 'bg-black/50 border-white/20' 
                        : 'bg-white border-black/20'
                    }`}>
                      <div className={`text-3xl font-bold ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        <AnimatedCounter target={95} suffix="%" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className={`text-sm mt-1 ${
                        isDark ? 'text-white/60' : 'text-black/60'
                      }`}>Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 2 */}
          <section 
            ref={setRef('section2')}
            className={`mt-16 grid gap-8 sm:mt-20 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12 transition-all duration-1000 ease-out ${
              isVisible['section2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Content - Left side on desktop */}
            <div className="order-1 md:order-1 space-y-6">
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  isDark ? 'text-white/80' : 'text-black/80'
                }`}>About EVO-A</span>
                <h2 className={`text-2xl font-bold sm:text-3xl md:text-3xl mt-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  Redefining Startup Investments
                </h2>
              </div>
              <p className={`text-sm leading-relaxed sm:text-base md:text-lg ${
                isDark ? 'text-white/70' : 'text-black/60'
              }`}>
                EVOA reshapes startup investments with an innovative platform that connects entrepreneurs 
                with investors, fostering a vibrant ecosystem for groundbreaking ideas.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-white' : 'bg-black'
                  }`}></div>
                  <span className={`text-sm ${
                    isDark ? 'text-white/80' : 'text-black/80'
                  }`}>Secure Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-white' : 'bg-black'
                  }`}></div>
                  <span className={`text-sm ${
                    isDark ? 'text-white/80' : 'text-black/80'
                  }`}>Verified Investors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-white' : 'bg-black'
                  }`}></div>
                  <span className={`text-sm ${
                    isDark ? 'text-white/80' : 'text-black/80'
                  }`}>24/7 Support</span>
                </div>
              </div>
            </div>
  
            {/* Image - Right side on desktop */}
            <div 
              ref={setRef('section2Image')}
              className={`order-2 flex justify-center md:order-2 md:justify-end transition-all duration-1000 ease-out delay-300 ${
                isVisible['section2Image'] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
              }`}
            >
              <div className="relative h-64 w-full max-w-sm sm:h-72 sm:max-w-md md:h-96 md:max-w-lg group">
                <div className={`absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 ${
                  isDark 
                    ? 'bg-white/10' 
                    : 'bg-black/10'
                }`}></div>
                <div className={`relative rounded-2xl p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500 border ${
                  isDark 
                    ? 'bg-black/80 border-white/30' 
                    : 'bg-white border-black/30'
                }`}>
                  <div className="h-full w-full rounded-xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1181641/pexels-photo-1181641.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Pitch meeting"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Stats Section */}
          <section 
            ref={setRef('stats')}
            className={`relative mt-16 sm:mt-20 md:mt-24 transition-all duration-1000 ease-out ${
              isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className={`backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-black/40 border-white/20 hover:border-white/40' 
                  : 'bg-white border-black/20 hover:border-black/40'
              }`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <AnimatedCounter target={100} suffix="+" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className={`text-sm md:text-base ${
                  isDark ? 'text-white/70' : 'text-black/70'
                }`}>Active Startups</div>
              </div>
              <div className={`backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-black/40 border-white/20 hover:border-white/40' 
                  : 'bg-white border-black/20 hover:border-black/40'
              }`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <AnimatedCounter target={50} suffix="+" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className={`text-sm md:text-base ${
                  isDark ? 'text-white/70' : 'text-black/70'
                }`}>Investors</div>
              </div>
              <div className={`backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-black/40 border-white/20 hover:border-white/40' 
                  : 'bg-white border-black/20 hover:border-black/40'
              }`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  $<AnimatedCounter target={10} suffix="M+" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className={`text-sm md:text-base ${
                  isDark ? 'text-white/70' : 'text-black/70'
                }`}>Invested</div>
              </div>
              <div className={`backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-black/40 border-white/20 hover:border-white/40' 
                  : 'bg-white border-black/20 hover:border-black/40'
              }`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <AnimatedCounter target={95} suffix="%" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className={`text-sm md:text-base ${
                  isDark ? 'text-white/70' : 'text-black/70'
                }`}>Success Rate</div>
              </div>
            </div>
          </section>

          {/* Section 3 - Features */}
          <section 
            ref={setRef('features')}
            className={`relative mt-16 sm:mt-20 md:mt-24 transition-all duration-1000 ease-out ${
              isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <p className={`text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm ${
                isDark ? 'text-white/80' : 'text-black/80'
              }`}>
                Why EVO-A?
              </p>
              <h2 className={`mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl md:text-4xl ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Revolutionizing Startup Investments &amp; Networking
              </h2>
            </div>
  
            {/* Phone mockup */}
            <div 
              ref={setRef('phone')}
              className={`relative mt-8 sm:mt-10 md:mt-12 flex justify-center transition-all duration-1000 ease-out ${
                isVisible['phone'] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
              }`}
            >
              <div className="relative w-full max-w-[500px] sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-14">
                <div className={`absolute inset-0 rounded-3xl blur-2xl ${
                  isDark ? 'bg-white/10' : 'bg-black/10'
                }`}></div>
                <div className={`relative rounded-2xl p-3 shadow-2xl border ${
                  isDark 
                    ? 'bg-black border-white/20' 
                    : 'bg-white border-black/30'
                }`}>
                  <div className="overflow-hidden rounded-xl bg-white">
                    <img
                      src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                      alt="Startup teamwork concept"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              <div 
                ref={setRef('feature1')}
                className={`backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:scale-105 ${
                  isVisible['feature1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-white/20' : 'bg-black/10'
                }`}>
                  <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>Fast Connections</h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>Connect with investors and startups instantly.</p>
              </div>

              <div 
                ref={setRef('feature2')}
                className={`backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:scale-105 delay-100 ${
                  isVisible['feature2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-white/20' : 'bg-black/10'
                }`}>
                  <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>Secure & Safe</h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>Enterprise-grade security for your data and investments.</p>
              </div>

              <div 
                ref={setRef('feature3')}
                className={`backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:scale-105 delay-200 ${
                  isVisible['feature3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${
                  isDark 
                    ? 'bg-black/40 border-white/20 hover:border-white/40' 
                    : 'bg-white border-black/20 hover:border-black/40'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-white/20' : 'bg-black/10'
                }`}>
                  <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>Global Network</h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>Access a worldwide network of investors and entrepreneurs.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section 
            ref={setRef('cta')}
            className={`relative mt-16 sm:mt-20 md:mt-24 transition-all duration-1000 ease-out ${
              isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className={`border rounded-3xl p-6 md:p-10 text-center backdrop-blur-sm ${
              isDark 
                ? 'bg-white/10 border-white/30' 
                : 'bg-black/5 border-black/30'
            }`}>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Ready to Transform Your Startup Journey?
              </h2>
              <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto ${
                isDark ? 'text-white/70' : 'text-black/60'
              }`}>
                Join thousands of entrepreneurs and investors revolutionizing the startup ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/register" 
                  className={`px-8 py-4 font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  Get Started Free
                </Link>
                <Link 
                  to="/login" 
                  className={`px-8 py-4 border-2 font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'border-white text-white hover:bg-white/10' 
                      : 'border-black text-black hover:bg-black/10'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
  