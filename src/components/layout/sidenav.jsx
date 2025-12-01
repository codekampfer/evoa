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
  FaBars,
  FaTh
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import logo from "../../assets/logo.avif";

export default function Sidenav() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeNav, setActiveNav] = useState('home');

  return (
    <aside className={`fixed left-0 top-0 h-screen w-64 border-r transition-colors duration-300 ${
      isDark ? 'bg-black border-white/10' : 'bg-white border-gray-200'
    } hidden lg:block`}>
      <div className="flex flex-col h-full px-4 py-6">
        {/* Evoa Logo */}
        <div className="mb-8 flex items-center gap-3">
          <img 
            src={logo} 
            alt="Evoa Logo" 
            className="h-14 w-auto object-contain"
          />
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Evoa
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1">
          {/* Home */}
          <button
            onClick={() => setActiveNav('home')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'home'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            {activeNav === 'home' ? (
              <FaHome size={24} className={isDark ? 'text-white' : 'text-black'} />
            ) : (
              <HiHome size={24} className={isDark ? 'text-white' : 'text-black'} />
            )}
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Home
            </span>
          </button>

          {/* Search */}
          <button
            onClick={() => setActiveNav('search')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'search'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaSearch size={24} className={isDark ? 'text-white' : 'text-black'} />
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Search
            </span>
          </button>

          {/* Explore */}
          <button
            onClick={() => setActiveNav('explore')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'explore'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaCompass size={24} className={isDark ? 'text-white' : 'text-black'} />
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Explore
            </span>
          </button>

          {/* Profile */}
          <button
            onClick={() => setActiveNav('profile')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'profile'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Profile
            </span>
          </button>

          {/* Hiring */}
          <button
            onClick={() => setActiveNav('hiring')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'hiring'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaBriefcase size={24} className={isDark ? 'text-white' : 'text-black'} />
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Hiring
            </span>
          </button>

          {/* Roles and Product */}
          <button
            onClick={() => setActiveNav('roles-and-product')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'roles-and-product'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaUsers size={24} className={isDark ? 'text-white' : 'text-black'} />
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Roles and Product
            </span>
          </button>

          {/* Launched and Got */}
          <button
            onClick={() => setActiveNav('launched-and-got')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'launched-and-got'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaRocket size={24} className={isDark ? 'text-white' : 'text-black'} />
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Launched and Got
            </span>
          </button>

          {/* Funded and More */}
          <button
            onClick={() => setActiveNav('funded-and-more')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'funded-and-more'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaDollarSign size={24} className={isDark ? 'text-white' : 'text-black'} />
            <span className={`text-base font-medium ${
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
            onClick={() => setActiveNav('more')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeNav === 'more'
                ? isDark ? 'bg-white/10' : 'bg-gray-100'
                : 'hover:bg-white/5'
            }`}
          >
            <FaBars size={24} className={isDark ? 'text-white' : 'text-black'} />
            <span className={`text-base font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              More
            </span>
          </button>

        
        </div>

      </div>
    </aside>
  );
}

