import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/logo.avif";
import VideoReel from "../../components/shared/VideoReel";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSendOTP = () => {
    // Navigate to verify OTP page
    navigate("/verify-otp");
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Left Side - Video Reel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">
        <VideoReel />
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
          <div className={`-2xl p-5 sm:p-6 ${
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
                  className={`w-full px-4 py-2.5 sm:py-3 text-sm border focus:outline-none focus:ring-2 transition-all ${
                    isDark 
                      ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' 
                      : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'
                  }`}
                />
              </div>

              {/* Send OTP Button */}
              <button
                type="button"
                onClick={handleSendOTP}
                className="w-full py-2.5 sm:py-3 text-sm font-semibold transition-all duration-200 bg-[#00B8A9] text-white hover:bg-[#00A89A] shadow-lg shadow-[#00B8A9]/30"
              >
                Send OTP Code
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
              Remember your password?{' '}
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
