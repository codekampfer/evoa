import { useState } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import logo from '../../assets/logo.avif';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header className={`bg-transparent transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Main navbar */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo - Reduced size */}
          <Link to="/" className="flex items-center gap-2 md:gap-2.5 group transition-transform duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="EVO-A Logo" 
              className="h-9 w-9 object-contain md:h-10 md:w-10"
            />
            <span className={`text-lg font-bold tracking-wide md:text-xl transition-colors duration-300 ${
              isDark ? 'text-white group-hover:text-white/90' : 'text-gray-900 group-hover:text-gray-700'
            }`}>EVO-A</span>
          </Link>

          {/* Desktop Navigation - Reduced spacing */}
          <nav className="hidden items-center gap-2 text-sm font-medium md:flex md:gap-3">
            <Link to="/blog" className={`px-3 py-1.5 text-sm tracking-wide transition hover:opacity-80 ${
              isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
            }`}>
              Blog
            </Link>
            <Link to="/pitch-us" className={`px-3 py-1.5 text-sm tracking-wide transition hover:opacity-80 ${
              isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
            }`}>
              Pitch Us
            </Link>
            <Link to="/portfolio" className={`px-3 py-1.5 text-sm tracking-wide transition hover:opacity-80 ${
              isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
            }`}>
              Portfolio
            </Link>
            <Link to="/about" className={`px-3 py-1.5 text-sm tracking-wide transition hover:opacity-80 ${
              isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
            }`}>
              About
            </Link>
            <Link to="/contact" className={`px-3 py-1.5 text-sm tracking-wide transition hover:opacity-80 ${
              isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
            }`}>
              Contact
            </Link>
            {/* Theme Toggle - Reduced size */}
            <button
              onClick={toggleTheme}
              className={`rounded-full border px-2.5 py-1.5 text-sm transition flex items-center justify-center ${
                isDark 
                  ? 'border-white/60 hover:bg-white/10 hover:border-white' 
                  : 'border-black/60 hover:bg-black/10 hover:border-black'
              }`}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <HiSun className="h-4 w-4 text-white" />
              ) : (
                <HiMoon className="h-4 w-4 text-black" />
              )}
            </button>
            <Link 
              to="/login"
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition hover:scale-105 ${
                isDark 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              Sign in
            </Link>
          </nav>

          {/* Mobile: Theme Toggle + Hamburger - Reduced size */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-white/0 hover:bg-white/10 focus:ring-white' 
                  : 'bg-gray-900/0 hover:bg-gray-900/10 focus:ring-gray-900'
              }`}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <HiSun className="h-5 w-5 text-white" />
              ) : (
                <HiMoon className="h-5 w-5 text-gray-900" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-white/0 hover:bg-white/10 focus:ring-white' 
                  : 'bg-gray-900/0 hover:bg-gray-900/10 focus:ring-gray-900'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiX className={`h-5 w-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <HiMenu className={`h-5 w-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            onClick={closeMobileMenu}
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}
        
        {/* Full Screen Menu - Optimized sizing */}
        <div
          className={`fixed top-0 right-0 h-full w-full z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${isDark ? 'bg-black' : 'bg-white'}`}
        >
          <nav className={`flex flex-col h-full ${isDark ? 'bg-black' : 'bg-white'}`}>
            {/* Header - Reduced padding */}
            <div className={`flex items-center justify-between px-5 py-4 border-b ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}>
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={logo} 
                  alt="EVO-A Logo" 
                  className="h-9 w-9 object-contain"
                />
                <span className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
                  isDark ? 'text-white group-hover:text-white/90' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  EVO-A
                </span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className={`p-2 rounded-xl transition-all ${
                  isDark 
                    ? 'text-white hover:bg-white/10 active:scale-95' 
                    : 'text-gray-900 hover:bg-gray-100 active:scale-95'
                }`}
                aria-label="Close menu"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Links - Reduced spacing and font size */}
            <div className="flex flex-col flex-1 px-5 py-6 gap-1">
              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-all active:scale-98 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 hover:text-white' 
                    : 'text-gray-900 hover:bg-gray-100 hover:text-black'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/pitch-us"
                onClick={closeMobileMenu}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-all active:scale-98 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 hover:text-white' 
                    : 'text-gray-900 hover:bg-gray-100 hover:text-black'
                }`}
              >
                Pitch Us
              </Link>
              <Link
                to="/portfolio"
                onClick={closeMobileMenu}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-all active:scale-98 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 hover:text-white' 
                    : 'text-gray-900 hover:bg-gray-100 hover:text-black'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-all active:scale-98 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 hover:text-white' 
                    : 'text-gray-900 hover:bg-gray-100 hover:text-black'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-all active:scale-98 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 hover:text-white' 
                    : 'text-gray-900 hover:bg-gray-100 hover:text-black'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Footer - Reduced padding */}
            <div className={`px-5 py-5 border-t space-y-3 ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-all flex items-center justify-between ${
                  isDark 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                <span>Theme</span>
                {isDark ? (
                  <HiSun className="h-5 w-5" />
                ) : (
                  <HiMoon className="h-5 w-5" />
                )}
              </button>

              {/* Sign in Button */}
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className={`w-full rounded-xl px-4 py-3 text-center text-base font-bold transition-all active:scale-98 block ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90 shadow-lg' 
                    : 'bg-black text-white hover:bg-black/90 shadow-lg'
                }`}
              >
                Sign in
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
