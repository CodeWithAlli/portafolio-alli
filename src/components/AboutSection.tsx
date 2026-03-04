import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, GitFork, Clock } from "lucide-react";
import profilePhoto from "@/assets/programadora.jpg";

const stats = [
  { icon: Briefcase, value: "1+", label: "Proyectos completados" },
  { icon: Clock, value: "2+", label: "Años de experiencia" },
  { icon: GitFork, value: "1+", label: "Repositorios públicos" },
  { icon: Code, value: "1000+", label: "Horas de código" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Sobre <span className="gradient-text">mí</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
            Conoce un poco más sobre mi trayectoria como desarrolladora
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={profilePhoto} alt="Allison More" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              Soy una desarrolladora Full Stack apasionada por crear soluciones web que resuelven problemas reales. Con más de 2 años de experiencia en JavaScript, React y Node.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi camino en la programación comenzó con la curiosidad de entender cómo funcionan las aplicaciones que usamos a diario. Esa curiosidad se convirtió en pasión y hoy disfruto cada línea de código que escribo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Me encanta aprender nuevas tecnologías, colaborar con equipos talentosos y escribir código limpio. Cuando no estoy programando, me encontrarás explorando nuevas herramientas de desarrollo o contribuyendo a proyectos open source.
            </p>

            <blockquote className="border-l-2 border-primary pl-4 py-2 mt-6">
              <p className="text-foreground font-medium italic">
                "Mi objetivo es simple: escribir código limpio que resuelva problemas reales."
              </p>
            </blockquote>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
              <stat.icon size={24} className="text-primary mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
