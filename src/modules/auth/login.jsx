import React, { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser, FiPhone, FiGithub, FiTwitter } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 px-8 py-10 transform transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 text-[15px] text-[#223969] font-semibold mb-3 bg-blue-50 px-4 py-2 rounded-full">
            <FiUser className="text-[#223969]" size={16} />
            EVO-A / login
          </div>
        </div>
        
        <h1 className="text-[32px] font-bold text-gray-900 mb-6 text-center leading-tight">
          Hey, <span className="text-[#223969]">Login Now!</span>
        </h1>
        
        <div className="space-y-5">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiMail size={20} />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-12 pr-5 py-4 rounded-xl text-[16px] bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#223969] focus:border-transparent transition-all duration-300 placeholder-gray-400"
            />
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiLock size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-4 rounded-xl text-[16px] bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#223969] focus:border-transparent transition-all duration-300 placeholder-gray-400"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
          </div>
          
          <div className="flex justify-end mb-2">
            <a href="#" className="text-[15px] text-[#2774CA] font-medium hover:text-[#1e5ea6] transition-colors flex items-center gap-1">
              <FiPhone size={14} />
              Forgot password?
            </a>
          </div>
          
          <button
            type="button"
            className="w-full bg-gradient-to-r from-[#223969] to-[#2d4a85] hover:from-[#1c2f56] hover:to-[#253e70] text-white font-semibold py-4 rounded-xl text-[17px] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <FiLock size={18} />
            Sign in
          </button>
        </div>
        
        <div className="mt-8 text-center text-[15px] text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-[#2774CA] font-semibold hover:text-[#1e5ea6] transition-colors flex items-center justify-center gap-1 inline-flex">
            <FiUser size={14} />
            Sign up
          </a>
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-gray-400 text-sm">or continue with</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        
        <div className="mt-6 flex justify-center space-x-4">
          <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors hover:border-red-300">
            <FcGoogle size={22} />
          </button>
          <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors hover:border-blue-400">
            <FiTwitter className="text-blue-400" size={20} />
          </button>
          <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors hover:border-gray-400">
            <FiGithub className="text-gray-700" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}