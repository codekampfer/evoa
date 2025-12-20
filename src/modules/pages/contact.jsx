import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from "react-icons/hi";
import { FaLinkedin,  FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Real X Icon
export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual submit logic (API call, email service, etc.)
    console.log("Contact form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "contact@evoa.com",
      link: "mailto:contact@evoa.com",
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+91 1234567890",
      link: "tel:+911234567890",
    },
    {
      icon: HiLocationMarker,
      title: "Address",
      value: "123 Startup Street, Mumbai, Maharashtra 400001",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://linkedin.com/company/evoa" },
    { icon: FaXTwitter, name: "X (Twitter)", url: "https://twitter.com/evoa" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/evoa" },
  ];

  return (
    <section
      className={`min-h-screen py-10 sm:py-12 lg:py-16 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
          <h1
            id="contact-heading"
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Get in touch
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            Have a question, partnership idea, or just want to say hello? Fill out the form
            and our team will get back to you as soon as possible.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <aside className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div>
              <h2
                className={`text-xl sm:text-2xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contact information
              </h2>
              <p
                className={`text-sm sm:text-base ${
                  isDark ? "text-white/70" : "text-gray-600"
                }`}
              >
                Reach out using any of the channels below or send us a direct message through
                the form.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon;

                const card = (
                  <div
                    className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 border transition-transform duration-150 hover:-translate-y-0.5 ${
                      isDark
                        ? "bg-black/40 border-white/20"
                        : "bg-white border-black/20"
                    }`}
                  >
                    <div
                      className={`shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${
                        isDark ? "bg-white/10" : "bg-black/5"
                      }`}
                    >
                      <IconComponent
                        size={20}
                        className={isDark ? "text-white" : "text-black"}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold text-xs sm:text-sm md:text-base mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`text-xs sm:text-sm break-words ${
                            isDark
                              ? "text-white/80 hover:text-white"
                              : "text-gray-700 hover:text-black"
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className={`text-xs sm:text-sm ${
                            isDark ? "text-white/70" : "text-gray-600"
                          }`}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={idx} href={info.link} className="block">
                    {card}
                  </a>
                ) : (
                  <div key={idx}>{card}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3
                className={`font-semibold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Follow us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isDark
                          ? "bg-white/10 text-white hover:bg-white/20 focus:ring-white/60 focus:ring-offset-black"
                          : "bg-black/5 text-black hover:bg-black/10 focus:ring-black/60 focus:ring-offset-white"
                      }`}
                      aria-label={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className={`p-4 sm:p-5 md:p-6 lg:p-8 border ${
                isDark
                  ? "bg-black/40 border-white/20"
                  : "bg-white border-black/20"
              }`}
              noValidate
            >
              <h2
                className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Send us a message
              </h2>

              <div className="space-y-5">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border text-xs sm:text-sm md:text-base ${
                      isDark
                        ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                        : "bg-gray-50 border-gray-300 text-black placeholder-gray-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your full name"
                    aria-required="true"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border text-xs sm:text-sm md:text-base ${
                      isDark
                        ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                        : "bg-gray-50 border-gray-300 text-black placeholder-gray-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="you@example.com"
                    aria-required="true"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border text-xs sm:text-sm md:text-base ${
                      isDark
                        ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                        : "bg-gray-50 border-gray-300 text-black placeholder-gray-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="What is this regarding?"
                    aria-required="true"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border resize-none text-xs sm:text-sm md:text-base ${
                      isDark
                        ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                        : "bg-gray-50 border-gray-300 text-black placeholder-gray-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Tell us how we can help you..."
                    aria-required="true"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm md:text-base px-4 py-2.5 sm:py-3 md:py-3.5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isDark
                        ? "bg-white text-black hover:bg-white/90 focus:ring-white focus:ring-offset-black"
                        : "bg-black text-white hover:bg-black/90 focus:ring-black focus:ring-offset-white"
                    }`}
                  >
                    Send message
                    <HiArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>

                <p
                  className={`text-[11px] sm:text-xs text-center ${
                    isDark ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  We usually respond within 24–48 business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
