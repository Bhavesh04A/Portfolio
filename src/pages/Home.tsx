import { useState } from "react";
import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

const titles = [
  {
    text: "Full Stack Developer",
    base: "gradient-title-1",
    hover: "gradient-title-1-hover",
  },
  {
    text: "Competitive Programmer",
    base: "gradient-title-2",
    hover: "gradient-title-2-hover",
  },
  {
    text: "AI Enthusiast",
    base: "gradient-title-3",
    hover: "gradient-title-3-hover",
  },
];

const skills = [
  { label: "React", color: "bg-cyan-900/60 text-cyan-300" },
  { label: "TypeScript", color: "bg-pink-900/60 text-pink-300" },
  { label: "Node.js", color: "bg-blue-900/60 text-blue-300" },
  { label: "MongoDB", color: "bg-gray-800/60 text-gray-300" },
  { label: "DSA", color: "bg-purple-900/60 text-purple-300" }
];

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [titleHovered, setTitleHovered] = useState([false, false, false]);

  // const particlesInit = async (engine: any) => {
  //   await loadFull(engine);
  // };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <Particles
        //  init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#18181b" },
          particles: {
            color: { value: "#06b6d4" },
            links: { enable: true, color: "#f472b6", distance: 150 },
            move: { enable: true, speed: 1.5, outModes: "bounce" },
            number: { value: 50 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } }, 
            shape: { type: "circle" }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" }
            }
          }
        }}
      />
      <motion.div
        className="z-10 w-full max-w-4xl mx-auto py-32 flex flex-col items-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-2 group relative select-none cursor-pointer leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className={`gradient-text transition-all duration-700 inline-block bg-clip-text text-transparent ${hovered ? "gradient-text-hover" : ""}`}>
            Bhavesh Alawane
          </span>
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
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-cyan-200 text-center font-medium mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Transforming ideas into impactful digital solutions.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
          variants={staggerContainer}
        >
          {titles.map((title, idx) => (
            <motion.span
              key={title.text}
              className={`text-base sm:text-xl md:text-2xl font-semibold px-4 py-1 rounded transition-all duration-200 inline-block bg-clip-text text-transparent cursor-pointer ${titleHovered[idx] ? `${title.hover} shadow-lg` : title.base}`}
              onMouseEnter={() =>
                setTitleHovered(titleHovered.map((v, i) => (i === idx ? true : v)))
              }
              onMouseLeave={() =>
                setTitleHovered(titleHovered.map((v, i) => (i === idx ? false : v)))
              }
              whileHover={{
                scale: 1.14,
                y: -2,
              }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.18,
              }}
              aria-label={title.text}
              tabIndex={0}
            >
              {title.text}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl mb-8 text-center"
          variants={fadeInUp}
        >
          I craft modern, scalable web applications with a focus on clean code, smooth user experience, and impactful solutions and also passionate about exploring cutting-edge AI technologies. Let’s build something exceptional together.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={staggerContainer}
        >
          <motion.a
            href="https://github.com/Bhavesh04A"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 hover:from-cyan-500 hover:to-blue-500 transition-colors text-white font-semibold shadow border border-cyan-400/20"
            aria-label="Visit Bhavesh's GitHub"
            variants={fadeInUp}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhavesh-alawane-80a2a52b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 hover:from-blue-600 hover:to-cyan-400 transition-colors text-white font-semibold shadow border border-cyan-400/20"
            aria-label="Visit Bhavesh's LinkedIn"
            variants={fadeInUp}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="/My-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 hover:from-pink-500 hover:to-cyan-400 transition-colors text-white font-semibold shadow border border-cyan-400/20"
            aria-label="View Bhavesh's Resume"
            variants={fadeInUp}
          >
            Resume
          </motion.a>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={staggerContainer}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.label}
              className={`px-4 py-2 rounded-full font-medium text-sm shadow cursor-pointer transition-all duration-200 ${skill.color}`}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 2px 12px 0px rgba(6,182,212,0.10)",
                y: -2,
              }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.16 }}
              variants={fadeInUp}
              aria-label={skill.label}
              tabIndex={0}
            >
              {skill.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
