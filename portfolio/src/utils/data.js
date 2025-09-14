import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaInstagram,
  FaLinkedin,
  FaBrain,
  FaProjectDiagram,
} from 'react-icons/fa';
import MicrosoftExcel from '../assets/Images/Excel.png';
import { FaBook } from 'react-icons/fa';
import {BiLogoJavascript} from "react-icons/bi";
import { MdHome } from 'react-icons/md';
import { SiTailwindcss, 
         SiMongodb, 
         SiExpress, 
         SiGithub, 
         SiMysql, SiPython, 
         SiPostman, 
         SiFigma, 
         SiLeetcode, 
         SiGeeksforgeeks,
         SiApache
        } from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc';
import { FaGitAlt, FaDribbble } from 'react-icons/fa';
//import { MdGroup3 } from 'react-icons/md';

import travel from '../assets/Images/Travel.jpg';
import weather from '../assets/Images/Weather.png';
import football from '../assets/Images/Football_Match_Prediction.jpg';
import ecommerce from '../assets/Images/Ecommerce_Web.jpg';
import event from '../assets/Images/Event.jpg';
import linkedin from '../assets/Images/Linkedin.jpg';

import caratlane from '../assets/Images/caratlane.png';
import alpixn from '../assets/Images/alpixn.png';

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -70, to: "hero" },
  { id: "02", label: "About Me", offset: -70, to: "about" },
  { id: "03", label: "Education", offset: -70, to: "education"},
  { id: "04", label: "Skills", offset: -70, to: "skills"},
  { id: "05", label: "Projects", offset: -70, to: "projects"},
  { id: "06", label: "Certificates", offset: -70, to: "certificates"},
  { id: "07", label: "Internships", offset: -70, to: "internships"},
  { id: "08", label: "Contact", offset: -70, to: "contact"},
];

export const STATS = [
  //{ id: "01", count: "Student", label: "Years Of Experience" },
  { id: "02", count: "10", label: "Certifications \nEarned" },
  { id: "03", count: "08", label: "Projects \nCompleted" },
  //{ id: "04", count: "00", label: "Happily \n Clients"},
];

export const SKILLS_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Database", value: "database" },
  { id: "05", label: "Tools", value: "tools" },
  { id: "06", label: "Skills", value: "skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    type: "frontend",
    description: "Experienced in building dynamic and responsive web applications using React.js, leveraging its component-based architecture for efficient development.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML5",
    type: "frontend",
    description: "Proficient in HTML5, creating well-structured and semantic web pages that enhance accessibility and SEO performance.",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS3",
    type: "frontend",
    description: "Skilled in CSS3, crafting visually appealing and responsive designs using modern techniques like Flexbox and Grid.",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "JavaScript",  
    type: "frontend",
    description: "Strong command of JavaScript, enabling the development of interactive and dynamic web features to enhance user experience.",
  },
  {
    id: "05",
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    type: "frontend",
    description: "Experienced in Tailwind CSS, utilizing its utility-first approach to rapidly build custom and responsive user interfaces.",
  },
  {
    id: "06",
    icon: FaNodeJs,
    skill: "Node JS",
    type: "backend",
    description: "Proficient in Node.js, developing scalable server-side applications and RESTful APIs with efficient performance.",
  },
  {
    id: "07",
    icon: SiExpress,
    skill: "Express JS",
    type: "backend",
    description: "Skilled in Express.js, creating robust backend services and APIs to support web and mobile applications.",
  },
  {
    id: "08",
    icon: SiMongodb,
    skill: "MongoDB",
    type: "database",
    description: "Experienced in MongoDB, designing and managing NoSQL databases for flexible and scalable data storage solutions.",
  },
  {
    id: "09",
    icon: SiMysql,
    skill: "MySQL",
    type: "database",
    description: "Proficient in MySQL, implementing relational database systems with efficient querying and data management.",
  },
  {
    id: "10",
    icon: VscVscode,
    skill: "VS Code",
    type: "tools",
    description: "Expert in Visual Studio Code, utilizing its powerful features and extensions to enhance coding productivity and efficiency.",
  },
  {
    id: "11",
    icon: VscCommentUnresolved,
    skill: "Postman",
    type: "tools",
    description: "Skilled in Postman, effectively testing and debugging APIs to ensure reliable and efficient backend services.",
  },
  {
    id: "12",
    icon: VscTerminalPowershell,
    skill: "Terminal",
    type: "tools",
    description: "Proficient in using terminal commands for efficient project management, version control, and deployment tasks.",
  },
  {
    id: "13",
    icon: FaGitAlt,
    skill: "Git",
    type: "tools",
    description: "Experienced in Git, managing source code versions and collaborating with teams through branching and merging strategies.",
  },
  {
    id: "14",
    icon: SiFigma,
    skill: "Figma",
    type: "tools",
    description: "Expert in Visual Studio Code, utilizing its powerful features and extensions to enhance coding productivity and efficiency.",
  },
  {
    id: "15",
    icon: MdHome,
    skill: "Microsoft Excel",
    type: "tools",
    description: "Expert in Visual Studio Code, utilizing its powerful features and extensions to enhance coding productivity and efficiency.",
  },
  {
    id: "16",
    icon: MdHome,
    skill: "Eclipse IDE",
    type: "tools",
    description: "Skilled in Postman, effectively testing and debugging APIs to ensure reliable and efficient backend services.",
  },
  {
    id: "17",
    icon: SiApache,
    skill: "Xampp",
    type: "tools",
    description: "Skilled in Postman, effectively testing and debugging APIs to ensure reliable and efficient backend services.",
  },
  {
    id: "18",
    icon: MdHome,
    skill: "Xampp",
    type: "tools",
    description: "Skilled in Postman, effectively testing and debugging APIs to ensure reliable and efficient backend services.",
  },
  {
    id: "19",
    icon: FaBook,
    skill: "Problem Solving",
    type: "skills",
    description: "Skilled in Postman, effectively testing and debugging APIs to ensure reliable and efficient backend services.",
  },
  {
    id: "20",
    icon: FaBook,
    skill: "Self Learning",
    type: "skills",
    description: "Skilled in Postman, effectively testing and debugging APIs to ensure reliable and efficient backend services.",
  },
];

export const CERTIFICATES_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "React JS", value: "React JS" },
  { id: "03", label: "Figma", value: "Figma" },
  { id: "04", label: "Version Control", value: "Version Control" },
  { id: "05", label: "Postman API Fundamentals", value: "Postman API Fundamentals" },
  { id: "06", label: "Python", value: "Python" },
  { id: "07", label: "Data Structure", value: "Data Structure" },
];

export const CERTIFICATES = [
  {
    id: "01",
    icon: FaReact,
    name: "React JS",
    organization: "Scalar",
    description: "React JS Certificate",
    link: "https://moonshot.scaler.com/s/sl/eH1LxFwn00?_gl=1*bqkkwg*_gcl_au*MTA2NTg5ODY5MC4xNzQzNDAwNjQ0LjE3NjIzODAxNjEuMTc0MzQwMDgzMS4xNzQzNDAwODMx*FPAU*ODQzNTM1NDI2LjE3NDIzODU4MTY.*_ga*Mjc0NTEyOTAuMTc0MjM4NTgxNA..*_ga_53S71ZZG1X*MTc0MzQxODE5Mi42LjEuMTc0MzQyMzY3MC4wLjAuMjY3MTIwMDUz"
  },
  {
    id: "02",
    icon: SiFigma,
    name: "Figma",
    organization: "Udemy",
    description: "Figma Certificate",
    link: "https://www.udemy.com/certificate/UC-5827d1fa-15a5-4a8a-90dc-f0f15e8d682e/",
  },
  {
    id: "03",
    icon: SiGithub,
    name: "Version Control",
    organization: "Coursera",
    description: "Version Control Certificate",
    link: "https://coursera.org/share/2e84a51c6d1900e2288d27f4a3bf813f",
  },
  {
    id: "04",
    icon: FaProjectDiagram,
    name: "Data Structure",  
    organization: "Great Learning",
    description: "Data Structures Certificate",
    link: "https://www.mygreatlearning.com/certificate/LNRHBUFZ",
  },
  {
    id: "05",
    icon: SiPostman,
    name: "Postman API Fundamentals",
    organization: "Postman",
    description: "PostMan Certificate",
    link: "",
  },
  {
    id: "06",
    icon: FaBrain,
    name: "Artifical Intelligence",
    organization: "Infosys Springboard",
    description: "AI Certificate",
    link: "",
  },
  {
    id: "07",
    icon: SiPython,
    name: "Crash Course On Python",
    organization: "Coursera",
    description: "Python Basic Certificate",
    link: "https://www.coursera.org/account/accomplishments/verify/AUYPD55DCWE5",
  },
];

export const ABOUT_ME = {
  content: `Dedicated Computer Science student with experience in full-stack and backend development. Built academic projects using
            Python, MERN stack, and MySQL with focus on responsiveness and clean UI. Curious how software enables real-time systems, simulations, and data handling.`,
  socialLinks: [
    { id: "01", label: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/rajeshwari-r-cmc" },
    { id: "02", label: "Github", icon: SiGithub, link: "https://github.com/Rajeshwari1403"},
    { id: "03", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/it_z_rathi05/"},
    { id: "04", label: "Leetcode", icon: SiLeetcode, link: "https://leetcode.com/u/rajeshwariravi2005/"},
    { id: "05", label: "GeeksforGeeks", icon: SiGeeksforgeeks, link: "https://www.geeksforgeeks.org/user/rajeshwb6d9/"}
  ],

  email: "rajeshwari.cmc@gmail.com",
  phone: "+91 90809 15451",
  linkedin: "https://www.linkedin.com/in/rajeshwari-r-cmc",
  instagram: "https://www.instagram.com/it_z_rathi05/",
  github: "https://github.com/Rajeshwari1403",
  leetcode: "https://leetcode.com/u/rajeshwariravi2005/",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/rajeshwb6d9/",
};

export const EDUCATION = [
  {
    id: "01",
    main: "COLLEGE",
    title: "College of Engineering, Guindy — Chennai",
    course: " M.Sc. (Integrated) - Computer Science",
    year: "2022 - 2027",
    cgpa: ""
  },
  {
    id: "02",
    main: "HSC",
    title: " Nazareth Matriculation Higher Secondary School — Avadi",
    course: "HSC in Tamil Nadu State Board Education",
    year: "2020 - 2022",
    percentage: "95.33%"
  },
  {
    id: "03",
    main: "SSLC",
    title: "Holy Immanuel Matriculation School — Avadi",
    course: " SSLC in Tamil Nadu State Board Education",
    year: "2015 - 2020",
    percentage: "90%"
  },
];

export const PROJECTS = [
  {
    id: "01",
    title:
    "Travel Diary Calendar",
    image: travel,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    link: "https://github.com/Rajeshwari1403/Travel_Diary_Calendar",
    deployed_link: "",
  },
  {
    id: "02",
    title:
    "Weather App",
    image: weather,
    tags: ["React JS", "Weather API"],
    link: "https://github.com/Rajeshwari1403/WeatherAPI",
    deployed_link: "https://weather-api-phi-lyart.vercel.app/",
  },
  {
    id: "03",
    title:
    "Ecommerce Website",
    image: ecommerce,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    link: "https://github.com/Rajeshwari1403/Ecommerce_web",
    deployed_link: "",
  },
  {
    id: "04",
    title:
    "Event Management Application",
    image: event,
    tags: ["HTML", "CSS", "MySql"],
    link: "https://github.com/Rajeshwari1403/Restro",
    deployed_link: "",
  },
  {
    id: "05",
    title:
    "Linkedin Clone",
    image: linkedin,
    tags: ["React", "Node JS", "Express JS", "MongoDB"],
    link: "https://github.com/Rajeshwari1403/LinkedIn-Clone",
    deployed_link: "",
  },
  {
    id: "06",
    title:
    "Football Match Prediction (Py)",
    image: football,
    tags: ["Python", "ML"],
    link: "https://github.com/Rajeshwari1403/ML-Football-Match-Prediction",
    deployed_link: "",
  },
];

export const INTERNSHIPS_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "CaratLane Trading Private Limited", value: "CaratLane Trading Private Limited" },
  { id: "03", label: "Alpixn Technologies Private Limited", value: "Alpixn Technologies Private Limited" },
];

export const INTERNSHIPS = [
  {
    id: "01",
    image: caratlane,
    ex: "CaratLane Trading Private Limited",
    title: "CaratLane Trading Private Limited - OnSite",
    role: "Quality Engineer",
    Project_Title: "",
    description: " Working on based post-sales project; responsible for test case design, bug tracking, and QA validation.",
    duration: "July 2025 - Present"
  },
  {
    id: "02",
    image: alpixn,
    ex: "Alpixn Technologies Private Limited",
    title: "Alpixn Technologies Private Limited - Remote",
    role: "Full Stack Developer",
    Project_Title: "AI App Builder",
    description: "Contributed to end-to-end feature development and debugging across frontend (React) and backend (Node.js) stacks",
    duration: "June 2025"
  }
];