import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiUpload, FiX } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/logo.avif";

export default function StartupRegistration() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    // Founders
    founders: [{ name: '', email: '', mobile: '', role: '', photo: null }],
    // Basic Details
    startupName: '',
    startupUsername: '',
    startupLogo: null,
    websiteUrl: '',
    companyEmail: '',
    city: '',
    state: '',
    country: 'India',
    // Industry & Stage
    industries: [],
    stage: '',
    // Business Verification
    entityType: '',
    verificationType: '',
    cin: '',
    gstin: '',
    udyamNumber: '',
    idProof: null,
    businessProof: null,
    // Pitch Details
    pitchVideo: null,
    pitchDeck: null,
    shortDescription: '',
    hashtags: '',
    amountRaising: '',
    equityGiving: '',
    preMoneyValuation: '',
    // Social Links
    linkedin: '',
    instagram: '',
    youtube: '',
    playStore: '',
    productDemo: '',
    brochure: null,
    // Team
    teamMembers: [],
    // Category Tags
    categoryTags: [],
    // Security
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emailOTP: '',
    phoneOTP: ''
  });

  const founderRoles = ['CEO', 'CTO', 'COO', 'CMO', 'CFO', 'Co-founder', 'Solo Founder'];
  const industries = ['AI / ML', 'SaaS', 'FinTech', 'EdTech', 'HealthTech', 'Mobility', 'D2C / E-commerce', 'FoodTech', 'DeepTech', 'Blockchain / Web3', 'Agritech', 'GreenTech / ClimateTech', 'Gaming', 'Cybersecurity', 'Manufacturing', 'Others'];
  const stages = ['Idea', 'Prototype', 'MVP', 'Early Revenue', 'Growth', 'Scaling', 'Series A+'];
  const entityTypes = ['Private Limited (Pvt Ltd)', 'LLP', 'Partnership', 'Sole Proprietorship', 'MSME Registered', 'Not Registered Yet'];
  const categoryTags = ['B2B', 'B2C', 'Marketplace', 'SaaS', 'Subscription', 'D2C', 'DeepTech', 'Hardware', 'Services', 'Digital Product'];
  const states = ['Uttar Pradesh', 'Delhi NCR', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'West Bengal', 'Telangana', 'Kerala', 'Haryana', 'Madhya Pradesh', 'Punjab', 'Bihar', 'Odisha', 'Others'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, value, index = null) => {
    if (index !== null) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].map((item, i) => i === index ? value : item)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].includes(value)
          ? prev[field].filter(item => item !== value)
          : [...prev[field], value]
      }));
    }
  };

  const addFounder = () => {
    setFormData(prev => ({
      ...prev,
      founders: [...prev.founders, { name: '', email: '', mobile: '', role: '', photo: null }]
    }));
  };

  const removeFounder = (index) => {
    setFormData(prev => ({
      ...prev,
      founders: prev.founders.filter((_, i) => i !== index)
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const nextStep = () => {
    if (currentStep < 9) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Handle final submission
    console.log('Form submitted:', formData);
    navigate('/startup');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              1. Founders' Details
            </h2>
            {formData.founders.map((founder, index) => (
              <div key={index} className={`p-3 sm:p-4  border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <h3 className={`text-sm sm:text-base font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                    Founder {index + 1}
                  </h3>
                  {formData.founders.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFounder(index)}
                      className={`p-1 ${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}
                    >
                      <FiX size={18} />
                    </button>
                  )}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="text"
                    placeholder="Founder Name"
                    value={founder.name}
                    onChange={(e) => {
                      const newFounders = [...formData.founders];
                      newFounders[index].name = e.target.value;
                      setFormData(prev => ({ ...prev, founders: newFounders }));
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  />
                  <input
                    type="email"
                    placeholder="Founder Email"
                    value={founder.email}
                    onChange={(e) => {
                      const newFounders = [...formData.founders];
                      newFounders[index].email = e.target.value;
                      setFormData(prev => ({ ...prev, founders: newFounders }));
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  />
                  <input
                    type="tel"
                    placeholder="Founder Mobile Number"
                    value={founder.mobile}
                    onChange={(e) => {
                      const newFounders = [...formData.founders];
                      newFounders[index].mobile = e.target.value;
                      setFormData(prev => ({ ...prev, founders: newFounders }));
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  />
                  <select
                    value={founder.role}
                    onChange={(e) => {
                      const newFounders = [...formData.founders];
                      newFounders[index].role = e.target.value;
                      setFormData(prev => ({ ...prev, founders: newFounders }));
                    }}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  >
                    <option value="">Select Founder Role</option>
                    {founderRoles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <label className={`block text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    Profile Photo (Optional)
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const newFounders = [...formData.founders];
                        newFounders[index].photo = e.target.files[0];
                        setFormData(prev => ({ ...prev, founders: newFounders }));
                      }}
                      className="hidden"
                    />
                    <div className={`mt-2 p-4 border-2 border-dashed rounded-xl cursor-pointer text-center transition-all ${isDark ? 'border-white/20 hover:border-[#00B8A9]/50' : 'border-black/20 hover:border-[#00B8A9]/50'}`}>
                      <FiUpload className="mx-auto mb-2" size={24} />
                      <span className="text-xs">Click to upload</span>
                    </div>
                  </label>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addFounder}
              className={`w-full py-2 sm:py-2.5  text-xs sm:text-sm font-semibold border ${isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/10'}`}
            >
              + Add Another Founder
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              2. Startup Basic Details
            </h2>
            <input
              type="text"
              placeholder="Startup Name"
              value={formData.startupName}
              onChange={(e) => handleInputChange('startupName', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="text"
              placeholder="Startup Username (@handle)"
              value={formData.startupUsername}
              onChange={(e) => handleInputChange('startupUsername', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Startup Logo Upload
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload('startupLogo', e.target.files[0])}
                className="hidden"
              />
              <div className={`mt-2 p-4 border-2 border-dashed rounded-xl cursor-pointer text-center ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'}`}>
                <FiUpload className="mx-auto mb-2" size={24} />
                <span className="text-xs">Click to upload logo</span>
              </div>
            </label>
            <input
              type="url"
              placeholder="Website URL"
              value={formData.websiteUrl}
              onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="email"
              placeholder="Company Email"
              value={formData.companyEmail}
              onChange={(e) => handleInputChange('companyEmail', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <select
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <select
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            >
              <option value="India">India</option>
              <option value="Others">Others</option>
            </select>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              3. Industry & Stage
            </h2>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                Industry (Multi-select)
              </label>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {industries.map(industry => (
                  <label key={industry} className={`flex items-center gap-2 p-2  cursor-pointer ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}>
                    <input
                      type="checkbox"
                      checked={formData.industries.includes(industry)}
                      onChange={() => handleArrayChange('industries', industry)}
                      className="w-4 h-4"
                    />
                    <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>{industry}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                Stage of Startup
              </label>
              <select
                value={formData.stage}
                onChange={(e) => handleInputChange('stage', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
              >
                <option value="">Select Stage</option>
                {stages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              4. Business Verification
            </h2>
            <select
              value={formData.entityType}
              onChange={(e) => handleInputChange('entityType', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            >
              <option value="">Type of Entity</option>
              {entityTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {formData.entityType && formData.entityType !== 'Not Registered Yet' && (
              <div className="space-y-3">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    Verification Option
                  </label>
                  <select
                    value={formData.verificationType}
                    onChange={(e) => handleInputChange('verificationType', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  >
                    <option value="">Select Verification Type</option>
                    <option value="CIN">CIN (Company Identification Number)</option>
                    <option value="GST">GST Number</option>
                    <option value="Udyam">Udyam Registration Number</option>
                  </select>
                </div>
                {formData.verificationType === 'CIN' && (
                  <input
                    type="text"
                    placeholder="Enter CIN"
                    value={formData.cin}
                    onChange={(e) => handleInputChange('cin', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  />
                )}
                {formData.verificationType === 'GST' && (
                  <input
                    type="text"
                    placeholder="Enter GSTIN"
                    value={formData.gstin}
                    onChange={(e) => handleInputChange('gstin', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  />
                )}
                {formData.verificationType === 'Udyam' && (
                  <input
                    type="text"
                    placeholder="Enter Udyam Registration Number"
                    value={formData.udyamNumber}
                    onChange={(e) => handleInputChange('udyamNumber', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black/80 border-white/20 text-white placeholder-white/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30' : 'bg-white border-black/20 text-black placeholder-black/50 focus:border-[#00B8A9] focus:ring-[#00B8A9]/30'}`}
                  />
                )}
              </div>
            )}
            {formData.entityType === 'Not Registered Yet' && (
              <div className="space-y-3">
                <label className={`block text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                  Upload Founder ID Proof (Aadhaar/Driving License/Passport)
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload('idProof', e.target.files[0])}
                    className="hidden"
                  />
                  <div className={`mt-2 p-4 border-2 border-dashed rounded-xl cursor-pointer text-center ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'}`}>
                    <FiUpload className="mx-auto mb-2" size={24} />
                    <span className="text-xs">Click to upload</span>
                  </div>
                </label>
                <label className={`block text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                  Upload Any Business Proof (Optional)
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload('businessProof', e.target.files[0])}
                    className="hidden"
                  />
                  <div className={`mt-2 p-4 border-2 border-dashed rounded-xl cursor-pointer text-center ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'}`}>
                    <FiUpload className="mx-auto mb-2" size={24} />
                    <span className="text-xs">Click to upload</span>
                  </div>
                </label>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              5. Pitch Details
            </h2>
            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Pitch Video Upload (90 sec - 3 min)
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileUpload('pitchVideo', e.target.files[0])}
                className="hidden"
              />
              <div className={`mt-2 p-4 border-2 border-dashed rounded-xl cursor-pointer text-center ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'}`}>
                <FiUpload className="mx-auto mb-2" size={24} />
                <span className="text-xs">Click to upload video</span>
              </div>
            </label>
            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Pitch Deck Upload (PDF)
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileUpload('pitchDeck', e.target.files[0])}
                className="hidden"
              />
              <div className={`mt-2 p-4 border-2 border-dashed rounded-xl cursor-pointer text-center ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'}`}>
                <FiUpload className="mx-auto mb-2" size={24} />
                <span className="text-xs">Click to upload PDF</span>
              </div>
            </label>
            <textarea
              placeholder="Short Description (Max 200-250 chars)"
              value={formData.shortDescription}
              onChange={(e) => handleInputChange('shortDescription', e.target.value)}
              maxLength={250}
              rows={4}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="text"
              placeholder="Hashtags (#Fintech #AI #D2C etc.)"
              value={formData.hashtags}
              onChange={(e) => handleInputChange('hashtags', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="Amount Raising (₹)"
                value={formData.amountRaising}
                onChange={(e) => handleInputChange('amountRaising', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
              />
              <input
                type="number"
                placeholder="Equity Giving (%)"
                value={formData.equityGiving}
                onChange={(e) => handleInputChange('equityGiving', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
              />
            </div>
            <input
              type="number"
              placeholder="Pre-money Valuation (Auto-calculated option)"
              value={formData.preMoneyValuation}
              onChange={(e) => handleInputChange('preMoneyValuation', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              6. Social & Contact Links
            </h2>
            <input
              type="url"
              placeholder="LinkedIn Page"
              value={formData.linkedin}
              onChange={(e) => handleInputChange('linkedin', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="url"
              placeholder="Instagram"
              value={formData.instagram}
              onChange={(e) => handleInputChange('instagram', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="url"
              placeholder="YouTube"
              value={formData.youtube}
              onChange={(e) => handleInputChange('youtube', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="url"
              placeholder="Play Store / App Store"
              value={formData.playStore}
              onChange={(e) => handleInputChange('playStore', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="url"
              placeholder="Product Demo Link"
              value={formData.productDemo}
              onChange={(e) => handleInputChange('productDemo', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <label className={`block text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Company Brochure PDF (Optional)
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileUpload('brochure', e.target.files[0])}
                className="hidden"
              />
              <div className={`mt-2 p-3 sm:p-4 border-2 border-dashed  cursor-pointer text-center ${isDark ? 'border-white/20 hover:border-white/40' : 'border-black/20 hover:border-black/40'}`}>
                <FiUpload className="mx-auto mb-1 sm:mb-2" size={20} />
                <span className="text-xs">Click to upload</span>
              </div>
            </label>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              7. Team Details (Optional)
            </h2>
            <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Add core team members with their roles, LinkedIn profiles, and experience summary.
            </p>
            <button
              type="button"
              className={`w-full py-2.5  text-sm font-semibold border ${isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/10'}`}
            >
              + Add Team Member
            </button>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              8. Startup Category Tags (Optional)
            </h2>
            <div className="space-y-2">
              {categoryTags.map(tag => (
                <label key={tag} className={`flex items-center gap-2 p-2  cursor-pointer ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}>
                  <input
                    type="checkbox"
                    checked={formData.categoryTags.includes(tag)}
                    onChange={() => handleArrayChange('categoryTags', tag)}
                    className="w-4 h-4"
                  />
                  <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>{tag}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              9. Account Security
            </h2>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border pr-10 sm:pr-12 ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-black/50'}`}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border pr-10 sm:pr-12 ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-black/50'}`}
              >
                {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Email OTP"
                value={formData.emailOTP}
                onChange={(e) => handleInputChange('emailOTP', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
              />
              <input
                type="text"
                placeholder="Phone OTP"
                value={formData.phoneOTP}
                onChange={(e) => handleInputChange('phoneOTP', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5  text-xs sm:text-sm border rounded-xl ${isDark ? 'bg-black/80 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="h-screen flex flex-col max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Header - Fixed */}
        <div className="mb-4 sm:mb-6 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <img src={logo} alt="EVO-A Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            <span className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>EVO-A</span>
          </div>
          <h1 className={`text-lg sm:text-2xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
            Startup Registration
          </h1>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            Step {currentStep} of 9
          </p>
        </div>

        {/* Progress Bar - Fixed */}
        <div className={`mb-4 sm:mb-6 h-1.5 sm:h-2 -full shrink-0 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
          <div
            className="h-full -full transition-all duration-300 bg-[#00B8A9]"
            style={{ width: `${(currentStep / 9) * 100}%` }}
          />
        </div>

        {/* Form Container - Scrollable */}
        <div className={`-xl sm:-2xl p-4 sm:p-6 mb-4 sm:mb-6 flex-1 overflow-y-auto ${isDark ? 'bg-black/50 border border-white/10' : 'bg-white border border-black/10'}`}>
          {renderStep()}
        </div>

        {/* Navigation Buttons - Fixed */}
        <div className="flex justify-between gap-2 sm:gap-4 shrink-0">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-4 sm:px-6 py-2 sm:py-2.5  text-xs sm:text-sm font-semibold transition-all ${
              currentStep === 1
                ? 'opacity-50 cursor-not-allowed'
                : isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20'
            }`}
          >
            Previous
          </button>
          {currentStep < 9 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all bg-[#00B8A9] text-white hover:bg-[#00A89A] shadow-lg shadow-[#00B8A9]/30 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00B8A9]/40 active:scale-[0.98]"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all bg-[#00B8A9] text-white hover:bg-[#00A89A] shadow-lg shadow-[#00B8A9]/30 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00B8A9]/40 active:scale-[0.98]"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

