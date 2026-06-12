//ESPAÑO & ENGLISH LOS PROYECTOS ESTAN AL FINAL LO DEMAS NO SE TOCA 

export const translations = {
    es: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        cv: "CV",
        downloadCv: "Descargar CV",
      },
      //INICIO//
      hero: {
        badge: "React • TypeScript • FastAPI • Machine Learning",
        greeting: "Hola, soy",
        subtitle: "Desarrolladora de Software | Frontend & Backend",
        description:
          "Me especializo en crear experiencias digitales rápidas, accesibles y escalables. Cada proyecto es una oportunidad de escribir código que marque la diferencia.",
        projectsButton: "Ver mis proyectos",
        contactButton: "Contáctame",
        explore: "Explorar",
        imageAlt: "Allison More - Desarrolladora Full Stack",
      },
      //SOBRE MI//
      about: {
        title: "Sobre",
        titleHighlight: "mí",
      
        subtitle:
          "Desarrolladora enfocada en crear soluciones web modernas, rápidas y escalables.",
      
        paragraph1:
          "Soy desarrolladora Full Stack con interés en crear aplicaciones útiles y bien diseñadas.",
      
        paragraph2:
          "Disfruto aprender nuevas tecnologías y transformar ideas en productos funcionales que resuelvan problemas reales.",
      
        quote:
          "El buen software no solo funciona, también es fácil de mantener.",
      
        highlights: [
          "Desarrollo de aplicaciones web con React y TypeScript",
          "Construcción de APIs con Node.js y FastAPI",
          "Interés en Machine Learning y automatización",
          "Buenas prácticas y código limpio",
        ],
      
        stats: {
          projects: "Proyectos completados",
          learning: "Años aprendiendo desarrollo",
          repositories: "Repositorios públicos",
          hours: "Horas de código",
        },
      },
      //HABILIDADES//
      skills: {
        title: "Mis",
        titleHighlight: "Habilidades",
        description:
          "Tecnologías que utilizo para construir aplicaciones modernas.",
        mainStack: "Stack principal",
        technologies: "Tecnologías que uso",
        exploring: "Explorando",
        showMore: "Ver más",
        showLess: "Ver menos",
      },
      //CONTACTOS//
      contact: {
        title: "¿",
        titleHighlight: "Hablamos",
        titleEnd: "?",
      
        description:
          "Disponible para proyectos freelance, colaboraciones o oportunidades como desarrolladora Full-Stack.",
      
        available: "Disponible para trabajar",
      
        cv: "Descargar CV",
      
        email: "Email",
        whatsapp: "WhatsApp",
        resume: "Currículum",
        profile: "Perfil",
      
        country: "Perú",
      
        remote: "Trabajo remoto disponible",
      },
      //FOOTER//
      footer: {
        rights: "Todos los derechos reservados.",
        madeWith: "Hecho con",
        tooMuchCoffee: "y demasiado café",
      },
      //PROYECTOS//
      projects: {
        title: "Mis",
        titleHighlight: "Proyectos",
      
        description:
          "Proyectos desarrollados aplicando arquitecturas modernas, bases de datos, APIs, automatización de procesos y diseño de experiencias web enfocadas en resolver problemas reales.",
      
        featured: "Proyecto destacado",
        challenge: "Desafío técnico",
        result: "Resultado",
        code: "Código",
        demo: "Demo",
      
        items: [
          {
            imageKey: "onpe",
            featured: true,
      
            title: "Sistema de Gestión Electoral ONPE",
      
            description:
              "Plataforma web para la administración de procesos electorales, gestión de padrón electoral, usuarios, auditoría y estadísticas en tiempo real.",
      
            challenge:
              "Diseñar una arquitectura segura y escalable utilizando Supabase, Edge Functions y control de acceso basado en roles para garantizar la integridad de la información electoral.",
      
            result:
              "Se implementó un sistema centralizado capaz de gestionar procesos electorales completos con trazabilidad, auditoría y generación de reportes administrativos.",
      
            tech: [
              "React",
              "TypeScript",
              "Tailwind",
              "Supabase",
              "Edge Functions",
              "PostgreSQL",
            ],
      
            github: "https://github.com/CodeWithAlli/onpe-votaciones",
            demo: "https://onpe-votaciones.vercel.app/votar",
          },
      
          {
            imageKey: "auraSpa",
            featured: true,
      
            title: "Aura Spa – Santuario de Bienestar",
      
            description:
              "Sitio web para un spa de lujo en Lima, con presentación de servicios de bienestar, tratamientos faciales, masajes y reservas.",
      
            challenge:
              "Transmitir una estética sofisticada y relajante que refleje la identidad premium del spa y genere confianza en el usuario.",
      
            result:
              "Se logró una experiencia visual elegante con paleta natural y navegación fluida que invita al usuario a explorar los servicios.",
      
            tech: [
              "React",
              "Tailwind",
              "TypeScript",
              "Vercel",
            ],
      
            github: "https://github.com/CodeWithAlli",
            demo: "https://aura-spa-frontend.vercel.app/",
          },
      
          {
            imageKey: "abogados",
            featured: true,
      
            title: "Página Web para Staff de Abogados",
      
            description:
              "Sitio web profesional para un estudio jurídico con presentación de servicios, equipo legal y contacto.",
      
            challenge:
              "Diseñar una interfaz clara y profesional que transmitiera confianza y facilitara el acceso a la información legal.",
      
            result:
              "Se logró una navegación simple y una presentación clara de los servicios legales, mejorando la experiencia del usuario.",
      
            tech: [
              "React",
              "Tailwind",
              "JavaScript",
            ],
      
            github:
              "https://github.com/CodeWithAlli/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS",
      
            demo:
              "https://codewithalli.github.io/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS/",
          },
      
          {
            imageKey: "tareas",
            featured: false,
      
            title: "Gestor de Tareas",
      
            description:
              "Aplicación tipo Kanban para organizar tareas mediante tableros interactivos con funcionalidad drag & drop.",
      
            challenge:
              "Optimizar el rendimiento del sistema de arrastrar y soltar cuando existen muchas tareas en pantalla.",
      
            result:
              "Se implementó una interfaz fluida que permite gestionar tareas de forma visual y rápida.",
      
            tech: [
              "React",
              "Firebase",
              "TypeScript",
              "DnD Kit",
            ],
      
            github: "https://github.com/CodeWithAlli",
            demo: "http://autoland.infinityfreeapp.com/login.php",
          },
      
          {
            imageKey: "dashboard",
            featured: false,
      
            title: "Dashboard de Analytics",
      
            description:
              "Panel de análisis de datos con gráficos interactivos y reportes dinámicos.",
      
            challenge:
              "Visualizar grandes volúmenes de datos manteniendo una interfaz rápida y clara.",
      
            result:
              "Se logró un panel que permite analizar datos de forma visual y tomar decisiones rápidamente.",
      
            tech: [
              "React",
              "Chart.js",
              "Python",
              "FastAPI",
              "PostgreSQL",
            ],
      
            github: "https://github.com/CodeWithAlli",
            demo: "#",
          },
        ],
      },
    },
  






  //----------ENGLISH----------//
    en: {
      nav: {
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        cv: "Resume",
        downloadCv: "Download Resume",
      },
      //INICIO//
      hero: {
        badge: "React • TypeScript • FastAPI • Machine Learning",
        greeting: "Hi, I'm",
        subtitle: "Software Developer | Frontend & Backend",
        description:
          "I specialize in building fast, accessible, and scalable digital experiences. Every project is an opportunity to write code that makes a difference.",
        projectsButton: "View My Projects",
        contactButton: "Contact Me",
        explore: "Explore",
        imageAlt: "Allison More - Full Stack Developer",
      },
      //SOBRE MI//
      about: {
        title: "About",
        titleHighlight: "Me",
      
        subtitle:
          "Developer focused on building modern, fast and scalable web solutions.",
      
        paragraph1:
          "I am a Full Stack developer passionate about creating useful and well-designed applications.",
      
        paragraph2:
          "I enjoy learning new technologies and transforming ideas into functional products that solve real-world problems.",
      
        quote:
          "Good software doesn't just work, it's also easy to maintain.",
      
        highlights: [
          "Web application development with React and TypeScript",
          "API development with Node.js and FastAPI",
          "Interest in Machine Learning and automation",
          "Clean code and best practices",
        ],
      
        stats: {
          projects: "Completed Projects",
          learning: "Years Learning Development",
          repositories: "Public Repositories",
          hours: "Hours of Coding",
        },
      },
      //HABILIDADES//
      skills: {
        title: "My",
        titleHighlight: "Skills", 
        description:
          "Technologies I use to build modern applications.",
        mainStack: "Main Stack",
        technologies: "Technologies I Use",
        exploring: "Currently Exploring", 
        showMore: "Show More",
        showLess: "Show Less",
      },
      //CONTACTOS//
      contact: {
        title: "",
        titleHighlight: "Let's Talk",
        titleEnd: "",
      
        description:
          "Available for freelance projects, collaborations, and Full-Stack developer opportunities.",
      
        available: "Available for Work",
      
        cv: "Download Resume",
      
        email: "Email",
        whatsapp: "WhatsApp",
        resume: "Resume",
        profile: "Profile",
      
        country: "Peru",
      
        remote: "Remote Work Available",
      },
      //FOOTER//
      footer: {
        rights: "All rights reserved.",
        madeWith: "Made with",
        tooMuchCoffee: "and too much coffee",
      },
      //PROYECTOS//
      projects: {
        title: "My",
        titleHighlight: "Projects",
      
        description:
          "Projects built using modern architectures, databases, APIs, process automation, and web experiences focused on solving real-world problems.",
      
        featured: "Featured Project",
        challenge: "Technical Challenge",
        result: "Result",
        code: "Code",
        demo: "Live Demo",
      
        items: [
          {
            imageKey: "onpe",
            featured: true,
      
            title: "ONPE Electoral Management System",
      
            description:
              "Web platform for managing electoral processes, voter registry administration, users, auditing, and real-time statistics.",
      
            challenge:
              "Design a secure and scalable architecture using Supabase, Edge Functions, and role-based access control to ensure electoral data integrity.",
      
            result:
              "A centralized system capable of managing complete electoral processes with traceability, auditing, and administrative reporting was implemented.",
      
            tech: [
              "React",
              "TypeScript",
              "Tailwind",
              "Supabase",
              "Edge Functions",
              "PostgreSQL",
            ],
      
            github: "https://github.com/CodeWithAlli/onpe-votaciones",
            demo: "https://onpe-votaciones.vercel.app/votar",
          },
      
          {
            imageKey: "auraSpa",
            featured: true,
      
            title: "Aura Spa – Wellness Sanctuary",
      
            description:
              "Luxury spa website featuring wellness services, facial treatments, massages, and reservations.",
      
            challenge:
              "Create a sophisticated and relaxing visual identity that reflects the spa's premium brand and builds user trust.",
      
            result:
              "An elegant user experience was achieved through a natural color palette and smooth navigation that encourages service exploration.",
      
            tech: [
              "React",
              "Tailwind",
              "TypeScript",
              "Vercel",
            ],
      
            github: "https://github.com/CodeWithAlli",
            demo: "https://aura-spa-frontend.vercel.app/",
          },
      
          {
            imageKey: "abogados",
            featured: true,
      
            title: "Law Firm Website",
      
            description:
              "Professional website for a law firm showcasing services, legal team members, and contact information.",
      
            challenge:
              "Design a professional and trustworthy interface that makes legal information easily accessible.",
      
            result:
              "A simple navigation structure and clear presentation of legal services improved the overall user experience.",
      
            tech: [
              "React",
              "Tailwind",
              "JavaScript",
            ],
      
            github:
              "https://github.com/CodeWithAlli/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS",
      
            demo:
              "https://codewithalli.github.io/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS/",
          },
      
          {
            imageKey: "tareas",
            featured: false,
      
            title: "Task Manager",
      
            description:
              "Kanban-style application for organizing tasks through interactive drag-and-drop boards.",
      
            challenge:
              "Optimize drag-and-drop performance when handling large numbers of tasks.",
      
            result:
              "A smooth and responsive interface was implemented for efficient visual task management.",
      
            tech: [
              "React",
              "Firebase",
              "TypeScript",
              "DnD Kit",
            ],
      
            github: "https://github.com/CodeWithAlli",
            demo: "http://autoland.infinityfreeapp.com/login.php",
          },
      
          {
            imageKey: "dashboard",
            featured: false,
      
            title: "Analytics Dashboard",
      
            description:
              "Data analytics dashboard featuring interactive charts and dynamic reports.",
      
            challenge:
              "Visualize large datasets while maintaining speed and usability.",
      
            result:
              "A dashboard was built that enables visual analysis and faster decision-making.",
      
            tech: [
              "React",
              "Chart.js",
              "Python",
              "FastAPI",
              "PostgreSQL",
            ],
      
            github: "https://github.com/CodeWithAlli",
            demo: "#",
          },
        ],
      },
    },


  };//LLAVE DE CIERRE 