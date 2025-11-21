export default function Login() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
        <p className="text-gray-600 mb-8">Welcome back to EVO-A</p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003F91]"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003F91]"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full rounded-full bg-[#003F91] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#012f6b]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

