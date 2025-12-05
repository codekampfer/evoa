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
      description: 'Launch your innovative ideas and connect with investors',
      gradient: 'from-blue-500 to-purple-600',
      features: ['Pitch your startup', 'Connect with investors', 'Raise funding']
    },
    {
      id: 'investor',
      name: 'Investor',
      icon: FaChartLine,
      description: 'Discover and invest in promising startups',
      gradient: 'from-green-500 to-emerald-600',
      features: ['Discover startups', 'Make investments', 'Track portfolio']
    },
    {
      id: 'incubator',
      name: 'Incubator',
      icon: FaBuilding,
      description: 'Nurture and support startups in your program',
      gradient: 'from-orange-500 to-red-600',
      features: ['Manage programs', 'Support startups', 'Build network']
    },
    {
      id: 'viewer',
      name: 'Viewer',
      icon: FaEye,
      description: 'Explore and discover opportunities in the ecosystem',
      gradient: 'from-indigo-500 to-blue-600',
      features: ['Explore startups', 'Learn from pitches', 'Stay updated']
    }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
  };

  const handleContinue = () => {
    if (!selectedRole) return;
    
    // Navigate to appropriate registration page based on role
    const registrationRoutes = {
      'startup': '/register/startup',
      'investor': '/register/investor',
      'incubator': '/register/incubator',
      'viewer': '/register/viewer'
    };
    
    navigate(registrationRoutes[selectedRole] || '/');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 transition-colors duration-300 relative overflow-hidden ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-white/10' : 'bg-blue-200/30'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-white/5' : 'bg-purple-200/30'
        }`}></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Logo/Brand */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className={`p-2 rounded-xl ${
              isDark ? 'bg-white/10' : 'bg-black/5'
            }`}>
              <img 
                src={logo} 
                alt="EVO-A Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              />
            </div>
            <span className={`text-3xl sm:text-4xl font-bold tracking-wide ${
              isDark ? 'text-white' : 'text-black'
            }`}>EVO-A</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Choose Your Profession
          </h1>
          <p className={`text-base sm:text-lg ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}>
            Select the role that best describes you to get started
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            
            return (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={`relative group rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden ${
                  isDark
                    ? isSelected
                      ? 'bg-white text-black border-2 border-white shadow-xl'
                      : 'bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-black/80 hover:border-white/40'
                    : isSelected
                      ? 'bg-gradient-to-br from-gray-900 to-black text-white border-2 border-gray-900 shadow-xl'
                      : 'bg-white border border-gray-200 text-black hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {/* Gradient Background for Selected */}
                {isSelected && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-10`}></div>
                )}

                {/* Checkmark Indicator */}
                {isSelected && (
                  <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isDark ? 'bg-black text-white' : 'bg-white text-black'
                  }`}>
                    <FaCheckCircle size={18} />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon Circle */}
                  <div className={`flex items-center justify-center mb-5 sm:mb-6 ${
                    isSelected
                      ? isDark
                        ? 'text-black'
                        : 'text-white'
                      : isDark
                        ? 'text-white'
                        : 'text-gray-900'
                  }`}>
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      isDark
                        ? isSelected
                          ? 'bg-black'
                          : 'bg-white/10 group-hover:bg-white/20'
                        : isSelected
                          ? 'bg-white/20'
                          : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300'
                    }`}>
                      <IconComponent size={48} className="sm:w-14 sm:h-14" />
                    </div>
                  </div>

                  {/* Role Name */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
                    isSelected
                      ? isDark
                        ? 'text-black'
                        : 'text-white'
                      : isDark
                        ? 'text-white'
                        : 'text-gray-900'
                  }`}>
                    {role.name}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base mb-4 transition-colors duration-300 leading-relaxed ${
                    isSelected
                      ? isDark
                        ? 'text-black/80'
                        : 'text-white/90'
                      : isDark
                        ? 'text-white/70'
                        : 'text-gray-600'
                  }`}>
                    {role.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {role.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          isSelected
                            ? isDark
                              ? 'bg-black/60'
                              : 'bg-white/60'
                            : isDark
                              ? 'bg-white/40'
                              : 'bg-gray-400'
                        }`}></div>
                        <span className={`text-xs sm:text-sm ${
                          isSelected
                            ? isDark
                              ? 'text-black/70'
                              : 'text-white/80'
                            : isDark
                              ? 'text-white/60'
                              : 'text-gray-500'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark ? 'bg-white/5' : 'bg-black/5'
                }`}></div>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        {selectedRole && (
          <div className="mt-10 sm:mt-12 text-center animate-fade-in">
            <button
              onClick={handleContinue}
              className={`group relative px-10 sm:px-12 py-4 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden ${
                isDark 
                  ? 'bg-white text-black hover:bg-white/95 shadow-lg shadow-white/20' 
                  : 'bg-black text-white hover:bg-black/95 shadow-lg shadow-black/20'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Continue
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark ? 'bg-gradient-to-r from-white/20 to-transparent' : 'bg-gradient-to-r from-black/20 to-transparent'
              }`}></div>
            </button>
            <p className={`mt-4 text-sm ${
              isDark ? 'text-white/50' : 'text-gray-500'
            }`}>
              You can change this later in settings
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

