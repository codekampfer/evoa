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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        {/* Main navbar */}
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-3.5">
            <img 
              src={logo} 
              alt="EVO-A Logo" 
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />
            <span className={`text-xl font-semibold tracking-wide md:text-2xl ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>EVO-A</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 text-sm font-medium md:flex md:gap-5">
            <button className={`rounded-full border px-4 py-1.5 text-sm tracking-wide transition md:px-5 md:py-1.5 ${
              isDark 
                ? 'border-white/60 text-white hover:bg-white/10 hover:border-white' 
                : 'border-black/60 text-black hover:bg-black/10 hover:border-black'
            }`}>
              For Startups
            </button>
            <button className={`rounded-full border px-4 py-1.5 text-sm tracking-wide transition md:px-5 md:py-1.5 ${
              isDark 
                ? 'border-white/60 text-white hover:bg-white/10 hover:border-white' 
                : 'border-black/60 text-black hover:bg-black/10 hover:border-black'
            }`}>
              For Investors
            </button>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`rounded-full border px-3 py-1.5 text-sm transition flex items-center justify-center ${
                isDark 
                  ? 'border-white/60 hover:bg-white/10 hover:border-white' 
                  : 'border-black/60 hover:bg-black/10 hover:border-black'
              }`}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <HiSun className="h-5 w-5 text-white" />
              ) : (
                <HiMoon className="h-5 w-5 text-black" />
              )}
            </button>
            <Link 
              to="/login"
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition hover:scale-105 md:px-5 md:py-1.5 ${
                isDark 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              Sign in
            </Link>
          </nav>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-white/0 hover:bg-white/10 focus:ring-white' 
                  : 'bg-gray-900/0 hover:bg-gray-900/10 focus:ring-gray-900'
              }`}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <HiSun className="h-6 w-6 text-white" />
              ) : (
                <HiMoon className="h-6 w-6 text-gray-900" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-white/0 hover:bg-white/10 focus:ring-white' 
                  : 'bg-gray-900/0 hover:bg-gray-900/10 focus:ring-gray-900'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiX className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <HiMenu className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slides down */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className={`flex flex-col gap-4 border-t bg-transparent pb-4 pt-4 ${
            isDark ? 'border-white/20' : 'border-black/30'
          }`}>
            <button
              onClick={closeMobileMenu}
              className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition ${
                isDark 
                  ? 'border-white/60 text-white hover:bg-white/10 hover:border-white' 
                  : 'border-black/60 text-black hover:bg-black/10 hover:border-black'
              }`}
            >
              For Startups
            </button>
            <button
              onClick={closeMobileMenu}
              className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition ${
                isDark 
                  ? 'border-white/60 text-white hover:bg-white/10 hover:border-white' 
                  : 'border-black/60 text-black hover:bg-black/10 hover:border-black'
              }`}
            >
              For Investors
            </button>
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className={`w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
                isDark 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
