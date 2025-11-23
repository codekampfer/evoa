import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/logo.avif";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`h-screen flex flex-col overflow-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-black' 
        : 'bg-white'
    }`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl ${
          isDark ? 'bg-white/5' : 'bg-black/5'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-white/3' : 'bg-black/3'
        }`}></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-y-auto flex items-start md:items-center justify-center px-4 py-8">
        <div className="relative z-10 w-full max-w-md mx-auto">
          {/* Card Container */}
          <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 shadow-2xl ${
            isDark 
              ? 'bg-black/40 border-white/20' 
              : 'bg-white border-black/30'
          }`}>
            {/* Breadcrumb */}
            <div className="mb-6">
              <span className={`text-xs font-medium tracking-wider uppercase ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}>EVO-A / register</span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className={`text-4xl md:text-5xl font-bold mb-3 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Create Account
              </h1>
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                Join us and start your journey today
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className={`block text-sm font-medium ${
                  isDark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3.5 rounded-xl text-base border focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white shadow-lg transition-all duration-300 hover:border-white/40 ${
                    isDark 
                      ? 'bg-black/80 border-white/20 text-white placeholder-white/40 focus:ring-white/50 focus:border-white hover:border-white/40' 
                      : 'bg-white border-black/30 text-black placeholder-black/40 focus:ring-black/50 focus:border-black hover:border-black/40'
                  }`}
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className={`block text-sm font-medium ${
                  isDark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className={`w-full px-4 py-3.5 pr-12 rounded-xl text-base border focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white shadow-lg transition-all duration-300 hover:border-white/40 ${
                      isDark 
                        ? 'bg-[#253D32]/80 border-[#00FF78]/20 text-white placeholder-white/40' 
                        : 'bg-white border-[#00FF78]/30 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                  <button
                    type="button"
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors p-1 ${
                      isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className={`block text-sm font-medium ${
                  isDark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className={`w-full px-4 py-3.5 pr-12 rounded-xl text-base border focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white shadow-lg transition-all duration-300 hover:border-white/40 ${
                      isDark 
                        ? 'bg-[#253D32]/80 border-[#00FF78]/20 text-white placeholder-white/40' 
                        : 'bg-white border-[#00FF78]/30 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                  <button
                    type="button"
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors p-1 ${
                      isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                    }`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
                  </button>
                </div>
              </div>

              {/* Sign up Button */}
              <button
                type="button"
                className={`w-full font-bold py-4 rounded-xl text-base transition-all duration-300 mt-6 shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                Create Account
              </button>
            </form>

            {/* Sign in Link */}
            <div className="mt-8 text-center">
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                Already have an account?{' '}
                <Link to="/login" className={`font-semibold transition-colors hover:underline ${
                  isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
                }`}>
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

