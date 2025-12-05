import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { FaBell, FaFire, FaDollarSign, FaRocket, FaCog } from "react-icons/fa";
import logo from "../../assets/logo.avif";

export default function Notifications() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All', icon: FaBell },
    { id: 'battleground', label: 'Battleground', icon: FaFire },
    { id: 'investor', label: 'Investor', icon: FaDollarSign },
    { id: 'pitch', label: 'Pitch', icon: FaRocket },
    { id: 'system', label: 'System', icon: FaCog }
  ];

  const notifications = {
    all: [
      { id: 1, type: 'trending', message: 'Your startup is now trending!', time: '2 hours ago', read: false },
      { id: 2, type: 'offer', message: 'Investor made you an offer', time: '5 hours ago', read: false },
      { id: 3, type: 'battleground', message: 'New battleground event starting soon', time: '1 day ago', read: true }
    ],
    battleground: [
      { id: 1, type: 'battleground', message: 'New battleground event starting soon', time: '1 day ago', read: true },
      { id: 2, type: 'battleground', message: 'You have been selected for pitch battle', time: '2 days ago', read: false }
    ],
    investor: [
      { id: 1, type: 'offer', message: 'Investor made you an offer', time: '5 hours ago', read: false },
      { id: 2, type: 'interest', message: '3 investors viewed your pitch', time: '1 day ago', read: true }
    ],
    pitch: [
      { id: 1, type: 'trending', message: 'Your startup is now trending!', time: '2 hours ago', read: false },
      { id: 2, type: 'views', message: 'Your pitch got 500 new views', time: '3 days ago', read: true }
    ],
    system: [
      { id: 1, type: 'system', message: 'Profile verification completed', time: '1 week ago', read: true },
      { id: 2, type: 'system', message: 'Welcome to EVO-A!', time: '2 weeks ago', read: true }
    ]
  };

  const handleNotificationClick = (notification) => {
    if (notification.type === 'offer') {
      navigate('/offer-detail');
    } else if (notification.type === 'battleground') {
      navigate('/battleground');
    } else if (notification.type === 'trending' || notification.type === 'pitch') {
      navigate('/pitch/1');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src={logo} alt="EVO-A" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Notifications</h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? isDark
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                      : isDark
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-black/10 text-black hover:bg-black/20'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Notifications List */}
          <div className="space-y-2">
            {notifications[activeTab]?.map((notification) => (
              <div
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  notification.read
                    ? isDark
                      ? 'bg-black/30 border border-white/5'
                      : 'bg-white border border-gray-200'
                    : isDark
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-blue-50 border border-blue-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                      {notification.message}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-blue-500'}`} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {(!notifications[activeTab] || notifications[activeTab].length === 0) && (
            <div className={`text-center py-12 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              <FaBell size={48} className="mx-auto mb-4 opacity-50" />
              <p>No notifications in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

