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
      badge: "Android (Java) • React • TypeScript • Python (Flask) • Supabase",
      greeting: "Hola, soy",
      subtitle: "Desarrolladora de Software & Aplicaciones Móviles",
      description:
        "Especializada en crear aplicaciones móviles nativas en Android Studio con Java y soluciones web modernas y escalables con React, Python y Supabase. Apasionada por convertir ideas en productos funcionales con Inteligencia Artificial.",
      projectsButton: "Ver mis proyectos",
      contactButton: "Contáctame",
      explore: "Explorar",
      imageAlt: "Allison More - Desarrolladora de Software & Móvil",
    },
    //SOBRE MI//
    about: {
      title: "Sobre",
      titleHighlight: "mí",

      subtitle:
        "Estudiante de Ingeniería de Software con IA en SENATI, enfocada en desarrollo móvil nativo y soluciones web con arquitectura cloud.",

      paragraph1:
        "Soy desarrolladora Full Stack y Móvil. Me enfoco en construir aplicaciones nativas para Android usando Java y herramientas modernas como Cursor para agilizar el desarrollo de software.",

      paragraph2:
        "Disfruto integrar bases de datos en la nube como Supabase y backend en Flask/Python, desplegando proyectos listos para producción en plataformas como Vercel y Render.",

      quote:
        "El código limpio y una buena arquitectura convierten cualquier idea compleja en una herramienta accesible.",

      highlights: [
        "Desarrollo de aplicaciones móviles nativas en Android Studio (Java)",
        "Creación de interfaces web interactivas con React, TypeScript y Tailwind",
        "Desarrollo Backend con Flask (Python) y Supabase / PostgreSQL",
        "Integración de soluciones con Inteligencia Artificial y Machine Learning",
      ],

      stats: {
        projects: "Proyectos completados",
        learning: "Semestres en SENATI",
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
        "Proyectos desarrollados aplicando arquitecturas modernas, bases de datos, APIs, automatización de procesos y desarrollo móvil.",

      featured: "Proyecto destacado",
      challenge: "Desafío técnico",
      result: "Resultado",
      code: "Código",
      demo: "Panel Web",
      apk: "Descargar APK",

      categories: {
        web: "Páginas & Apps Web",
        android: "Proyectos Android (Java)",
      },

      webProjects: [
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
          tech: ["React", "Tailwind", "TypeScript", "Vercel"],
          github: "https://github.com/CodeWithAlli",
          demo: "https://aura-spa-frontend.vercel.app/",
        },
        {
          imageKey: "abogados",
          featured: false,
          title: "Página Web para Staff de Abogados",
          description:
            "Sitio web profesional para un estudio jurídico con presentación de servicios, equipo legal y contacto.",
          challenge:
            "Diseñar una interfaz clara y profesional que transmitiera confianza y facilitara el acceso a la información legal.",
          result:
            "Se logró una navegación simple y una presentación clara de los servicios legales, mejorando la experiencia del usuario.",
          tech: ["React", "Tailwind", "JavaScript"],
          github:
            "https://github.com/CodeWithAlli/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS",
          demo:
            "https://codewithalli.github.io/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS/",
        },
        {
          imageKey: "autoland",
          featured: false,
          title: "AUTOLAND — Gestión de Concesionaria",
          description:
            "Panel administrativo interno para una concesionaria de autos, con control de inventario, clientes y seguimiento de negociaciones de venta mediante un tablero por estados.",
          challenge:
            "Migrar un sistema heredado en PHP/MySQL a una arquitectura moderna con React y Supabase, manteniendo la seguridad por roles (admin/vendedor) y evitando la sobreventa de unidades en el inventario.",
          result:
            "Sistema funcional con autenticación por roles, seguridad a nivel de fila (RLS), tablero de negociaciones tipo Kanban y sincronización automática del estado del inventario según las ventas concretadas.",
          tech: ["React", "Supabase", "PostgreSQL", "Vite"],
          github: "https://github.com/CodeWithAlli/Autoland",
          demo: "https://autoland-bice.vercel.app/login",
        },
      ],

      androidProjects: [
        {
          imageKey: "accesoFacial",
          featured: true,
          title: "Sistema de Acceso Facial con Reconocimiento Biométrico",
          description:
            "Aplicación móvil en Android (Java) y kiosco de asistencia con reconocimiento facial en tiempo real, detección de parpadeo como prueba de vida, y panel administrativo con cálculo automático de faltas, descuentos e inasistencias.",
          challenge:
            "Construir una integración confiable en Android nativo usando Java con backend Flask y WebView, control de permisos de cámara del sistema, y diferenciar la lógica de penalización entre empleados y estudiantes.",
          result:
            "Sistema funcional end-to-end probado en entorno móvil/emulador y desplegado con backend en Render, frontend web en Vercel y base de datos + storage en Supabase.",
          tech: [
            "Java",
            "Android Studio",
            "Python",
            "Flask",
            "OpenCV",
            "React",
            "Supabase",
          ],
          github: "https://github.com/CodeWithAlli/Acceso_Facial_Android",
          demo: "https://acceso-facial.vercel.app/",
          apk: "https://github.com/CodeWithAlli/Acceso_Facial_Android/releases/download/v1.0.0/ACCESO-FACIAL.apk",
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
      badge: "Android (Java) • React • TypeScript • Python (Flask) • Supabase",
      greeting: "Hi, I'm",
      subtitle: "Software & Mobile App Developer",
      description:
        "Specialized in building native mobile applications with Android Studio using Java, alongside modern and scalable web solutions with React, Python, and Supabase. Passionate about transforming ideas into functional products powered by Artificial Intelligence.",
      projectsButton: "View My Projects",
      contactButton: "Contact Me",
      explore: "Explore",
      imageAlt: "Allison More - Software & Mobile Developer",
    },
    //SOBRE MI//
    about: {
      title: "About",
      titleHighlight: "Me",

      subtitle:
        "Software Engineering & AI Student at SENATI, focused on native mobile development and cloud-based web solutions.",

      paragraph1:
        "I am a Full Stack and Mobile Developer focused on building native Android applications using Java, leveraging modern AI-assisted tools like Cursor to accelerate software delivery.",

      paragraph2:
        "I enjoy integrating cloud databases like Supabase with Python/Flask backends, deploying production-ready projects on platforms such as Vercel and Render.",

      quote:
        "Clean code and solid architecture turn complex ideas into accessible solutions.",

      highlights: [
        "Native mobile app development using Android Studio (Java)",
        "Interactive web interface design with React, TypeScript, and Tailwind CSS",
        "Backend development with Flask (Python) & Supabase / PostgreSQL",
        "Integration of Artificial Intelligence and Machine Learning solutions",
      ],

      stats: {
        projects: "Projects Completed",
        learning: "Semesters at SENATI",
        repositories: "Public Repositories",
        hours: "Hours of Code",
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

    // PROJECTS //
    projects: {
      title: "My",
      titleHighlight: "Projects",
      description:
        "Projects built using modern architectures, databases, APIs, process automation, and mobile development.",

      featured: "Featured Project",
      challenge: "Technical Challenge",
      result: "Result",
      code: "Code",
      demo: "Web Dashboard",
      apk: "Download APK",

      categories: {
        web: "Websites & Web Apps",
        android: "Android Projects (Java)",
      },

      webProjects: [
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
          tech: ["React", "Tailwind", "TypeScript", "Vercel"],
          github: "https://github.com/CodeWithAlli",
          demo: "https://aura-spa-frontend.vercel.app/",
        },
        {
          imageKey: "abogados",
          featured: false,
          title: "Law Firm Website",
          description:
            "Professional website for a law firm showcasing services, legal team members, and contact information.",
          challenge:
            "Design a professional and trustworthy interface that makes legal information easily accessible.",
          result:
            "A simple navigation structure and clear presentation of legal services improved the overall user experience.",
          tech: ["React", "Tailwind", "JavaScript"],
          github:
            "https://github.com/CodeWithAlli/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS",
          demo:
            "https://codewithalli.github.io/STAFF-ABOGADOS-DEFENDIENDO-LOS-DERECHOS/",
        },
        {
          imageKey: "autoland",
          featured: false,
          title: "AUTOLAND — Dealership Management",
          description:
            "Internal admin panel for a car dealership, with inventory control, customer management, and sales negotiation tracking through a status-based board.",
          challenge:
            "Migrate a legacy PHP/MySQL system to a modern React and Supabase architecture, preserving role-based security (admin/salesperson) and preventing overselling of inventory units.",
          result:
            "A fully functional system with role-based authentication, row-level security (RLS), a Kanban-style negotiation board, and automatic inventory status syncing based on completed sales.",
          tech: ["React", "Supabase", "PostgreSQL", "Vite"],
          github: "https://github.com/CodeWithAlli/Autoland",
          demo: "https://autoland-bice.vercel.app/login",
        },
      ],

      androidProjects: [
        {
          imageKey: "accesoFacial",
          featured: true,
          title: "Facial Access System with Biometric Recognition",
          description:
            "Mobile app in Android (Java) and attendance kiosk with real-time facial recognition, blink detection as a liveness check, and an admin dashboard with automatic calculation of absences, discounts, and non-attendance.",
          challenge:
            "Build a reliable Android native integration using Java with a Flask backend and WebView, system camera permissions management, and separate penalty logic between employees and students.",
          result:
            "A fully functional end-to-end system tested in a mobile/emulator environment and deployed with backend on Render, web frontend on Vercel, and database + storage on Supabase.",
          tech: [
            "Java",
            "Android Studio",
            "Python",
            "Flask",
            "OpenCV",
            "React",
            "Supabase",
          ],
          github: "https://github.com/CodeWithAlli/Acceso_Facial_Android",
          demo: "https://acceso-facial.vercel.app/",
          apk: "https://github.com/CodeWithAlli/Acceso_Facial_Android/releases/download/v1.0.0/ACCESO-FACIAL.apk",
        },
      ],
    },
  },
};