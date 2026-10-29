import { FaBootstrap, FaCloud, FaCode, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJs, FaKey, FaLightbulb, FaMobileAlt, FaNodeJs, FaPaintBrush, FaReact, FaServer, FaTools } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

import adityaImg from '../assets/aditya.png';

import blogImg1 from '../assets/blog.png';
import jobImg2 from '../assets/job.jpg';
import resumeImg3 from '../assets/resume.png';
import smartExamImg from '../assets/smartexam.jpg';

import zidioCert from './files/Aditya_zidio.pdf';
import softproInternCert from './files/Aditya document2.pdf';
import aiCert from './files/Aditya Ranjan AI_Fundamental.pdf';
import cyberCert from './files/Aditya Ranjan9628137355.pdf';
import fullstackCert from './files/Aditya Ranjan_certificate.pdf';
import hclCert from './files/Aditya document1.pdf';
import ibmCert from './files/Completion Certificate _ SkillsBuild.pdf';

import myResume from './files/Aditya_ResumeA.pdf';

export const assets = {
    
    adityaImg,
    myResume,
}


export const aboutInfo = [
    {
      icon: FaReact,
      title: 'React & Frontend Development',
      description: 'Building responsive interfaces with React.js and modern web technologies.'
    },
    {
      icon: FaServer,
      title: 'Full Stack Development',
      description: 'Working across APIs, authentication, databases, and application workflows.'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Learning through hands-on projects and practical development challenges.'
    }
  ];






export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description: "React-focused interface development, responsive layouts, and browser-based styling.",
    technologies: [
      { name: "React.js", icon: FaReact, primary: true },
      { name: "JavaScript", icon: FaJs, secondary: true },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: FaCode },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Responsive Web Design", icon: FaMobileAlt },
    ]
  },

  {
    title: "Backend Development",
    icon: FaServer,
    description: "Server-side development, API integration, and authentication flows.",
    technologies: [
      { name: "Node.js", icon: FaNodeJs, secondary: true },
      { name: "Express.js", icon: FaServer, secondary: true },
      { name: "REST APIs", icon: FaCode, secondary: true },
      { name: "JWT Authentication", icon: FaKey, secondary: true },
      { name: "CRUD Operations", icon: FaCode },
    ]
  },

  {
    title: "Databases",
    icon: FaDatabase,
    description: "Working with document, relational, and hosted database services.",
    technologies: [
      { name: "MongoDB", icon: FaDatabase, secondary: true },
      { name: "MySQL", icon: FaDatabase },
      { name: "Supabase", icon: FaDatabase },
    ]
  },

  {
    title: "Tools & Workflow",
    icon: FaTools,
    description: "Version control, API testing, code editing, and deployment workflow.",
    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: FaTools },
      { name: "Vercel", icon: FaCloud },
    ]
  }
];



export const projects = [
{
    title: "Blogging Platform",
    category: "Full Stack",
    description: "Full-stack blogging application with admin and user panels for creating and managing blog posts.",
    image: blogImg1,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
    demo: "https://blogging-platform-adi.vercel.app/",
    code: "https://github.com/Aditya-Ranjan08/Blogging-Platform.git",
  },
  {
    title: "Job Portal",
    category: "Web Application",
    description: "Job portal for discovering jobs, posting openings, and tracking applications.",
    image: jobImg2,
    tech: ["React.js", "Clerk", "Supabase", "Shadcn UI", "Tailwind CSS"],
    demo: "https://job-portal-adi.vercel.app/", 
    code: "https://github.com/Aditya-Ranjan08/Job-Portal.git",
  },
  {
    title: "Resume Builder",
    category: "Full Stack",
    description: "Full-stack resume builder for editing resume details and exporting a polished PDF.",
    image: resumeImg3,
    tech: ["React.js", "Node.js", "MongoDB Atlas", "JWT", "CORS", "Tailwind CSS"],
    demo: "https://adi-resume-builder.vercel.app/",
    code: "https://github.com/Aditya-Ranjan08/Resume-Builder.git",
  },
  {
    title: "SmartExam",
    category: "Full Stack",
    description: "Online examination management system with separate admin and student portals, exam management, results, reporting, and real-time student presence.",
    image: smartExamImg,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
    demo: "https://smart-exam-oems.vercel.app/",
    code: "https://github.com/Aditya-Ranjan08/SmartExam",
  }

];




export const workData = [
  {
    role: "Web Development Intern",
    company: "Zidio Development",
    duration: "June 2025 - Sept 2025",
    description: "Gained practical experience developing responsive web applications, integrating React.js interfaces with backend services, and working through the application development workflow.",
    technologies: ["React.js","JWT Authentication","Tailwind CSS", "Bootstrap","CRUD Operations",],
    certificateLink: zidioCert
  },
  {
    role: "MERN Stack Development Intern",
    company: "Softpro India Computer Technologies",
    duration: "July 2025 - Aug 2025",
    description: "Completed a 45-day MERN stack training and internship, gaining practical experience with React.js interfaces, REST APIs, Node.js, Express.js, MongoDB, and authentication workflows.",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB", "JWT"],
    certificateLink: softproInternCert
  }
];

export const certificationData = [
  {
    title: "AI Fundamentals",
    organization: "Head Held High & Anudip Foundation",
    date: "June 2025",
    description: "Successfully completed training on AI fundamentals supported by Google.org and ADB.",
    link: aiCert 
  },
  {
    title: "Cyber Security & Emerging Trends",
    organization: "ICSS India",
    date: "May 2025",
    description: "Actively participated in the workshop on Cyber Security and emerging digital trends.",
    link: cyberCert
  },
  {
    title: "Full Stack Developer Roadmap",
    organization: "Softpro India",
    date: "Nov 2024",
    description: "Professional workshop covering the journey from beginner to expert in Full Stack Development.",
    link: fullstackCert
  },
  {
    title: "Career Guidance & 21st Century Skills",
    organization: "HCL Foundation",
    date: "2024-25",
    description: "Training completion in Digital Literacy, Communication, and Work Readiness skills.",
    link: hclCert
  },
  {
    title: "Professional Resume Writing",
    organization: "IBM SkillsBuild",
    date: "Nov 2024",
    description: "Certified training on writing professional resumes and building a strong career profile.",
    link: ibmCert
  }
];