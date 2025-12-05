import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaChevronUp } from "react-icons/fa";

export default function ReelPitch() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const { id } = useParams();
  const videoRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample pitch data
  const pitch = {
    id: id || 1,
    username: 'techstartup',
    profilePhoto: 'https://i.pravatar.cc/150?img=1',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Revolutionizing data analytics with AI! Our platform helps businesses make smarter decisions.',
    likes: 12450,
    dealInfo: {
      amount: '₹50 Lakhs',
      equity: '5%',
      revenue: '₹10 Lakhs'
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

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

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    navigate(`/pitch/${id}/comments`);
  };

  const handleShare = () => {
    navigate(`/share/${id}`);
  };

  const handleSupport = () => {
    navigate(`/support/${id}`);
  };

  return (
    <div className={`fixed inset-0 z-50 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className={`absolute top-4 left-4 z-10 p-2 rounded-full ${
          isDark ? 'bg-black/50 text-white' : 'bg-white/50 text-black'
        }`}
      >
        ← Back
      </button>

      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={pitch.video}
          className="w-full h-full object-contain"
          loop
          playsInline
          onClick={togglePlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
            onClick={togglePlay}
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <FaChevronUp className="text-black rotate-90" size={24} />
            </div>
          </div>
        )}
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-6">
        <button
          onClick={handleLike}
          className={`flex flex-col items-center gap-1 ${isLiked ? 'text-red-500' : 'text-white'}`}
        >
          {isLiked ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
          <span className="text-xs font-semibold">{pitch.likes.toLocaleString()}</span>
        </button>
        <button
          onClick={handleComment}
          className="flex flex-col items-center gap-1 text-white"
        >
          <FaRegComment size={28} />
          <span className="text-xs font-semibold">Comment</span>
        </button>
        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1 text-white"
        >
          <FaRegPaperPlane size={28} />
          <span className="text-xs font-semibold">Share</span>
        </button>
        <button
          onClick={handleSupport}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
            isDark ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
          Support This Startup
        </button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={pitch.profilePhoto}
              alt={pitch.username}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className={`text-white font-semibold`}>{pitch.username}</h3>
          </div>
        </div>
        <p className={`text-white mb-4`}>{pitch.description}</p>
        
        {/* Deal Info */}
        <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg ${isDark ? 'bg-white/10' : 'bg-black/20'}`}>
          <div>
            <p className={`text-xs ${isDark ? 'text-white/60' : 'text-white/80'}`}>Raising</p>
            <p className={`text-white font-semibold`}>{pitch.dealInfo.amount}</p>
          </div>
          <div>
            <p className={`text-xs ${isDark ? 'text-white/60' : 'text-white/80'}`}>Equity</p>
            <p className={`text-white font-semibold`}>{pitch.dealInfo.equity}</p>
          </div>
          <div>
            <p className={`text-xs ${isDark ? 'text-white/60' : 'text-white/80'}`}>Revenue</p>
            <p className={`text-white font-semibold`}>{pitch.dealInfo.revenue}</p>
          </div>
        </div>
      </div>

      {/* Swipe Indicator */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white/40">
        <FaChevronUp size={20} />
      </div>
    </div>
  );
}

