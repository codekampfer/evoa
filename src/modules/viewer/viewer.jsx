import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import StatusComponent from "../../components/shared/StatusComponent";
import PitchCard from "../../components/shared/PitchCard";
import { 
  FaBell, 
  FaSearch, 
  FaPlay, 
  FaUser 
} from "react-icons/fa";
import logo from "../../assets/logo.avif";


export default function Viewer() {
  const { theme } = useTheme();
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
      links: {
        website: 'https://example.com',
        linkedin: 'https://linkedin.com/company/techstartup',
        instagram: 'https://instagram.com/techstartup'
      }
    }
  ]);


  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#000000]' : 'bg-[#f7f9fa]'}`}>
      {/* Top Navigation Bar - Modern Gradient (Same as other components) */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${
        isDark 
          ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/98 to-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.08]' 
          : 'bg-gradient-to-b from-white via-white/98 to-white/95 backdrop-blur-2xl border-b border-gray-200/60'
      } shadow-sm`}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EVO-A" className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-xl" />
            <span className={`text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r ${
              isDark 
                ? 'from-white via-[#00B8A9] to-[#00A89A] text-transparent bg-clip-text' 
                : 'from-gray-900 via-[#00B8A9] to-[#00A89A] text-transparent bg-clip-text'
            }`}>EVO-A</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={() => navigate('/pitch/1')} 
              className={`p-2 rounded-xl transition-all duration-200 ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
              title="View Pitch"
            >
              <FaPlay size={20} />
            </button>
            <button 
              onClick={() => navigate('/explore')} 
              className={`p-2 rounded-xl transition-all duration-200 ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
            >
              <FaSearch size={20} />
            </button>
            <button 
              onClick={() => navigate('/notifications')} 
              className={`p-2 rounded-xl transition-all duration-200 relative ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
            >
              <FaBell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={() => navigate('/profile')} 
              className={`p-2 rounded-xl transition-all duration-200 ${
                isDark 
                  ? 'text-white/70 hover:text-[#00B8A9] hover:bg-white/10' 
                  : 'text-gray-600 hover:text-[#00B8A9] hover:bg-gray-100'
              }`}
              title="Profile"
            >
              <FaUser size={20} />
            </button>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <main className="pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto px-0 sm:px-4 pb-16 sm:pb-20">
          <div className="mb-4 px-2 sm:px-0">
            <StatusComponent />
          </div>
          <div className="space-y-4 px-2 sm:px-0">
            {pitches.map((pitch) => (
              <PitchCard key={pitch.id} pitch={pitch} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
