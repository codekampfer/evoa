import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="w-[390px] bg-white rounded-2xl border border-gray-200 px-8 py-8">
        <div className="text-[14px] text-[#223969] font-semibold mb-3">
          EVO-A/ login
        </div>
        <h1 className="text-[34px] font-extrabold text-black mb-4 leading-tight tracking-tight">
          Hey,<br />Login Now!
        </h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-5 py-4 rounded-lg text-[16px] bg-[#ededed] border-none focus:outline-none focus:ring-2 focus:ring-[#223969] placeholder-gray-500"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="w-full px-5 py-4 rounded-lg text-[16px] bg-[#ededed] pr-12 border-none focus:outline-none focus:ring-2 focus:ring-[#223969] placeholder-gray-500"
            />
            <button
              type="button"
              className="absolute right-4 top-4 text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
          </div>
          <div className="mb-4 text-left pl-1">
            <a href="#" className="text-[15px] text-[#2774CA] hover:underline">
              Forget password?
            </a>
          </div>
          <button
            type="button"
            className="w-full bg-[#223969] hover:bg-[#183857] text-white font-semibold py-4 rounded-lg text-[18px] transition-colors"
          >
            Sign in
          </button>
        </div>
        <div className="mt-7 text-center text-[15px] text-gray-700">
          don't have an account,{' '}
          <a href="#" className="text-[#2774CA] font-medium hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
