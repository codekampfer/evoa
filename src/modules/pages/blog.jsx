import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { HiCalendar, HiUser, HiArrowRight } from "react-icons/hi";

export default function Blog() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Startup Funding in India",
      excerpt:
        "Exploring how the startup ecosystem is evolving and what investors are looking for in 2024.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Funding",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "10 Tips for Pitching Your Startup Successfully",
      excerpt:
        "Learn the essential strategies to make your pitch stand out and attract the right investors.",
      author: "Jane Smith",
      date: "March 10, 2024",
      category: "Pitching",
      image:
        "https://images.pexels.com/photos/1181476/pexels-photo-1181476.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Building a Strong Investor Network",
      excerpt:
        "Discover how to connect with the right investors and build meaningful relationships in the startup world.",
      author: "Mike Johnson",
      date: "March 5, 2024",
      category: "Networking",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "AI Startups: The Next Big Wave",
      excerpt:
        "Understanding the AI revolution and how startups are leveraging artificial intelligence.",
      author: "Sarah Williams",
      date: "February 28, 2024",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "From Idea to IPO: A Startup Journey",
      excerpt:
        "A comprehensive guide on scaling your startup from initial concept to public offering.",
      author: "David Brown",
      date: "February 20, 2024",
      category: "Growth",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Sustainable Startups: The Green Revolution",
      excerpt:
        "How eco-friendly startups are changing the business landscape and attracting conscious investors.",
      author: "Emily Davis",
      date: "February 15, 2024",
      category: "Sustainability",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "Funding",
    "Pitching",
    "Networking",
    "Technology",
    "Growth",
    "Sustainability",
  ];

  return (
    <section
      className={`min-h-screen py-10 sm:py-12 lg:py-16 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
          <h1
            id="blog-heading"
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            EVO‑A Blog
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            Insights, stories, and expert advice on startups, investing, and the
            entrepreneurial ecosystem.
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-6 sm:mb-8 md:mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/20 focus:ring-white focus:ring-offset-black border-white/20"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 focus:ring-black focus:ring-offset-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <main
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          aria-label="Blog articles"
        >
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`group flex flex-col border overflow-hidden transition-transform duration-200 hover:-translate-y-1 ${
                isDark
                  ? "bg-black/40 border-white/20"
                  : "bg-white border-black/20"
              }`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className={`absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold ${
                    isDark
                      ? "bg-black/80 text-white"
                      : "bg-white/90 text-gray-900"
                  }`}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
                <h2
                  className={`text-base sm:text-lg md:text-xl font-semibold mb-2 line-clamp-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {post.title}
                </h2>
                <p
                  className={`text-xs sm:text-sm md:text-[15px] mb-3 sm:mb-4 line-clamp-3 ${
                    isDark ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div
                  className={`mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] md:text-xs mb-3 sm:mb-4 ${
                    isDark ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5">
                      <HiUser size={10} className="sm:w-3 sm:h-3" aria-hidden="true" />
                      <span>{post.author}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5">
                      <HiCalendar size={10} className="sm:w-3 sm:h-3" aria-hidden="true" />
                      <span>{post.date}</span>
                    </span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More */}
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold mt-auto transition-colors focus:outline-none ${
                    isDark
                      ? "text-white hover:text-white/80"
                      : "text-gray-900 hover:text-gray-700"
                  }`}
                  aria-label={`Read more: ${post.title}`}
                >
                  Read more
                  <HiArrowRight size={12} className="sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </main>

        {/* Load More */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button
            type="button"
            className={`px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 font-semibold text-xs sm:text-sm md:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDark
                ? "bg-white text-black hover:bg-white/90 focus:ring-white focus:ring-offset-black"
                : "bg-black text-white hover:bg-black/90 focus:ring-black focus:ring-offset-gray-50"
            }`}
          >
            Load more articles
          </button>
        </div>
      </div>
    </section>
  );
}
