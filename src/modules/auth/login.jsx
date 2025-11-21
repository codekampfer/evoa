import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../assets/logo.avif";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">


      {/* Main Content with Hexagonal Pattern Background */}
      <div className="flex-1 relative hex-pattern overflow-y-auto flex items-start md:items-center justify-center">
        <div className="relative z-10 w-full max-w-md mx-auto px-6 py-4 md:py-8">
          {/* EVO-A / login label */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">EVO-A / login</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Hey,<br />
            Login Now!
          </h1>

          {/* Form */}
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg text-base bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#152A6D] focus:border-transparent placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="w-full px-4 py-3 pr-12 rounded-lg text-base bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#152A6D] focus:border-transparent placeholder-gray-400 shadow-sm"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Forget Password Link */}
            <div className="flex justify-start -mt-1">
              <Link to="/forget-password" className="text-sm text-[#2774CA] hover:text-[#1e5ea6] transition-colors">
                Forget password?
              </Link>
            </div>

            {/* Sign in Button */}
            <button
              type="button"
              className="w-full bg-[#152A6D] hover:bg-[#1a3578] text-white font-semibold py-3 rounded-lg text-base transition-all duration-300 mt-2"
            >
              Sign in
            </button>
          </div>

          {/* Sign up Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            don't have an account,{' '}
            <Link to="/register" className="text-[#2774CA] font-medium hover:text-[#1e5ea6] transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}