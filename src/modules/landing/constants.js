// FAQ Data
export const faqData = [
  {
    question: 'Is EVO-A free?',
    answer: 'Currently, EVO-A provides free access for startups, investors, and viewers. Advanced features and premium services may be added in the future.'
  },
  {
    question: 'Is verification compulsory?',
    answer: 'Verification is strongly recommended for high trust and visibility. In some critical flows (investor offers, incubator matching), verification may be mandatory.'
  },
  {
    question: 'Can I have multiple roles?',
    answer: 'Currently, an account starts with one primary role. Future updates may add multi-role support if you need multiple perspectives.'
  },
  {
    question: 'How long should the pitch video be?',
    answer: 'Minimum 90 seconds (1.5 minutes) and maximum 3 minutes. This maintains investor attention span and keeps the message clear.'
  },
  {
    question: 'Is GST/CIN mandatory for startup verification?',
    answer: 'No. If you are a registered entity, you can use GST or CIN. Otherwise, founder ID proof and optional business proof are sufficient.'
  },
  {
    question: 'Is SEBI registration required for investors?',
    answer: 'No. SEBI registered investors get an instant green badge. Non-SEBI angels can pass manual review with LinkedIn + PAN + ID proof.'
  },
  {
    question: 'Can incubators be unregistered?',
    answer: 'Every incubator should have verification documents (government, university, corporate affiliation, MSME, etc.). These establish credibility.'
  }
];

// Why EVO-A Features - storing icon names instead of JSX
export const whyEvoaFeatures = [
  {
    iconName: 'HiCheckBadge',
    title: "Verified Profiles & Documents",
    description: "Details like CIN, GST, Udyam, and SEBI registration help build trust between startups and investors."
  },
  {
    iconName: 'HiVideoCamera',
    title: "Investor-First Pitch Experience",
    description: "Pitch video, deck, and deal terms (amount raising, equity, valuation) all on one screen – for quick and informed decisions."
  },
  {
    iconName: 'HiMagnifyingGlass',
    title: "Smart Matching & Filters",
    description: "Personalized recommendations for investors and incubators based on sector, ticket size, startup stage, and location."
  },
  {
    iconName: 'HiUserGroup',
    title: "Multi-Role Ecosystem",
    description: "Customized dashboard and experience for everyone – Startup, Investor, Incubator, and Viewer."
  }
];

// How It Works Steps
export const howItWorksSteps = [
  {
    step: '01',
    title: 'Create Your Account',
    desc: 'Sign up with email/phone, choose your role – Startup, Investor, Incubator, or Viewer.',
    iconName: 'HiUserGroup'
  },
  {
    step: '02',
    title: 'Complete Your Profile',
    desc: 'Startups: founder details, verification & pitch. Investors: ticket size, sector focus, verification. Incubators: program & documents.',
    iconName: 'HiClipboardDocumentCheck'
  },
  {
    step: '03',
    title: 'Discover & Pitch',
    desc: 'Discover pitches from Home feed, Explore page, and Battleground. Watch pitch reels, like, comment, share, and support.',
    iconName: 'HiMagnifyingGlass'
  },
  {
    step: '04',
    title: 'Connect & Close Deals',
    desc: 'Comments, messages, offers, battlegrounds – all lead you to real conversations and deals.',
    iconName: 'HiChatBubbleLeftRight'
  }
];

// Powerful Features
export const powerfulFeatures = [
  {
    iconName: 'HiHome',
    title: 'Role-Specific Dashboards',
    description: 'Startup, Investor, Incubator, Viewer – everyone gets a customized home page with metrics, pitch cards, and interactions.'
  },
  {
    iconName: 'HiVideoCamera',
    title: 'Pitch Reel & Detail View',
    description: 'Vertical pitch videos, like/share/comment/support buttons, deal info, and pitch deck viewer (for investors & incubators).'
  },
  {
    iconName: 'HiMagnifyingGlass',
    title: 'Explore & Smart Search',
    description: 'Search investors, startups, hashtags; curated lists like Top Performing Pitch, Investor Spotlight, Battleground Spotlight.'
  },
  {
    iconName: 'HiBell',
    title: 'Notifications & Offers',
    description: 'Offers, battlegrounds, trending rankings, system alerts – all managed from one notification center.'
  },
  {
    iconName: 'HiShieldCheck',
    title: 'Secure Account & OTP Verification',
    description: 'Email/phone OTP, password reset, role-based access – secure and compliant experience.'
  }
];

// User Journey Data
export const userJourneyData = [
  {
    day: 'Day 1',
    title: 'Signup & Profile',
    description: 'Create account → Choose role → Complete profile form → Upload verification docs'
  },
  {
    day: 'Day 2-3',
    title: 'Discovery & Exploration',
    description: 'Browse home feed and explore page → Discover pitches and investors → Like, comment, save'
  },
  {
    day: 'Day 4+',
    title: 'Active Engagement',
    description: 'Send messages to interested parties → Receive offers and notifications → Participate in battlegrounds → Close connections'
  }
];

// Generate smoke particles
export const generateSmokeParticles = () => {
  const particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push({
      id: i,
      width: 100 + Math.random() * 250,
      height: 100 + Math.random() * 250,
      opacity: 0.2 + Math.random() * 0.5,
      top: 10 + Math.random() * 80,
      duration: 8 + Math.random() * 15,
      delay: i * 0.4,
      blur: i % 3 === 0 ? 'blur-2xl' : i % 3 === 1 ? 'blur-3xl' : 'blur-[60px]',
    });
  }
  return particles;
};

