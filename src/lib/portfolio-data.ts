import {
  Award,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  FileText,
  Github,
  GraduationCap,
  LayoutPanelTop,
  Linkedin,
  Mail,
  Medal,
  Phone,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type QuickFact = {
  eyebrow: string;
  value: string;
  detail: string;
};

export type ProfilePoint = {
  label: string;
  value: string;
  detail: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type FocusArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type EducationRecord = {
  period: string;
  institution: string;
  credential: string;
  result: string;
  detail: string;
};

export type Certification = {
  title: string;
  issuer: string;
  summary: string;
  result?: string;
  skills: string[];
};

export type AchievementItem = {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

export type ContactLink = {
  label: string;
  href: string;
  detail: string;
  icon: LucideIcon;
};

export type ProjectEntry = {
  title: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  note: string;
  previewMetric: string;
  previewCaption: string;
  highlights: string[];
  href?: string;
  ctaLabel?: string;
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const quickFacts: QuickFact[] = [
  {
    eyebrow: "Academic journey",
    value: "B.Tech in Information Technology",
    detail:
      "Currently studying at Haldia Institute of Technology from 2023 to 2027.",
  },
  {
    eyebrow: "Current performance",
    value: "CGPA: 7.01 / 10",
    detail:
      "Building consistency in academics while strengthening practical development skills.",
  },
  {
    eyebrow: "Career direction",
    value: "Web development and software growth",
    detail:
      "Interested in opportunities where I can contribute, keep learning, and grow professionally.",
  },
];

export const aboutParagraphs = [
  "I am Harsh Ranjan, a dedicated and enthusiastic B.Tech student specializing in Information Technology at Haldia Institute of Technology. I have a growing interest in web development and a strong foundation in HTML, CSS, JavaScript, Python, SQL, and Java.",
  "Through my academic journey, I have focused on learning steadily, building a stronger technical base, and preparing for professional opportunities where I can contribute meaningfully while continuing to grow.",
];

export const profilePoints: ProfilePoint[] = [
  {
    label: "Based in",
    value: "Purba Medinipur, West Bengal",
    detail:
      "Based in West Bengal and focused on learning, growth, and new opportunities in tech.",
  },
  {
    label: "Known languages",
    value: "English, Hindi",
    detail:
      "Comfortable communicating in both academic and everyday contexts.",
  },
  {
    label: "Personal interests",
    value: "Cricket, Cooking",
    detail:
      "Interests that add balance outside academics and technical learning.",
  },
  {
    label: "Current goal",
    value: "Internships and real-world experience",
    detail:
      "Looking for opportunities to apply my skills, learn faster, and grow through real work.",
  },
];

export const heroStats: HeroStat[] = [
  { value: "2023 - 2027", label: "B.Tech timeline" },
  { value: "7.01", label: "Current CGPA" },
  { value: "2", label: "Completed certifications" },
  { value: "1", label: "Real GitHub project" },
];

export const guidingPillars = [
  "Professional first impression",
  "Clear communication",
  "Responsive design",
  "Reusable UI systems",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Web foundation",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Programming languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    title: "Core concepts",
    items: [
      "Data Structures & Algorithms",
      "DOM Manipulation",
      "Event Handling",
      "Basic Game Logic",
    ],
  },
  {
    title: "Learning track",
    items: [
      "Web Development",
      "Machine Learning Foundations",
      "Generative AI Basics",
    ],
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Web development",
    description:
      "I enjoy building browser-based experiences and improving how interfaces feel, flow, and respond.",
    icon: LayoutPanelTop,
  },
  {
    title: "Programming foundation",
    description:
      "I am strengthening my core skills in JavaScript, Python, Java, SQL, and structured problem-solving.",
    icon: Blocks,
  },
  {
    title: "Machine learning exposure",
    description:
      "My certification work has introduced me to machine learning foundations and early AI concepts.",
    icon: BrainCircuit,
  },
  {
    title: "Career growth",
    description:
      "I want to grow through stronger projects, better problem-solving, and meaningful internship opportunities.",
    icon: BriefcaseBusiness,
  },
];

export const educationRecords: EducationRecord[] = [
  {
    period: "2023 - 2027",
    institution: "Haldia Institute of Technology",
    credential: "B.Tech in Information Technology",
    result: "CGPA: 7.01 / 10",
    detail:
      "Current degree program focused on Information Technology and long-term software growth.",
  },
  {
    period: "2022",
    institution: "R K Dwarika College, Lohianagar, Patna",
    credential: "12th | BSEB",
    result: "Percentage: 64.20 / 100",
    detail:
      "Completed higher secondary education before moving into technical studies.",
  },
  {
    period: "2020",
    institution: "Delhi Central Public School, Masaurhi, Patna",
    credential: "10th | CBSE",
    result: "Percentage: 60 / 100",
    detail:
      "Built the academic base that led into my present engineering path.",
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "AWS Educate",
    summary:
      "Completed the course successfully and scored full marks on the final assessment while building exposure to machine learning fundamentals.",
    result: "Assessment score: 100 / 100",
    skills: ["Machine Learning Foundations", "Python"],
  },
  {
    title: "Generative AI with AWS",
    issuer: "Udacity + AWS",
    summary:
      "Completed the course and built a PartyRock app during the learning journey, gaining practical exposure to generative AI concepts.",
    skills: ["Generative AI", "AWS", "PartyRock"],
  },
];

export const achievementBadges = [
  "AWS Educate certified",
  "Generative AI course completed",
  "One real GitHub project linked",
  "Focused on steady growth",
];

export const achievementItems: AchievementItem[] = [
  {
    title: "Academic standing",
    value: "7.01 / 10",
    detail:
      "Current CGPA in B.Tech Information Technology at Haldia Institute of Technology.",
    icon: GraduationCap,
  },
  {
    title: "Top certification score",
    value: "100 / 100",
    detail:
      "Scored full marks in the AWS Educate Machine Learning Foundations assessment.",
    icon: Trophy,
  },
  {
    title: "AI learning exposure",
    value: "AWS + Udacity",
    detail:
      "Completed generative AI coursework and built a PartyRock application during the learning process.",
    icon: Medal,
  },
  {
    title: "Real project on GitHub",
    value: "Rock Paper Scissor",
    detail:
      "A completed browser game project that demonstrates JavaScript fundamentals and practical frontend execution.",
    icon: Code2,
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    title: "Rock Paper Scissor Game",
    category: "Featured Project",
    summary:
      "A basic web-based game where the user plays against the computer by selecting rock, paper, or scissors and gets instant score updates.",
    impact:
      "Focused on DOM manipulation, event handling, and game logic in JavaScript while building a complete browser-based experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    note: "A simple browser game built to strengthen JavaScript fundamentals and user interaction.",
    previewMetric: "Player vs CPU",
    previewCaption: "Interactive browser game",
    highlights: ["Instant score updates", "DOM events", "Single-player logic"],
    href: "https://github.com/HARSH-RANJAN008/Rock_Paper_Scissor",
    ctaLabel: "View repository",
  },
  {
    title: "InsightBoard",
    category: "Concept Project",
    summary:
      "A modern analytics dashboard concept for visualizing sales, engagement, and growth metrics with clean data storytelling.",
    impact:
      "Explores dashboard layout, visual hierarchy, and the way complex information can be presented more clearly.",
    stack: ["React", "TypeScript", "Recharts", "REST API"],
    note: "A concept case study exploring how I want to approach data-rich product interfaces.",
    previewMetric: "Dashboard UI",
    previewCaption: "Data storytelling concept",
    highlights: ["Cards and charts", "Responsive layout", "Metric hierarchy"],
  },
  {
    title: "TaskFlow Pro",
    category: "Concept Project",
    summary:
      "A productivity web app concept for tracking study tasks, deadlines, and progress with reusable cards and status boards.",
    impact:
      "Explores practical product thinking through task management flows, structured layouts, and reusable components.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    note: "A concept project based on the kind of full-stack tools I want to build more often.",
    previewMetric: "Task tracker",
    previewCaption: "Productivity workflow concept",
    highlights: ["Status boards", "Deadlines", "Reusable components"],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/HARSH-RANJAN008",
    detail: "@HARSH-RANJAN008",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-ranjan-8723aa2b7/",
    detail: "harsh-ranjan-8723aa2b7",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:harshranjan6299@gmail.com",
    detail: "harshranjan6299@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+916299537626",
    detail: "+91 62995 37626",
    icon: Phone,
  },
  {
    label: "Resume",
    href: "/Harsh-Ranjan-Resume.pdf",
    detail: "Download PDF",
    icon: FileText,
  },
];

export const contactNeeds = [
  "Professional headshot",
  "More real deployed projects",
  "Hackathons or competitions",
  "Internship experience",
  "Project screenshots and case studies",
];

export const closingHighlights = [
  "Strong academic foundation",
  "Learning certifications",
  "Active GitHub project",
  "Clear growth direction",
];

export const signatureHighlights = [
  "Web development",
  "Machine learning foundations",
  "Generative AI exposure",
  "Problem-solving mindset",
];

export const endorsementNote = {
  title: "Where I am right now",
  summary:
    "I am focused on building stronger projects, sharpening my fundamentals, and turning consistent learning into practical work.",
  icon: Award,
};
