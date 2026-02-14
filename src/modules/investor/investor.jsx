import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import StatusComponent from "../../components/shared/StatusComponent";
import PitchCard from "../../components/shared/PitchCard";
import { 
  FaBell, 
  FaSearch, 
  FaUser,
  FaPlay
} from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi"; // Theme toggle icons
import logo from "../../assets/logo.avif";

export default function Investor() {
  const { theme, toggleTheme } = useTheme(); // Added toggleTheme
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const [pitches] = useState([
    {
      id: 1,
      username: 'techstartup',
      profilePhoto: 'https://i.pravatar.cc/150?img=1',
      summary: 'AI-powered SaaS platform',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Revolutionizing data analytics with AI! 🚀',
      hashtags: '#AI #SaaS #Fintech',
      likes: 12450,
      views: 34200,
      clickthroughs: 1200,
      liked: false,
      saved: false,
      dealInfo: {
        amount: '50L',
        equity: '5',
        revenue: '10L'
      },
      links: {
        website: 'https://example.com',
        linkedin: 'https://linkedin.com/company/techstartup',
        instagram: 'https://instagram.com/techstartup'
      },
      pitchDeck: 'https://example.com/pitchdeck.pdf',
      investors: [
        { name: 'Investor 1', avatar: 'https://i.pravatar.cc/150?img=10' },
        { name: 'Investor 2', avatar: 'https://i.pravatar.cc/150?img=11' }
      ]
    },
    {
      id: 2,
      username: 'greenenergy',
      profilePhoto: 'https://i.pravatar.cc/150?img=2',
      summary: 'Sustainable energy solutions',
      image: 'https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Building the future of clean energy! 🌱',
      hashtags: '#GreenTech #ClimateTech #Sustainability',
      likes: 8920,
      views: 25600,
      clickthroughs: 890,
      liked: false,
      saved: false,
      dealInfo: {
        amount: '1Cr',
        equity: '8',
        revenue: '25L'
      },
      links: {
        website: 'https://greenenergy.com',
        linkedin: 'https://linkedin.com/company/greenenergy'
      }
    }
  ]);

  const handleLike = (pitchId) => {
    console.log('Like pitch:', pitchId);
  };

  const handleComment = (pitchId) => {
    navigate(`/pitch/${pitchId}/comments`);
  };

  const handleShare = (pitchId) => {
    navigate(`/share/${pitchId}`);
  };

  const handleSave = (pitchId) => {
    console.log('Save pitch:', pitchId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#000000]' : 'bg-[#f7f9fa]'}`}>
      {/* Top Navigation Bar - Enhanced with Theme Toggle */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${
        isDark 
          ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/98 to-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.08]' 
          : 'bg-gradient-to-b from-white via-white/98 to-white/95 backdrop-blur-2xl border-b border-gray-200/60'
      } shadow-sm`}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-3xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="EVO-A" className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-xl" />
            <span className={`text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r ${
              isDark 
                ? 'from-white via-[#00B8A9] to-[#00A89A] text-transparent bg-clip-text' 
                : 'from-gray-900 via-[#00B8A9] to-[#00A89A] text-transparent bg-clip-text'
            }`}>EVO-A</span>
          </div>

          {/* Navigation Icons - Mobile Responsive with Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Pitch Button */}
            <button 
              onClick={() => navigate('/pitch/1')} 
              className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-2 rounded-xl transition-all duration-200 active:scale-95 ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
              title="View Pitch"
            >
              <FaPlay size={18} className="sm:hidden" />
              <FaPlay size={20} className="hidden sm:block" />
            </button>

            {/* Search Button */}
            <button 
              onClick={() => navigate('/explore')} 
              className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-2 rounded-xl transition-all duration-200 active:scale-95 ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
              title="Search"
            >
              <FaSearch size={18} className="sm:hidden" />
              <FaSearch size={20} className="hidden sm:block" />
            </button>

            {/* Theme Toggle Button - NEW */}
            <button
              onClick={toggleTheme}
              className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-2 rounded-xl transition-all duration-200 active:scale-95 hover:scale-110 ${
                isDark 
                  ? 'text-white/70 hover:text-[#B0FFFA] hover:bg-white/10 border border-[#B0FFFA]/20' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100 border border-[#00B8A9]/20'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <>
                  <HiSun size={20} className="sm:hidden animate-spin-slow" />
                  <HiSun size={22} className="hidden sm:block animate-spin-slow" />
                </>
              ) : (
                <>
                  <HiMoon size={20} className="sm:hidden" />
                  <HiMoon size={22} className="hidden sm:block" />
                </>
              )}
            </button>

            {/* Notifications Button */}
            <button 
              onClick={() => navigate('/notifications')} 
              className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-2 rounded-xl transition-all duration-200 relative active:scale-95 ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
              title="Notifications"
            >
              <FaBell size={18} className="sm:hidden" />
              <FaBell size={20} className="hidden sm:block" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-current"></span>
            </button>

            {/* Profile Button */}
            <button 
              onClick={() => navigate('/profile')} 
              className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-2 rounded-xl transition-all duration-200 active:scale-95 ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
              title="Profile"
            >
              <FaUser size={18} className="sm:hidden" />
              <FaUser size={20} className="hidden sm:block" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto px-0 sm:px-4 pb-16 sm:pb-20">
          {/* Status Component */}
          <div className="mb-4 px-2 sm:px-0">
            <StatusComponent />
          </div>

          {/* Pitch Cards */}
          <div className="space-y-4 px-2 sm:px-0">
            {pitches.map((pitch) => (
              <PitchCard
                key={pitch.id}
                pitch={pitch}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
                onSave={handleSave}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Add Custom Animation for Sun Icon */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
