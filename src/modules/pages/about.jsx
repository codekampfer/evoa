import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { HiUsers, HiChartBar } from "react-icons/hi";
import { FaRocket, FaHandPaper, FaLightbulb, FaStar } from "react-icons/fa";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const values = [
    {
      icon: FaRocket,
      title: "Innovation first",
      description:
        "Supporting bold, breakthrough ideas that can reshape industries and create lasting impact.",
    },
    {
      icon: HiUsers,
      title: "Community driven",
      description:
        "Building an ecosystem where startups, investors, and mentors grow and succeed together.",
    },
    {
      icon: HiChartBar,
      title: "Data‑driven",
      description:
        "Using insights and analytics to guide smarter investment and growth decisions.",
    },
    {
      icon: FaHandPaper,
      title: "Transparency",
      description:
        "Prioritizing openness, trust, and honest communication with all stakeholders.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description:
        "EVO‑A launched with a vision to transform how startups connect with capital.",
    },
    {
      year: "2021",
      title: "First 100 startups",
      description: "Reached a community of 100 registered startups across India.",
    },
    {
      year: "2022",
      title: "₹100Cr+ raised",
      description: "Startups on the platform collectively crossed ₹100 crores in funding.",
    },
    {
      year: "2023",
      title: "500+ investors",
      description: "Grew to a network of more than 500 active investors.",
    },
    {
      year: "2024",
      title: "Market leader",
      description:
        "Recognized as a leading platform for startup–investor connections in India.",
    },
  ];

  const team = [
    { name: "John Doe", role: "CEO & Founder", image: "https://i.pravatar.cc/150?img=10" },
    { name: "Jane Smith", role: "CTO", image: "https://i.pravatar.cc/150?img=11" },
    { name: "Mike Johnson", role: "Head of Investments", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Sarah Williams", role: "Head of Operations", image: "https://i.pravatar.cc/150?img=13" },
  ];

  return (
    <section
      className={`min-h-screen py-10 sm:py-12 lg:py-16 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
      aria-labelledby="about-heading"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mb-10 sm:mb-14 lg:mb-16">
          <h1
            id="about-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About EVO‑A
          </h1>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            EVO‑A connects ambitious founders with visionary investors, creating a trusted
            platform for funding, mentorship, and long‑term growth in the startup ecosystem.
          </p>
        </header>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20 space-y-12 sm:space-y-16 md:space-y-20">
        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div>
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Our mission
            </h2>
            <p
              className={`text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed ${
                isDark ? "text-white/80" : "text-gray-700"
              }`}
            >
              EVO‑A exists to democratize access to startup funding for entrepreneurs
              across India, ensuring that promising ideas are not limited by geography or
              traditional networks.
            </p>
            <p
              className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed ${
                isDark ? "text-white/80" : "text-gray-700"
              }`}
            >
              By combining technology, data, and human expertise, the platform enables
              startups and investors to discover the right opportunities faster, with
              greater confidence and transparency.
            </p>
          </div>

          <div
            className={`p-4 sm:p-6 md:p-8 border ${
              isDark
                ? "bg-black/40 border-white/20"
                : "bg-white border-black/20"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 sm:mb-4 ${
                  isDark ? "bg-white/10" : "bg-black/5"
                }`}
              >
                <FaLightbulb
                  size={32}
                  className={isDark ? "text-white" : "text-gray-900"}
                  aria-hidden="true"
                />
              </div>
              <h3
                className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Vision 2030
              </h3>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  isDark ? "text-white/70" : "text-gray-600"
                }`}
              >
                To be India’s most trusted startup–investor platform, enabling ₹10,000+
                crores in funding and empowering thousands of founders by 2030.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section aria-labelledby="values-heading">
          <h2
            id="values-heading"
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our core values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 md:p-6 border text-center h-full transition-transform duration-150 hover:-translate-y-1 ${
                    isDark
                      ? "bg-black/40 border-white/20"
                      : "bg-white border-black/20"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 ${
                      isDark ? "bg-white/10" : "bg-black/5"
                    }`}
                  >
                    <IconComponent
                      size={28}
                      className={isDark ? "text-white" : "text-gray-900"}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm md:text-base ${
                      isDark ? "text-white/70" : "text-gray-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Journey / Timeline */}
        <section aria-labelledby="journey-heading">
          <h2
            id="journey-heading"
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our journey
          </h2>
          <div className="relative">
            {/* Vertical line for md+ */}
            <div
              className={`hidden md:block absolute left-8 top-0 bottom-0 w-px ${
                isDark ? "bg-white/15" : "bg-gray-300"
              }`}
              aria-hidden="true"
            />
            <ol className="space-y-7 sm:space-y-8">
              {milestones.map((milestone, idx) => (
                <li key={idx} className="relative flex items-start gap-5 md:gap-7">
                  <div
                    className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-semibold text-xs sm:text-sm md:text-base ${
                      isDark ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-1.5 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${
                        isDark ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Team */}
        <section aria-labelledby="team-heading">
          <h2
            id="team-heading"
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Meet the team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`text-center p-4 sm:p-5 md:p-6 border transition-transform duration-150 hover:-translate-y-1 ${
                  isDark
                    ? "bg-black/40 border-white/20"
                    : "bg-white border-black/20"
                }`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 overflow-hidden mx-auto mb-3 sm:mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3
                  className={`text-xs sm:text-sm md:text-base font-semibold mb-1 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`text-[10px] sm:text-xs md:text-sm ${
                    isDark ? "text-white/60" : "text-gray-600"
                  }`}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
