import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.avif';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#152A6D] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        {/* Main navbar */}
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-2.5">
            <img 
              src={logo} 
              alt="EVO-A Logo" 
              className="h-10 w-10 object-contain md:h-11 md:w-11"
            />
            <span className="text-lg font-semibold tracking-wide md:text-xl">EVO-A</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 text-sm font-medium md:flex md:gap-5">
            <button className="rounded-full border border-white/60 px-4 py-1.5 text-sm tracking-wide transition hover:bg-white/10 md:px-5 md:py-1.5">
              For Startups
            </button>
            <button className="rounded-full border border-white/60 px-4 py-1.5 text-sm tracking-wide transition hover:bg-white/10 md:px-5 md:py-1.5">
              For Investors
            </button>
            <Link 
              to="/login"
              className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#152A6D] transition hover:bg-gray-100 md:px-5 md:py-1.5"
            >
              Sign in
            </Link>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/0 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6 text-white" />
            ) : (
              <HiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Slides down */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4 border-t border-white/20 pb-4 pt-4">
            <button
              onClick={closeMobileMenu}
              className="w-full rounded-lg border border-white/60 px-4 py-2.5 text-left text-sm font-medium transition hover:bg-white/10"
            >
              For Startups
            </button>
            <button
              onClick={closeMobileMenu}
              className="w-full rounded-lg border border-white/60 px-4 py-2.5 text-left text-sm font-medium transition hover:bg-white/10"
            >
              For Investors
            </button>
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="w-full rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#152A6D] transition hover:bg-gray-100"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
