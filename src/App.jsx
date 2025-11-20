function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      {/* Main Card - Full Width */}
      <div className="w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 text-white border-b border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-center mb-2">
            EVOA Project
          </h1>
          <p className="text-center text-purple-200 text-lg">
            Successfully Created & Ready to Start! 🚀
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Success Message */}
          <div className="bg-green-900/30 border-l-4 border-green-500 p-4 mb-6 rounded">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-300 font-semibold">
                Your project has been initialized successfully!
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Vite */}
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-700/50 hover:border-purple-500 transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg">
                    V
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Vite</h3>
                    <p className="text-sm text-purple-300">v6.0+</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Lightning Fast Build Tool</p>
              </div>

              {/* React */}
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-700/50 hover:border-blue-500 transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg">
                    R
                  </div>
                  <div>
                    <h3 className="font-bold text-white">React</h3>
                    <p className="text-sm text-blue-300">v18.3+</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">UI Library</p>
              </div>

              {/* Tailwind CSS */}
              <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 p-6 rounded-xl border border-cyan-700/50 hover:border-cyan-500 transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg">
                    T
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Tailwind CSS</h3>
                    <p className="text-sm text-cyan-300">v4.0+</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Utility-First CSS</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Features Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Hot Module Replacement (HMR)
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ESLint Configuration
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Optimized Production Build
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Modern JavaScript Support
              </div>
            </div>
          </div>

          {/* Quick Start Commands */}
          <div className="bg-black/40 rounded-xl p-6 border border-gray-700">
            <h3 className="font-bold text-white mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Quick Start Commands
            </h3>
            <div className="space-y-2">
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm border border-gray-700">
                npm run dev <span className="text-gray-500"># Start development server</span>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm border border-gray-700">
                npm run build <span className="text-gray-500"># Build for production</span>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm border border-gray-700">
                npm run preview <span className="text-gray-500"># Preview production build</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900/50 px-8 py-4 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            Ready to build something amazing? Let's code! 💻✨
          </p>
        </div>
      </div>

      {/* Version Info Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-gray-400 text-sm">
          Powered by Vite ⚡ React ⚛️ Tailwind CSS 🎨
        </p>
      </div>
    </div>
  )
}

export default App
