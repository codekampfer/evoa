import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FaTimes } from "react-icons/fa";

export default function CommentPopup({ isOpen, onClose, pitchId }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [newComment, setNewComment] = useState('');

  const comments = [
    {
      id: 1,
      user: 'investor1',
      avatar: 'https://i.pravatar.cc/150?img=10',
      text: 'Great pitch! Would love to learn more about your revenue model.',
      time: '2 hours ago',
      likes: 12
    },
    {
      id: 2,
      user: 'investor2',
      avatar: 'https://i.pravatar.cc/150?img=11',
      text: 'Impressive traction. Let\'s connect!',
      time: '5 hours ago',
      likes: 8
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Popup */}
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
            Comments
          </h2>
          <button
            onClick={onClose}
            className={isDark ? 'text-white' : 'text-black'}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Comments List */}
        <div className="overflow-y-auto max-h-[60vh] p-4 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                    {comment.user}
                  </span>
                  <span className={`text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    {comment.time}
                  </span>
                </div>
                <p className={`text-sm mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                  {comment.text}
                </p>
                <button className={`text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                  Like ({comment.likes})
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className={`p-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Your avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className={`flex-1 px-4 py-2 rounded-full text-sm border ${
                isDark
                  ? 'bg-black/50 border-white/20 text-white'
                  : 'bg-gray-100 border-gray-300 text-black'
              }`}
            />
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                isDark
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
              }`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

