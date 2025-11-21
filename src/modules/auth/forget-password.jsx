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
    <div className="h-screen flex flex-col bg-white overflow-hidden">


      {/* Main Content with Hexagonal Pattern Background */}
      <div className="flex-1 relative hex-pattern overflow-hidden flex items-start md:items-center justify-center">
        <div className="relative z-10 w-full max-w-md mx-auto px-6 py-4 md:py-8">
          {/* EVO-A / login / forget password label */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">EVO-A / login / forget password</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Forget password
          </h1>

          {/* Instruction */}
          <p className="text-sm text-gray-500 mb-8">
            Enter your email to send the OTP code
          </p>

          {/* Form */}
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-base bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#152A6D] focus:border-transparent placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Send OTP Button */}
            <button
              type="button"
              onClick={handleSendOTP}
              className="w-full bg-[#152A6D] hover:bg-[#1a3578] text-white font-semibold py-3 rounded-lg text-base transition-all duration-300 mt-2"
            >
              Send OTP
            </button>
          </div>

          {/* Back to Login Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="text-[#2774CA] font-medium hover:text-[#1e5ea6] transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

