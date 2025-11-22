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
              <span className="text-xs text-[#00FF78]/70 font-medium tracking-wider uppercase">EVO-A / login / forget password / verify OTP</span>
            </div>

            {/* Heading */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Verify OTP Code
              </h1>
              <p className="text-sm text-white/60">
                We've sent a 4-digit code to <span className="text-[#00FF78] font-medium">di*****@gmail.com</span>
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* OTP Input Fields */}
              <div className="flex gap-4 justify-center">
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
                    className="w-16 h-16 md:w-20 md:h-20 text-center text-3xl font-bold rounded-xl bg-[#253D32]/80 border-2 border-[#00FF78]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#00FF78]/50 focus:border-[#00FF78] shadow-lg transition-all duration-300 hover:border-[#00FF78]/50"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                type="button"
                onClick={handleVerify}
                className="w-full bg-gradient-to-r from-[#00FF78] to-[#00FF78]/90 hover:from-[#00FF78]/90 hover:to-[#00FF78] text-[#060E09] font-bold py-4 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-[#00FF78]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Verify Code
              </button>
            </form>

            {/* Resend OTP Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-white/60">
                Didn't receive code?{' '}
                <a href="#" className="text-[#00FF78] font-semibold hover:text-[#00FF78]/80 transition-colors hover:underline">
                  Resend OTP
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

