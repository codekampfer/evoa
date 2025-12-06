import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  FaRocket, 
  FaChartLine, 
  FaBuilding, 
  FaEye,
  FaCheckCircle
} from "react-icons/fa";
import logo from "../../assets/logo.avif";

export default function ChoiceRole() {
  const [selectedRole, setSelectedRole] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const roles = [
    {
      id: 'startup',
      name: 'Startup',
      icon: FaRocket,
      description: 'Launch your ideas and connect with investors',
      features: ['Pitch your startup', 'Connect with investors', 'Raise funding']
    },
    {
      id: 'investor',
      name: 'Investor',
      icon: FaChartLine,
      description: 'Discover and invest in promising startups',
      features: ['Discover startups', 'Make investments', 'Track portfolio']
    },
    {
      id: 'incubator',
      name: 'Incubator',
      icon: FaBuilding,
      description: 'Nurture and support startups',
      features: ['Manage programs', 'Support startups', 'Build network']
    },
    {
      id: 'viewer',
      name: 'Viewer',
      icon: FaEye,
      description: 'Explore the startup ecosystem',
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
    <div className={`min-h-screen flex items-center justify-center px-4 py-8 ${
      isDark ? 'bg-black' : 'bg-gray-50'
    }`}>
      
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-lg" />
            <span className={`text-2xl sm:text-3xl font-bold ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              EVO-A
            </span>
          </div>
          <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Choose Your Role
          </h1>
          <p className={`text-sm sm:text-base ${
            isDark ? 'text-white/60' : 'text-gray-600'
          }`}>
            Select the role that best describes you
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`relative rounded-2xl p-5 transition-all duration-200 hover:scale-[1.02] ${
                  isDark
                    ? isSelected
                      ? 'bg-white text-black shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/20'
                    : isSelected
                      ? 'bg-black text-white shadow-xl'
                      : 'bg-white text-black border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {/* Checkmark */}
                {isSelected && (
                  <FaCheckCircle 
                    className={`absolute top-3 right-3 ${
                      isDark ? 'text-black' : 'text-white'
                    }`} 
                    size={18} 
                  />
                )}

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  isDark
                    ? isSelected ? 'bg-black/10' : 'bg-white/10'
                    : isSelected ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  <IconComponent size={32} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2">{role.name}</h3>
                
                {/* Description */}
                <p className={`text-sm mb-3 ${
                  isSelected
                    ? isDark ? 'text-black/70' : 'text-white/80'
                    : isDark ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {role.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5">
                  {role.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        isSelected
                          ? isDark ? 'bg-black/50' : 'bg-white/60'
                          : isDark ? 'bg-white/40' : 'bg-gray-400'
                      }`}></div>
                      <span className={`text-xs ${
                        isSelected
                          ? isDark ? 'text-black/60' : 'text-white/70'
                          : isDark ? 'text-white/50' : 'text-gray-500'
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
        {selectedRole && (
          <div className="mt-8 text-center">
            <button
              onClick={handleContinue}
              className={`px-10 py-3.5 rounded-xl text-base font-bold transition-all hover:scale-105 ${
                isDark 
                  ? 'bg-white text-black hover:bg-white/95 shadow-lg' 
                  : 'bg-black text-white hover:bg-black/95 shadow-lg'
              }`}
            >
              Continue →
            </button>
            <p className={`mt-3 text-xs ${
              isDark ? 'text-white/40' : 'text-gray-400'
            }`}>
              You can change this later in settings
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
