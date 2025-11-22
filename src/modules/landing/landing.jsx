// landing.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="bg-gradient-to-b from-[#253D32] via-[#0B1812] to-[#060E09] min-h-screen">
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FF78]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FF78]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* MAIN */}
        {/* Full width, seamless design, no box appearance */}
        <main className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:px-10 md:pb-20 md:pt-12">


          {/* Hero section */}
          <section 
            ref={setRef('hero')}
            className={`flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-10 transition-all duration-1000 ease-out ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Text */}
            <div className="w-full text-center md:max-w-xl md:text-left">
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Join the Future of
                <br />
                <span className="bg-gradient-to-r from-[#00FF78] to-[#00FF78]/70 bg-clip-text text-transparent">
                  Startup-Investor
                </span>
                <br />
                Ecosystem
              </h1>
              <p className="mt-6 text-lg text-white/70 md:text-xl">
                Connect with investors, grow your startup, and revolutionize the entrepreneurial landscape.
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 w-full max-w-sm mx-auto
                sm:mt-10 sm:flex-row sm:justify-center sm:max-w-none
                md:justify-start md:mx-0">

                <Link to="/register" className="w-full sm:w-auto rounded-xl border-2 border-[#00FF78] 
                     px-6 py-3.5 text-sm font-semibold text-[#00FF78] text-center
                     transition-all duration-300 hover:bg-[#00FF78]/10 hover:scale-105 hover:shadow-lg hover:shadow-[#00FF78]/20">
                  Create Your Account
                </Link>

                <Link to="/login" className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#00FF78] to-[#00FF78]/90
                     px-6 py-3.5 text-sm font-semibold text-[#060E09] text-center
                     transition-all duration-300 hover:from-[#00FF78]/90 hover:to-[#00FF78] hover:scale-105 shadow-lg hover:shadow-[#00FF78]/30">
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
                <div className="absolute inset-0 bg-[#00FF78]/10 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-[#00FF78]/20 to-[#00FF78]/5 rounded-3xl p-8 border border-[#00FF78]/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#253D32]/50 rounded-xl p-4 border border-[#00FF78]/20">
                      <div className="text-3xl font-bold text-[#00FF78]">
                        <AnimatedCounter target={100} suffix="+" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Startups</div>
                    </div>
                    <div className="bg-[#253D32]/50 rounded-xl p-4 border border-[#00FF78]/20">
                      <div className="text-3xl font-bold text-[#00FF78]">
                        <AnimatedCounter target={50} suffix="+" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Investors</div>
                    </div>
                    <div className="bg-[#253D32]/50 rounded-xl p-4 border border-[#00FF78]/20">
                      <div className="text-3xl font-bold text-[#00FF78]">
                        $<AnimatedCounter target={10} suffix="M+" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Invested</div>
                    </div>
                    <div className="bg-[#253D32]/50 rounded-xl p-4 border border-[#00FF78]/20">
                      <div className="text-3xl font-bold text-[#00FF78]">
                        <AnimatedCounter target={95} suffix="%" isVisible={isVisible['heroStats']} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 2 */}
          <section 
            ref={setRef('section2')}
            className={`mt-20 grid gap-8 sm:mt-24 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12 transition-all duration-1000 ease-out ${
              isVisible['section2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Content - Left side on desktop */}
            <div className="order-1 md:order-1 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00FF78]">About EVO-A</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-3">
                  Redefining Startup Investments
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
                EVOA is dedicated to reshaping the landscape of startup investments. Our platform offers an
                innovative approach that revolutionizes how entrepreneurs connect with potential investors.
                We are committed to fostering a vibrant ecosystem that fuels the growth of groundbreaking
                ideas and visionary startups.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FF78]"></div>
                  <span className="text-white/80 text-sm">Secure Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FF78]"></div>
                  <span className="text-white/80 text-sm">Verified Investors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FF78]"></div>
                  <span className="text-white/80 text-sm">24/7 Support</span>
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00FF78]/20 to-[#00FF78]/5 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-2xl bg-[#253D32]/80 border border-[#00FF78]/30 p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
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
            className={`relative mt-20 sm:mt-24 md:mt-32 transition-all duration-1000 ease-out ${
              isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-6 text-center hover:border-[#00FF78]/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-[#00FF78] mb-2">
                  <AnimatedCounter target={100} suffix="+" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className="text-sm md:text-base text-white/70">Active Startups</div>
              </div>
              <div className="bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-6 text-center hover:border-[#00FF78]/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-[#00FF78] mb-2">
                  <AnimatedCounter target={50} suffix="+" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className="text-sm md:text-base text-white/70">Investors</div>
              </div>
              <div className="bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-6 text-center hover:border-[#00FF78]/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-[#00FF78] mb-2">
                  $<AnimatedCounter target={10} suffix="M+" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className="text-sm md:text-base text-white/70">Invested</div>
              </div>
              <div className="bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-6 text-center hover:border-[#00FF78]/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-[#00FF78] mb-2">
                  <AnimatedCounter target={95} suffix="%" isVisible={isVisible['stats']} duration={2000} />
                </div>
                <div className="text-sm md:text-base text-white/70">Success Rate</div>
              </div>
            </div>
          </section>

          {/* Section 3 - Features */}
          <section 
            ref={setRef('features')}
            className={`relative mt-20 sm:mt-24 md:mt-32 transition-all duration-1000 ease-out ${
              isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00FF78] sm:text-sm">
                Why EVO-A?
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
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
                <div className="absolute inset-0 bg-[#00FF78]/10 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl bg-gradient-to-br from-black to-[#060E09] p-3 shadow-2xl border border-[#00FF78]/20">
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
                className={`bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-6 hover:border-[#00FF78]/40 transition-all duration-500 hover:scale-105 ${
                  isVisible['feature1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00FF78]/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FF78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fast Connections</h3>
                <p className="text-white/60 text-sm">Connect with investors and startups instantly through our streamlined platform.</p>
              </div>

              <div 
                ref={setRef('feature2')}
                className={`bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-6 hover:border-[#00FF78]/40 transition-all duration-500 hover:scale-105 delay-100 ${
                  isVisible['feature2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00FF78]/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FF78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure & Safe</h3>
                <p className="text-white/60 text-sm">Your data and investments are protected with enterprise-grade security.</p>
              </div>

              <div 
                ref={setRef('feature3')}
                className={`bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-6 hover:border-[#00FF78]/40 transition-all duration-500 hover:scale-105 delay-200 ${
                  isVisible['feature3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00FF78]/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FF78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Network</h3>
                <p className="text-white/60 text-sm">Access a worldwide network of investors and entrepreneurs.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section 
            ref={setRef('cta')}
            className={`relative mt-20 sm:mt-24 md:mt-32 transition-all duration-1000 ease-out ${
              isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-[#00FF78]/10 via-[#00FF78]/5 to-[#00FF78]/10 border border-[#00FF78]/30 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Startup Journey?
              </h2>
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs and investors who are already revolutionizing the startup ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/register" 
                  className="px-8 py-4 bg-gradient-to-r from-[#00FF78] to-[#00FF78]/90 hover:from-[#00FF78]/90 hover:to-[#00FF78] text-[#060E09] font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00FF78]/30"
                >
                  Get Started Free
                </Link>
                <Link 
                  to="/login" 
                  className="px-8 py-4 border-2 border-[#00FF78] text-[#00FF78] font-bold rounded-xl text-lg transition-all duration-300 hover:bg-[#00FF78]/10 hover:scale-105"
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
  