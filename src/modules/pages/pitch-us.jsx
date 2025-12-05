import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { HiArrowRight } from "react-icons/hi";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

export default function PitchUs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    pitchType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePitchTypeChange = (id) => {
    setFormData((prev) => ({
      ...prev,
      pitchType: id,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real submit logic
    console.log("Pitch submitted:", formData);
  };

  const benefits = [
    "Direct access to active investors",
    "Expert feedback on your pitch",
    "Increased visibility in the ecosystem",
    "Opportunity to join live pitch battles",
    "Connect with mentors and advisors",
  ];

  const pitchTypes = [
    { id: "seed", label: "Seed round", description: "Early‑stage funding to validate and launch." },
    { id: "series-a", label: "Series A", description: "Growth capital to scale traction." },
    { id: "series-b", label: "Series B+", description: "Scale funding for proven models." },
    { id: "strategic", label: "Strategic investment", description: "Capital plus partnerships." },
  ];

  return (
    <section
      className={`min-h-screen py-10 sm:py-12 lg:py-16 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
      aria-labelledby="pitch-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-14 lg:mb-16">
          
          <h1
            id="pitch-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Pitch your startup
          </h1>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            Get your startup in front of the right investors. Share your pitch and join
            the EVO‑A ecosystem.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Benefits */}
          <aside className="space-y-8">
            <div>
              <h2
                className={`text-xl sm:text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Why pitch on EVO‑A?
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle
                      className={`mt-0.5 shrink-0 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                      size={18}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm sm:text-base ${
                        isDark ? "text-white/80" : "text-gray-700"
                      }`}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div
              className={`mt-4 p-6 rounded-2xl ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
              aria-label="Platform highlights"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div
                    className={`text-2xl sm:text-3xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    500+
                  </div>
                  <div
                    className={`text-xs sm:text-sm ${
                      isDark ? "text-white/60" : "text-gray-600"
                    }`}
                  >
                    Active investors
                  </div>
                </div>
                <div>
                  <div
                    className={`text-2xl sm:text-3xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ₹2,000Cr+
                  </div>
                  <div
                    className={`text-xs sm:text-sm ${
                      isDark ? "text-white/60" : "text-gray-600"
                    }`}
                  >
                    Funds raised
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className={`p-5 sm:p-6 md:p-8 rounded-2xl ${
                isDark
                  ? "bg-black/60 border border-white/10"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
              noValidate
            >
              <h2
                className={`text-xl sm:text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Submit your pitch
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
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                      isDark
                        ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your full name"
                    aria-required="true"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                        isDark
                          ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="you@example.com"
                      aria-required="true"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="phone"
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-gray-700"
                      }`}
                    >
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                        isDark
                          ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="+91 1234567890"
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="company"
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Company / startup name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                      isDark
                        ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Your startup name"
                    aria-required="true"
                  />
                </div>

                {/* Pitch type (radio-like group) */}
                <fieldset className="space-y-3">
                  <legend
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Funding stage <span className="text-red-500">*</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {pitchTypes.map((type) => {
                      const selected = formData.pitchType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handlePitchTypeChange(type.id)}
                          className={`p-3 sm:p-4 rounded-lg border text-left text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            selected
                              ? isDark
                                ? "bg-white text-black border-white"
                                : "bg-black text-white border-black"
                              : isDark
                              ? "bg-black/50 border-white/20 text-white hover:border-white/40"
                              : "bg-gray-50 border-gray-300 text-gray-900 hover:border-gray-400"
                          }`}
                          aria-pressed={selected}
                          aria-label={type.label}
                        >
                          <div className="font-semibold mb-0.5 sm:mb-1">
                            {type.label}
                          </div>
                          <div
                            className={
                              selected
                                ? isDark
                                  ? "text-black/70"
                                  : "text-white/80"
                                : isDark
                                ? "text-white/60"
                                : "text-gray-600"
                            }
                          >
                            {type.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {/* Hidden input to keep pitchType as part of form data */}
                  <input
                    type="hidden"
                    name="pitchType"
                    value={formData.pitchType}
                    required
                  />
                </fieldset>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Pitch description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border resize-none text-sm sm:text-base ${
                      isDark
                        ? "bg-black/50 border-white/20 text-white placeholder-white/40"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Tell us what you’re building, your traction, and what kind of support you’re looking for..."
                    aria-required="true"
                  />
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-sm sm:text-base px-4 py-3 sm:py-3.5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isDark
                        ? "bg-white text-black hover:bg-white/90 focus:ring-white focus:ring-offset-black"
                        : "bg-black text-white hover:bg-black/90 focus:ring-black focus:ring-offset-gray-50"
                    }`}
                  >
                    Submit pitch
                    <HiArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>

                <p
                  className={`text-[11px] sm:text-xs text-center ${
                    isDark ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  By submitting, you confirm you agree to our terms and acknowledge that
                  the EVO‑A team will review your pitch and typically respond within
                  48 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
