import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/logo.avif";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setImagesVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Left Side - Image Collage */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-4 pl-8 pr-2">
          {/* Image Collage Container */}
          <div className="relative w-full max-w-md h-[600px]">
            {/* Image 1 - Top Left - Animates from top-left */}
            <div className={`absolute top-0 left-0 w-48 h-48 transform -rotate-12 shadow-2xl transition-all duration-700 ease-out ${
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
            <div className={`absolute top-16 left-20 w-64 h-80 transform rotate-6 shadow-2xl z-10 transition-all duration-700 ease-out ${
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
            <div className={`absolute bottom-0 right-0 w-52 h-52 transform rotate-12 shadow-2xl transition-all duration-700 ease-out ${
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
            <div className={`absolute bottom-8 left-0 w-44 h-44 transform -rotate-6 shadow-2xl transition-all duration-700 ease-out ${
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

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 lg:pl-2 lg:pr-12">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="mb-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <img 
                src={logo} 
                alt="EVO-A Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className={`text-3xl font-bold tracking-wide ${
                isDark ? 'text-white' : 'text-black'
              }`}>EVO-A</span>
            </div>
            <h1 className={`text-2xl font-semibold mb-1 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Welcome Back
            </h1>
            <p className={`text-sm ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Sign in to continue to your account
            </p>
          </div>

          {/* Form Container */}
          <div className={`rounded-2xl p-6 ${
            isDark 
              ? 'bg-black/50 border border-white/10' 
              : 'bg-white border border-black/10'
          }`}>
            <form className="space-y-3">
              {/* Email/Username Input */}
              <div>
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  className={`w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 transition-all ${
                    isDark 
                      ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20' 
                      : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-black/40 focus:ring-black/20'
                  }`}
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 transition-all pr-12 ${
                      isDark 
                        ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20' 
                        : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-black/40 focus:ring-black/20'
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

              {/* Login Button */}
              <button
                type="submit"
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                Log in
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

              {/* Facebook Login */}
              <button
                type="button"
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isDark 
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' 
                    : 'bg-black/5 text-black border border-black/20 hover:bg-black/10'
                }`}
              >
                <FaFacebook size={18} />
                Log in with Facebook
              </button>

              {/* Forgot Password */}
              <div className="text-center mt-4">
                <Link 
                  to="/forget-password" 
                  className={`text-xs transition-colors ${
                    isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                  }`}
                >
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>

          {/* Sign Up Link */}
          <div className={`mt-4 text-center py-4 rounded-2xl ${
            isDark 
              ? 'bg-black/50 border border-white/10' 
              : 'bg-white border border-black/10'
          }`}>
            <p className={`text-sm ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className={`font-semibold transition-colors ${
                  isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
                }`}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}