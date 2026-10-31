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
      subtitle: "Desarrolladora Full Stack & Móvil",
      description:
        "Estudiante de 5.º semestre de Ingeniería de Software con IA en SENATI. Construyo aplicaciones Android nativas con Java y soluciones web con React, TypeScript, Python (Flask) y Supabase, desplegadas en producción en Vercel y Render. Me enfoco en convertir ideas en productos funcionales, limpios y escalables, integrando Inteligencia Artificial cuando el proyecto lo requiere.",
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
        "Estudiante de Ingeniería de Software con IA en SENATI, enfocada en el desarrollo móvil nativo en Android y en soluciones web con arquitectura cloud.",

      paragraph1:
        "Soy Allison More, desarrolladora Full Stack y Móvil. Combino el desarrollo nativo en Android Studio (Java) con el desarrollo web moderno en React, TypeScript y Tailwind, aplicando buenas prácticas de código limpio y una arquitectura clara en cada proyecto.",

      paragraph2:
        "Trabajo con backend en Flask (Python) y bases de datos en la nube como Supabase/PostgreSQL, desplegando proyectos listos para producción en Vercel y Render. Me caracterizo por aprender rápido nuevas versiones de los lenguajes y por elegir la tecnología adecuada según los requerimientos reales de cada proyecto.",

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
      // ES
      description:
        "Tecnologías que utilizo para construir aplicaciones modernas, seguras y listas para producción. Con Android Studio y Java desarrollo apps nativas (Acceso Facial); con React, TypeScript y Tailwind creo interfaces web (Aura Spa, AUTOLAND); y con Flask y Supabase gestiono backends y bases de datos en la nube (ONPE). Me facilitan entregar proyectos ordenados, con roles, RLS y despliegue rápido en Vercel y Render.",
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
        "Disponible para proyectos freelance, colaboraciones o oportunidades como desarrolladora Full Stack & Móvil. Puedo aportar desde la elección de la tecnología adecuada hasta el despliegue en producción.",

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
  competencies: "Competencias adquiridas", // nueva etiqueta para mostrar en UI
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
      competencies: [
        "Diseño de arquitecturas seguras con control de acceso basado en roles (RBAC)",
        "Implementación de Edge Functions y seguridad a nivel de fila (RLS) en Supabase",
        "Modelado de bases de datos relacionales en PostgreSQL",
        "Desarrollo de paneles administrativos con auditoría y trazabilidad",
      ],
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
      competencies: [
        "Diseño de interfaces premium con foco en identidad visual y experiencia de usuario",
        "Maquetación responsive con React y Tailwind CSS",
        "Optimización de navegación y jerarquía visual para mejorar la conversión",
      ],
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
      competencies: [
        "Diseño de interfaces institucionales orientadas a confianza y claridad",
        "Organización de contenido legal en secciones accesibles",
        "Despliegue de sitios estáticos con GitHub Pages",
      ],
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
      competencies: [
        "Migración de sistemas legados (PHP/MySQL) a arquitecturas modernas",
        "Implementación de autenticación por roles y seguridad a nivel de fila (RLS)",
        "Diseño de tableros Kanban y sincronización automática de estados",
        "Control de integridad de inventario para evitar sobreventa",
      ],
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
      competencies: [
        "Desarrollo móvil nativo en Android Studio con Java",
        "Integración de cámara, permisos del sistema y WebView",
        "Reconocimiento facial y prueba de vida con OpenCV",
        "Conexión de app móvil con backend Flask y servicios en la nube",
        "Despliegue end-to-end (Render + Vercel + Supabase)",
      ],
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
      subtitle: "Full Stack & Mobile Developer",
      description:
        "5th-semester Software Engineering & AI student at SENATI. I build native Android applications with Java and web solutions with React, TypeScript, Python (Flask), and Supabase, deployed to production on Vercel and Render. I focus on turning ideas into functional, clean, and scalable products, integrating Artificial Intelligence when the project requires it.",
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
        "Software Engineering & AI student at SENATI, focused on native Android development and cloud-based web solutions.",

      paragraph1:
        "I'm Allison More, a Full Stack and Mobile Developer. I combine native Android development in Android Studio (Java) with modern web development in React, TypeScript, and Tailwind, applying clean code practices and a clear architecture in every project.",

      paragraph2:
        "I work with Flask (Python) backends and cloud databases such as Supabase/PostgreSQL, deploying production-ready projects on Vercel and Render. I stand out for learning new language versions quickly and for choosing the right technology based on each project's real requirements.",

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
        "Technologies I use to build modern, secure, production-ready applications. With Android Studio and Java I develop native apps (Facial Access); with React, TypeScript, and Tailwind I create web interfaces (Aura Spa, AUTOLAND); and with Flask and Supabase I manage backends and cloud databases (ONPE). They help me deliver well-structured projects with roles, RLS, and fast deployment on Vercel and Render.",
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
        "Available for freelance projects, collaborations, or opportunities as a Full Stack & Mobile Developer. I can contribute from choosing the right technology to deploying to production.",

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
      competencies: "Skills Gained",
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
          competencies: [
            "Design of secure architectures with role-based access control (RBAC)",
            "Implementation of Edge Functions and row-level security (RLS) in Supabase",
            "Relational database modeling in PostgreSQL",
            "Development of admin dashboards with auditing and traceability",
          ],
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
          competencies: [
            "Premium interface design focused on visual identity and user experience",
            "Responsive layout with React and Tailwind CSS",
            "Navigation and visual hierarchy optimization to improve conversion",
          ],
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
          competencies: [
            "Institutional interface design oriented to trust and clarity",
            "Organization of legal content into accessible sections",
            "Static site deployment with GitHub Pages",
          ],
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
          competencies: [
            "Migration of legacy systems (PHP/MySQL) to modern architectures",
            "Implementation of role-based authentication and row-level security (RLS)",
            "Kanban board design and automatic state synchronization",
            "Inventory integrity control to prevent overselling",
          ],
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
          competencies: [
            "Native mobile development in Android Studio with Java",
            "Camera, system permissions, and WebView integration",
            "Facial recognition and liveness detection with OpenCV",
            "Mobile app connection to a Flask backend and cloud services",
            "End-to-end deployment (Render + Vercel + Supabase)",
          ],
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