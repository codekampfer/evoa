import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import StatusComponent from "../../components/shared/StatusComponent";
import PitchCard from "../../components/shared/PitchCard";
import { FaBell, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.avif";

export default function Incubator() {
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
      dealInfo: {
        amount: '50L',
        equity: '5%',
        revenue: '10L'
      }
    }
  ]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-black border-b border-white/10' : 'bg-white border-b border-gray-200'}`}>
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="EVO-A" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
            <span className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>EVO-A</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={() => navigate('/explore')} className={isDark ? 'text-white' : 'text-black'}>
              <FaSearch size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button onClick={() => navigate('/notifications')} className={isDark ? 'text-white' : 'text-black'}>
              <FaBell size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        <div className="max-w-2xl mx-auto py-2 sm:py-4 lg:py-8 px-2 sm:px-4">
          <div className="mb-4">
            <StatusComponent />
          </div>
          <div className="space-y-4">
            {pitches.map((pitch) => (
              <PitchCard key={pitch.id} pitch={pitch} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

