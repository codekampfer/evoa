import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();

  const handleVerify = () => {
    // Navigate to create new password page
    navigate("/create-new-password");
  };

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length && i < 4; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
  };

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">


      {/* Main Content with Hexagonal Pattern Background */}
      <div className="flex-1 relative hex-pattern overflow-y-auto flex items-start md:items-center justify-center">
        <div className="relative z-10 w-full max-w-md mx-auto px-6 py-4 md:py-8">
          {/* EVO-A / login / forget password / verify OTP label */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">EVO-A / login / forget password / verify OTP</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Verify OTP code
          </h1>

          {/* Instruction */}
          <p className="text-sm text-gray-500 mb-8">
            We send the OTP code via email to di*****@gmail.com
          </p>

          {/* Form */}
          <div className="space-y-4">
            {/* OTP Input Fields */}
            <div className="flex gap-3 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-16 h-16 text-center text-2xl font-semibold rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#152A6D] focus:border-transparent shadow-sm"
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="button"
              onClick={handleVerify}
              className="w-full bg-[#152A6D] hover:bg-[#1a3578] text-white font-semibold py-3 rounded-lg text-base transition-all duration-300 mt-2"
            >
              Verify
            </button>
          </div>

          {/* Resend OTP Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Didn't receive code?{' '}
            <a href="#" className="text-[#2774CA] font-medium hover:text-[#1e5ea6] transition-colors">
              Resend OTP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

