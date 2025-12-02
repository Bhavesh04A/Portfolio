import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript, SiMongodb, SiStripe, SiVite, SiTailwindcss, SiMysql, SiNextdotjs,
} from "react-icons/si";

// Project images
import medpalImg from "../assets/projects/medpal.png";
import buildaboxImg from "../assets/projects/buildabox.png";
import foodshareImg from "../assets/projects/foodshare.png";
import foodrecipeImg from "../assets/projects/foodrecipe.png";
import taskManagerImg from "../assets/projects/taskmanager.png";
import financeVisualizerImg from "../assets/projects/personalfinanceVisualizer.png";

const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Stripe: <SiStripe className="text-indigo-400" />,
  Vite: <SiVite className="text-purple-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-300" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-400" />,
  MYSQL: <SiMysql className="text-blue-600" />,
  "Context API": <FaReact className="text-cyan-400" />,
};

function AnimatedHeader({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="flex justify-center mb-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <h2
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center select-none relative gradient-text inline-block bg-clip-text text-transparent transition-all duration-700 cursor-pointer ${
          hovered ? "gradient-text-hover" : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        <motion.span
          className="absolute left-1/2 -bottom-2 h-1 rounded-full"
          style={{
            width: hovered ? "100%" : "0%",
            background:
              "linear-gradient(90deg, #06b6d4, #f472b6, #3b82f6, #06b6d4)",
            transition: "width 0.5s",
            transform: "translateX(-50%)",
            display: "block",
          }}
        />
      </h2>
    </motion.div>
  );
}

const projects = [
  {
    title: "FoodShare",
    description:
      "A full-stack food donation platform connecting restaurants, NGOs, and volunteers with real-time donations, QR-based verification, AI freshness scoring, dashboards, and role-based workflows.",
    tech: ["React", "Node.js", "MongoDB", "Vite", "Tailwind"],
    github: "https://github.com/Bhavesh04A/foodshare-frontend",
    demo: "https://foodshare-frontend-three.vercel.app/",
    image: foodshareImg,
    role: "Full Stack Developer",
  },

  {
    title: "MedPal",
    description:
      "AI-powered healthcare platform with symptom analysis, doctor booking, and real-time chatbot.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/Bhavesh04A/medpal-frontend",
    demo: "https://medpal-frontend-zeta.vercel.app/",
    image: medpalImg,
    role: "Full Stack Developer",
  },
  {
    title: "Build-a-Box",
    description:
      "Customizable snack box builder with user auth, admin dashboard, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Bhavesh04A/build-a-box-frontend",
    demo: "https://build-a-box-frontend.vercel.app/",
    image: buildaboxImg,
    role: "Full Stack Developer",
  },
  {
    title: "Finance Visualizer",
    description:
      "Modern personal finance dashboard for tracking expenses, visualizing spending, setting budgets, and gaining insights.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Bhavesh04A/finance-visualizer-frontend",
    demo: "https://finance-visualizer-frontend.vercel.app/",
    image: financeVisualizerImg,
    role: "Full Stack Developer",
  },
  {
    title: "Task Manager",
    description:
      "Modern task management app with user auth, due dates, priorities, and status management.",
    tech: ["React", "Vite", "JavaScript", "Node.js", "MYSQL"],
    github: "https://github.com/Bhavesh04A/task-manager-frontend",
    demo: "https://task-manager-frontend-dusky-phi.vercel.app/",
    image: taskManagerImg,
    role: "Solo Project",
  },
  {
    title: "Food Recipe App",
    description:
      "Role-based recipe platform with user/chef dashboards and community features.",
    tech: ["React", "Context API", "JavaScript", "Tailwind"],
    github: "https://github.com/Bhavesh04A/-React-Food-Recipe",
    image: foodrecipeImg,
    role: "Full Stack Developer",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-20">
      <AnimatedHeader>Projects</AnimatedHeader>
      <motion.div 
        className="grid gap-10 w-full max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.13 },
          },
       }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-400/30 group h-[480px] sm:h-[500px] md:h-[510px] lg:h-[520px]"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.035,
              boxShadow: "0 8px 40px 0 rgba(6,182,212,0.16), 0 2px 24px 0 rgba(244,114,182,0.10)",
              borderColor: "#06b6d4",
            }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title + " screenshot"}
                className="w-full h-48 object-cover object-top border-b border-gray-800 rounded-t-xl"
                loading="lazy"
              />
            )}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-cyan-300">{project.title}</h3>
                <span className="text-xs bg-cyan-900/40 text-cyan-200 px-2 py-1 rounded font-semibold ml-2">{project.role}</span>
              </div>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-gray-800 text-cyan-200 px-2 py-1 rounded text-xs font-medium border border-cyan-800"
                  >
                    {techIcons[tech] && <span className="text-base">{techIcons[tech]}</span>}
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 hover:bg-cyan-500 text-white rounded transition font-semibold border border-cyan-700 hover:border-cyan-400"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-pink-500 text-white rounded transition font-semibold border border-pink-700 hover:border-pink-400"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
