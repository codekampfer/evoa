import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const VideoReel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef([]);

  // Startup, Investor, Business Meeting, Pitch Deck Videos
  const videos = [
    // 9. BUSINESS GROWTH (Company Scaling Up)
{
  url: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-celebrating-success-in-office-4581-large.mp4',
  image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg',
  title: 'Business Growth & Success',
  category: 'growth'
},

// 10. INVESTOR FUNDING (Startup Getting Investment)
{
  url: 'https://assets.mixkit.co/videos/preview/mixkit-business-investors-discussing-funding-4870-large.mp4',
  image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
  title: 'Investor Funding a Startup',
  category: 'investment'
},

// 11. SECURE DEAL SIGNING (Legal / Secure Transaction)
{
  url: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-signing-contract-4599-large.mp4',
  image: 'https://images.pexels.com/photos/3184402/pexels-photo-3184402.jpeg',
  title: 'Secure Business Deal Signing',
  category: 'security'
},

// 12. DIGITAL PAYMENT / FINANCIAL TRANSACTION
{
  url: 'https://assets.mixkit.co/videos/preview/mixkit-businessman-making-digital-payment-4513-large.mp4',
  image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
  title: 'Secure Financial Transaction',
  category: 'finance'
},

// 13. INVESTOR CONFIDENCE (Trust & Transparency)
{
  url: 'https://assets.mixkit.co/videos/preview/mixkit-business-partners-shaking-hands-after-meeting-4559-large.mp4',
  image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
  title: 'Investor Trust & Partnership',
  category: 'trust'
}

  ];
  
  

  

  const playVideo = (index) => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
    
    // Play selected video
    setTimeout(() => {
      if (videoRefs.current[index] && !videoErrors[index]) {
        videoRefs.current[index].muted = true;
        videoRefs.current[index].play().catch(err => {
          console.log('Video autoplay prevented:', err);
        });
      }
    }, 300);
  };

  useEffect(() => {
    // Auto-scroll to next video every 5 seconds (very fast)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videos.length;
        playVideo(nextIndex);
        return nextIndex;
      });
    }, 5000);

    // Play first video on mount
    setTimeout(() => {
      playVideo(0);
    }, 500);

    return () => clearInterval(interval);
  }, [videos.length, videoErrors]);

  const handleVideoEnd = (index) => {
    const nextIndex = (index + 1) % videos.length;
    setCurrentIndex(nextIndex);
    playVideo(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
    playVideo(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(prevIndex);
    playVideo(prevIndex);
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Show only current video with animated transitions */}
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0'
          }`}
          style={{
            transform: index === currentIndex 
              ? 'scale(1) translateX(0)' 
              : index < currentIndex 
                ? 'scale(1.05) translateX(-100%)' 
                : 'scale(1.05) translateX(100%)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
          }}
        >
          {/* Background Image with animated zoom */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={video.image}
              alt={video.title}
              className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                index === currentIndex ? 'scale-100' : 'scale-110'
              }`}
              onError={(e) => {
                e.target.src = 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200';
              }}
            />
          </div>

          {/* Video with animated fade */}
          {video.url && !videoErrors[index] && (
            <video
              ref={(el) => {
                if (el) videoRefs.current[index] = el;
              }}
              src={video.url}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              loop={false}
              muted={true}
              playsInline
              controls={false}
              preload="metadata"
              onEnded={() => handleVideoEnd(index)}
              onError={(e) => {
                console.error(`Error loading video ${index}:`, e);
                setVideoErrors(prev => ({ ...prev, [index]: true }));
              }}
            />
          )}

        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        aria-label="Previous video"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        aria-label="Next video"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Video indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              playVideo(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? 'bg-[#00B8A9] w-8 h-2' 
                : 'bg-white/40 w-2 h-2 hover:bg-white/60'
            }`}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoReel;
