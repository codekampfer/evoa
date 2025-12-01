import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  FaBell,
  FaHeart,
  FaBookmark,
  FaComment,
  FaPaperPlane,
  FaPlus,
  FaLink,
  FaUser
} from "react-icons/fa";
import { 
  HiOutlineLightningBolt,
  HiUsers
} from "react-icons/hi";
import logo from "../../assets/logo.avif";

export default function Startup() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  // Action cards data
  const actionCards = [
    { id: 1, title: "Hiring Roles", icon: HiUsers },
    { id: 2, title: "Product Launched", icon: HiOutlineLightningBolt },
    { id: 3, title: "Get Funded", icon: HiOutlineLightningBolt },
    { id: 4, title: "More Options", icon: FaPlus }
  ];

  // Sample startup data
  const startupData = {
    name: "QuantumFlow",
    description: "Advanced AI-powered data analytics platform",
    tags: ["SaaS", "AI/GenAI", "Fintech"],
    stats: {
      pitchView: "21k",
      supporters: "5M",
      clickThrough: "16k"
    },
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  // Sample investor avatars
  const investorAvatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
    

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Action Cards Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {actionCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <button
                key={card.id}
                className={`relative group rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-black/50 border border-white/10 hover:border-white/30'
                    : 'bg-white border border-black/10 hover:border-black/30'
                }`}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/5 to-transparent'
                    : 'bg-gradient-to-br from-black/5 to-transparent'
                }`}></div>
                
                <div className="relative z-10">
                  <div className={`mb-2 sm:mb-3 flex justify-center ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    <IconComponent size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className={`text-xs sm:text-sm font-semibold text-center ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    {card.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Startup Card */}
        <div className={`rounded-2xl sm:rounded-3xl overflow-hidden transition-colors duration-300 ${
          isDark ? 'bg-black/50 border border-white/10' : 'bg-white border border-black/10'
        } shadow-lg`}>
          {/* Card Header */}
          <div className={`flex items-center justify-between p-4 sm:p-6 border-b ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}>
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Wave/M Icon */}
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={isDark ? 'text-white' : 'text-black'}>
                  <path d="M3 12C3 12 6 8 12 8C18 8 21 12 21 12M3 12C3 12 6 16 12 16C18 16 21 12 21 12M3 12L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className={`text-base sm:text-lg font-bold ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {startupData.name}
              </span>
            </div>
            <button className={`p-2 rounded-lg transition-colors ${
              isDark 
                ? 'text-white/80 hover:bg-white/10' 
                : 'text-black/80 hover:bg-black/10'
            }`}>
              <FaPlus size={18} />
            </button>
          </div>

          {/* Startup Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
            <img
              src={startupData.image}
              alt={startupData.name}
              className="w-full h-full object-cover"
            />
            {/* Lightning bolt overlay */}
            <div className="absolute top-4 right-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFD700" className="drop-shadow-lg">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="#FFA500" strokeWidth="0.5"/>
              </svg>
            </div>
          </div>

          {/* Startup Details */}
          <div className="p-4 sm:p-6">
            {/* Name and Link */}
            <div className="flex items-center gap-2 mb-2">
              <h2 className={`text-lg sm:text-xl font-bold ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {startupData.name}
              </h2>
              <FaLink size={14} className={isDark ? 'text-white/40' : 'text-black/40'} />
            </div>

            {/* Description */}
            <p className={`text-sm sm:text-base mb-4 ${
              isDark ? 'text-white/70' : 'text-black/70'
            }`}>
              {startupData.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {startupData.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-black/10 text-black border border-black/20'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {startupData.stats.pitchView}
                </div>
                <div className={`text-xs sm:text-sm ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  Pitch view
                </div>
              </div>
              <div className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {startupData.stats.supporters}
                </div>
                <div className={`text-xs sm:text-sm ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  Supporters
                </div>
              </div>
              <div className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {startupData.stats.clickThrough}
                </div>
                <div className={`text-xs sm:text-sm ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  Click through
                </div>
              </div>
            </div>

            {/* Investor's Thought Section */}
            <div className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl mb-6 ${
              isDark ? 'bg-black/40 border border-white/10' : 'bg-white border border-black/10'
            }`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}>
                <FaUser size={14} className={isDark ? 'text-white' : 'text-black'} />
              </div>
              <span className={`text-sm sm:text-base font-medium flex-1 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Investor's Thought
              </span>
              <div className="flex -space-x-2">
                {investorAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Investor ${index + 1}`}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
            </div>

            {/* Action Icons */}
            <div className={`flex items-center justify-around pt-4 border-t ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}>
              <button
                onClick={() => setLiked(!liked)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  liked
                    ? isDark ? 'text-red-400' : 'text-red-500'
                    : isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}
              >
                <FaHeart size={20} fill={liked ? 'currentColor' : 'none'} />
                <span className="text-xs">Like</span>
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  saved
                    ? isDark ? 'text-yellow-400' : 'text-yellow-500'
                    : isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}
              >
                <FaBookmark size={20} fill={saved ? 'currentColor' : 'none'} />
                <span className="text-xs">Save</span>
              </button>
              <button className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`}>
                <FaComment size={20} />
                <span className="text-xs">Comment</span>
              </button>
              <button className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`}>
                <FaPaperPlane size={20} />
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

