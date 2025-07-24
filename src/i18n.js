import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
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
            {
              year: 2025,
              title: 'Systems Analysis',
              education: 'Analista de Sistemas - ORT (2023 - 2025)',
              experience: [
                'Advanced knowledge of systems analysis fundamentals, including process modeling, requirements gathering and documentation, and designing goal-oriented solutions.',
                'Practical application of programming techniques, problem-solving, and process optimization in academic projects and real-world simulations.',
                'Consolidation of knowledge in Agile methodologies (Scrum, Kanban) and software development best practices, fostering collaboration and product quality.',
                'Development of competencies in relational databases (modeling, complex queries, and optimization), integrating these concepts into the project lifecycle.',
                'Implementation of software design principles and architectural patterns, enhancing the ability to build scalable and maintainable solutions.',
                'Strengthened soft skills: teamwork, effective communication with stakeholders, and time management in academic and collaborative environments.',
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
              name: 'Mitos y Leyendas App',
              desc: 'A mobile app for Mitos y Leyendas card game enthusiasts. It allows users to register and log in, explore a full card encyclopedia with advanced search and filters, view detailed card information, and build and manage their own decks. It also includes a rules guide and a section to find registered stores.',
              type: 'mobile',
              url: ['/projects/myl/myl1.jpeg', '/projects/myl/myl2.jpeg', '/projects/myl/myl3.jpeg', '/projects/myl/myl4.jpeg', '/projects/myl/myl5.jpeg', '/projects/myl/myl6.jpeg', '/projects/myl/myl7.jpeg', '/projects/myl/myl8.jpeg', '/projects/myl/myl9.jpeg', '/projects/myl/myl10.jpeg', '/projects/myl/myl11.jpeg', '/projects/myl/myl12.jpeg', '/projects/myl/myl13.jpeg', '/projects/myl/myl14.jpeg', '/projects/myl/myl15.jpeg'],
              tech: ['Kotlin', 'Jetpack Compose', 'Java', 'SQL'],
              gitLink: 'https://github.com/tuUsuario/MitosYleyendasApp',
              download: { apk: 'appsDownload/MitosYLeyendas.apk', name: 'Download' },
            },
            {
              name: 'LPFA Data',
              desc: 'A website that displays the statistics of all players from the 2024 Betano Tournament. It includes a search bar and combinable filters (team, position, goals, assists, etc.), making it ideal for analyzing performance and building fantasy teams. Intuitive design and optimized for all devices.',
              type: 'web',
              url: ['/projects/lpfa_data/LPFAData.png'],
              tech: ['Spring Boot', 'HTML', 'TailwindCSS', "JavaScript", 'React', 'SQL'],
              gitLink: 'https://github.com/IgnacioTobiasGarciaGodoy/LPFA_Data',
              demoLink: 'https://lpfadata.netlify.app/',
            },
            {
              name: 'Portfolio Generator',
              desc: 'A website that allows users to create their own personalized portfolio. Upon registration, they can add and organize sections such as projects, experience, education, and more through an intuitive interface. Perfect for showcasing achievements and skills professionally.',
              type: 'web',
              url: ['/projects/portfolio_generator/portfolioGenerator.png'],
              tech: ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'React', 'NextJS', 'MongoDB'],
              gitLink: 'https://github.com/EugenYepes/Portfolio-Generator',
            },
            {
              name: 'UltraClean',
              desc: 'A streamlined e-shop offering a wide variety of products, providing users with an easy and efficient online shopping experience.',
              type: 'web',
              url: ['/projects/ultraclean/ultraClean.png'],
              tech: ['C#', 'HTML', 'CSS', "Bootstrap", 'SQL'],
            },
            {
              name: 'PetCare App',
              desc: 'A demo mobile app focused on pet care management. It allows users to register their pets, set reminders for vet appointments, vaccinations, and feeding schedules. It also includes a mock integrated store to browse and simulate the purchase of pet food and supplies. (Design demo, not fully functional)',
              type: 'mobile',
              url: ['/projects/petapp/pets1.png', '/projects/petapp/pets2.png', '/projects/petapp/pets3.png', '/projects/petapp/pets4.png', '/projects/petapp/pets5.png', '/projects/petapp/pets6.png'],
              tech: ['Kotlin', 'Jetpack Compose'],
              gitLink: 'https://github.com/tuUsuario/PetCareApp',
              download: { apk: 'appsDownload/petapp.apk', name: 'Descargar' },
            },
            {
              name: 'Figma Design',
              desc: 'A collection of design projects created using Figma, showcasing UI/UX skills and design principles.',
              type: 'web',
              url: ['/projects/figma/figma1.jpeg', '/projects/figma/figma2.jpeg', '/projects/figma/figma3.jpeg', '/projects/figma/figma4.jpeg', '/projects/figma/figma5.jpeg', '/projects/figma/figma6.jpeg'],
              tech: ['Figma'],
              figmaLink: [
                { link: 'https://www.figma.com/design/l72xq82BTv3n9TARoKBaqe/Mitos-y-Leyendas-Companion?node-id=1-3170&p=f&t=MESljlJl8CLupuUK-0', name: 'Mitos y Leyendas' },
                { link: 'https://www.figma.com/design/RE4ddiIZ5Mv4ZHG2zhp1fw/F1-Project?node-id=0-1&p=f&t=wYwabxvyNQPHk6Cj-0', name: 'F1 APP' },
              ],
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
            {
              year: 2025,
              title: 'Análisista de Sistemas',
              education: 'Analista de Sistemas - ORT (2023 - 2025)',
              experience: [
                'Dominio avanzado de los fundamentos del análisis de sistemas, incluyendo el modelado de procesos, levantamiento y documentación de requerimientos, y diseño de soluciones orientadas a objetivos.',
                'Aplicación práctica de técnicas de programación, resolución de problemas y optimización de procesos en proyectos académicos y simulaciones de entornos reales.',
                'Consolidación de conocimientos en metodologías ágiles (Scrum, Kanban) y buenas prácticas de desarrollo de software, fomentando la colaboración y la calidad del producto final.',
                'Desarrollo de competencias en bases de datos relacionales (modelado, consultas complejas y optimización), integrando los conceptos en el ciclo de vida de los proyectos.',
                'Implementación de principios de diseño de software y patrones de arquitectura, fortaleciendo la capacidad de construir soluciones escalables y mantenibles.',
                'Fortalecimiento de habilidades blandas clave: trabajo en equipo, comunicación efectiva con stakeholders y gestión del tiempo en entornos académicos y colaborativos.',
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
              name: 'Mitos y Leyendas',
              type: 'mobile',
              desc: 'Una aplicación móvil para fanáticos del juego de cartas Mitos y Leyendas. Permite a los usuarios registrarse e iniciar sesión, explorar una enciclopedia completa de cartas con búsqueda avanzada y filtros, ver información detallada de cada carta y crear y administrar sus propios mazos. También incluye una guía de reglas y una sección para encontrar tiendas registradas.',
              url: ['/projects/myl/myl1.jpeg', '/projects/myl/myl2.jpeg', '/projects/myl/myl3.jpeg', '/projects/myl/myl4.jpeg', '/projects/myl/myl5.jpeg', '/projects/myl/myl6.jpeg', '/projects/myl/myl7.jpeg', '/projects/myl/myl8.jpeg', '/projects/myl/myl9.jpeg', '/projects/myl/myl10.jpeg', '/projects/myl/myl11.jpeg', '/projects/myl/myl12.jpeg', '/projects/myl/myl13.jpeg', '/projects/myl/myl14.jpeg', '/projects/myl/myl15.jpeg'],
              tech: ['Kotlin', 'Jetpack Compose', 'Java', 'Spring Boot', 'Firebase', 'Room', 'PostgreSQL'],
              gitLink: 'https://github.com/tuUsuario/MitosYleyendasApp',
              download: { apk: 'appsDownload/MitosYLeyendas.apk', name: 'Descargar' },
            },
            {
              name: 'LPFA Data',
              desc: 'Página web que muestra las estadísticas de todos los jugadores del Torneo Betano 2024. Incluye una barra de búsqueda y filtros combinables (equipo, posición, goles, asistencias, etc.), ideal para analizar el rendimiento y armar equipos de fantasy. Diseño intuitivo y optimizado para todo tipo de dispositivos.',
              type: 'web',
              url: ['/projects/lpfa_data/LPFAData.png'],
              tech: ['Spring Boot', 'HTML', 'TailwindCSS', "JavaScript", 'React'],
              gitLink: 'https://github.com/IgnacioTobiasGarciaGodoy/LPFA_Data',
              demoLink: 'https://lpfadata.netlify.app/',
            },
            {
              name: 'PortfolioGenerator.com',
              desc: 'Página web que permite a los usuarios crear su propio portafolio personalizado. Al registrarse, pueden agregar y organizar secciones como proyectos, experiencia, educación y más, mediante una interfaz intuitiva. Ideal para destacar logros y habilidades de forma profesional.',
              type: 'web',
              url: ['/projects/portfolio_generator/portfolioGenerator.png'],
              tech: ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'React', 'NextJS'],
              gitLink: 'https://github.com/EugenYepes/Portfolio-Generator',
            },
            {
              name: 'UltraClean.com',
              type: 'web',
              desc: 'Una tienda online eficiente que ofrece una amplia variedad de productos, brindando a los usuarios una experiencia de compra fácil y eficiente.',
              url: ['/projects/ultraclean/ultraClean.png'],
              tech: ['C#', 'HTML', 'CSS', "Bootstrap"],
            },
            {
              name: 'App de Cuidado de Mascotas',
              desc: 'Una aplicación móvil de demostración enfocada en la gestión del cuidado de mascotas. Permite a los usuarios registrar a sus mascotas, establecer recordatorios para citas veterinarias, vacunaciones y horarios de alimentación. También incluye una tienda simulada para explorar y simular la compra de alimentos y suministros para mascotas. (Demo de diseño, no completamente funcional)',
              type: 'mobile',
              url: ['/projects/petapp/pets1.png', '/projects/petapp/pets2.png', '/projects/petapp/pets3.png', '/projects/petapp/pets4.png', '/projects/petapp/pets5.png', '/projects/petapp/pets6.png'],
              tech: ['Kotlin', 'Jetpack Compose', 'Java', 'Spring Boot', 'Firebase', 'PostgreSQL'],
              gitLink: 'https://github.com/tuUsuario/PetCareApp',
              download: { apk: 'appsDownload/petapp.apk', name: 'Descargar' },
            },
            {
              name: 'Diseños en Figma',
              desc: 'Una colección de proyectos de diseño creados con Figma, mostrando habilidades en UI/UX y principios de diseño.',
              type: 'web',
              url: ['/projects/figma/figma1.jpeg', '/projects/figma/figma2.jpeg', '/projects/figma/figma3.jpeg', '/projects/figma/figma4.jpeg', '/projects/figma/figma5.jpeg', '/projects/figma/figma6.jpeg'],
              tech: ['Figma'],
              figmaLink: [
                { link: 'https://www.figma.com/design/l72xq82BTv3n9TARoKBaqe/Mitos-y-Leyendas-Companion?node-id=1-3170&p=f&t=MESljlJl8CLupuUK-0', name: 'Mitos y Leyendas' },
                { link: 'https://www.figma.com/design/RE4ddiIZ5Mv4ZHG2zhp1fw/F1-Project?node-id=1-8&p=f&t=MESljlJl8CLupuUK-0', name: 'F1 APP' },
              ],
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
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
