import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { FaSearch, FaFire, FaTrophy, FaEye, FaPlay, FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/logo.avif";

export default function Explore() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const suggestedTags = ['#AI', '#HealthTech', '#BharatFirst', '#FinTech', '#EdTech', '#GreenTech'];
  const topPitches = [
    { id: 1, title: 'AI-Powered Analytics', company: 'TechFlow', views: 50000, image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, title: 'Green Energy Solutions', company: 'EcoTech', views: 45000, image: 'https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];
  const startupsOfWeek = [
    { id: 1, name: 'InnovateLab', sector: 'SaaS', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'DataFlow', sector: 'AI/ML', image: 'https://i.pravatar.cc/150?img=2' }
  ];
  const investorSpotlight = [
    { id: 1, name: 'John Doe', role: 'Angel Investor', investments: 25, image: 'https://i.pravatar.cc/150?img=10' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="pt-4 sm:pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => navigate(-1)}
                className={`p-2 rounded-xl transition-all ${
                  isDark 
                    ? 'text-white/70 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FaArrowLeft size={20} />
              </button>
              <img src={logo} alt="EVO-A" className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-xl" />
              <h1 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Explore</h1>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-500'}`} size={18} />
              <input
                type="text"
                placeholder="Search investors, startups, hashtags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-1 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30 focus:bg-white/10' 
                    : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30 focus:shadow-md'
                }`}
              />
            </div>
          </div>

          {/* Suggested Tags */}
          <div className="mb-10">
            <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Suggested Tags
            </h2>
            <div className="flex flex-wrap gap-3">
              {suggestedTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(tag)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-[#00B8A9]/20 hover:text-[#00B8A9] hover:border hover:border-[#00B8A9]/30 hover:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#00B8A9]/10 hover:text-[#00B8A9] hover:border hover:border-[#00B8A9]/30 hover:scale-105'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Top Performing Pitch */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <FaTrophy className={isDark ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Top Performing Pitch
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {topPitches.map((pitch) => (
                <div
                  key={pitch.id}
                  onClick={() => navigate(`/pitch/${pitch.id}`)}
                  className={`rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:border-[#00B8A9]/30' 
                      : 'bg-white border border-gray-200 hover:border-[#00B8A9]/30 shadow-md'
                  }`}
                >
                  <div className="relative h-56">
                    <img
                      src={pitch.image}
                      alt={pitch.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-5">
                      <div className="w-full">
                        <h3 className={`text-white font-bold text-lg mb-1`}>{pitch.title}</h3>
                        <p className={`text-white/90 text-sm mb-2`}>{pitch.company}</p>
                        <div className="flex items-center gap-2">
                          <FaEye className="text-white/70" size={14} />
                          <span className="text-white/70 text-xs font-medium">{pitch.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                        <FaPlay className="text-white" size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Startups of the Week */}
          <div className="mb-10">
            <h2 className={`text-xl font-bold mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Startups of the Week
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {startupsOfWeek.map((startup) => (
                <div
                  key={startup.id}
                  onClick={() => navigate(`/profile/${startup.id}`)}
                  className={`rounded-xl p-5 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:border-[#00B8A9]/30' 
                      : 'bg-white border border-gray-200 hover:border-[#00B8A9]/30 shadow-sm'
                  }`}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-offset-2 ring-offset-transparent ring-gray-300/20">
                    <img
                      src={startup.image}
                      alt={startup.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`text-center font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {startup.name}
                  </h3>
                  <p className={`text-center text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    {startup.sector}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Investor Spotlight */}
          <div className="mb-10">
            <h2 className={`text-xl font-bold mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Investor Spotlight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {investorSpotlight.map((investor) => (
                <div
                  key={investor.id}
                  className={`rounded-xl p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:border-[#00B8A9]/30' 
                      : 'bg-white border border-gray-200 hover:border-[#00B8A9]/30 shadow-sm'
                  }`}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-offset-2 ring-offset-transparent ring-gray-300/20">
                    <img
                      src={investor.image}
                      alt={investor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`text-center font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {investor.name}
                  </h3>
                  <p className={`text-center text-sm mb-2 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                    {investor.role}
                  </p>
                  <p className={`text-center text-xs font-medium ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {investor.investments} Investments
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Battleground Spotlight */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <FaFire className={isDark ? 'text-orange-400' : 'text-orange-600'} size={20} />
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Battleground Spotlight
              </h2>
            </div>
            <div className={`rounded-2xl p-8 cursor-pointer transition-all hover:scale-[1.01] hover:shadow-xl ${
              isDark 
                ? 'bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/40' 
                : 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 shadow-md'
            }`}>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Live Pitch Battle
              </h3>
              <p className={`text-base mb-6 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                Watch startups compete for investment in real-time
              </p>
              <button
                onClick={() => navigate('/battleground')}
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all bg-[#00B8A9] text-white hover:bg-[#00A89A] shadow-lg shadow-[#00B8A9]/30 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00B8A9]/40 active:scale-95"
              >
                <FaPlay size={16} />
                Watch Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

