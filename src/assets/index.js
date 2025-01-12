import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon';
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'
import CheckLineIcon from 'remixicon-react/CheckLineIcon'
import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'
import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'

export const heroIcons = [
  { icon: <LinkedinLineIcon />, url: "https://www.linkedin.com/in/ignacio-garcia-godoy/" },
  { icon: <GithubLineIcon />, url: "https://github.com/IgnacioTobiasGarciaGodoy" }
];

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />
export const checkIcon = <CheckLineIcon />
export const questionArrow = <ArrowDropDownLineIcon />
export const copyRightIcon = <CopyrightLineIcon />
export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />

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

export const projectsButton = [
  'All',
  'HTML',
  'CSS',
  'Spring Boot',
  'JavaScript',
  'React',
  'TailwindCSS',
  'NextJS',
  'Bootstrap',
  'C#',
]

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

export const navbarData = [
  {
    id: 'home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'contact',
    icon: <ContactsBook2LineIcon />,
  },
]
