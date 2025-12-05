import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function StatusComponent({ statuses = [] }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Sample statuses if none provided
  const defaultStatuses = [
    { id: 1, user: 'startup1', avatar: 'https://i.pravatar.cc/150?img=1', name: 'TechFlow' },
    { id: 2, user: 'startup2', avatar: 'https://i.pravatar.cc/150?img=2', name: 'InnovateLab' },
    { id: 3, user: 'startup3', avatar: 'https://i.pravatar.cc/150?img=3', name: 'GreenTech' },
    { id: 4, user: 'startup4', avatar: 'https://i.pravatar.cc/150?img=4', name: 'AI Solutions' },
  ];

  const displayStatuses = statuses.length > 0 ? statuses : defaultStatuses;

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 px-2 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {displayStatuses.map((status) => (
        <div
          key={status.id}
          className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
        >
          <div className={`w-16 h-16 rounded-full p-0.5 ${
            isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}>
            <div className={`w-full h-full rounded-full ${isDark ? 'bg-black' : 'bg-white'} p-0.5`}>
              <img
                src={status.avatar}
                alt={status.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <span className={`text-xs max-w-[60px] truncate ${isDark ? 'text-white/80' : 'text-black/80'}`}>
            {status.name}
          </span>
        </div>
      ))}
    </div>
  );
}

