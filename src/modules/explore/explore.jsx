import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { FaSearch, FaFire, FaTrophy, FaEye, FaPlay } from "react-icons/fa";
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
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src={logo} alt="EVO-A" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Explore</h1>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-white/40' : 'text-black/40'}`} />
              <input
                type="text"
                placeholder="Search investors, startups, hashtags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-lg text-sm border ${
                  isDark ? 'bg-black/50 border-white/20 text-white' : 'bg-white border-black/20 text-black'
                }`}
              />
            </div>
          </div>

          {/* Suggested Tags */}
          <div className="mb-8">
            <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Suggested Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-black/10 text-black hover:bg-black/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Top Performing Pitch */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaTrophy className={isDark ? 'text-yellow-400' : 'text-yellow-600'} />
              <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                Top Performing Pitch
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topPitches.map((pitch) => (
                <div
                  key={pitch.id}
                  onClick={() => navigate(`/pitch/${pitch.id}`)}
                  className={`rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                    isDark ? 'bg-black/50 border border-white/10' : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className="relative h-48">
                    <img
                      src={pitch.image}
                      alt={pitch.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <div>
                        <h3 className={`text-white font-semibold mb-1`}>{pitch.title}</h3>
                        <p className={`text-white/80 text-sm`}>{pitch.company}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <FaEye className="text-white/60" size={14} />
                          <span className="text-white/60 text-xs">{pitch.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Startups of the Week */}
          <div className="mb-8">
            <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Startups of the Week
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {startupsOfWeek.map((startup) => (
                <div
                  key={startup.id}
                  onClick={() => navigate(`/profile/${startup.id}`)}
                  className={`rounded-lg p-4 cursor-pointer transition-all hover:scale-105 ${
                    isDark ? 'bg-black/50 border border-white/10' : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2">
                    <img
                      src={startup.image}
                      alt={startup.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`text-center font-semibold text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                    {startup.name}
                  </h3>
                  <p className={`text-center text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    {startup.sector}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Investor Spotlight */}
          <div className="mb-8">
            <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Investor Spotlight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {investorSpotlight.map((investor) => (
                <div
                  key={investor.id}
                  className={`rounded-lg p-4 cursor-pointer transition-all hover:scale-105 ${
                    isDark ? 'bg-black/50 border border-white/10' : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                    <img
                      src={investor.image}
                      alt={investor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`text-center font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                    {investor.name}
                  </h3>
                  <p className={`text-center text-sm mb-2 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    {investor.role}
                  </p>
                  <p className={`text-center text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    {investor.investments} Investments
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Battleground Spotlight */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaFire className={isDark ? 'text-orange-400' : 'text-orange-600'} />
              <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                Battleground Spotlight
              </h2>
            </div>
            <div className={`rounded-lg p-6 cursor-pointer transition-all hover:scale-105 ${
              isDark ? 'bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30' : 'bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                Live Pitch Battle
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                Watch startups compete for investment in real-time
              </p>
              <button
                onClick={() => navigate('/battleground')}
                className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 ${
                  isDark ? 'bg-white text-black' : 'bg-black text-white'
                }`}
              >
                <FaPlay size={14} />
                Watch Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

