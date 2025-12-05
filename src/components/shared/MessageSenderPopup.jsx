import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FaTimes, FaSearch, FaPaperPlane } from "react-icons/fa";

export default function MessageSenderPopup({ isOpen, onClose, pitchId }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    { id: 1, name: 'Investor 1', avatar: 'https://i.pravatar.cc/150?img=10', online: true },
    { id: 2, name: 'Investor 2', avatar: 'https://i.pravatar.cc/150?img=11', online: false },
    { id: 3, name: 'Startup Founder', avatar: 'https://i.pravatar.cc/150?img=12', online: true }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div
        className={`relative w-full max-h-[80vh] rounded-t-2xl ${
          isDark ? 'bg-black border-t border-white/10' : 'bg-white border-t border-gray-200'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          isDark ? 'border-white/10' : 'border-gray-200'
        }`}>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
            Send Message
          </h2>
          <button
            onClick={onClose}
            className={isDark ? 'text-white' : 'text-black'}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-white/40' : 'text-black/40'
            }`} />
            <input
              type="text"
              placeholder="Search contact..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm border ${
                isDark
                  ? 'bg-black/50 border-white/20 text-white'
                  : 'bg-gray-100 border-gray-300 text-black'
              }`}
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="overflow-y-auto max-h-[50vh] p-4 space-y-2">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
                  )}
                </div>
                <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                  {contact.name}
                </span>
              </div>
              <button
                className={`p-2 rounded-full ${
                  isDark
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

