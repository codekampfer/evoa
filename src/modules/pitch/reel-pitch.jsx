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
  FaArrowLeft,
  FaVideo,
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaSpinner
} from "react-icons/fa";

export default function ReelPitch() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const { id } = useParams();
  const containerRef = useRef(null);
  const videoRefs = useRef({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reelStates, setReelStates] = useState({});
  
  // User Role State
  const [userRole, setUserRole] = useState(null);
  
  // AI Chat State
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [currentPitchForAI, setCurrentPitchForAI] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Load user role from localStorage
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    setUserRole(savedRole);
  }, []);

  // Check if user can see AI and Meet buttons
  // Only Investors and Incubators can see these buttons
  const canSeeInvestorFeatures = userRole === 'investor' || userRole === 'incubator';

  // Multiple pitch reels data
  const pitches = [
    {
      id: 1,
      name: 'Peter Quil',
      username: 'peterquil',
      profilePhoto: 'https://i.pravatar.cc/150?img=12',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      username: 'sarahj',
      profilePhoto: 'https://i.pravatar.cc/150?img=5',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      hashtag: '#FinTech',
      category: 'FinTech',
      description: 'Revolutionizing digital payments with AI. Join us! 🚀',
      likes: 18900,
      comments: 456,
      shares: 123,
      teamSize: 8,
      dealInfo: {
        ask: '₹1Cr',
        equity: '15%',
        revenue: '₹2.5Cr'
      }
    },
    {
      id: 3,
      name: 'Alex Chen',
      username: 'alexchen',
      profilePhoto: 'https://i.pravatar.cc/150?img=8',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      hashtag: '#EdTech',
      category: 'EdTech',
      description: 'Making education accessible to everyone. Learn more! 📚',
      likes: 23400,
      comments: 678,
      shares: 234,
      teamSize: 12,
      dealInfo: {
        ask: '₹75L',
        equity: '12%',
        revenue: '₹1.8Cr'
      }
    },
    {
      id: 4,
      name: 'Maria Garcia',
      username: 'mariag',
      profilePhoto: 'https://i.pravatar.cc/150?img=15',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      hashtag: '#GreenTech',
      category: 'GreenTech',
      description: 'Sustainable solutions for a better tomorrow. 🌱',
      likes: 15600,
      comments: 389,
      shares: 145,
      teamSize: 6,
      dealInfo: {
        ask: '₹60L',
        equity: '8%',
        revenue: '₹1.5Cr'
      }
    }
  ];

  const currentPitch = pitches[currentIndex] || pitches[0];

  // Initialize reel states
  useEffect(() => {
    const initialState = {};
    pitches.forEach((pitch) => {
      initialState[pitch.id] = {
        isLiked: false,
        isSaved: false,
        isPlaying: false,
        isMuted: true
      };
    });
    setReelStates(initialState);
  }, []);

  // Handle scroll and play/pause videos
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / windowHeight);
      
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < pitches.length) {
        setCurrentIndex(newIndex);
        
        // Pause all videos
        Object.values(videoRefs.current).forEach((video) => {
          if (video) video.pause();
        });

        // Reset all states
        setReelStates((prev) => {
          const updated = { ...prev };
          Object.keys(updated).forEach((id) => {
            updated[id] = { ...updated[id], isPlaying: false };
          });
          return updated;
        });

        // Play current video
        const currentVideo = videoRefs.current[pitches[newIndex].id];
        if (currentVideo) {
          currentVideo.muted = reelStates[pitches[newIndex].id]?.isMuted ?? true;
          currentVideo.play().catch(() => {});
          setReelStates((prev) => ({
            ...prev,
            [pitches[newIndex].id]: {
              ...prev[pitches[newIndex].id],
              isPlaying: true
            }
          }));
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, reelStates]);

  // Play first video on mount
  useEffect(() => {
    const firstVideo = videoRefs.current[pitches[0].id];
    if (firstVideo && reelStates[pitches[0].id]) {
      firstVideo.muted = reelStates[pitches[0].id].isMuted;
      firstVideo.play().catch(() => {});
      setReelStates((prev) => ({
        ...prev,
        [pitches[0].id]: { ...prev[pitches[0].id], isPlaying: true }
      }));
    }
  }, [reelStates]);

  const togglePlay = (pitchId) => {
    const video = videoRefs.current[pitchId];
    if (video) {
      const currentState = reelStates[pitchId];
      if (currentState.isPlaying) {
        video.pause();
        setReelStates((prev) => ({
          ...prev,
          [pitchId]: { ...prev[pitchId], isPlaying: false }
        }));
      } else {
        video.play();
        setReelStates((prev) => ({
          ...prev,
          [pitchId]: { ...prev[pitchId], isPlaying: true }
        }));
      }
    }
  };

  const toggleMute = (pitchId) => {
    const video = videoRefs.current[pitchId];
    if (video) {
      const newMuted = !reelStates[pitchId].isMuted;
      video.muted = newMuted;
      setReelStates((prev) => ({
        ...prev,
        [pitchId]: { ...prev[pitchId], isMuted: newMuted }
      }));
    }
  };

  const handleLike = (pitchId) => {
    setReelStates((prev) => ({
      ...prev,
      [pitchId]: { ...prev[pitchId], isLiked: !prev[pitchId].isLiked }
    }));
  };

  const handleSave = (pitchId) => {
    setReelStates((prev) => ({
      ...prev,
      [pitchId]: { ...prev[pitchId], isSaved: !prev[pitchId].isSaved }
    }));
  };

  const handleComment = (pitchId) => {
    console.log('Open comments', pitchId);
  };

  const handleShare = (pitchId) => {
    console.log('Share pitch', pitchId);
  };

  const handleSupport = (pitchId) => {
    navigate(`/support/${pitchId}`);
  };

  const handleMeetClick = () => {
    window.open('https://meet.new', '_blank');
  };

  const handleAIClick = (pitch) => {
    setCurrentPitchForAI(pitch);
    setMessages([
      {
        id: 1,
        type: 'ai',
        text: `Hello! I'm your AI Assistant for ${pitch.name}'s ${pitch.category} startup. I can help you understand their business model, investment opportunity (${pitch.dealInfo.ask} for ${pitch.dealInfo.equity}), team of ${pitch.teamSize}, and answer any questions. How can I help?`,
        timestamp: new Date()
      }
    ]);
    setIsAIOpen(true);
  };

  // AI Chat Functions
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading || !currentPitchForAI) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        text: generateAIResponse(inputMessage, currentPitchForAI),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateAIResponse = (userInput, pitch) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('business') || lowerInput.includes('model') || lowerInput.includes('what')) {
      return `${pitch.name} operates in the ${pitch.category} sector. ${pitch.description} They have a team of ${pitch.teamSize} members working on innovative solutions.`;
    }
    if (lowerInput.includes('deal') || lowerInput.includes('investment') || lowerInput.includes('equity')) {
      return `Investment Opportunity: ${pitch.name} is raising ${pitch.dealInfo.ask} for ${pitch.dealInfo.equity} equity. Current revenue is ${pitch.dealInfo.revenue}. This is a ${pitch.category} venture with strong growth potential.`;
    }
    if (lowerInput.includes('revenue') || lowerInput.includes('traction') || lowerInput.includes('growth')) {
      return `${pitch.name} has achieved ${pitch.likes.toLocaleString()} community engagements and impressive traction. Current revenue: ${pitch.dealInfo.revenue}. They're growing rapidly in the ${pitch.category} space!`;
    }
    if (lowerInput.includes('team') || lowerInput.includes('founder')) {
      return `${pitch.name}'s team consists of ${pitch.teamSize} dedicated professionals. Led by experienced founders with deep expertise in ${pitch.category}. Strong execution capability!`;
    }
    if (lowerInput.includes('market') || lowerInput.includes('competitor') || lowerInput.includes('industry')) {
      return `${pitch.name} operates in the ${pitch.category} sector (${pitch.hashtag}). The market shows strong demand with ${pitch.comments} community discussions and ${pitch.shares} shares. Unique positioning!`;
    }
    if (lowerInput.includes('contact') || lowerInput.includes('meet') || lowerInput.includes('connect')) {
      return `You can connect with ${pitch.name} by using the Meet button to schedule a video call, or tap the Support button to express interest. They're actively seeking partners and investors!`;
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return `Hello! I'm here to help you learn about ${pitch.name}'s ${pitch.category} startup. Ask me about their business, investment opportunity, team, or how to connect!`;
    }
    
    return `I understand you're asking about: "${userInput}". I can provide details about ${pitch.name}'s business model, their ${pitch.dealInfo.ask} investment ask for ${pitch.dealInfo.equity}, team of ${pitch.teamSize}, or how to connect. What interests you most?`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderReel = (pitch, index) => {
    const state = reelStates[pitch.id] || { isLiked: false, isSaved: false, isPlaying: false, isMuted: true };
    
    return (
      <div key={pitch.id} className="w-full h-screen flex-shrink-0 relative overflow-hidden">
        {/* Video Container */}
        <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
          <video
            ref={(el) => (videoRefs.current[pitch.id] = el)}
            src={pitch.video}
            className="w-full h-full object-cover"
            loop
            playsInline
            muted={state.isMuted}
            onClick={() => togglePlay(pitch.id)}
            onPlay={() => setReelStates((prev) => ({
              ...prev,
              [pitch.id]: { ...prev[pitch.id], isPlaying: true }
            }))}
            onPause={() => setReelStates((prev) => ({
              ...prev,
              [pitch.id]: { ...prev[pitch.id], isPlaying: false }
            }))}
          />

          {/* Category Tag - Top Left - Mobile Optimized */}
          <div className="absolute top-14 left-3 z-10 safe-area-top">
            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
              isDark 
                ? 'bg-black/60 backdrop-blur-sm text-white border border-white/20' 
                : 'bg-white/80 backdrop-blur-sm text-gray-900 border border-gray-200'
            }`}>
              {pitch.category}
            </div>
          </div>

          {/* Top Right Icons - Meet, AI, Volume - Mobile Optimized */}
          <div className="absolute top-14 right-3 z-10 flex items-center gap-2 safe-area-top">
            {/* Meet Button - Only for Investors and Incubators */}
            {canSeeInvestorFeatures && (
              <button
                onClick={handleMeetClick}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all active:scale-95 ${
                  isDark 
                    ? 'bg-black/60 backdrop-blur-sm text-white hover:bg-black/80' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-900 hover:bg-white'
                }`}
                title="Schedule Meeting"
              >
                <FaVideo size={18} />
              </button>
            )}

            {/* AI Button - Only for Investors and Incubators */}
            {canSeeInvestorFeatures && (
              <button
                onClick={() => handleAIClick(pitch)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all active:scale-95 bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white hover:shadow-lg"
                title="AI Assistant"
              >
                <FaRobot size={18} />
              </button>
            )}

            {/* Volume Button - Available for all users */}
            <button
              onClick={() => toggleMute(pitch.id)}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all active:scale-95 ${
                isDark 
                  ? 'bg-black/60 backdrop-blur-sm text-white hover:bg-black/80' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-900 hover:bg-white'
              }`}
            >
              {state.isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
            </button>
          </div>

          {/* Play/Pause Overlay */}
          {!state.isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
              onClick={() => togglePlay(pitch.id)}
            >
              <div className="min-w-[72px] min-h-[72px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="w-0 h-0 border-l-[14px] border-l-gray-900 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1"></div>
              </div>
            </div>
          )}

          {/* Right Side - User Info & Interaction Buttons - Mobile Optimized */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-5 max-h-[70vh] overflow-y-auto scrollbar-hide safe-area-right">
            {/* User Avatar - Touch Friendly */}
            <div className="relative">
              <div className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500">
                <img
                  src={pitch.profilePhoto}
                  alt={pitch.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Like Button - Touch Friendly (minimum 44px) */}
            <button
              onClick={() => handleLike(pitch.id)}
              className="flex flex-col items-center gap-1 active:scale-95 transition-transform min-w-[44px] min-h-[44px] justify-center"
            >
              {state.isLiked ? (
                <FaHeart size={26} className="text-red-500" />
              ) : (
                <FaRegHeart size={26} className="text-white drop-shadow-lg" />
              )}
              <span className="text-xs font-semibold text-white drop-shadow-md">{pitch.likes.toLocaleString()}</span>
            </button>

            {/* Comment Button - Touch Friendly */}
            <button
              onClick={() => handleComment(pitch.id)}
              className="flex flex-col items-center gap-1 active:scale-95 transition-transform min-w-[44px] min-h-[44px] justify-center"
            >
              <FaRegComment size={26} className="text-white drop-shadow-lg" />
              <span className="text-xs font-semibold text-white drop-shadow-md">{pitch.comments}</span>
            </button>

            {/* Share Button - Touch Friendly */}
            <button
              onClick={() => handleShare(pitch.id)}
              className="flex flex-col items-center gap-1 active:scale-95 transition-transform min-w-[44px] min-h-[44px] justify-center"
            >
              <FaRegPaperPlane size={26} className="text-white drop-shadow-lg" />
              <span className="text-xs font-semibold text-white drop-shadow-md">{pitch.shares}</span>
            </button>

            {/* Bookmark Button - Touch Friendly */}
            <button
              onClick={() => handleSave(pitch.id)}
              className="flex flex-col items-center gap-1 active:scale-95 transition-transform min-w-[44px] min-h-[44px] justify-center"
            >
              {state.isSaved ? (
                <FaBookmark size={26} className="text-amber-400" />
              ) : (
                <FaRegBookmark size={26} className="text-white drop-shadow-lg" />
              )}
            </button>
          </div>

          {/* Bottom Section - Mobile Optimized */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none max-w-full overflow-hidden safe-area-bottom">
            {/* Gradient Overlay */}
            <div className={`h-56 bg-gradient-to-t pointer-events-none ${
              isDark ? 'from-black via-black/90 to-transparent' : 'from-white via-white/90 to-transparent'
            }`}></div>

            {/* Content - More Padding for Mobile */}
            <div className={`absolute bottom-0 left-0 right-0 px-4 py-4 pointer-events-auto max-w-full overflow-hidden ${isDark ? 'text-white' : 'text-black'}`}>
              {/* User Info */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="min-w-[40px] min-h-[40px] w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500 flex-shrink-0">
                  <img
                    src={pitch.profilePhoto}
                    alt={pitch.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 pr-2 overflow-hidden">
                  <h3 className="font-bold text-sm truncate">{pitch.name}</h3>
                  <p className="text-xs opacity-80 truncate">{pitch.hashtag}</p>
                </div>
              </div>

              {/* Support Button - Touch Friendly (minimum 48px height) */}
              <button
                onClick={() => handleSupport(pitch.id)}
                className={`w-full min-h-[48px] py-3 rounded-xl text-sm font-semibold mb-3 transition-all active:scale-[0.98] ${
                  isDark 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Support this startup
              </button>

              {/* Financial Details - Better Mobile Layout */}
              <div className="flex gap-2.5 mb-3">
                <div className={`flex-1 px-3 py-3 rounded-xl transition-all min-w-0 ${
                  isDark 
                    ? 'bg-gradient-to-r from-[#B0FFFA] to-[#80E5FF] text-black hover:shadow-[0_0_20px_rgba(176,255,250,0.5)]' 
                    : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white hover:shadow-[0_0_20px_rgba(0,184,169,0.4)]'
                }`}>
                  <p className="text-[10px] opacity-90 mb-1">Ask</p>
                  <p className="font-bold text-xs leading-tight break-words">{pitch.dealInfo.ask} for {pitch.dealInfo.equity}</p>
                </div>
                <div className={`flex-1 px-3 py-3 rounded-xl transition-all min-w-0 ${
                  isDark 
                    ? 'bg-gradient-to-r from-[#80E5FF] to-[#B0FFFA] text-black hover:shadow-[0_0_20px_rgba(128,229,255,0.5)]' 
                    : 'bg-gradient-to-r from-[#008C81] to-[#00B8A9] text-white hover:shadow-[0_0_20px_rgba(0,140,129,0.4)]'
                }`}>
                  <p className="text-[10px] opacity-90 mb-1">Revenue</p>
                  <p className="font-bold text-xs leading-tight break-words">{pitch.dealInfo.revenue} Revenue</p>
                </div>
              </div>

              {/* Team Info */}
              <p className={`text-xs mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                Team of {pitch.teamSize}
              </p>

              {/* Description */}
              <p className={`text-xs leading-relaxed line-clamp-2 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                {pitch.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`fixed inset-0 z-50 ${isDark ? 'bg-black' : 'bg-gray-100'} overflow-hidden`}>
        {/* Container with max-width for larger screens */}
        <div className="w-full h-full max-w-md mx-auto relative shadow-2xl overflow-hidden">
          {/* Header - Fixed - Mobile Optimized */}
          <div className={`absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 min-h-[56px] safe-area-top ${
            isDark ? 'bg-gradient-to-b from-black/80 to-transparent' : 'bg-gradient-to-b from-white/80 to-transparent'
          }`}>
            <button
              onClick={() => navigate(-1)}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all active:scale-95 ${
                isDark ? 'bg-black/50 text-white hover:bg-black/70' : 'bg-white/50 text-black hover:bg-white/70'
              }`}
            >
              <FaArrowLeft size={18} />
            </button>
            <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              Pitch Reels
            </h1>
            <div className="min-w-[44px]"></div>
          </div>

          {/* Scrollable Reels Container */}
          <div 
            ref={containerRef}
            className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide touch-pan-y overscroll-y-none"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {pitches.map((pitch, index) => (
              <div key={pitch.id} className="snap-start snap-always">
                {renderReel(pitch, index)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Chat Modal - Mobile Optimized - Only shown if user has investor features */}
      {isAIOpen && currentPitchForAI && canSeeInvestorFeatures && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={() => setIsAIOpen(false)}
          />

          {/* Chat Window - Full Screen Mobile */}
          <div
            className={`fixed inset-0 sm:bottom-6 sm:right-6 sm:inset-auto z-[70] w-full sm:w-96 h-full sm:h-[600px] sm:rounded-2xl shadow-2xl flex flex-col transition-all ${
              isDark ? 'bg-[#0a0a0a] sm:border border-white/10' : 'bg-white sm:border border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Touch Friendly */}
            <div
              className={`flex items-center justify-between px-4 py-4 min-h-[64px] border-b safe-area-top ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={currentPitchForAI.profilePhoto}
                    alt={currentPitchForAI.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-black'}`}>
                    AI - {currentPitchForAI.name}
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    {currentPitchForAI.category} Startup
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAIOpen(false)}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all active:scale-95 ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
              >
                <FaTimes size={20} className={isDark ? 'text-white' : 'text-black'} />
              </button>
            </div>

            {/* Messages - Better Padding for Mobile */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-hide overscroll-contain">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? isDark
                          ? 'bg-[#00B8A9] text-white'
                          : 'bg-[#00B8A9] text-white'
                        : isDark
                        ? 'bg-white/10 text-white'
                        : 'bg-gray-100 text-black'
                    }`}
                  >
                    <p className="text-sm leading-relaxed break-words">{message.text}</p>
                    <p
                      className={`text-[10px] mt-1.5 ${
                        message.type === 'user'
                          ? 'text-white/70'
                          : isDark
                          ? 'text-white/50'
                          : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      isDark ? 'bg-white/10' : 'bg-gray-100'
                    }`}
                  >
                    <FaSpinner className="animate-spin text-[#00B8A9]" size={18} />
                  </div>
                </div>
              )}
            </div>

            {/* Input - Touch Friendly */}
            <div
              className={`px-4 py-4 border-t safe-area-bottom ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about this startup..."
                  className={`flex-1 px-4 py-3 min-h-[48px] rounded-xl text-sm outline-none transition-all ${
                    isDark
                      ? 'bg-white/5 text-white placeholder-white/50 border border-white/10 focus:border-[#00B8A9]'
                      : 'bg-gray-50 text-black placeholder-gray-400 border border-gray-200 focus:border-[#00B8A9]'
                  }`}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className={`min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl transition-all active:scale-95 ${
                    inputMessage.trim() && !isLoading
                      ? isDark
                        ? 'bg-[#00B8A9] text-white hover:bg-[#00A89A]'
                        : 'bg-[#00B8A9] text-white hover:bg-[#00A89A]'
                      : isDark
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <FaPaperPlane size={18} />
                </button>
              </div>
              <p className={`text-xs mt-2.5 text-center ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
                AI-powered pitch insights
              </p>
            </div>
          </div>
        </>
      )}

      {/* Add CSS for safe areas and scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @supports (padding: max(0px)) {
          .safe-area-top {
            padding-top: max(env(safe-area-inset-top), 12px);
          }
          .safe-area-bottom {
            padding-bottom: max(env(safe-area-inset-bottom), 16px);
          }
          .safe-area-right {
            padding-right: max(env(safe-area-inset-right), 12px);
          }
        }
      `}</style>
    </>
  );
}
