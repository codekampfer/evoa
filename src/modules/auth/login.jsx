import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import { login, googleAuth } from "../../services";
import logo from "../../assets/logo.avif";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setImagesVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
                className="w-full h-full object-cover  border-2 border-white/20"
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
                className="w-full h-full object-cover  border-2 border-white/20"
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
                className="w-full h-full object-cover  border-2 border-white/20"
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
                className="w-full h-full object-cover  border-2 border-white/20"
              />
            </div>
          </div>
        </div>
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
                  className={`w-full px-4 py-2.5 sm:py-3  text-sm border focus:outline-none focus:ring-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    disabled={loading}
                    className={`w-full px-4 py-2.5 sm:py-3  text-sm border focus:outline-none focus:ring-1 transition-all pr-12 disabled:opacity-50 disabled:cursor-not-allowed ${
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
                disabled={loading}
                className={`w-full py-2.5 sm:py-3  text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
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