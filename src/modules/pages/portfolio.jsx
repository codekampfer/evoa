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
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
        <h1
            id="pitch-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Portfolio
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            Discover the innovative startups we've supported and the impact they're making in the ecosystem
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl text-center ${
                isDark ? 'bg-black/50 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <div className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {stat.value}
              </div>
              <div className={`text-sm sm:text-base ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8 sm:mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isDark ? 'bg-black/50 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
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
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                      isDark ? 'bg-white text-black' : 'bg-black text-white'
                    }`}>
                      View Details
                      <FaArrowUp size={14} />
                    </button>
                  </div>
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                }`}>
                  {item.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'
                  }`}>
                    {item.category}
                  </span>
                  <span className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {item.year}
                  </span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm sm:text-base mb-4 line-clamp-2 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                <div className={`flex items-center justify-between pt-4 border-t ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}>
                  <div>
                    <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      Funding Raised
                    </div>
                    <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                      {item.funding}
                    </div>
                  </div>
                  <button className={`p-2 rounded-lg transition-colors ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-black/5 text-black hover:bg-black/10'
                  }`}>
                    <FaExternalLinkAlt size={16} />
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

