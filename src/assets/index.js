// index.js lo utilizamos como punto central para exportar los modulos y componentes que vamos a utilizar en el proyecto
// De esta forma evitamos importar cada módulo manualmente desde rutas largas en otros archivos.

//Hero Component
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

export const heroIcons = [<Linkedin />, <Github />];

//About Me Component
import { ArrowDownToLine } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export const downloadIcon = <ArrowDownToLine />;
export const arrowLeftIcon = <ArrowLeft />;

export const AboutText = " Hi! I'm Ignacio García Godoy, and I am currently in the last semester of the Systems Analyst at ORT. During my studies, I have had the opportunity to work with various tools and languages such as Java, HTML, CSS, .NET, SQL, among others. This variety of knowledge has allowed me to develop a solid and versatile foundation in programming and software development. I consider myself a dedicated and committed individual, both academically and professionally.";

// Experience & Education Component
export const experienceData = [
  {
    year: 2017,
    title: 'High School Education',
    education: 'Bachiller en Análisis Ambiental y Tecnología de los Alimentos - Instituto Secundario León XIII (2013 - 2017).',
    experience: [
      'Completion of high school education with a focus on environmental analysis and food technology.',
      'Development of soft skills: teamwork, problem-solving, and communication.',
    ],
  },
  {
    year: 2018,
    title: 'Entry into Workforce',
    education: 'No formal education pursued during this period.',
    experience: [
      'Administration of buildings at "Administracion Murga" (2018 - Present): Began work with responsibilities such as attending customer inquiries and complaints via phone, email, or in person.',
      'Learned to track payments, update account records, and manage outstanding balances.',
      'Developed problem-solving skills by efficiently resolving conflicts and issues for clients.',
    ],
  },
  {
    year: 2020,
    title: 'Technical Skill Development',
    education: 'Curso Java Inicial - Educación IT (2022): Introduction to Java programming fundamentals.',
    experience: [
      'Acquired foundational knowledge of Java syntax, object-oriented programming, and basic algorithms.',
      'Applied new programming skills to small personal projects or exercises.',
    ],
  },
  {
    year: 2023,
    title: 'Higher Education in Systems Analysis',
    education: 'Analista de Sistemas - ORT (2023 - Presente): In progress, technical degree with an intermediate title as Analista Programador.',
    experience: [
      'Advanced understanding of systems analysis and programming fundamentals.',
      'Applied programming and problem-solving techniques in academic projects.',
      'Developed knowledge of software development methodologies and practices.',
    ],
  },
  {
    year: 2024,
    title: 'Project Management Skills',
    education: 'Curso Gestión de Proyectos y Fundamentos de Metodología Agile - Banco Santander Río (2024): Understanding Agile principles and project management frameworks.',
    experience: [
      'Learned Agile methodologies, including Scrum roles, events, and artifacts.',
      'Gained an understanding of how to manage and execute projects efficiently using Agile workflows.',
    ],
  },
  {
    year: 2024,
    title: 'Administrative Leadership',
    education: 'Ongoing learning and professional development.',
    experience: [
      'Continued responsibilities at MURGA with expanded leadership in managing client relationships, resolving high-priority issues, and ensuring financial compliance.',
      'Streamlined processes for generating and delivering invoices and payment receipts.',
      'Built expertise in balancing administrative tasks with customer service excellence.',
    ],
  },  
  {
    year: 2024,
    title: 'Freelance Web Development',
    education: 'Self-taught improvements in web development alongside project experience.',
    experience: [
      'Performed maintenance and updates for a local business website as a freelance developer.',
      'Corrected errors in HTML and CSS to enhance presentation and site functionality.',
      'Optimized website performance by reducing CSS and JavaScript file sizes, improving loading speed.',
      'Added interactivity using JavaScript, including form validation and navigation enhancements.',
      'Implemented design changes based on client requests to better meet business needs.',
    ],
  },
]

// Skills component
export const skillsData = [
  {
    name: 'Java',
    icon: '/skills/java.png'
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png'
  },
  {
    name: 'HTML',
    icon: '/skills/html.png'
  },
  {
    name: 'CSS',
    icon: '/skills/css.png'
  },
  {
    name: 'SQL',
    icon: '/skills/sql.png'
  },
  {
    name: 'Spring Boot',
    icon: '/skills/springboot.png'
  },
  {
    name: 'GitHub',
    icon: '/skills/github.png'
  },
  {
    name: 'C#',
    icon: '/skills/csharp.png'
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png'
  },  
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png'
  },
  {
    name: 'NodeJS',
    icon: '/skills/nodejs.png'
  },
  {
    name: 'React',
    icon: '/skills/react.png'
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png'
  },
  {
    name: 'IntelliJ',
    icon: '/skills/intellij.png'
  },
]

// Projects component
export const projectsData = [
  {
    name: 'PortfolioGenerator.com',
    desc: 'A user-friendly platform where registered users can easily create and customize personal portfolios with a simple drag-and-drop interface.',
    url: '/projects/portfolioGenerator.png',
    tech: ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'ReactJS', 'NextJS'],
  },
  {
    name: 'UltraClean.com',
    desc: 'A streamlined e-shop offering a wide variety of products, providing users with an easy and efficient online shopping experience.',
    url: '/projects/ultraClean.png',
    tech: ['C#', 'HTML', 'CSS', "Bootstrap"],
  },
]

export const projectsButton = [
  'All',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'TailwindCSS',
  'NextJS',
  'Bootstrap',
  'C#',
]

// NavBar Component
import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
]