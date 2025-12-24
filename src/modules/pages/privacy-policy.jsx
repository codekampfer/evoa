import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { HiShieldCheck, HiLockClosed, HiEye, HiDocumentText } from "react-icons/hi";

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sections = [
    {
      icon: HiDocumentText,
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal information (name, email, phone number, address)",
        "• Business information (company name, registration details, GST/CIN)",
        "• Profile information (role, sector, investment preferences)",
        "• Content you upload (pitch videos, pitch decks, documents)",
        "• Communication data (messages, comments, offers)",
        "• Usage data (how you interact with our platform)"
      ]
    },
    {
      icon: HiEye,
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "• Provide, maintain, and improve our services",
        "• Verify user identities and ensure platform security",
        "• Match startups with investors and incubators",
        "• Send you notifications, updates, and important information",
        "• Analyze usage patterns to enhance user experience",
        "• Prevent fraud and ensure compliance with our terms",
        "• Respond to your inquiries and provide customer support"
      ]
    },
    {
      icon: HiLockClosed,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information:",
        "• Encryption of sensitive data in transit and at rest",
        "• Secure authentication using OTP verification",
        "• Regular security audits and assessments",
        "• Access controls and employee training",
        "• Compliance with industry-standard security practices"
      ]
    },
    {
      icon: HiShieldCheck,
      title: "Data Sharing and Disclosure",
      content: [
        "We may share your information in the following circumstances:",
        "• With other users on the platform (as per your profile settings)",
        "• With service providers who assist in operating our platform",
        "• When required by law or to protect our rights",
        "• In connection with a business transfer or merger",
        "• With your explicit consent for specific purposes",
        "We do not sell your personal information to third parties."
      ]
    },
    {
      icon: HiDocumentText,
      title: "Your Rights and Choices",
      content: [
        "You have the right to:",
        "• Access and review your personal information",
        "• Update or correct inaccurate information",
        "• Request deletion of your account and data",
        "• Opt-out of certain communications",
        "• Export your data in a portable format",
        "• Withdraw consent where applicable",
        "To exercise these rights, please contact us at privacy@evoa.com"
      ]
    },
    {
      icon: HiLockClosed,
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar technologies to:",
        "• Remember your preferences and settings",
        "• Analyze website traffic and usage patterns",
        "• Provide personalized content and recommendations",
        "• Improve security and prevent fraud",
        "You can control cookies through your browser settings, but this may affect platform functionality."
      ]
    },
    {
      icon: HiShieldCheck,
      title: "Third-Party Services",
      content: [
        "Our platform may contain links to third-party websites or integrate with third-party services:",
        "• Social media platforms (LinkedIn, Instagram, YouTube)",
        "• Payment processors and financial services",
        "• Analytics and advertising services",
        "• Cloud storage and hosting providers",
        "We are not responsible for the privacy practices of these third parties. Please review their privacy policies."
      ]
    },
    {
      icon: HiDocumentText,
      title: "Data Retention",
      content: [
        "We retain your personal information for as long as necessary to:",
        "• Provide our services to you",
        "• Comply with legal obligations",
        "• Resolve disputes and enforce agreements",
        "• Maintain security and prevent fraud",
        "When you delete your account, we will delete or anonymize your data within 30 days, except where retention is required by law."
      ]
    },
    {
      icon: HiEye,
      title: "Children's Privacy",
      content: [
        "Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
      ]
    },
    {
      icon: HiLockClosed,
      title: "International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy."
      ]
    },
    {
      icon: HiShieldCheck,
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this privacy policy from time to time. We will notify you of any material changes by:",
        "• Posting the updated policy on our website",
        "• Sending you an email notification",
        "• Displaying a notice on our platform",
        "Your continued use of our services after changes become effective constitutes acceptance of the updated policy."
      ]
    },
    {
      icon: HiDocumentText,
      title: "Contact Us",
      content: [
        "If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:",
        "Email: privacy@evoa.com",
        "Address: EVO-A Privacy Team, India",
        "We will respond to your inquiry within 30 days."
      ]
    }
  ];

  return (
    <section
      className={`min-h-screen py-10 sm:py-12 lg:py-16 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
      aria-labelledby="privacy-heading"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mb-10 sm:mb-14 lg:mb-16">
          <h1
            id="privacy-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Privacy Policy
          </h1>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p
            className={`text-sm sm:text-base mt-4 ${
              isDark ? "text-white/50" : "text-gray-500"
            }`}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20 space-y-8 sm:space-y-10">
        {/* Introduction */}
        <div
          className={`p-6 sm:p-8 border ${
            isDark
              ? "bg-black/40 border-white/20"
              : "bg-white border-black/20"
          }`}
        >
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? "text-white/80" : "text-gray-700"
            }`}
          >
            At EVO-A, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our 
            platform to connect startups with investors, incubators, and viewers.
          </p>
        </div>

        {/* Policy Sections */}
        {sections.map((section, idx) => {
          const IconComponent = section.icon;
          return (
            <div
              key={idx}
              className={`p-6 sm:p-8 border transition-transform duration-150 hover:-translate-y-1 ${
                isDark
                  ? "bg-black/40 border-white/20"
                  : "bg-white border-black/20"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center ${
                    isDark ? "bg-white/10" : "bg-black/5"
                  }`}
                >
                  <IconComponent
                    size={24}
                    className={isDark ? "text-white" : "text-gray-900"}
                    aria-hidden="true"
                  />
                </div>
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {section.title}
                </h2>
              </div>
              <div className="ml-0 sm:ml-16 sm:ml-18">
                <ul className="space-y-2">
                  {section.content.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Additional Information */}
        <div
          className={`p-6 sm:p-8 border ${
            isDark
              ? "bg-black/40 border-white/20"
              : "bg-white border-black/20"
          }`}
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Additional Information
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed mb-4 ${
              isDark ? "text-white/80" : "text-gray-700"
            }`}
          >
            This privacy policy is governed by the laws of India. If you are located outside India, 
            please note that we may transfer your information to India and process it there.
          </p>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? "text-white/80" : "text-gray-700"
            }`}
          >
            By using EVO-A, you consent to the collection and use of your information as described in this policy. 
            If you do not agree with this policy, please do not use our platform.
          </p>
        </div>
      </div>
    </section>
  );
}

