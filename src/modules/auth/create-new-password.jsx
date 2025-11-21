import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function CreateNewPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleUpdatePassword = () => {
    // Navigate to login page after updating password
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">


      {/* Main Content with Hexagonal Pattern Background */}
      <div className="flex-1 relative hex-pattern overflow-y-auto flex items-start md:items-center justify-center">
        <div className="relative z-10 w-full max-w-md mx-auto px-6 py-4 md:py-8">
          {/* EVO-A / login / forget password / update password label */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">EVO-A / login / forget password / update password</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Create new password
          </h1>

          {/* Instruction */}
          <p className="text-sm text-gray-500 mb-8">
            Enter a new password to update your password
          </p>

          {/* Form */}
          <div className="space-y-4">
            {/* New Password Input */}
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="new password"
                className="w-full px-4 py-3 pr-12 rounded-lg text-base bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#152A6D] focus:border-transparent placeholder-gray-400 shadow-sm"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowNewPassword(!showNewPassword)}
                tabIndex={-1}
              >
                {showNewPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirm password"
                className="w-full px-4 py-3 pr-12 rounded-lg text-base bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#152A6D] focus:border-transparent placeholder-gray-400 shadow-sm"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                tabIndex={-1}
              >
                {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Update Password Button */}
            <button
              type="button"
              onClick={handleUpdatePassword}
              className="w-full bg-[#152A6D] hover:bg-[#1a3578] text-white font-semibold py-3 rounded-lg text-base transition-all duration-300 mt-2"
            >
              Update password
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

