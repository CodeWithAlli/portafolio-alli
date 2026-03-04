import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Server, Wrench, Users,
  FileCode, Paintbrush, Braces, Database, 
  GitBranch, Container, Monitor, Figma,
  MessageSquare, Lightbulb, Heart, Zap
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Paintbrush },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Zap },
      { name: "TypeScript", icon: FileCode },
      { name: "Tailwind CSS", icon: Paintbrush },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Zap },
      { name: "Python", icon: Braces },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "VS Code", icon: Monitor },
      { name: "Figma", icon: Figma },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Trabajo en equipo", icon: Users },
      { name: "Comunicación", icon: MessageSquare },
      { name: "Resolución de problemas", icon: Lightbulb },
      { name: "Adaptabilidad", icon: Heart },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="section-padding relative">
      <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <cat.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-background/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                  >
                    <skill.icon size={14} className="text-primary" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
