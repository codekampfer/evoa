import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  IoRocketSharp,
  IoTrendingUp,
  IoBusinessSharp,
  IoGlasses,
  IoArrowForward,
  IoCheckmarkCircle
} from "react-icons/io5";


import logo from "../../assets/logo.avif";

export default function ChoiceRole() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const roles = [
    {
      id: 'startup',
      name: 'Startup',
      icon: IoRocketSharp, // Modern rocket icon
      description: 'Launch your innovative ideas and connect with investors',
      features: ['Pitch your startup', 'Connect with investors', 'Raise funding']
    },
    {
      id: 'investor',
      name: 'Investor',
      icon: IoTrendingUp, // Trending up chart icon
      description: 'Discover and invest in promising startups',
      features: ['Discover startups', 'Make investments', 'Track portfolio']
    },
    {
      id: 'incubator',
      name: 'Incubator',
      icon: IoBusinessSharp, // Business building icon
      description: 'Nurture and support startups in your program',
      features: ['Manage programs', 'Support startups', 'Build network']
    },
    {
      id: 'viewer',
      name: 'Viewer',
      icon: IoGlasses, // Glasses/explore icon
      description: 'Explore and discover opportunities',
      features: ['Explore startups', 'Learn from pitches', 'Stay updated']
    }
  ];

  const handleContinue = () => {
    if (!selectedRole) return;
    const routes = {
      'startup': '/register/startup',
      'investor': '/register/investor',
      'incubator': '/register/incubator',
      'viewer': '/register/viewer'
    };
    navigate(routes[selectedRole] || '/');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 py-12 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-8">
            <div className={`p-3 border ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/20'
            }`}>
              <img src={logo} alt="EVO-A" className="h-11 w-11 object-contain" />
            </div>
            <span className={`text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              EVO-A
            </span>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Choose Your Role
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Select the role that best describes you to get started
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            const isHovered = hoveredRole === role.id;
            
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                className={`relative p-7 transition-all duration-300 border-2 rounded-3xl ${
                  isSelected 
                    ? 'bg-[#00B8A9] text-white border-[#00B8A9] shadow-2xl shadow-[#00B8A9]/40 transform scale-105'
                    : isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#00B8A9]/30'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-[#00B8A9]/30 hover:shadow-lg'
                }`}
              >
                {/* Selection Checkmark */}
                {isSelected && (
                  <div className="absolute top-5 right-5">
                    <IoCheckmarkCircle 
                      size={24} 
                      className="text-white"
                    />
                  </div>
                )}

                {/* Icon Container */}
                <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-all duration-300 ${
                  isSelected 
                    ? 'bg-white/20'
                    : isDark
                      ? 'bg-white/10'
                      : 'bg-gray-200'
                } ${isHovered && !isSelected ? 'transform scale-110' : ''}`}>
                  <IconComponent 
                    size={38} 
                    className={
                      isSelected 
                        ? 'text-white'
                        : isDark ? 'text-white' : 'text-black'
                    }
                  />
                </div>

                {/* Role Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  isSelected 
                    ? 'text-white'
                    : isDark ? 'text-white' : 'text-black'
                }`}>
                  {role.name}
                </h3>
                
                {/* Description */}
                <p className={`text-sm mb-5 leading-relaxed min-h-[60px] ${
                  isSelected 
                    ? 'text-white/90'
                    : isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {role.description}
                </p>

                {/* Features List */}
                <div className={`space-y-2.5 pt-5 border-t ${
                  isSelected
                    ? 'border-white/20'
                    : isDark ? 'border-white/10' : 'border-gray-200'
                }`}>
                  {role.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 ${
                        isSelected 
                          ? 'bg-white/80'
                          : isDark ? 'bg-white/50' : 'bg-gray-500'
                      }`}></div>
                      <span className={`text-xs ${
                        isSelected 
                          ? 'text-white/80'
                          : isDark ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`group inline-flex items-center gap-3 px-10 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
              selectedRole 
                ? 'bg-[#00B8A9] text-white hover:bg-[#00A89A] hover:scale-105 hover:shadow-2xl hover:shadow-[#00B8A9]/40'
                : isDark
                  ? 'bg-white/10 text-gray-600 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue to Registration
            <IoArrowForward 
              size={18} 
              className={`transition-transform duration-300 ${
                selectedRole ? 'group-hover:translate-x-1' : ''
              }`}
            />
          </button>
          <p className={`mt-6 text-sm ${
            isDark ? 'text-gray-600' : 'text-gray-400'
          }`}>
            You can change your role anytime in settings
          </p>
        </div>
      </div>
    </div>
  );
}
