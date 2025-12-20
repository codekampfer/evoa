import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FaExternalLinkAlt, FaArrowUp } from "react-icons/fa";

export default function Portfolio() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const portfolioItems = [
    {
      id: 1,
      title: "TechFlow Analytics",
      category: "SaaS",
      description: "AI-powered data analytics platform helping businesses make data-driven decisions.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      funding: "₹50L",
      status: "Active",
      year: "2023"
    },
    {
      id: 2,
      title: "GreenEnergy Solutions",
      category: "CleanTech",
      description: "Sustainable energy solutions for residential and commercial use.",
      image: "https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800",
      funding: "₹1Cr",
      status: "Active",
      year: "2023"
    },
    {
      id: 3,
      title: "EduTech Platform",
      category: "EdTech",
      description: "Revolutionary online learning platform with AI-powered personalized courses.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      funding: "₹75L",
      status: "Active",
      year: "2024"
    },
    {
      id: 4,
      title: "HealthTech Innovations",
      category: "HealthTech",
      description: "Telemedicine platform connecting patients with healthcare providers.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      funding: "₹2Cr",
      status: "Active",
      year: "2023"
    },
    {
      id: 5,
      title: "FinTech Solutions",
      category: "FinTech",
      description: "Digital payment gateway and financial services for SMEs.",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      funding: "₹1.5Cr",
      status: "Active",
      year: "2024"
    },
    {
      id: 6,
      title: "AgriTech Platform",
      category: "AgriTech",
      description: "Smart farming solutions using IoT and AI for better crop yields.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      funding: "₹3Cr",
      status: "Active",
      year: "2023"
    }
  ];

  const stats = [
    { label: "Total Investments", value: "₹8.25Cr+" },
    { label: "Active Startups", value: "50+" },
    { label: "Success Rate", value: "85%" },
    { label: "Industries", value: "12+" }
  ];

  const categories = ["All", "SaaS", "CleanTech", "EdTech", "HealthTech", "FinTech", "AgriTech"];

  return (
    <section
      className={`min-h-screen py-10 sm:py-12 lg:py-16 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
      aria-labelledby="pitch-heading"
    >
         <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1
            id="pitch-heading"
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Portfolio
          </h1>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            Discover the innovative startups we've supported and the impact they're making in the ecosystem
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 md:p-6 border text-center ${
                isDark ? 'bg-black/40 border-white/20' : 'bg-white border-black/20'
              }`}
            >
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium transition-all ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group border overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDark ? 'bg-black/40 border-white/20' : 'bg-white border-black/20'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <button className={`w-full py-1.5 sm:py-2 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 ${
                      isDark ? 'bg-white text-black' : 'bg-black text-white'
                    }`}>
                      View Details
                      <FaArrowUp size={12} className="sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </div>
                <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                }`}>
                  {item.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 ${
                    isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'
                  }`}>
                    {item.category}
                  </span>
                  <span className={`text-[10px] sm:text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {item.year}
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                <div className={`flex items-center justify-between pt-3 sm:pt-4 border-t ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}>
                  <div>
                    <div className={`text-[10px] sm:text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      Funding Raised
                    </div>
                    <div className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                      {item.funding}
                    </div>
                  </div>
                  <button className={`p-1.5 sm:p-2 transition-colors ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-black/5 text-black hover:bg-black/10'
                  }`}>
                    <FaExternalLinkAlt size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   </section>
  );
}

