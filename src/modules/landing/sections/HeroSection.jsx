import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiRocketLaunch, HiCurrencyDollar, HiUsers, HiArrowRight, HiBolt, HiShieldCheck, HiAcademicCap } from 'react-icons/hi2';
import heroImage from '../../../assets/handshake.png';

// Typing words
const TYPING_WORDS = ["Next Unicorn", "Right Investors", "Top Startups", "Your Future", "Success Stories", "Dream Team"];

export default function HeroSection({ isVisible, isDark, setRef, mousePosition }) {
  // Auto-typing state
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingText, setTypingText] = useState('');
  const typingTimeoutRef = useRef(null);
  const typingTextRef = useRef('');
  const isDeletingRef = useRef(false);
  const textIndexRef = useRef(0);
  const isFirstRender = useRef(true);
  const [fundedCount, setFundedCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [startupsCount, setStartupsCount] = useState(0);

  // Keep refs in sync
  useEffect(() => {
    typingTextRef.current = typingText;
    isDeletingRef.current = isDeleting;
    textIndexRef.current = textIndex;
  }, [typingText, isDeleting, textIndex]);

  // Reset when word index changes
  useEffect(() => {
    setTypingText('');
    setIsDeleting(false);
  }, [textIndex]);

  // Counter Animation Effect
  useEffect(() => {
    if (isVisible['hero']) {
      // Funded Counter (125 Cr)
      let fundedStart = 0;
      const fundedEnd = 125;
      const fundedTimer = setInterval(() => {
        fundedStart += 3;
        if (fundedStart >= fundedEnd) {
          setFundedCount(fundedEnd);
          clearInterval(fundedTimer);
        } else {
          setFundedCount(fundedStart);
        }
      }, 30);

      // Users Counter (10,000)
      let usersStart = 0;
      const usersEnd = 10000;
      const usersTimer = setInterval(() => {
        usersStart += 250;
        if (usersStart >= usersEnd) {
          setUsersCount(usersEnd);
          clearInterval(usersTimer);
        } else {
          setUsersCount(usersStart);
        }
      }, 30);

      // Startups Counter (2,800)
      let startupsStart = 0;
      const startupsEnd = 2800;
      const startupsTimer = setInterval(() => {
        startupsStart += 70;
        if (startupsStart >= startupsEnd) {
          setStartupsCount(startupsEnd);
          clearInterval(startupsTimer);
        } else {
          setStartupsCount(startupsStart);
        }
      }, 30);

      return () => {
        clearInterval(fundedTimer);
        clearInterval(usersTimer);
        clearInterval(startupsTimer);
      };
    }
  }, [isVisible]);

  // Auto-typing effect
  useEffect(() => {
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
        const newText = currentWord.substring(0, currentText.length + 1);
        
        if (newText.length === currentWord.length) {
          setTypingText(newText);
          setTimeout(() => {
            setIsDeleting(true);
          }, 2500);
          return;
        }
        
        setTypingText(newText);
        typingTimeoutRef.current = setTimeout(type, typeSpeed);
      } else {
        const newText = currentWord.substring(0, currentText.length - 1);
        
        if (newText.length === 0) {
          setTypingText('');
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPING_WORDS.length);
          return;
        }
        
        setTypingText(newText);
        typingTimeoutRef.current = setTimeout(type, typeSpeed);
      }
    };

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

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
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
          
          {/* LEFT COLUMN - Content */}
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

              {/* Feature 3 - WITH COUNTER */}
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
                    ₹{fundedCount}Cr+ Funded
                  </h4>
                  <p className={`text-[10px] sm:text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {formatNumber(startupsCount)}+ startups
                  </p>
                </div>
              </div>

              {/* Feature 4 - WITH COUNTER */}
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
                    {formatNumber(usersCount)}+ Users
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

          {/* RIGHT COLUMN */}
          <div className={`relative h-[500px] sm:h-[550px] lg:h-[600px] flex items-center justify-center transition-all duration-1000 delay-400 ${
            isVisible['hero'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* CONNECTION LINES SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
              {/* Line to Bubble 1 (Top Right) */}
              <line 
                x1="50%" 
                y1="50%" 
                x2="82%" 
                y2="18%" 
                stroke={isDark ? 'rgba(0,184,169,0.4)' : 'rgba(0,184,169,0.25)'} 
                strokeWidth="2" 
                strokeDasharray="8,8"
                className="animate-dash"
              />
              
              {/* Line to Bubble 2 (Bottom Right) */}
              <line 
                x1="50%" 
                y1="50%" 
                x2="82%" 
                y2="82%" 
                stroke={isDark ? 'rgba(147,51,234,0.4)' : 'rgba(147,51,234,0.25)'} 
                strokeWidth="2" 
                strokeDasharray="8,8"
                className="animate-dash"
                style={{ animationDelay: '0.5s' }}
              />
              
              {/* Line to Bubble 3 (Bottom Left) */}
              <line 
                x1="50%" 
                y1="50%" 
                x2="18%" 
                y2="82%" 
                stroke={isDark ? 'rgba(6,182,212,0.4)' : 'rgba(6,182,212,0.25)'} 
                strokeWidth="2" 
                strokeDasharray="8,8"
                className="animate-dash"
                style={{ animationDelay: '1s' }}
              />
              
              {/* Line to Bubble 4 (Top Left) */}
              <line 
                x1="50%" 
                y1="50%" 
                x2="18%" 
                y2="18%" 
                stroke={isDark ? 'rgba(236,72,153,0.4)' : 'rgba(236,72,153,0.25)'} 
                strokeWidth="2" 
                strokeDasharray="8,8"
                className="animate-dash"
                style={{ animationDelay: '1.5s' }}
              />
            </svg>

            {/* Center Hero Image */}
            <div className={`relative z-40 text-center group cursor-pointer`}>
              <img 
                src={heroImage} 
                alt="EVO-A Platform" 
                className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl mx-auto"
              />
            </div>

            {/* Floating Bubbles */}
            <div className="absolute inset-0 pointer-events-none z-10">
              
              {/* Bubble 1 - Top Right */}
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

              {/* Bubble 2 - Bottom Right */}
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

              {/* Bubble 3 - Bottom Left */}
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

              {/* Bubble 4 - Top Left */}
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
  );
}
