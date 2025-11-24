import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

// X (Twitter) Icon Component
const XIcon = ({ size = 20, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t mt-20 transition-colors duration-300 ${
      isDark 
        ? 'bg-black border-white/20' 
        : 'bg-white border-black/30'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>EVO-A</h3>
            <p className={`text-sm leading-relaxed max-w-md ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>
              Revolutionizing the startup-investor ecosystem. Connect, invest, and grow together in the future of entrepreneurship.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className={`transition-colors ${
                isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`} aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className={`transition-colors ${
                isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`} aria-label="X (Twitter)">
                <XIcon size={20} />
              </a>
              <a href="#" className={`transition-colors ${
                isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`} aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className={`transition-colors ${
                isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`} aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  Sign Up
                </Link>
              </li>
              <li>
                <a href="#" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors text-sm ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t ${
          isDark ? 'border-white/10' : 'border-black/20'
        }`}>
          <p className={`text-center text-sm ${
            isDark ? 'text-white/40' : 'text-black/40'
          }`}>
            © {new Date().getFullYear()} EVO-A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

