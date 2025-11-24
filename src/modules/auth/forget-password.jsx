import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/logo.avif";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [imagesVisible, setImagesVisible] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setImagesVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSendOTP = () => {
    // Navigate to verify OTP page
    navigate("/verify-otp");
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Left Side - Image Collage */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-1 lg:p-2 pl-2 lg:pl-4 pr-0.5 lg:pr-1">
          {/* Image Collage Container */}
          <div className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[600px]">
            {/* Image 1 - Top Left - Animates from top-left */}
            <div className={`absolute top-0 left-0 w-32 h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 transform -rotate-12 shadow-2xl transition-all duration-700 ease-out ${
              imagesVisible 
                ? 'translate-x-0 translate-y-0 opacity-100' 
                : '-translate-x-full -translate-y-full opacity-0'
            }`} style={{ transitionDelay: '0.1s' }}>
              <img
                src="https://images.pexels.com/photos/1181641/pexels-photo-1181641.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Startup meeting"
                className="w-full h-full object-cover rounded-lg border-2 border-white/20"
              />
            </div>
            
            {/* Image 2 - Center Large - Animates from bottom */}
            <div className={`absolute top-8 lg:top-10 xl:top-16 left-8 lg:left-12 xl:left-20 w-44 h-56 lg:w-52 lg:h-64 xl:w-60 xl:h-72 2xl:w-64 2xl:h-80 transform rotate-6 shadow-2xl z-10 transition-all duration-700 ease-out ${
              imagesVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-full opacity-0'
            }`} style={{ transitionDelay: '0.3s' }}>
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg border-2 border-white/20"
              />
            </div>
            
            {/* Image 3 - Bottom Right - Animates from right */}
            <div className={`absolute bottom-0 right-0 w-36 h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 transform rotate-12 shadow-2xl transition-all duration-700 ease-out ${
              imagesVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`} style={{ transitionDelay: '0.2s' }}>
              <img
                src="https://images.pexels.com/photos/1181641/pexels-photo-1181641.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Business growth"
                className="w-full h-full object-cover rounded-lg border-2 border-white/20"
              />
            </div>
            
            {/* Image 4 - Bottom Left - Animates from left */}
            <div className={`absolute bottom-4 lg:bottom-6 xl:bottom-8 left-0 w-28 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 transform -rotate-6 shadow-2xl transition-all duration-700 ease-out ${
              imagesVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-full opacity-0'
            }`} style={{ transitionDelay: '0.4s' }}>
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Innovation"
                className="w-full h-full object-cover rounded-lg border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:pl-1 lg:pr-4 xl:pl-2 xl:pr-8 2xl:pr-12">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="mb-6 sm:mb-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <img 
                src={logo} 
                alt="EVO-A Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <span className={`text-2xl sm:text-3xl font-bold tracking-wide ${
                isDark ? 'text-white' : 'text-black'
              }`}>EVO-A</span>
            </div>
            <h1 className={`text-xl sm:text-2xl font-semibold mb-1 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Forgot Password?
            </h1>
            <p className={`text-xs sm:text-sm ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              No worries! Enter your email and we'll send you an OTP code to reset your password.
            </p>
          </div>

          {/* Form Container */}
          <div className={`rounded-2xl p-5 sm:p-6 ${
            isDark 
              ? 'bg-black/50 border border-white/10' 
              : 'bg-white border border-black/10'
          }`}>
            <form className="space-y-3">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 sm:py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 transition-all ${
                    isDark 
                      ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20' 
                      : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-black/40 focus:ring-black/20'
                  }`}
                />
              </div>

              {/* Send OTP Button */}
              <button
                type="button"
                onClick={handleSendOTP}
                className={`w-full py-2.5 sm:py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                Send OTP Code
              </button>
            </form>
          </div>

          {/* Sign In Link */}
          <div className={`mt-4 text-center py-4 rounded-2xl ${
            isDark 
              ? 'bg-black/50 border border-white/10' 
              : 'bg-white border border-black/10'
          }`}>
            <p className={`text-sm ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Remember your password?{' '}
              <Link 
                to="/login" 
                className={`font-semibold transition-colors ${
                  isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
                }`}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
