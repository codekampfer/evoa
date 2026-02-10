import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  FaBell, 
  FaSearch, 
  FaEdit, 
  FaCamera, 
  FaMapMarkerAlt,
  FaLink,
  FaCalendarAlt,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaShare,
  FaBookmark,
  FaRegBookmark
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import logo from "../../assets/logo.avif";

export default function Profile() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  // Mock user data - in real app, this would come from API/context
  const [user] = useState({
    id: 1,
    username: 'techstartup',
    displayName: 'Quantum Flow AI',
    bio: 'Revolutionizing data analytics with AI! Building the future of intelligent business decisions. 🚀',
    profilePhoto: 'https://i.pravatar.cc/150?img=1',
    coverPhoto: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isVerified: true,
    role: 'startup',
    location: 'Bangalore, India',
    website: 'https://quantumflow.ai',
    joinedDate: 'January 2023',
    email: 'contact@quantumflow.ai',
    phone: '+91 98765 43210',
    education: 'IIT Delhi',
    experience: '5+ years in AI/ML',
    followers: 12450,
    following: 342,
    posts: 89,
    links: {
      linkedin: 'https://linkedin.com/company/quantumflow',
      twitter: 'https://twitter.com/quantumflow',
      instagram: 'https://instagram.com/quantumflow'
    }
  });

  const [posts] = useState([
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Revolutionizing data analytics with AI! 🚀 Our platform helps businesses make smarter decisions.',
      tags: ['#AI', '#SaaS', '#Fintech'],
      likes: 12450,
      comments: 342,
      shares: 89,
      timeAgo: '2h',
      liked: false,
      saved: false
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Building the future, one line of code at a time. Join us on this journey! 🌟',
      tags: ['#Tech', '#StartupLife'],
      likes: 8920,
      comments: 156,
      shares: 34,
      timeAgo: '5h',
      liked: true,
      saved: false
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Excited to announce our Series A funding! 🎉',
      tags: ['#Funding', '#Growth'],
      likes: 15670,
      comments: 423,
      shares: 127,
      timeAgo: '1d',
      liked: false,
      saved: true
    }
  ]);

  const [activeTab, setActiveTab] = useState('posts');

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const toggleLike = (postId) => {
    console.log('Toggle like:', postId);
  };

  const toggleSave = (postId) => {
    console.log('Toggle save:', postId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-black border-b border-white/10' : 'bg-white border-b border-gray-200'}`}>
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className={`p-2 rounded-full transition-all ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
              }`}
            >
              <FaArrowLeft size={18} className={isDark ? 'text-white' : 'text-black'} />
            </button>
            <div className="flex items-center gap-2">
              <img src={logo} alt="EVO-A" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
              <span className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>EVO-A</span>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={() => navigate('/explore')} className={isDark ? 'text-white' : 'text-black'}>
              <FaSearch size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button onClick={() => navigate('/notifications')} className={isDark ? 'text-white' : 'text-black'}>
              <FaBell size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          {/* Cover Photo */}
          <div className="relative h-48 sm:h-64 md:h-80 rounded-b-2xl overflow-hidden mb-4">
            <img
              src={user.coverPhoto}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <button
              className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                isDark ? 'bg-black/50 text-white hover:bg-black/70' : 'bg-white/50 text-black hover:bg-white/70'
              }`}
            >
              <FaCamera size={16} />
            </button>
          </div>

          {/* Profile Info Section */}
          <div className="px-3 sm:px-6">
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 mb-6">
              <div className="relative -mt-16 sm:-mt-20">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-black">
                  <img
                    src={user.profilePhoto}
                    alt={user.displayName}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className={`absolute bottom-0 right-0 p-1.5 rounded-full backdrop-blur-md transition-all ${
                      isDark ? 'bg-black/50 text-white hover:bg-black/70' : 'bg-white/50 text-black hover:bg-white/70'
                    }`}
                  >
                    <FaCamera size={12} />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h1 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {user.displayName}
                  </h1>
                  {user.isVerified && (
                    <MdVerified className="text-[#00B8A9]" size={24} />
                  )}
                  <button
                    className={`ml-auto sm:ml-0 px-4 py-2 rounded-lg font-semibold transition-all ${
                      isDark
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                  >
                    <FaEdit size={14} className="inline mr-2" />
                    Edit Profile
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-500 mb-3">
                  <span className="truncate">@{user.username}</span>
                  {user.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt size={12} />
                      <span>{user.location}</span>
                    </div>
                  )}
                  {user.website && (
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#00B8A9] hover:underline"
                    >
                      <FaLink size={12} />
                      <span className="truncate max-w-[150px]">{user.website.replace(/^https?:\/\//, '')}</span>
                    </a>
                  )}
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt size={12} />
                    <span>Joined {user.joinedDate}</span>
                  </div>
                </div>
                <p className={`text-sm sm:text-base mb-4 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  {user.bio}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-8 mb-6 pb-6 border-b border-white/10">
              <div className="text-center">
                <p className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {formatNumber(user.posts)}
                </p>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Posts</p>
              </div>
              <div className="text-center">
                <p className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {formatNumber(user.followers)}
                </p>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Followers</p>
              </div>
              <div className="text-center">
                <p className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {formatNumber(user.following)}
                </p>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Following</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {user.education && (
                <div className="flex items-start gap-3">
                  <FaGraduationCap className={`mt-1 ${isDark ? 'text-white/60' : 'text-gray-500'}`} size={18} />
                  <div>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Education</p>
                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>{user.education}</p>
                  </div>
                </div>
              )}
              {user.experience && (
                <div className="flex items-start gap-3">
                  <FaBriefcase className={`mt-1 ${isDark ? 'text-white/60' : 'text-gray-500'}`} size={18} />
                  <div>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Experience</p>
                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>{user.experience}</p>
                  </div>
                </div>
              )}
              {user.email && (
                <div className="flex items-start gap-3">
                  <FaEnvelope className={`mt-1 ${isDark ? 'text-white/60' : 'text-gray-500'}`} size={18} />
                  <div>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Email</p>
                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>{user.email}</p>
                  </div>
                </div>
              )}
              {user.phone && (
                <div className="flex items-start gap-3">
                  <FaPhone className={`mt-1 ${isDark ? 'text-white/60' : 'text-gray-500'}`} size={18} />
                  <div>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Phone</p>
                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>{user.phone}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links */}
            {(user.links.linkedin || user.links.twitter || user.links.instagram) && (
              <div className="flex items-center gap-3 mb-6">
                {user.links.linkedin && (
                  <a
                    href={user.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all ${
                      isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                  >
                    <FaLinkedin size={18} />
                  </a>
                )}
                {user.links.twitter && (
                  <a
                    href={user.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all ${
                      isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                  >
                    <FaTwitter size={18} />
                  </a>
                )}
                {user.links.instagram && (
                  <a
                    href={user.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all ${
                      isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                  >
                    <FaInstagram size={18} />
                  </a>
                )}
              </div>
            )}

            {/* Tabs */}
            <div className="flex items-center gap-1 border-b border-white/10 mb-6">
              {['posts', 'saved', 'tagged'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-semibold capitalize transition-all border-b-2 ${
                    activeTab === tab
                      ? isDark
                        ? 'text-white border-[#00B8A9]'
                        : 'text-black border-[#00B8A9]'
                      : isDark
                      ? 'text-white/60 border-transparent hover:text-white'
                      : 'text-gray-500 border-transparent hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pb-20">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className={`rounded-xl overflow-hidden transition-all ${
                    isDark ? 'bg-[#0a0a0a] border border-white/10' : 'bg-white border border-gray-200'
                  } hover:shadow-lg`}
                >
                  <div className="relative aspect-square">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="flex items-center gap-4 text-white">
                        <div className="flex items-center gap-2">
                          <FaHeart size={18} />
                          <span className="font-semibold">{formatNumber(post.likes)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegComment size={18} />
                          <span className="font-semibold">{formatNumber(post.comments)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
