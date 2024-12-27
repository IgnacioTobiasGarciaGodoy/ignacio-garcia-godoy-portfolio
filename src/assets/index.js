// Hero
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon';

/* eslint-disable react/jsx-key */
export const heroIcons = [
  { icon: <LinkedinLineIcon />, url: "https://www.linkedin.com/in/ignacio-garcia-godoy/" },
  { icon: <GithubLineIcon />, url: "https://github.com/IgnacioTobiasGarciaGodoy" }
];

// About Me
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =" Hi! I'm Ignacio García Godoy, and I am currently in the last semester of the Systems Analyst at ORT. During my studies, I have had the opportunity to work with various tools and languages such as Java, HTML, CSS, .NET, SQL, among others. This variety of knowledge has allowed me to develop a solid and versatile foundation in programming and software development. I consider myself a dedicated and committed individual, both academically and professionally.";

// Experience
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

// Skills
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

// Projects
export const projectsData = [
  {
    name: 'PortfolioGenerator.com',
    desc: 'A user-friendly platform where registered users can easily create and customize personal portfolios with a simple drag-and-drop interface.',
    url: '/projects/portfolioGenerator.png',
    tech: ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'ReactJS', 'NextJS'],
    gitLink: 'https://github.com/EugenYepes/Portfolio-Generator',
    //demoLink: '#',
  },
  {
    name: 'UltraClean.com',
    desc: 'A streamlined e-shop offering a wide variety of products, providing users with an easy and efficient online shopping experience.',
    url: '/projects/ultraClean.png',
    tech: ['C#', 'HTML', 'CSS', "Bootstrap"],
    //gitLink: 'https://github.com/marianolongoort/NT1-2024-1C-C-G3',
    //demoLink: '#',
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

// Pricing Plans
export const pricingPlans = [
  {
    title: 'Basic',
    pricing: '$500 - $1,000',
    features: [
      'Up to 5 pages',
      'Responsive design ',
      'Basic SEO ',
      'Contact form',
      'Social media links',
      '1 month support',
    ],
    recommended: 'Small businesses, personal websites, bloggers',
  },
  {
    title: 'Premium',
    pricing: '$5,000 - $10,000',
    features: [
      'Unlimited pages',
      'Responsive design',
      'Comprehensive SEO',
      'Contact form ',
      'Social media links',
      'Advanced security',
      'E-commerce (unlimited products)',
      'Blog setup',
      'Google Analytics with custom reports',
      '6 months support',
    ],
    recommended: 'Medium-sized businesses, online stores, service providers',
  },
  {
    title: 'Standard',
    pricing: '$1,500 - $3,000',
    features: [
      'Up to 10 pages',
      'Responsive design',
      'Advanced SEO',
      'CContact form',
      'Social media links',
      'E-commerce (20 products)',
      'Blog setup',
      'Google Analytics',
      '3 months support',
    ],
    recommended: 'Large businesses, complex e-commerce sites, custom web applications',
  },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
  {
    question: 'How much do you charge for a website?',
    answer:
      'Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.',
  },
  {
    question: 'Why are you so expensive?',
    answer:
      'he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.',
  },
  {
    question: 'How do we communicate throughout the website build?',
    answer:
      'Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.',
  },
  {
    question: 'What will you need from me?',
    answer:
      'It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…',
  },
  {
    question: 'What if I don’t like the website?',
    answer:
      'You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.',
  },
  {
    question: 'Do you offer a payment schedule?',
    answer:
      'Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.',
  },
  {
    question: 'Can I make the final payment when the site is ready to go live?',
    answer:
      'No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.',
  },
  {
    question: 'Who hosts the website?',
    answer:
      'If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.',
  },
  {
    question: 'Can I update the website myself once it’s been built?',
    answer:
      'Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.',
  },
  {
    question: 'What if I don’t want to manage the website at all. Can you do it all for me?',
    answer:
      'Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.',
  },
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

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

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
