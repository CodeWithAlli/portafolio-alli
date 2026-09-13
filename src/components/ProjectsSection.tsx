import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Globe, Smartphone, Download } from "lucide-react";
import projectAbogado from "@/assets/project-abogado.jpg";
import projectAutoland from "@/assets/project-autoland.jpg";
import projectAuraSpa from "@/assets/project-aura-spa.jpg";
import projectONPE from "@/assets/project-onpe.jpg";
import projectAccesoFacial from "@/assets/project-acceso-facial.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Estado de la pestaña activa ('web' o 'android')
  const [activeTab, setActiveTab] = useState<"web" | "android">("web");

  const projectImages = {
    onpe: projectONPE,
    auraSpa: projectAuraSpa,
    abogados: projectAbogado,
    autoland: projectAutoland,
    accesoFacial: projectAccesoFacial,
  };

  // Obtenemos el arreglo correspondiente según la pestaña elegida
  const rawProjects =
    activeTab === "web" ? t.projects.webProjects : t.projects.androidProjects;

  // Asignamos la imagen correspondiente según imageKey
  const projects = rawProjects.map((project) => ({
    ...project,
    image: projectImages[project.imageKey as keyof typeof projectImages],
  }));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        {/* Título y Descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t.projects.title}{" "}
            <span className="gradient-text">
              {t.projects.titleHighlight}
            </span>
          </h2>

          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Pestañas / Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-3 mb-14"
        >
          <button
            onClick={() => setActiveTab("web")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "web"
                ? "gradient-bg text-primary-foreground shadow-lg scale-105"
                : "glass hover:border-primary/40 text-muted-foreground"
              }`}
          >
            <Globe size={16} />
            {t.projects.categories.web}
          </button>

          <button
            onClick={() => setActiveTab("android")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "android"
                ? "gradient-bg text-primary-foreground shadow-lg scale-105"
                : "glass hover:border-primary/40 text-muted-foreground"
              }`}
          >
            <Smartphone size={16} />
            {t.projects.categories.android}
          </button>
        </motion.div>

        {/* Lista de proyectos */}
        <motion.div key={activeTab} className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative glass rounded-2xl overflow-hidden grid lg:grid-cols-2 hover:border-primary/30 transition-all"
            >
              {/* Badge Destacado */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg">
                  ⭐ {t.projects.featured}
                </div>
              )}

              {/* Contenedor de Imagen: Frame Navegador para Web vs. Mockup Móvil para Android */}
              <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-lg bg-muted/20 min-h-[300px] sm:min-h-[360px] lg:h-auto flex items-center justify-center p-4 sm:p-6">
                {activeTab === "android" ? (
                  /* Mockup Móvil Moderno con Bordes Finos */
                  <div className="relative mx-auto my-auto transition-transform duration-500 hover:scale-[1.02]">
                    {/* Estructura del Celular */}
                    <div className="relative border-[6px] border-slate-900 dark:border-slate-800 rounded-[2.5rem] bg-slate-950 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] w-[220px] sm:w-[250px] aspect-[9/19.5] overflow-hidden outline outline-1 outline-white/10">

                      {/* Cámara Frontal / Punch Hole (Estilo Android Moderno) */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-20 border border-slate-800/80 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-950/60 rounded-full" />
                      </div>

                      {/* Altavoz Superior */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-800 rounded-full z-20" />

                      {/* Pantalla del Celular */}
                      <div className="w-full h-full pt-6 pb-2 px-1 bg-background overflow-y-auto scrollbar-none flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto max-h-full object-contain rounded-xl"
                          loading="lazy"
                        />
                      </div>

                      {/* Barra de Navegación Inferior */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-600/50 rounded-full z-20" />
                    </div>

                    {/* Botones Laterales Físicos (Volumen y Encendido) */}
                    <div className="absolute -left-[9px] top-20 w-[3px] h-7 bg-slate-700 rounded-l-md" />
                    <div className="absolute -left-[9px] top-32 w-[3px] h-10 bg-slate-700 rounded-l-md" />
                    <div className="absolute -right-[9px] top-24 w-[3px] h-12 bg-slate-700 rounded-r-md" />
                  </div>
                ) : (
                  /* Frame de Navegador Web */
                  <div className="w-full h-full flex flex-col rounded-lg overflow-hidden border border-border/40">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/40">
                      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>

                      <span className="ml-3 text-xs text-muted-foreground truncate">
                        {project.demo}
                      </span>
                    </div>

                    <div className="overflow-hidden h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Información y detalles del proyecto */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary mb-1">
                    {t.projects.challenge}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-green-500 mb-1">
                    {t.projects.result}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.result}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones Código / Demo / APK */}
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm hover:border-primary/50 transition"
                    >
                      <Github size={16} />
                      {t.projects.code}
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border text-sm hover:border-primary/50 transition"
                    >
                      <ExternalLink size={16} />
                      {t.projects.demo}
                    </a>
                  )}

                  {/* Botón especial de descarga APK si existe la clave en el proyecto */}
                  {(project as any).apk && (
                    <a
                      href={(project as any).apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-primary-foreground text-sm shadow-md hover:scale-105 transition-all"
                    >
                      <Download size={16} />
                      {(t.projects as any).apk || "Descargar APK"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;