import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  FaHeart, 
  FaRegHeart, 
  FaRegComment, 
  FaRegPaperPlane, 
  FaBookmark,
  FaRegBookmark,
  FaVolumeUp,
  FaVolumeMute,
  FaArrowLeft
} from "react-icons/fa";

export default function ReelPitch() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const { id } = useParams();
  const videoRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Sample pitch data matching the image
  const pitch = {
    id: id || 1,
    name: 'Peter Quil',
    username: 'peterquil',
    profilePhoto: 'https://i.pravatar.cc/150?img=12',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    hashtag: '#Climateimpact',
    category: 'HealthTech',
    description: 'Introducing our new payment platform. #healthTech',
    likes: 12450,
    comments: 342,
    shares: 89,
    teamSize: 5,
    dealInfo: {
      ask: '₹50L',
      equity: '10%',
      revenue: '₹1.2Cr'
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [isMuted, isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleComment = () => {
    // Navigate to comments or open comment modal
    console.log('Open comments');
  };

  const handleShare = () => {
    // Share functionality
    console.log('Share pitch');
  };

  const handleSupport = () => {
    // Navigate to support page
    navigate(`/support/${id}`);
  };

  return (
    <div className={`fixed inset-0 z-50 ${isDark ? 'bg-black' : 'bg-gray-100'} overflow-hidden`}>
      {/* Container with max-width for larger screens */}
      <div className="w-full h-full max-w-md mx-auto relative shadow-2xl">
        {/* Header */}
        <div className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 ${
          isDark ? 'bg-gradient-to-b from-black/80 to-transparent' : 'bg-gradient-to-b from-white/80 to-transparent'
        }`}>
          <button
            onClick={() => navigate(-1)}
            className={`p-2 rounded-full transition-all ${
              isDark ? 'bg-black/50 text-white hover:bg-black/70' : 'bg-white/50 text-black hover:bg-white/70'
            }`}
          >
            <FaArrowLeft size={18} />
          </button>
          <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Pitch Reel
          </h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Main Content Area */}
        <div className="relative w-full h-full flex">
        {/* Video/Image Container */}
        <div className="relative flex-1 flex items-center justify-center bg-black">
          <video
            ref={videoRef}
            src={pitch.video}
            className="w-full h-full object-cover"
            loop
            playsInline
            muted={isMuted}
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Category Tag - Top Left */}
          <div className="absolute top-16 left-4 z-10">
            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
              isDark 
                ? 'bg-black/60 backdrop-blur-sm text-white border border-white/20' 
                : 'bg-white/80 backdrop-blur-sm text-gray-900 border border-gray-200'
            }`}>
              {pitch.category}
            </div>
          </div>

          {/* Volume Icon - Top Right */}
          <button
            onClick={toggleMute}
            className={`absolute top-16 right-4 z-10 p-2 rounded-full transition-all ${
              isDark 
                ? 'bg-black/60 backdrop-blur-sm text-white hover:bg-black/80' 
                : 'bg-white/80 backdrop-blur-sm text-gray-900 hover:bg-white'
            }`}
          >
            {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
          </button>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
              onClick={togglePlay}
            >
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="w-0 h-0 border-l-[12px] border-l-gray-900 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - User Info & Interaction Buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6">
          {/* User Avatar */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500">
              <img
                src={pitch.profilePhoto}
                alt={pitch.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="flex flex-col items-center gap-1"
          >
            {isLiked ? (
              <FaHeart size={28} className="text-red-500" />
            ) : (
              <FaRegHeart size={28} className="text-white" />
            )}
            <span className="text-xs font-semibold text-white">{pitch.likes.toLocaleString()}</span>
          </button>

          {/* Comment Button */}
          <button
            onClick={handleComment}
            className="flex flex-col items-center gap-1"
          >
            <FaRegComment size={28} className="text-white" />
            <span className="text-xs font-semibold text-white">{pitch.comments}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex flex-col items-center gap-1"
          >
            <FaRegPaperPlane size={28} className="text-white" />
            <span className="text-xs font-semibold text-white">{pitch.shares}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={handleSave}
            className="flex flex-col items-center gap-1"
          >
            {isSaved ? (
              <FaBookmark size={28} className="text-amber-400" />
            ) : (
              <FaRegBookmark size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Gradient Overlay */}
          <div className={`h-64 bg-gradient-to-t ${
            isDark ? 'from-black via-black/80 to-transparent' : 'from-white via-white/80 to-transparent'
          }`}></div>

          {/* Content */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {/* User Info */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500">
                <img
                  src={pitch.profilePhoto}
                  alt={pitch.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-base">{pitch.name}</h3>
                <p className="text-sm opacity-80">{pitch.hashtag}</p>
              </div>
            </div>

            {/* Support Button */}
            <button
              onClick={handleSupport}
              className={`w-full py-3 rounded-lg font-semibold mb-4 transition-all ${
                isDark 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Support this startup
            </button>

            {/* Financial Details */}
            <div className="flex gap-3 mb-3">
              <div className={`flex-1 px-4 py-3 rounded-lg transition-all ${
                isDark 
                  ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black hover:shadow-[0_0_20px_rgba(176,255,250,0.5)]' 
                  : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white hover:shadow-[0_0_20px_rgba(0,184,169,0.4)]'
              }`}>
                <p className="text-xs opacity-90 mb-1">Ask</p>
                <p className="font-bold text-sm">{pitch.dealInfo.ask} for {pitch.dealInfo.equity}</p>
              </div>
              <div className={`flex-1 px-4 py-3 rounded-lg transition-all ${
                isDark 
                  ? 'bg-gradient-to-r from-[#80E5FF] to-[#B0FFFA] text-black hover:shadow-[0_0_20px_rgba(128,229,255,0.5)]' 
                  : 'bg-gradient-to-r from-[#008C81] to-[#00B8A9] text-white hover:shadow-[0_0_20px_rgba(0,140,129,0.4)]'
              }`}>
                <p className="text-xs opacity-90 mb-1">Revenue</p>
                <p className="font-bold text-sm">{pitch.dealInfo.revenue} Revenue</p>
              </div>
            </div>

            {/* Team Info */}
            <p className={`text-sm mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              Team of {pitch.teamSize}
            </p>

            {/* Description */}
            <p className={`text-sm ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
              {pitch.description}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
