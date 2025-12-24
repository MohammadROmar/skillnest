import {
  BrainCircuit,
  Briefcase,
  Camera,
  Code,
  Headphones,
  Palette,
  PersonStanding,
  Activity,
  Brain,
  Gem,
  Globe,
  Layers2,
  Shield,
  Sparkles,
  Sun,
  TrendingUp,
  Zap,
  BadgeCheck,
  Laptop,
  GraduationCap,
  Users,
} from 'lucide-react';

import learningEnvironmentImg from '../assets/images/interactive-learning-environment.jpg';
import certificationsImg from '../assets/images/certifications.jpg';
import user1Img from '../assets/images/user-1.png';
import user2Img from '../assets/images/user-2.png';
import user3Img from '../assets/images/user-3.png';

export const categories = [
  {
    label: 'Design & Creative',
    count: '850+',
    icon: Palette,
    text: 'text-rose-500',
    bg: 'bg-rose-100',
  },
  {
    label: 'Develpment',
    count: '1.2k+',
    icon: Code,
    text: 'text-blue-500',
    bg: 'bg-blue-100',
  },
  {
    label: 'Marketing',
    count: '450+',
    icon: TrendingUp,
    text: 'text-orange-500',
    bg: 'bg-orange-100',
  },
  {
    label: 'Buisness',
    count: '600+',
    icon: Briefcase,
    text: 'text-green-500',
    bg: 'bg-green-100',
  },
  {
    label: 'Music & Audio',
    count: '120+',
    icon: Headphones,
    text: 'text-pink-500',
    bg: 'bg-pink-100',
  },
  {
    label: 'Photography',
    count: '300+',
    icon: Camera,
    text: 'text-teal-500',
    bg: 'bg-teal-100',
  },
  {
    label: 'Data Science',
    count: '250+',
    icon: BrainCircuit,
    text: 'text-purple-500',
    bg: 'bg-purple-100',
  },
  {
    label: 'Personal Dev',
    count: '100+',
    icon: PersonStanding,
    text: 'text-amber-500',
    bg: 'bg-amber-100',
  },
];

export const companies = [
  { label: 'GlobalTech', icon: Globe },
  { label: 'FutureScale', icon: Sparkles },
  { label: 'EnergyInc', icon: Zap },
  { label: 'StackBuild', icon: Layers2 },
  { label: 'PremuimSoft', icon: Gem },
  { label: 'CoreDynamic', icon: Activity },
  { label: 'BrightSolutins', icon: Sun },
  { label: 'PrimeLogic', icon: Brain },
  { label: 'VertexFlow', icon: TrendingUp },
  { label: 'SolidCore', icon: Shield },
];

export const whyUs = [
  {
    image: learningEnvironmentImg,
    title: 'Interactive Learning Environment',
    description:
      'Forget passive video watching. Our platform includes in-browser codeing environment, interactive quizzes, and peer-revirewed projects that ensure you acctually master the skills',
    icon: Laptop,
    bgSyles: 'bg-primary/10',
    textStyles: 'text-primary',
    link: 'Explore Courses',
    styles: 'before:bg-primary/25',
  },
  {
    title: 'Verified Certifications',
    image: certificationsImg,
    description:
      'Earn certificated that employers actually value. Our credentials are blockchain-verified and can br directly added to your LinkedIn profile with a single click.',
    icon: BadgeCheck,
    bgSyles: 'bg-purple-100',
    textStyles: 'text-purple-500',
    link: 'Get your Certificate now',
    styles: 'before:bg-purple-500/25 lg:order-1',
  },
];

export const overview = [
  {
    icon: GraduationCap,
    title: 'What We Offer',
    description:
      'Access a curated library of structered learning paths designed by industry veterans. From bite-sized lessons to comperhensive certifications. We provide the tools you need to stay relevant.',
    features: ['Industry-recognized Certificates', '1-on-1 Mentroship'],
  },
  {
    icon: Users,
    title: "Who It's For",
    description:
      ' Whether you&apos;re a student looking to break into tech, a preofessional aiming for a promotion, or a lifelong learner curious about the world, SkillNest adapts to your pace and goals.',
    features: ['Career Switchers', 'Upskilling Professionals'],
  },
];

export const whatLearnersSay = [
  {
    name: 'Michael Chen',
    specialty: 'Frontend Developer',
    image: user1Img,
    description:
      "I've tried many platforms, but SkillNest is by far the most polished. The calm design helps me focus on the actual learning material.",
  },
  {
    name: 'Salvador Thompson',
    specialty: 'Marketing Director',
    image: user2Img,
    description:
      'Excellent value for money. The enterprise features have been great for training my entire marketing team remotely.',
  },
  {
    name: 'Frankie Clarke',
    specialty: 'Product Designer at Google',
    image: user3Img,
    description:
      'The UI/UX course completely changed my career trajectory. The mentors were incredibly helpful and the projects were real-world relevant.',
  },
];
