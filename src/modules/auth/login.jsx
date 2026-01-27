import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import { login, googleAuth } from "../../services/authService";
import logo from "../../assets/logo.avif";
import VideoReel from "../../components/shared/VideoReel";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });

      // Login successful - navigate based on user role
      const user = response.data.user || response.data;
      const role = user.role?.toLowerCase();

      // Navigate based on role
      if (role === 'startup') {
        navigate('/startup');
      } else if (role === 'investor') {
        navigate('/investor');
      } else if (role === 'incubator') {
        navigate('/incubator');
      } else {
        navigate('/viewer');
      }
    } catch (err) {
      // Handle different error types
      let errorMessage = 'An error occurred. Please try again.';
      
      // Log full error details for debugging
      console.error('Login error details:', {
        status: err.status,
        message: err.message,
        data: err.data,
        fullError: err
      });
      
      if (err.status === 500) {
        // Show server error message if available, otherwise generic message
        if (err.data && (err.data.message || err.data.error || typeof err.data === 'string')) {
          const serverMessage = err.data.message || err.data.error || err.data;
          // If it's just a generic "Internal server error", provide more context
          if (serverMessage === 'Internal server error' || serverMessage === 'Internal server error.') {
            errorMessage = 'Server error occurred. This might be a temporary issue. Please:\n' +
                          '1. Check your email and password are correct\n' +
                          '2. Try again in a few moments\n' +
                          '3. Contact support if the issue persists';
          } else {
            errorMessage = `Server error: ${serverMessage}`;
          }
        } else if (err.message && err.message !== 'Request failed') {
          errorMessage = `Server error: ${err.message}`;
        } else {
          errorMessage = 'Server error. Please check the console for details or try again later.';
        }
      } else if (err.status === 401) {
        errorMessage = 'Invalid email or password. Please check your credentials.';
      } else if (err.status === 400) {
        errorMessage = err.message || 'Invalid request. Please check your input.';
      } else if (err.status === 404) {
        errorMessage = 'API endpoint not found. Please contact support.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      // Note: In a real implementation, you would get the idToken from Google OAuth
      // This is a placeholder - you'll need to integrate Google OAuth SDK
      const idToken = await getGoogleIdToken(); // Implement this function
      
      const response = await googleAuth({ idToken });
      
      // Navigate based on user role
      const user = response.data.user || response.data;
      const role = user.role?.toLowerCase();

      if (role === 'startup') {
        navigate('/startup');
      } else if (role === 'investor') {
        navigate('/investor');
      } else if (role === 'incubator') {
        navigate('/incubator');
      } else {
        navigate('/viewer');
      }
    } catch (err) {
      setError(err.message || 'Google authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Placeholder for Google OAuth integration
  const getGoogleIdToken = async () => {
    // TODO: Implement Google OAuth integration
    // This should use Google Sign-In SDK to get the idToken
    throw new Error('Google OAuth not implemented yet');
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Left Side - Video Reel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">
        <VideoReel />
      </div>

      {/* Right Side - Login Form */}
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
              Hey, Login Now!
            </h1>
            <p className={`text-xs sm:text-sm ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Sign in to continue to your account
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
              onSubmit={handleSubmit}
            >
              {/* Error Message */}
              {error && (
                <div className={`p-3 text-sm border ${
                  isDark 
                    ? 'bg-red-500/10 border-red-500/30 text-red-400' 
                    : 'bg-red-50 border-red-200 text-red-600'
                }`}>
                  {error}
                </div>
              )}

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  disabled={loading}
                  className={`w-full px-4 py-2.5 sm:py-3 text-sm border focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    disabled={loading}
                    className={`w-full px-4 py-2.5 sm:py-3 text-sm border focus:outline-none focus:ring-2 transition-all pr-12 disabled:opacity-50 disabled:cursor-not-allowed ${
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

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 sm:py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-[#00B8A9] text-white hover:bg-[#00A89A] shadow-lg shadow-[#00B8A9]/30"
              >
                {loading ? 'Signing in...' : 'Sign in'}
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

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className={`w-full py-2.5  text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark 
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' 
                    : 'bg-black/5 text-black border border-black/20 hover:bg-black/10'
                }`}
              >
                <FaGoogle size={18} />
                {loading ? 'Authenticating...' : 'Login with Google'}
              </button>

              {/* Forgot Password */}
              <div className="text-center mt-4">
                <Link 
                  to="/forget-password" 
                  className="text-xs transition-colors text-[#00B8A9] hover:text-[#00A89A] font-medium"
                >
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>

          {/* Sign Up Link */}
          <div className={`mt-4 text-center py-4 -2xl ${
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
                className="font-semibold transition-colors text-[#00B8A9] hover:text-[#00A89A]"
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