import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  FaHome,
  FaSearch,
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaDollarSign,
  FaBars
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import logo from "../../assets/logo.avif";

export default function Sidenav() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeNav, setActiveNav] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg transition-colors ${
          isDark ? 'bg-black/80 text-white border border-white/10' : 'bg-white text-black border border-gray-200'
        } shadow-lg`}
        aria-label="Toggle menu"
      >
        <FaBars size={20} />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 border-r transition-all duration-300 z-40 ${
        isDark ? 'bg-black border-white/10' : 'bg-white border-gray-200'
      } ${
        isMobileMenuOpen 
          ? 'translate-x-0' 
          : '-translate-x-full lg:translate-x-0'
      } lg:block`}>
      <div className="flex flex-col h-full px-3 sm:px-4 py-4 sm:py-6">
        {/* Evoa Logo */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
          <img 
            src={logo} 
            alt="Evoa Logo" 
            className="h-10 sm:h-14 w-auto object-contain"
          />
          <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Evoa
          </h1>
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`ml-auto lg:hidden p-1 rounded-lg transition-colors ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
            }`}
            aria-label="Close menu"
          >
            <svg className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto">
          {/* Home */}
          <button
            onClick={() => {
              setActiveNav('home');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'home'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            {activeNav === 'home' ? (
              <FaHome size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            ) : (
              <HiHome size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            )}
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Home
            </span>
          </button>

          {/* Search */}
          <button
            onClick={() => {
              setActiveNav('search');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'search'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaSearch size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Search
            </span>
          </button>

          {/* Explore */}
          <button
            onClick={() => {
              setActiveNav('explore');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'explore'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaCompass size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Explore
            </span>
          </button>

          {/* Profile */}
          <button
            onClick={() => {
              setActiveNav('profile');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'profile'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden shrink-0">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Profile
            </span>
          </button>

          {/* Hiring */}
          <button
            onClick={() => {
              setActiveNav('hiring');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'hiring'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaBriefcase size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Hiring
            </span>
          </button>

          {/* Roles and Product */}
          <button
            onClick={() => {
              setActiveNav('roles-and-product');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'roles-and-product'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaUsers size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Roles and Product
            </span>
          </button>

          {/* Launched and Got */}
          <button
            onClick={() => {
              setActiveNav('launched-and-got');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'launched-and-got'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaRocket size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Launched and Got
            </span>
          </button>

          {/* Funded and More */}
          <button
            onClick={() => {
              setActiveNav('funded-and-more');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'funded-and-more'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaDollarSign size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Funded and More
            </span>
          </button>

        </nav>

        {/* Bottom Navigation */}
        <div className={`mt-auto space-y-1 pt-4 border-t ${
          isDark ? 'border-white/10' : 'border-gray-200'
        }`}>
          {/* More */}
          <button
            onClick={() => {
              setActiveNav('more');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-colors ${
              activeNav === 'more'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaBars size={20} className={`sm:w-6 sm:h-6 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={`text-sm sm:text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              More
            </span>
          </button>

        
        </div>

      </div>
    </aside>
    </>
  );
}

