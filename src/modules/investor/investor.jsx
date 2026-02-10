import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import StatusComponent from "../../components/shared/StatusComponent";
import PitchCard from "../../components/shared/PitchCard";
import { FaBell, FaSearch, FaRobot, FaTimes, FaPaperPlane, FaSpinner, FaUser } from "react-icons/fa";
import logo from "../../assets/logo.avif";

export default function Investor() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "Hello! I'm your AI Investment Assistant. I can help you analyze startups, evaluate pitches, and make informed investment decisions. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [pitches] = useState([
    {
      id: 1,
      username: 'techstartup',
      profilePhoto: 'https://i.pravatar.cc/150?img=1',
      summary: 'AI-powered SaaS platform',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Revolutionizing data analytics with AI! 🚀',
      hashtags: '#AI #SaaS #Fintech',
      likes: 12450,
      views: 34200,
      clickthroughs: 1200,
      liked: false,
      saved: false,
      dealInfo: {
        amount: '50L',
        equity: '5%',
        revenue: '10L'
      },
      links: {
        website: 'https://example.com',
        linkedin: 'https://linkedin.com/company/techstartup',
        instagram: 'https://instagram.com/techstartup'
      },
      pitchDeck: 'https://example.com/pitchdeck.pdf',
      investors: [
        { name: 'Investor 1', avatar: 'https://i.pravatar.cc/150?img=10' },
        { name: 'Investor 2', avatar: 'https://i.pravatar.cc/150?img=11' }
      ]
    },
    {
      id: 2,
      username: 'greenenergy',
      profilePhoto: 'https://i.pravatar.cc/150?img=2',
      summary: 'Sustainable energy solutions',
      image: 'https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Building the future of clean energy! 🌱',
      hashtags: '#GreenTech #ClimateTech #Sustainability',
      likes: 8920,
      views: 25600,
      clickthroughs: 890,
      liked: false,
      saved: false,
      dealInfo: {
        amount: '1Cr',
        equity: '8%',
        revenue: '25L'
      },
      links: {
        website: 'https://greenenergy.com',
        linkedin: 'https://linkedin.com/company/greenenergy'
      }
    }
  ]);

  const handleLike = (pitchId) => {
    console.log('Like pitch:', pitchId);
  };

  const handleComment = (pitchId) => {
    navigate(`/pitch/${pitchId}/comments`);
  };

  const handleShare = (pitchId) => {
    navigate(`/share/${pitchId}`);
  };

  const handleSave = (pitchId) => {
    console.log('Save pitch:', pitchId);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response (in real app, this would call an API)
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        text: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('analyze') || lowerInput.includes('evaluate') || lowerInput.includes('pitch')) {
      return "I can help you analyze startup pitches! I look at factors like market size, team experience, revenue growth, competitive advantage, and financial projections. Would you like me to analyze a specific pitch?";
    }
    if (lowerInput.includes('risk') || lowerInput.includes('risky')) {
      return "Risk assessment is crucial for investments. I evaluate risks across multiple dimensions: market risk, technology risk, team risk, financial risk, and regulatory risk. What specific risk concerns do you have?";
    }
    if (lowerInput.includes('trend') || lowerInput.includes('market') || lowerInput.includes('industry')) {
      return "Current trending sectors include AI/ML, Fintech, HealthTech, EdTech, and GreenTech. Market analysis shows strong growth in SaaS and B2B platforms. Which sector interests you most?";
    }
    if (lowerInput.includes('portfolio') || lowerInput.includes('diversify')) {
      return "Portfolio diversification is key. I recommend spreading investments across different sectors, stages (seed, Series A, B), and risk profiles. A balanced portfolio typically includes 60% growth-stage and 40% early-stage investments.";
    }
    if (lowerInput.includes('valuation') || lowerInput.includes('worth') || lowerInput.includes('value')) {
      return "Valuation analysis considers revenue multiples, comparable companies, growth trajectory, and market conditions. For early-stage startups, I use methods like discounted cash flow, comparable analysis, and risk-adjusted returns. What stage startup are you evaluating?";
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! I'm here to help you with investment decisions. You can ask me about analyzing pitches, evaluating risks, market trends, portfolio management, or valuation methods.";
    }
    
    return "I understand you're asking about: \"" + userInput + "\". As your AI Investment Assistant, I can help with pitch analysis, risk assessment, market trends, portfolio diversification, and valuation methods. Could you be more specific about what you'd like to know?";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-black border-b border-white/10' : 'bg-white border-b border-gray-200'}`}>
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="EVO-A" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
            <span className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>EVO-A</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={() => navigate('/explore')} className={isDark ? 'text-white' : 'text-black'}>
              <FaSearch size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button onClick={() => navigate('/notifications')} className={isDark ? 'text-white' : 'text-black'}>
              <FaBell size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button onClick={() => navigate('/profile')} className={isDark ? 'text-white' : 'text-black'}>
              <FaUser size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        <div className="max-w-2xl mx-auto py-2 sm:py-4 lg:py-8 px-2 sm:px-4">
          {/* Status Component */}
          <div className="mb-4">
            <StatusComponent />
          </div>

          {/* Pitch Cards */}
          <div className="space-y-4">
            {pitches.map((pitch) => (
              <PitchCard
                key={pitch.id}
                pitch={pitch}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
                onSave={handleSave}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Investor AI Assistant - Floating Button */}
      <button
        onClick={() => setIsAIOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 ${
          isDark
            ? 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white hover:shadow-[0_0_30px_rgba(0,184,169,0.6)]'
            : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81] text-white hover:shadow-[0_0_30px_rgba(0,184,169,0.4)]'
        }`}
        title="AI Investment Assistant"
      >
        <FaRobot size={24} />
      </button>

      {/* AI Chat Modal */}
      {isAIOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={() => setIsAIOpen(false)}
          />

          {/* Chat Window */}
          <div
            className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-[70] w-full sm:w-full sm:max-w-md h-[85vh] sm:h-[600px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col transition-all ${
              isDark ? 'bg-[#0a0a0a] border-t sm:border border-white/10' : 'bg-white border-t sm:border border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? 'bg-gradient-to-r from-[#00B8A9] to-[#008C81]'
                      : 'bg-gradient-to-r from-[#00B8A9] to-[#008C81]'
                  }`}
                >
                  <FaRobot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    AI Investment Assistant
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    Always here to help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAIOpen(false)}
                className={`p-2 rounded-full transition-all ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
              >
                <FaTimes size={18} className={isDark ? 'text-white' : 'text-black'} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-hide">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      message.type === 'user'
                        ? isDark
                          ? 'bg-[#00B8A9] text-white'
                          : 'bg-[#00B8A9] text-white'
                        : isDark
                        ? 'bg-white/10 text-white'
                        : 'bg-gray-100 text-black'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-[10px] mt-1 ${
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
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      isDark ? 'bg-white/10' : 'bg-gray-100'
                    }`}
                  >
                    <FaSpinner className="animate-spin text-[#00B8A9]" size={16} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div
              className={`px-4 py-3 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about investments..."
                  className={`flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                    isDark
                      ? 'bg-white/5 text-white placeholder-white/50 border border-white/10 focus:border-[#00B8A9]'
                      : 'bg-gray-50 text-black placeholder-gray-400 border border-gray-200 focus:border-[#00B8A9]'
                  }`}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className={`p-2.5 rounded-xl transition-all ${
                    inputMessage.trim() && !isLoading
                      ? isDark
                        ? 'bg-[#00B8A9] text-white hover:bg-[#00A89A]'
                        : 'bg-[#00B8A9] text-white hover:bg-[#00A89A]'
                      : isDark
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
              <p className={`text-xs mt-2 text-center ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
                AI-powered investment insights • Only for Investors
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

