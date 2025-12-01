import React, { useState, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  FaHeart,
  FaBookmark,
  FaEllipsisH,
  FaRegHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegPaperPlane,
  FaPlay,
  FaPause
} from "react-icons/fa";

export default function Startup() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Sample posts data (Instagram-like feed with different images and reels)
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: "post", // regular post
      username: "quantumflow",
      userAvatar: "https://i.pravatar.cc/150?img=1",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Revolutionizing data analytics with AI! 🚀 Our platform helps businesses make smarter decisions. #AI #SaaS #Fintech",
      likes: 12450,
      comments: 342,
      timeAgo: "2 hours ago",
      liked: false,
      saved: false
    },
    {
      id: 2,
      type: "reel", // video reel
      username: "techstartup",
      userAvatar: "https://i.pravatar.cc/150?img=2",
      image: "https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      caption: "Just launched our new product! Excited to see what the future holds. 💡 #Startup #Innovation #Reel",
      likes: 8920,
      comments: 156,
      timeAgo: "5 hours ago",
      liked: false,
      saved: false,
      isPlaying: false
    },
    {
      id: 3,
      type: "post", // regular post
      username: "innovatehub",
      userAvatar: "https://i.pravatar.cc/150?img=3",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Building the future, one line of code at a time. Join us on this journey! 🌟 #Tech #StartupLife",
      likes: 15670,
      comments: 423,
      timeAgo: "1 day ago",
      liked: false,
      saved: false
    },
    {
      id: 4,
      type: "reel", // video reel
      username: "nextgenai",
      userAvatar: "https://i.pravatar.cc/150?img=4",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      caption: "AI is changing everything. We're here to make it accessible to everyone. 🤖✨ #AI #Reel",
      likes: 23400,
      comments: 678,
      timeAgo: "2 days ago",
      liked: false,
      saved: false,
      isPlaying: false
    },
    {
      id: 5,
      type: "post", // regular post
      username: "startupworld",
      userAvatar: "https://i.pravatar.cc/150?img=5",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Innovation never stops! Pushing boundaries every day. 💪 #Innovation #Tech",
      likes: 9870,
      comments: 234,
      timeAgo: "3 days ago",
      liked: false,
      saved: false
    },
    {
      id: 6,
      type: "reel", // video reel
      username: "futuretech",
      userAvatar: "https://i.pravatar.cc/150?img=6",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      caption: "The future is here! Watch how we're transforming industries. 🚀 #FutureTech #Reel",
      likes: 18750,
      comments: 512,
      timeAgo: "4 days ago",
      liked: false,
      saved: false,
      isPlaying: false
    }
  ]);

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

  const toggleVideoPlay = (postId) => {
    const video = videoRefs.current[postId];
    if (video) {
      if (video.paused) {
        video.play();
        setPosts(posts.map(post => {
          if (post.id === postId) {
            return { ...post, isPlaying: true };
          }
          return post;
        }));
      } else {
        video.pause();
        setPosts(posts.map(post => {
          if (post.id === postId) {
            return { ...post, isPlaying: false };
          }
          return post;
        }));
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Main Content Area */}
      <main className="lg:ml-64">
        <div className="max-w-2xl mx-auto py-4 sm:py-8 px-4">
        {/* Feed Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`rounded-lg overflow-hidden transition-colors duration-300 ${
                isDark ? 'bg-black border border-white/10' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Post Header - User Info */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={post.userAvatar}
                      alt={post.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold text-sm ${
                      isDark ? 'text-white' : 'text-black'
                    }`}>
                      {post.username}
                    </span>
                    {post.type === "reel" && (
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        isDark ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                      }`}>
                        Reel
                      </span>
                    )}
                  </div>
                </div>
                <button className={`p-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  <FaEllipsisH size={16} />
                </button>
              </div>

              {/* Post Image or Video */}
              <div className="relative w-full aspect-square bg-gray-200 group">
                {post.type === "reel" ? (
                  <>
                    <video
                      ref={(el) => (videoRefs.current[post.id] = el)}
                      src={post.video}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      onPlay={() => {
                        setPosts(posts.map(p => {
                          if (p.id === post.id) {
                            return { ...p, isPlaying: true };
                          }
                          return p;
                        }));
                      }}
                      onPause={() => {
                        setPosts(posts.map(p => {
                          if (p.id === post.id) {
                            return { ...p, isPlaying: false };
                          }
                          return p;
                        }));
                      }}
                    />
                    {/* Play/Pause Overlay Button */}
                    <button
                      onClick={() => toggleVideoPlay(post.id)}
                      className={`absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity ${
                        !post.isPlaying ? 'opacity-100' : ''
                      }`}
                    >
                      {!post.isPlaying ? (
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <FaPlay size={24} className="text-black ml-1" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <FaPause size={24} className="text-black" />
                        </div>
                      )}
                    </button>
                  </>
                ) : (
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Action Buttons */}
              <div className="px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`transition-colors ${
                        post.liked
                          ? 'text-red-500'
                          : isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {post.liked ? (
                        <FaHeart size={24} fill="currentColor" />
                      ) : (
                        <FaRegHeart size={24} />
                      )}
                    </button>
                    <button className={isDark ? 'text-white' : 'text-black'}>
                      <FaRegComment size={24} />
                    </button>
                    <button className={isDark ? 'text-white' : 'text-black'}>
                      <FaRegPaperPlane size={24} />
                    </button>
                  </div>
                  <button
                    onClick={() => toggleSave(post.id)}
                    className={`transition-colors ${
                      post.saved
                        ? 'text-yellow-500'
                        : isDark ? 'text-white' : 'text-black'
                    }`}
                  >
                    {post.saved ? (
                      <FaBookmark size={24} fill="currentColor" />
                    ) : (
                      <FaRegBookmark size={24} />
                    )}
                  </button>
                </div>

                {/* Likes Count */}
                <div className={`mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <span className="font-semibold text-sm">
                    {post.likes.toLocaleString()} likes
                  </span>
                </div>

                {/* Caption */}
                <div className={`mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <span className="font-semibold text-sm mr-2">
                    {post.username}
                  </span>
                  <span className="text-sm">
                    {post.caption}
                  </span>
                </div>

                {/* View Comments */}
                {post.comments > 0 && (
                  <button className={`text-sm mb-2 ${
                    isDark ? 'text-white/60' : 'text-gray-500'
                  }`}>
                    View all {post.comments} comments
                  </button>
                )}

                {/* Time Ago */}
                <div className={`text-xs uppercase ${
                  isDark ? 'text-white/40' : 'text-gray-400'
                }`}>
                  {post.timeAgo}
                </div>
              </div>

              {/* Comment Input */}
              <div className={`px-4 py-3 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}>
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
                    className={`flex-1 bg-transparent border-none outline-none text-sm ${
                      isDark
                        ? 'text-white placeholder-white/40'
                        : 'text-black placeholder-gray-400'
                    }`}
                  />
                  <button className={`text-sm font-semibold ${
                    isDark ? 'text-blue-400' : 'text-blue-500'
                  }`}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}

