import advancedAudioMixingImg from '../assets/images/courses/advanced-audio-mixing.jpg';
import advancedVisualBrandingImg from '../assets/images/courses/advanced-visual-branding.jpg';
import appliedDataInsightsImg from '../assets/images/courses/applied-data-insights.jpg';
import businessCommunicationImg from '../assets/images/courses/business-communication.jpg';
import businessStrategyBasicsImg from '../assets/images/courses/business-strategy-basics.jpg';
import creativPortraitPhotographyImg from '../assets/images/courses/creative-portrait-photography.jpg';
import creativeThinkingForDesignersImg from '../assets/images/courses/creative-thinking-for-designers.jpg';
import creativeUiDesignEssentialsImg from '../assets/images/courses/creative-ui-design-essentials.jpg';
import dataAnalysisFoundationsImg from '../assets/images/courses/data-analysis-foundations.jpg';
import digitalMarketingFundamentalsImg from '../assets/images/courses/digital-marketing-fundamentals.jpg';
import entrepreneurshipImg from '../assets/images/courses/entrepreneurship.jpg';
import frontendArchitectureMasteryImg from '../assets/images/courses/frontend-architecture-mastery.jpg';
import fullStackProjectOverviewImg from '../assets/images/courses/full-stack-project-overview.jpg';
import mindsetGoalSettingImg from '../assets/images/courses/mindset-goal-setting.jpg';
import modernWebDevelopmentBasicsImg from '../assets/images/courses/modern-web-development-basics.jpg';
import musicProductionBasicsImg from '../assets/images/courses/music-production-basics.jpg';
import personalProductivityKasteryImg from '../assets/images/courses/personal-productivity-kastery.jpg';
import photographyBasicsImg from '../assets/images/courses/photography-basics.jpg';
import socialMediaStrategyImg from '../assets/images/courses/social-media-strategy.jpg';

export interface Course {
  id: number;
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  lessonsCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  category: string;
  duration: string;
  days: string[];
  time: string;
  instructor: string;
  language: string;
  whatYouWillLearn: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    image: creativeUiDesignEssentialsImg,
    title: 'Creative UI Design Essentials',
    shortDescription:
      'Learn the fundamentals of modern UI design with creativity in mind.',
    fullDescription:
      'This course introduces modern UI design principles, focusing on visual balance, color harmony, and creative layouts suitable for digital products.',
    lessonsCount: 18,
    level: 'Beginner',
    price: 69,
    category: 'Design & Creative',
    duration: '3 Weeks',
    days: ['Sun', 'Tue'],
    time: '18:00 - 20:00',
    instructor: 'Lina Carter',
    language: 'English',
    whatYouWillLearn: [
      'Understand core UI design principles',
      'Apply color theory and visual balance',
      'Design clean and modern interfaces',
      'Create user-friendly layouts',
    ],
  },
  {
    id: 2,
    image: advancedVisualBrandingImg,
    title: 'Advanced Visual Branding',
    shortDescription: 'Build strong brand identities through design.',
    fullDescription:
      'Explore advanced branding concepts, logo systems, and visual storytelling to create consistent and impactful brand experiences.',
    lessonsCount: 22,
    level: 'Advanced',
    price: 119,
    category: 'Design & Creative',
    duration: '5 Weeks',
    days: ['Mon', 'Wed'],
    time: '19:00 - 21:00',
    instructor: 'Michael Stone',
    language: 'English',
    whatYouWillLearn: [
      'Build strong visual brand identities',
      'Design professional logo systems',
      'Create consistent branding assets',
      'Apply branding across digital platforms',
    ],
  },
  {
    id: 3,
    image: modernWebDevelopmentBasicsImg,
    title: 'Modern Web Development Basics',
    shortDescription: 'Start your journey into modern web development.',
    fullDescription:
      'Learn the foundations of web development, including structure, layouts, and best practices for building modern websites.',
    lessonsCount: 24,
    level: 'Beginner',
    price: 79,
    category: 'Develpment',
    duration: '4 Weeks',
    days: ['Sun', 'Thu'],
    time: '18:00 - 20:00',
    instructor: 'Daniel Roberts',
    language: 'English',
    whatYouWillLearn: [
      'Understand modern web structures',
      'Build responsive layouts',
      'Apply development best practices',
      'Create functional web pages',
    ],
  },
  {
    id: 4,
    image: frontendArchitectureMasteryImg,
    title: 'Frontend Architecture Mastery',
    shortDescription: 'Design scalable frontend projects with confidence.',
    fullDescription:
      'This course focuses on organizing frontend projects, structuring components, and maintaining scalable user interfaces.',
    lessonsCount: 30,
    level: 'Advanced',
    price: 139,
    category: 'Develpment',
    duration: '6 Weeks',
    days: ['Tue', 'Fri'],
    time: '19:00 - 21:00',
    instructor: 'Emily Nguyen',
    language: 'English',
    whatYouWillLearn: [
      'Structure large frontend projects',
      'Design scalable UI architectures',
      'Improve code organization',
      'Maintain long-term project quality',
    ],
  },
  {
    id: 5,
    image: digitalMarketingFundamentalsImg,
    title: 'Digital Marketing Fundamentals',
    shortDescription: 'Understand the core principles of online marketing.',
    fullDescription:
      'Learn how digital marketing works, including audience targeting, content strategy, and online brand growth.',
    lessonsCount: 20,
    level: 'Beginner',
    price: 75,
    category: 'Marketing',
    duration: '4 Weeks',
    days: ['Mon', 'Wed'],
    time: '17:00 - 19:00',
    instructor: 'Sophia Adams',
    language: 'English',
    whatYouWillLearn: [
      'Understand digital marketing basics',
      'Identify target audiences',
      'Create marketing strategies',
      'Grow brands online',
    ],
  },
  {
    id: 6,
    image: socialMediaStrategyImg,
    title: 'Social Media Strategy',
    shortDescription: 'Grow and manage brands on social platforms.',
    fullDescription:
      'This course teaches effective social media strategies, content planning, and engagement techniques for modern brands.',
    lessonsCount: 16,
    level: 'Intermediate',
    price: 85,
    category: 'Marketing',
    duration: '3 Weeks',
    days: ['Tue', 'Thu'],
    time: '18:30 - 20:30',
    instructor: 'Nathan Clark',
    language: 'English',
    whatYouWillLearn: [
      'Plan social media content',
      'Increase audience engagement',
      'Build platform-specific strategies',
      'Measure social media performance',
    ],
  },
  {
    id: 7,
    image: businessStrategyBasicsImg,
    title: 'Business Strategy Basics',
    shortDescription: 'Learn how successful businesses make decisions.',
    fullDescription:
      'Understand business models, strategic thinking, and decision-making processes used by modern organizations.',
    lessonsCount: 19,
    level: 'Beginner',
    price: 79,
    category: 'Buisness',
    duration: '4 Weeks',
    days: ['Sun', 'Wed'],
    time: '18:00 - 20:00',
    instructor: 'James Wilson',
    language: 'English',
    whatYouWillLearn: [
      'Understand business models',
      'Develop strategic thinking',
      'Make informed decisions',
      'Analyze real business cases',
    ],
  },
  {
    id: 8,
    image: entrepreneurshipImg,
    title: 'Entrepreneurship Essentials',
    shortDescription: 'Turn ideas into sustainable businesses.',
    fullDescription:
      'Learn the fundamentals of entrepreneurship, from idea validation to launching and scaling a business.',
    lessonsCount: 23,
    level: 'Intermediate',
    price: 99,
    category: 'Buisness',
    duration: '5 Weeks',
    days: ['Mon', 'Thu'],
    time: '19:00 - 21:00',
    instructor: 'Olivia Brown',
    language: 'English',
    whatYouWillLearn: [
      'Validate business ideas',
      'Launch new ventures',
      'Scale sustainable businesses',
      'Manage entrepreneurial risks',
    ],
  },
  {
    id: 9,
    image: musicProductionBasicsImg,
    title: 'Music Production Basics',
    shortDescription: 'Create professional-quality music tracks.',
    fullDescription:
      'Learn music production fundamentals, including recording, mixing, and sound design techniques.',
    lessonsCount: 17,
    level: 'Beginner',
    price: 69,
    category: 'Music & Audio',
    duration: '3 Weeks',
    days: ['Sat', 'Tue'],
    time: '16:00 - 18:00',
    instructor: 'Lucas Martin',
    language: 'English',
    whatYouWillLearn: [
      'Understand music production workflows',
      'Record high-quality audio',
      'Apply basic mixing techniques',
      'Create polished music tracks',
    ],
  },
  {
    id: 10,
    image: advancedAudioMixingImg,
    title: 'Advanced Audio Mixing',
    shortDescription: 'Refine your sound with professional mixing techniques.',
    fullDescription:
      'This course dives into advanced audio mixing workflows used in professional studios.',
    lessonsCount: 21,
    level: 'Advanced',
    price: 129,
    category: 'Music & Audio',
    duration: '4 Weeks',
    days: ['Wed', 'Sat'],
    time: '18:00 - 20:00',
    instructor: 'David Chen',
    language: 'English',
    whatYouWillLearn: [
      'Apply professional mixing workflows',
      'Enhance sound clarity',
      'Balance complex audio tracks',
      'Achieve studio-quality mixes',
    ],
  },
  {
    id: 11,
    image: dataAnalysisFoundationsImg,
    title: 'Data Analysis Foundations',
    shortDescription: 'Understand data and make informed decisions.',
    fullDescription:
      'Learn the fundamentals of data analysis, including interpreting data and extracting insights.',
    lessonsCount: 20,
    level: 'Beginner',
    price: 89,
    category: 'Data Science',
    duration: '4 Weeks',
    days: ['Mon', 'Thu'],
    time: '17:00 - 19:00',
    instructor: 'Anna Lopez',
    language: 'English',
    whatYouWillLearn: [
      'Understand basic data concepts',
      'Analyze datasets effectively',
      'Extract meaningful insights',
      'Support decision-making with data',
    ],
  },
  {
    id: 12,
    image: appliedDataInsightsImg,
    title: 'Applied Data Insights',
    shortDescription: 'Turn data into actionable insights.',
    fullDescription:
      'This course focuses on practical data interpretation techniques for real-world scenarios.',
    lessonsCount: 26,
    level: 'Intermediate',
    price: 109,
    category: 'Data Science',
    duration: '5 Weeks',
    days: ['Tue', 'Fri'],
    time: '18:00 - 20:00',
    instructor: 'Ryan Patel',
    language: 'English',
    whatYouWillLearn: [
      'Interpret real-world datasets',
      'Identify patterns and trends',
      'Communicate data insights',
      'Apply data-driven thinking',
    ],
  },
  {
    id: 13,
    image: personalProductivityKasteryImg,
    title: 'Personal Productivity Mastery',
    shortDescription: 'Improve focus, habits, and daily efficiency.',
    fullDescription:
      'Learn proven techniques to boost productivity, manage time effectively, and build better habits.',
    lessonsCount: 14,
    level: 'Beginner',
    price: 55,
    category: 'Personal Dev',
    duration: '2 Weeks',
    days: ['Sun', 'Tue'],
    time: '16:00 - 18:00',
    instructor: 'Mark Evans',
    language: 'English',
    whatYouWillLearn: [
      'Improve focus and concentration',
      'Build productive daily habits',
      'Manage time efficiently',
      'Increase personal effectiveness',
    ],
  },
  {
    id: 14,
    image: mindsetGoalSettingImg,
    title: 'Mindset & Goal Setting',
    shortDescription: 'Build a strong mindset for long-term success.',
    fullDescription:
      'This course focuses on goal setting, motivation, and developing a growth-oriented mindset.',
    lessonsCount: 16,
    level: 'Intermediate',
    price: 65,
    category: 'Personal Dev',
    duration: '3 Weeks',
    days: ['Wed', 'Sat'],
    time: '18:00 - 20:00',
    instructor: 'Rachel Moore',
    language: 'English',
    whatYouWillLearn: [
      'Set clear and achievable goals',
      'Develop a growth mindset',
      'Stay motivated long-term',
      'Overcome personal challenges',
    ],
  },
  {
    id: 15,
    image: photographyBasicsImg,
    title: 'Photography Basics',
    shortDescription: 'Learn how to capture stunning photos.',
    fullDescription:
      'An introduction to photography fundamentals, including composition, lighting, and camera basics.',
    lessonsCount: 15,
    level: 'Beginner',
    price: 59,
    category: 'Photography',
    duration: '3 Weeks',
    days: ['Sat', 'Tue'],
    time: '17:00 - 19:00',
    instructor: 'Emma Wilson',
    language: 'English',
    whatYouWillLearn: [
      'Understand camera settings',
      'Apply composition techniques',
      'Work with natural lighting',
      'Capture high-quality photos',
    ],
  },
  {
    id: 16,
    image: creativPortraitPhotographyImg,
    title: 'Creative Portrait Photography',
    shortDescription: 'Create expressive and professional portraits.',
    fullDescription:
      'Learn advanced portrait photography techniques, posing, and lighting setups.',
    lessonsCount: 22,
    level: 'Advanced',
    price: 119,
    category: 'Photography',
    duration: '4 Weeks',
    days: ['Mon', 'Thu'],
    time: '18:30 - 20:30',
    instructor: 'Alex Turner',
    language: 'English',
    whatYouWillLearn: [
      'Create professional portraits',
      'Master portrait lighting setups',
      'Direct and pose subjects',
      'Develop a unique photography style',
    ],
  },
  {
    id: 17,
    image: creativeThinkingForDesignersImg,
    title: 'Creative Thinking for Designers',
    shortDescription: 'Enhance creativity through structured thinking.',
    fullDescription:
      'Develop creative thinking skills to generate innovative ideas and design solutions.',
    lessonsCount: 18,
    level: 'Intermediate',
    price: 85,
    category: 'Design & Creative',
    duration: '4 Weeks',
    days: ['Sun', 'Wed'],
    time: '17:00 - 19:00',
    instructor: 'Isabella Green',
    language: 'English',
    whatYouWillLearn: [
      'Generate creative ideas',
      'Solve design problems creatively',
      'Think strategically as a designer',
      'Apply creativity in real projects',
    ],
  },
  {
    id: 18,
    image: fullStackProjectOverviewImg,
    title: 'Full-Stack Project Overview',
    shortDescription: 'Understand the complete lifecycle of digital products.',
    fullDescription:
      'Explore how frontend, backend, and product decisions come together in real-world digital projects.',
    lessonsCount: 28,
    level: 'Intermediate',
    price: 129,
    category: 'Develpment',
    duration: '6 Weeks',
    days: ['Tue', 'Thu'],
    time: '19:00 - 21:00',
    instructor: 'Kevin Brooks',
    language: 'English',
    whatYouWillLearn: [
      'Understand full product lifecycles',
      'Connect frontend and backend concepts',
      'Work with real-world project flows',
      'Collaborate across disciplines',
    ],
  },
  {
    id: 19,
    image: businessCommunicationImg,
    title: 'Business Communication Skills',
    shortDescription: 'Communicate clearly and professionally in business.',
    fullDescription:
      'Learn effective communication strategies for meetings, presentations, and professional interactions.',
    lessonsCount: 14,
    level: 'Beginner',
    price: 59,
    category: 'Buisness',
    duration: '2 Weeks',
    days: ['Mon', 'Wed'],
    time: '16:00 - 18:00',
    instructor: 'Laura Scott',
    language: 'English',
    whatYouWillLearn: [
      'Communicate clearly in business settings',
      'Deliver effective presentations',
      'Improve professional interactions',
      'Build strong communication skills',
    ],
  },
  {
    id: 20,
    image: digitalMarketingFundamentalsImg,
    title: 'Marketing Analytics Overview',
    shortDescription: 'Measure and improve marketing performance.',
    fullDescription:
      'This course introduces key marketing metrics and analytics concepts to evaluate campaign effectiveness.',
    lessonsCount: 21,
    level: 'Intermediate',
    price: 95,
    category: 'Marketing',
    duration: '4 Weeks',
    days: ['Tue', 'Fri'],
    time: '18:00 - 20:00',
    instructor: 'Brian Hall',
    language: 'English',
    whatYouWillLearn: [
      'Understand marketing metrics',
      'Analyze campaign performance',
      'Improve data-driven decisions',
      'Optimize marketing strategies',
    ],
  },
];
