import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
              }`}>EVO-A / login / forget password / verify OTP</span>
            </div>

            {/* Heading */}
            <div className="mb-8 text-center">
              <h1 className={`text-4xl md:text-5xl font-bold mb-3 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Verify OTP Code
              </h1>
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                We've sent a 4-digit code to <span className={`font-medium ${
                  isDark ? 'text-white' : 'text-black'
                }`}>di*****@gmail.com</span>
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
                    className={`w-16 h-16 md:w-20 md:h-20 text-center text-3xl font-bold rounded-xl border-2 focus:outline-none focus:ring-2 shadow-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-black/80 border-white/30 text-white focus:ring-white/50 focus:border-white hover:border-white/50' 
                        : 'bg-white border-black/40 text-black focus:ring-black/50 focus:border-black hover:border-black/50'
                    }`}
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                type="button"
                onClick={handleVerify}
                className={`w-full font-bold py-4 rounded-xl text-base transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                Verify Code
              </button>
            </form>

            {/* Resend OTP Link */}
            <div className="mt-8 text-center">
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-600'
              }`}>
                Didn't receive code?{' '}
                <a href="#" className={`font-semibold transition-colors hover:underline ${
                  isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
                }`}>
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

