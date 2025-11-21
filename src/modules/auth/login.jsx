import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-[375px] bg-white rounded-2xl shadow-lg border border-gray-200">
        <div className="text-xs text-[#223969] font-semibold pt-7 px-7">
          EVO-A / login
        </div>
        <h1 className="text-3xl font-extrabold text-black mb-2 px-7 pt-3 leading-snug tracking-tight">
          Hey,<br />Login Now!
        </h1>
        <div className="px-7 pb-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full mt-4 mb-3 px-4 py-3 rounded-lg bg-gray-100 border-none text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223969] placeholder-gray-400"
          />
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-base pr-12 border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223969] placeholder-gray-400"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-[#223969] text-xl"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
          </div>
          <div className="mb-2 text-right">
            <a href="#" className="text-sm text-[#2774CA] hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            className="w-full mt-3 bg-[#223969] hover:bg-[#183857] text-white font-semibold py-3 rounded-lg text-base shadow transition-colors"
          >
            Sign in
          </button>
        </div>
        <div className="px-7 mt-6 pb-7 text-center text-sm">
          <span className="text-gray-700">don't have an account, </span>
          <a
            href="#"
            className="ml-1 text-[#2774CA] font-medium hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
