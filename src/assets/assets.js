import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import adityaImg from '../assets/aditya.png';

import blogImg1 from '../assets/blog.png';
import jobImg2 from '../assets/job.jpg';
import resumeImg3 from '../assets/resume.png';

import zidioCert from './files/Aditya_zidio.pdf';
import softproInternCert from './files/Aditya document2.pdf';
import aiCert from './files/Aditya Ranjan AI_Fundamental.pdf';
import cyberCert from './files/Aditya Ranjan9628137355.pdf';
import fullstackCert from './files/Aditya Ranjan_certificate.pdf';
import hclCert from './files/Aditya document1.pdf';
import ibmCert from './files/Completion Certificate _ SkillsBuild.pdf';

import myResume from './files/Aditya_Resume..pdf';

export const assets = {
    
    adityaImg,
    myResume,
}


export const aboutInfo = [
   
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'Clerk Auth', 'Socket.io', 'Javascript']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['Supabase', 'MongoDB', 'MySQL', 'PostgreSQL']
  },
 
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman']
  }
];



export const projects = [
{
    title: "Blogging Platform",
    description: "A comprehensive blogging ecosystem featuring dedicated Admin and User panels. Includes a dynamic dashboard for content management, real-time analytics for post engagement, and secure role-based access control.",
    image: blogImg1,
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Bootstrap"],
    demo: "https://blogging-platform-adi.vercel.app/",
    code: "https://github.com/Aditya-Ranjan08/Blogging-Platform.git",
  },
  {
    title: " Job Portal",
    description: "A high-performance job board built with a multi-user architecture. Features separate dashboards for Job Seekers and Recruiters, real-time job tracking, and seamless application workflows with enterprise-grade UI components.",
    image: jobImg2,
    tech: ["React", "Supabase", "Clerk Auth", "Shadcn UI", "Tailwind"],
    demo: "https://job-portal-adi.vercel.app/", 
    code: "https://github.com/Aditya-Ranjan08/Job-Portal.git",
  },
  {
    title: "Resume Builder",
    description: "A professional tool for creating industry-standard resumes. Integrated with automated formatting, secure cloud storage for profiles, and optimized data handling to help users generate PDF resumes instantly.",
    image: resumeImg3,
    tech: ["React", "Node.js", "MongoDB Atlas", "JWT", "CORS","Tailwind"],
    demo: "https://adi-resume-builder.vercel.app/",
    code: "https://github.com/Aditya-Ranjan08/Resume-Builder.git",
  }

];




export const workData = [
  {
    role: "Web Development Intern",
    company: "Zidio Development",
    duration: "June 2025 - Sept 2025",
    description: "Designed and architected responsive, user-centric web applications during a 3-month intensive internship. Focused on building scalable backend services and integrating them with modern frontend frameworks like React.js to ensure a seamless user experience. Gained hands-on experience in managing end-to-end development lifecycles and optimizing application performance.",
    certificateLink: zidioCert // Imported variable use kiya
  },
  {
    role: "MERN Stack Intern",
    company: "Softpro India Computer Technologies",
    duration: "July 2025 - Aug 2025",
    description: "Completed an intensive 45-day professional training and internship on the MERN stack, earning a prestigious A++ grade. Developed robust RESTful APIs using Node.js and Express.js while managing complex data structures in MongoDB. Specialized in creating dynamic, state-driven interfaces with React.js and implementing secure authentication workflows.",
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