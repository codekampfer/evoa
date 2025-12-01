import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  FaRocket, 
  FaChartLine, 
  FaBuilding, 
  FaEye 
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
      description: 'Launch your innovative ideas'
    },
    {
      id: 'investor',
      name: 'Investor',
      icon: FaChartLine,
      description: 'Invest in promising startups'
    },
    {
      id: 'incubator',
      name: 'Incubator',
      icon: FaBuilding,
      description: 'Nurture and support startups'
    },
    {
      id: 'viewer',
      name: 'Viewer',
      icon: FaEye,
      description: 'Explore and discover opportunities'
    }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    // Navigate to next step or dashboard after role selection
    // You can customize this navigation based on your flow
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="w-full max-w-4xl">
        {/* Logo/Brand */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src={logo} 
              alt="EVO-A Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <span className={`text-2xl sm:text-3xl font-bold tracking-wide ${
              isDark ? 'text-white' : 'text-black'
            }`}>EVO-A</span>
          </div>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Choose your profession
          </h1>
          <p className={`text-sm sm:text-base ${
            isDark ? 'text-white/60' : 'text-black/60'
          }`}>
            Select the role that best describes you
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            
            return (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={`relative group rounded-2xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  isDark
                    ? isSelected
                      ? 'bg-white text-black border-2 border-white'
                      : 'bg-black/50 border border-white/10 text-white hover:bg-black/70 hover:border-white/30'
                    : isSelected
                      ? 'bg-black text-white border-2 border-black'
                      : 'bg-white border border-black/10 text-black hover:bg-gray-50 hover:border-black/30'
                }`}
              >
                {/* Small dot indicator in top-right */}
                <div className={`absolute top-3 right-3 w-2 h-2 rounded-full transition-all duration-300 ${
                  isSelected
                    ? isDark
                      ? 'bg-black'
                      : 'bg-white'
                    : 'opacity-0'
                }`}></div>

                {/* Icon Circle */}
                <div className={`flex items-center justify-center mb-4 sm:mb-6 ${
                  isSelected
                    ? isDark
                      ? 'text-black'
                      : 'text-white'
                    : isDark
                      ? 'text-white'
                      : 'text-black'
                }`}>
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? isSelected
                        ? 'bg-black'
                        : 'bg-white/10 group-hover:bg-white/20'
                      : isSelected
                        ? 'bg-white'
                        : 'bg-black/5 group-hover:bg-black/10'
                  }`}>
                    <IconComponent size={40} className="sm:w-12 sm:h-12" />
                  </div>
                </div>

                {/* Role Name */}
                <h3 className={`text-lg sm:text-xl font-semibold mb-1 transition-colors duration-300 ${
                  isSelected
                    ? isDark
                      ? 'text-black'
                      : 'text-white'
                    : isDark
                      ? 'text-white'
                      : 'text-black'
                }`}>
                  {role.name}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                  isSelected
                    ? isDark
                      ? 'text-black/70'
                      : 'text-white/70'
                    : isDark
                      ? 'text-white/60'
                      : 'text-black/60'
                }`}>
                  {role.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        {selectedRole && (
          <div className="mt-8 text-center">
            <button
              onClick={() => handleRoleSelect(selectedRole)}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isDark 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

