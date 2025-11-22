import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#060E09] border-t border-[#00FF78]/20 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">EVO-A</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Revolutionizing the startup-investor ecosystem. Connect, invest, and grow together in the future of entrepreneurship.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  Sign Up
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00FF78] transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} EVO-A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

