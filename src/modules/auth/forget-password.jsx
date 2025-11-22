import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // Navigate to verify OTP page
    navigate("/verify-otp");
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-[#0B1812] via-[#060E09] to-[#0B1812] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#00FF78]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00FF78]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-y-auto flex items-start md:items-center justify-center px-4 py-8">
        <div className="relative z-10 w-full max-w-md mx-auto">
          {/* Card Container */}
          <div className="bg-[#253D32]/40 backdrop-blur-sm border border-[#00FF78]/20 rounded-2xl p-8 md:p-10 shadow-2xl">
            {/* Breadcrumb */}
            <div className="mb-6">
              <span className="text-xs text-[#00FF78]/70 font-medium tracking-wider uppercase">EVO-A / login / forget password</span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Forgot Password?
              </h1>
              <p className="text-sm text-white/60">
                No worries! Enter your email and we'll send you an OTP code to reset your password.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl text-base bg-[#253D32]/80 border border-[#00FF78]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF78]/50 focus:border-[#00FF78] placeholder-white/40 shadow-lg transition-all duration-300 hover:border-[#00FF78]/40"
                />
              </div>

              {/* Send OTP Button */}
              <button
                type="button"
                onClick={handleSendOTP}
                className="w-full bg-gradient-to-r from-[#00FF78] to-[#00FF78]/90 hover:from-[#00FF78]/90 hover:to-[#00FF78] text-[#060E09] font-bold py-4 rounded-xl text-base transition-all duration-300 mt-6 shadow-lg hover:shadow-[#00FF78]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send OTP Code
              </button>
            </form>

            {/* Back to Login Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-white/60">
                Remember your password?{' '}
                <Link to="/login" className="text-[#00FF78] font-semibold hover:text-[#00FF78]/80 transition-colors hover:underline">
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

