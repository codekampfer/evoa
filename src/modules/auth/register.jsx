import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/logo.avif";
import VideoReel from "../../components/shared/VideoReel";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Left Side - Video Reel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">
        <VideoReel />
      </div>

      {/* Right Side - Register Form */}
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
              Create Account
            </h1>
            <p className={`text-xs sm:text-sm ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Join us and start your journey today
            </p>
          </div>

          {/* Form Container */}
          <div className={`-2xl p-5 sm:p-6 ${
            isDark 
              ? 'bg-black/50 border border-white/10' 
              : 'bg-white border border-black/10'
          }`}>
            <form 
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                // Navigate to choice-role after sign up
                navigate('/choice-role');
              }}
            >
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full px-4 py-2.5 sm:py-3 text-sm border focus:outline-none focus:ring-2 transition-all ${
                    isDark 
                      ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' 
                      : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'
                  }`}
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full px-4 py-2.5 sm:py-3 text-sm border focus:outline-none focus:ring-2 transition-all pr-12 ${
                      isDark 
                        ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' 
                        : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'
                    }`}
                  />
                  <button
                    type="button"
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors p-1.5 ${
                      isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className={`w-full px-4 py-2.5 sm:py-3 text-sm border focus:outline-none focus:ring-2 transition-all pr-12 ${
                      isDark 
                        ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' 
                        : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'
                    }`}
                  />
                  <button
                    type="button"
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors p-1.5 ${
                      isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                    }`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 text-sm font-semibold transition-all duration-200 bg-[#00B8A9] text-white hover:bg-[#00A89A] shadow-lg shadow-[#00B8A9]/30"
              >
                Sign up
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className={`flex-1 h-px ${
                  isDark ? 'bg-white/20' : 'bg-black/20'
                }`}></div>
                <span className={`px-4 text-xs font-medium ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>OR</span>
                <div className={`flex-1 h-px ${
                  isDark ? 'bg-white/20' : 'bg-black/20'
                }`}></div>
              </div>

              {/* Google Sign Up */}
              <button
                type="button"
                className={`w-full py-2.5  text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isDark 
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' 
                    : 'bg-black/5 text-black border border-black/20 hover:bg-black/10'
                }`}
              >
                <FaGoogle size={18} />
                Continue with Google
              </button>
            </form>
          </div>

          {/* Sign In Link */}
          <div className={`mt-4 text-center py-4 -2xl ${
            isDark 
              ? 'bg-black/50 border border-white/10' 
              : 'bg-white border border-black/10'
          }`}>
            <p className={`text-sm ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="font-semibold transition-colors text-[#00B8A9] hover:text-[#00A89A]"
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

