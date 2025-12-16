import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import StatusComponent from "../../components/shared/StatusComponent";
import { 
  FaHeart,
  FaBookmark,
  FaEllipsisH,
  FaRegHeart,
  FaRegBookmark,
  FaRegComment,
  FaShare,
  FaPlay,
  FaPause,
  FaBell,
  FaSearch,
  FaChartLine,
  FaUserPlus,
  FaGlobeAmericas
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import logo from "../../assets/logo.avif";

export default function Startup() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      type: "post",
      username: "quantumflow",
      displayName: "Quantum Flow AI",
      userAvatar: "https://i.pravatar.cc/150?img=1",
      isVerified: true,
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Revolutionizing data analytics with AI! 🚀 Our platform helps businesses make smarter decisions.",
      tags: ["#AI", "#SaaS", "#Fintech"],
      likes: 12450,
      comments: 342,
      shares: 89,
      views: 45600,
      timeAgo: "2h",
      liked: false,
      saved: false,
      isFollowing: false
    },
    {
      id: 2,
      type: "reel",
      username: "techstartup",
      displayName: "Tech Startup Inc",
      userAvatar: "https://i.pravatar.cc/150?img=2",
      isVerified: false,
      image: "https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      caption: "Just launched our new product! Excited to see what the future holds. 💡",
      tags: ["#Startup", "#Innovation"],
      likes: 8920,
      comments: 156,
      shares: 34,
      views: 28400,
      timeAgo: "5h",
      liked: false,
      saved: false,
      isPlaying: false,
      isFollowing: true
    },
    {
      id: 3,
      type: "post",
      username: "innovatehub",
      displayName: "Innovate Hub",
      userAvatar: "https://i.pravatar.cc/150?img=3",
      isVerified: true,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Building the future, one line of code at a time. Join us on this journey! 🌟",
      tags: ["#Tech", "#StartupLife"],
      likes: 15670,
      comments: 423,
      shares: 127,
      views: 67800,
      timeAgo: "1d",
      liked: false,
      saved: false,
      isFollowing: false
    }
  ]);

  const [activeTab, setActiveTab] = useState('forYou'); // 'forYou' or 'following'
  const videoRefs = useRef({});

  const toggleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const toggleSave = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, saved: !post.saved };
      }
      return post;
    }));
  };

  const toggleFollow = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, isFollowing: !post.isFollowing };
      }
      return post;
    }));
  };

  const toggleVideoPlay = (postId) => {
    const video = videoRefs.current[postId];
    if (video) {
      if (video.paused) {
        video.play();
        setPosts(posts.map(post => 
          post.id === postId ? { ...post, isPlaying: true } : post
        ));
      } else {
        video.pause();
        setPosts(posts.map(post => 
          post.id === postId ? { ...post, isPlaying: false } : post
        ));
      }
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#000000]' : 'bg-[#f7f9fa]'
    }`}>
      {/* Top Navigation Bar - Modern Gradient */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${
        isDark 
          ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/98 to-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.08]' 
          : 'bg-gradient-to-b from-white via-white/98 to-white/95 backdrop-blur-2xl border-b border-gray-200/60'
      } shadow-sm`}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EVO-A" className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-xl" />
            <span className={`text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r ${
              isDark 
                ? 'from-white via-blue-100 to-purple-200 text-transparent bg-clip-text' 
                : 'from-gray-900 via-blue-900 to-purple-900 text-transparent bg-clip-text'
            }`}>EVO-A</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={() => navigate('/explore')} 
              className={`p-2 rounded-xl transition-all duration-200 ${
                isDark 
                  ? 'text-white/70 hover:text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <FaSearch size={20} />
            </button>
            <button 
              onClick={() => navigate('/notifications')} 
              className={`p-2 rounded-xl transition-all duration-200 relative ${
                isDark 
                  ? 'text-white/70 hover:text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <FaBell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Tab Switcher - X/TikTok Style */}
        <div className={`flex items-center justify-center border-t ${
          isDark ? 'border-white/[0.08]' : 'border-gray-200/60'
        }`}>
          <div className="flex gap-0 max-w-3xl w-full">
            <button
              onClick={() => setActiveTab('forYou')}
              className={`flex-1 py-3 text-sm sm:text-base font-semibold transition-all duration-200 relative ${
                activeTab === 'forYou'
                  ? isDark ? 'text-white' : 'text-gray-900'
                  : isDark ? 'text-white/50 hover:text-white/70' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              For You
              {activeTab === 'forYou' && (
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`}></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('following')}
              className={`flex-1 py-3 text-sm sm:text-base font-semibold transition-all duration-200 relative ${
                activeTab === 'following'
                  ? isDark ? 'text-white' : 'text-gray-900'
                  : isDark ? 'text-white/50 hover:text-white/70' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Following
              {activeTab === 'following' && (
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`}></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-32 sm:pt-36">
        <div className="max-w-3xl mx-auto px-0 sm:px-4 pb-20">
          {/* Stories/Status - Hidden on mobile for cleaner look */}
          <div className="hidden sm:block mb-6 px-4 sm:px-0">
            <StatusComponent />
          </div>

          {/* Feed Posts - Enhanced Cards */}
          <div className="space-y-0 sm:space-y-4">
            {posts.map((post) => (
              <article
                key={post.id}
                className={`overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#000000] sm:bg-[#0a0a0a] border-y sm:border sm:rounded-2xl border-white/[0.08]' 
                    : 'bg-white border-y sm:border sm:rounded-2xl border-gray-200/80'
                } sm:shadow-lg sm:hover:shadow-xl`}
              >
                {/* Post Header */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="relative">
                      <div className={`w-11 h-11 rounded-full overflow-hidden ring-2 ${
                        post.type === "reel" 
                          ? 'ring-gradient-to-tr from-purple-500 to-pink-500' 
                          : isDark ? 'ring-white/10' : 'ring-gray-200'
                      }`}>
                        <img
                          src={post.userAvatar}
                          alt={post.username}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {post.type === "reel" && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <FaPlay size={10} className="text-white ml-0.5" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-bold text-sm truncate ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {post.displayName}
                        </span>
                        {post.isVerified && (
                          <MdVerified className="text-blue-500 flex-shrink-0" size={16} />
                        )}
                      </div>
                      <div className={`flex items-center gap-1.5 text-xs ${
                        isDark ? 'text-white/50' : 'text-gray-500'
                      }`}>
                        <span>@{post.username}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                        <FaGlobeAmericas size={10} className="ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!post.isFollowing && (
                      <button
                        onClick={() => toggleFollow(post.id)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                          isDark 
                            ? 'bg-white text-black hover:bg-white/90' 
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      >
                        <FaUserPlus size={12} />
                        Follow
                      </button>
                    )}
                    <button className={`p-2 rounded-full transition-colors ${
                      isDark ? 'text-white/60 hover:bg-white/10' : 'text-gray-500 hover:bg-gray-100'
                    }`}>
                      <FaEllipsisH size={16} />
                    </button>
                  </div>
                </div>

                {/* Caption - Before Media (LinkedIn/X style) */}
                {post.caption && (
                  <div className="px-4 pb-3">
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      isDark ? 'text-white/90' : 'text-gray-900'
                    }`}>
                      {post.caption}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-sm font-medium ${
                            isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                          } cursor-pointer`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Media */}
                <div className="relative w-full aspect-square sm:aspect-video bg-black">
                  {post.type === "reel" ? (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[post.id] = el)}
                        src={post.video}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                      />
                      <button
                        onClick={() => toggleVideoPlay(post.id)}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                          !post.isPlaying ? 'opacity-100 bg-black/30' : 'opacity-0 hover:opacity-100 bg-black/20'
                        }`}
                      >
                        <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110">
                          {!post.isPlaying ? (
                            <FaPlay size={24} className="text-gray-900 ml-1" />
                          ) : (
                            <FaPause size={24} className="text-gray-900" />
                          )}
                        </div>
                      </button>
                      {/* Views Counter */}
                      <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-1.5">
                        <FaChartLine className="text-white" size={12} />
                        <span className="text-white text-xs font-semibold">
                          {formatNumber(post.views)} views
                        </span>
                      </div>
                    </>
                  ) : (
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Engagement Stats */}
                <div className={`px-4 py-2.5 flex items-center justify-between text-xs border-b ${
                  isDark ? 'text-white/60 border-white/[0.08]' : 'text-gray-600 border-gray-200'
                }`}>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center border-2 border-current">
                          <FaHeart size={10} className="text-white" />
                        </div>
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border-2 border-current">
                          <span className="text-white text-[10px]">👍</span>
                        </div>
                      </div>
                      {formatNumber(post.likes)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{formatNumber(post.comments)} comments</span>
                    <span>{formatNumber(post.shares)} shares</span>
                  </div>
                </div>

                {/* Action Buttons - Modern Layout */}
                <div className={`px-2 py-2 flex items-center justify-around border-b ${
                  isDark ? 'border-white/[0.08]' : 'border-gray-200'
                }`}>
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 flex-1 justify-center ${
                      post.liked
                        ? 'text-red-500'
                        : isDark 
                          ? 'text-white/70 hover:bg-white/10 hover:text-white' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {post.liked ? (
                      <FaHeart size={18} fill="currentColor" />
                    ) : (
                      <FaRegHeart size={18} />
                    )}
                    <span className="text-sm font-medium hidden sm:inline">Like</span>
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 flex-1 justify-center ${
                    isDark 
                      ? 'text-white/70 hover:bg-white/10 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}>
                    <FaRegComment size={18} />
                    <span className="text-sm font-medium hidden sm:inline">Comment</span>
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 flex-1 justify-center ${
                    isDark 
                      ? 'text-white/70 hover:bg-white/10 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}>
                    <FaShare size={18} />
                    <span className="text-sm font-medium hidden sm:inline">Share</span>
                  </button>
                  <button
                    onClick={() => toggleSave(post.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 flex-1 justify-center ${
                      post.saved
                        ? 'text-amber-500'
                        : isDark 
                          ? 'text-white/70 hover:bg-white/10 hover:text-white' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {post.saved ? (
                      <FaBookmark size={18} fill="currentColor" />
                    ) : (
                      <FaRegBookmark size={18} />
                    )}
                    <span className="text-sm font-medium hidden sm:inline">Save</span>
                  </button>
                </div>

                {/* Comment Input */}
                <div className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full overflow-hidden ring-2 ${
                      isDark ? 'ring-white/10' : 'ring-gray-200'
                    }`}>
                      <img
                        src="https://i.pravatar.cc/150?img=5"
                        alt="Your avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className={`flex-1 px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                        isDark
                          ? 'bg-white/5 text-white placeholder-white/40 border border-white/10 focus:border-white/20 focus:bg-white/10'
                          : 'bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-gray-300 focus:bg-gray-50'
                      } outline-none`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
