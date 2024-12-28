import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources: {
      //! English
      en: {
        translation: {
          heroPresentation: "Hi! My Name is Ignacio García Godoy &",
          heroTitle: "I'm a System Analyst and a Developer 🖥️",
          heroButton: "Contact Me",

          aboutTitle: "About Me",
          aboutText: " Hi! I'm Ignacio García Godoy, and I am currently in the last semester of the Systems Analyst at ORT. During my studies, I have had the opportunity to work with various tools and languages such as Java, HTML, CSS, .NET, SQL, among others. This variety of knowledge has allowed me to develop a solid and versatile foundation in programming and software development. I consider myself a dedicated and committed individual, both academically and professionally.",
          aboutButton: "Download CV",

          experienceTitle: "Experience & Education",
          experienceData: [
            {
              year: 2017,
              title: 'High School Education',
              education: 'Bachelor in Environmental Analysis and Food Technology - Instituto Secundario León XIII (2013 - 2017).',
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
              education: 'Analista de Sistemas - ORT (2023 - Present): In progress, technical degree with an intermediate title as Analista Programador.',
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
          ],

          skillsTitle: "Skills",
          skillsText: "Programming languages and tools that I have used and am actively learning and improving",

          projectsTitle: "Projects",
          viewCode: " View Code",
          viewProject: "View Demo",
          projectsData: [
            {
              name: 'PortfolioGenerator.com',
              desc: 'A user-friendly platform where registered users can easily create and customize personal portfolios with a simple drag-and-drop interface.',
              url: '/projects/portfolioGenerator.png',
              tech: ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'ReactJS', 'NextJS'],
              gitLink: 'https://github.com/EugenYepes/Portfolio-Generator',
            },
            {
              name: 'UltraClean.com',
              desc: 'A streamlined e-shop offering a wide variety of products, providing users with an easy and efficient online shopping experience.',
              url: '/projects/ultraClean.png',
              tech: ['C#', 'HTML', 'CSS', "Bootstrap"],
            },
          ],
          
          contactTitle: "Get in touch",
          placeholderName: "Your Name",
          placeholderEmail: "Your Email",
          placeholderSubject: "Subject",
          placeholderMessage: "Write Me...",
          contactButton: "Send Message",

          navbar: {
            home: "Home",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
          }
        }
      },

      //! Español
      es: {
        translation: {
          heroPresentation: "Hola! Mi nombre es Ignacio García Godoy &",
          heroTitle: "Soy Analista de Sistemas y Desarrollador 🖥️",
          heroButton: "Contáctame",

          aboutTitle: "Sobre mí",
          aboutText: "¡Hola! Soy Ignacio García Godoy, y actualmente me encuentro en el último semestre de la carrera de Analista de Sistemas en la ORT. Durante mis estudios, he tenido la oportunidad de trabajar con diversas herramientas y lenguajes como Java, HTML, CSS, .NET, SQL, entre otros. Esta variedad de conocimientos me ha permitido desarrollar una base sólida y versátil en programación y desarrollo de software. Me considero una persona dedicada y comprometida, tanto académica como profesionalmente.",
          aboutButton: "Descargar CV",

          experienceTitle: "Experiencia y Educación",
          experienceData: [
            {
              year: 2017,
              title: 'Educación Secundaria',
              education: 'Bachiller en Análisis Ambiental y Tecnología de los Alimentos - Instituto Secundario León XIII (2013 - 2017).',
              experience: [
                'Finalización de la educación secundaria con énfasis en análisis ambiental y tecnología de los alimentos.',
                'Desarrollo de habilidades blandas: trabajo en equipo, resolución de problemas y comunicación.',
              ],
            },
            {
              year: 2018,
              title: 'Ingreso al Mundo Laboral',
              education: 'No se realizó educación formal en este período.',
              experience: [
                'Administración de edificios en "Administración Murga" (2018 - Presente): Inicio de labores con responsabilidades como atención a consultas y reclamos de clientes por teléfono, correo electrónico o en persona.',
                'Aprendí a hacer el seguimiento de pagos, actualizar registros de cuentas y gestionar saldos pendientes.',
                'Desarrollé habilidades para resolver conflictos y problemas de manera eficiente para los clientes.',
              ],
            },
            {
              year: 2020,
              title: 'Desarrollo de Habilidades Técnicas',
              education: 'Curso Java Inicial - Educación IT (2022): Introducción a los fundamentos de programación en Java.',
              experience: [
                'Adquisición de conocimientos fundamentales sobre sintaxis de Java, programación orientada a objetos y algoritmos básicos.',
                'Aplicación de nuevos conocimientos en pequeños proyectos personales o ejercicios.',
              ],
            },
            {
              year: 2023,
              title: 'Educación Superior en Análisis de Sistemas',
              education: 'Analista de Sistemas - ORT (2023 - Presente): En curso, carrera técnica con título intermedio como Analista Programador.',
              experience: [
                'Comprensión avanzada de los fundamentos del análisis de sistemas y programación.',
                'Aplicación de técnicas de programación y resolución de problemas en proyectos académicos.',
                'Desarrollo de conocimientos sobre metodologías y prácticas en el desarrollo de software.',
              ],
            },
            {
              year: 2024,
              title: 'Habilidades en Gestión de Proyectos',
              education: 'Curso Gestión de Proyectos y Fundamentos de Metodología Agile - Banco Santander Río (2024): Comprensión de los principios Agile y marcos de gestión de proyectos.',
              experience: [
                'Aprendí metodologías Agile, incluyendo roles, eventos y artefactos de Scrum.',
                'Adquirí conocimientos sobre cómo gestionar y ejecutar proyectos de manera eficiente utilizando flujos de trabajo Agile.',
              ],
            },
            {
              year: 2024,
              title: 'Liderazgo Administrativo',
              education: 'Aprendizaje continuo y desarrollo profesional.',
              experience: [
                'Responsabilidades continuas en MURGA con liderazgo expandido en la gestión de relaciones con clientes, resolución de problemas de alta prioridad y cumplimiento financiero.',
                'Optimización de procesos para la generación y entrega de facturas y recibos de pago.',
                'Desarrollo de la capacidad para equilibrar tareas administrativas con excelencia en atención al cliente.',
              ],
            },
            {
              year: 2024,
              title: 'Desarrollo Web Freelance',
              education: 'Mejoras autodidactas en desarrollo web junto con experiencia en proyectos.',
              experience: [
                'Realicé mantenimiento y actualizaciones en el sitio web de un negocio local como desarrollador freelance.',
                'Corregí errores en HTML y CSS para mejorar la presentación y funcionalidad del sitio.',
                'Optimizé el rendimiento del sitio web reduciendo los tamaños de archivos CSS y JavaScript, mejorando la velocidad de carga.',
                'Agregué interactividad usando JavaScript, incluyendo validación de formularios y mejoras en la navegación.',
                'Implementé cambios de diseño basados en solicitudes del cliente para satisfacer mejor las necesidades del negocio.',
              ],
            },
          ],

          skillsTitle: "Habilidades",
          skillsText: "Lenguajes de programación y herramientas que he utilizado y que estoy aprendiendo y mejorando activamente",

          projectsTitle: "Mis Proyectos",
          viewCode: "Ver Código",
          viewDemo: "Ver Demo",
          projectsData: [
            {
              name: 'PortfolioGenerator.com',
              desc: 'Una plataforma fácil de usar donde los usuarios registrados pueden crear y personalizar portafolios personales con una sencilla interfaz de arrastrar y soltar.',
              url: '/projects/portfolioGenerator.png',
              tech: ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'ReactJS', 'NextJS'],
              gitLink: 'https://github.com/EugenYepes/Portfolio-Generator',
            },
            {
              name: 'UltraClean.com',
              desc: 'Una tienda online eficiente que ofrece una amplia variedad de productos, brindando a los usuarios una experiencia de compra fácil y eficiente.',
              url: '/projects/ultraClean.png',
              tech: ['C#', 'HTML', 'CSS', "Bootstrap"],
            },
          ],

          contactTitle: "Ponerse en contacto", 
          placeholderName: "Tu Nombre", 
          placeholderEmail: "Tu Correo Electrónico", 
          placeholderSubject: "Asunto", 
          placeholderMessage: "Escríbeme...",
          contactButton: "Enviar Mensaje",

          navbar: {
            home: "Inicio",
            about: "SobreMí",
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto",
          }
        }
      }
    },
    lng: "en", // Lenguaje por defecto
    fallbackLng: "en", // Lenguaje de reserva si no se encuentra el idioma seleccionado
    interpolation: {
      escapeValue: false // React ya escapa valores por defecto
    }
  });

export default i18n;
