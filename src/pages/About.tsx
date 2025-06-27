import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import profileImg from "../assets/profile.jpeg";


function AnimatedHeader({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex justify-center mb-14">
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
    </div>
  );
}


function AIChipIcon() {
  return (
    <motion.svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 10, -10, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="text-cyan-300"
    >
      <rect x="4" y="4" width="20" height="20" rx="6" fill="currentColor" opacity="0.25"/>
      <rect x="9" y="9" width="10" height="10" rx="3" fill="currentColor"/>
      <circle cx="14" cy="14" r="2" fill="#fff"/>
    </motion.svg>
  );
}

export default function About() {
  const [imgHovered, setImgHovered] = useState(false);

  const highlightVariants: Variants = {
    initial: { opacity: 0, x: 30 },
    animate: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.25 + i * 0.13, duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    }),
  };

  const highlights = [
    {
      icon: <AIChipIcon />,
      text: (
        <>
          <span className="font-semibold text-cyan-300">AI Integrated Projects</span>
          <span className="hidden sm:inline text-gray-400"> — Built neural network demos, integrated AI APIs, and delivered intelligent features in web apps</span>
        </>
      ),
    },
    {
      icon: "🌟",
      text: (
        <>
          <span className="font-semibold text-cyan-300">Current Focus</span>
          <span className="hidden sm:inline text-gray-400"> — Exploring advanced AI integrations and scalable cloud architectures</span>
        </>
      ),
    },
    {
      icon: "🚀",
      text: (
        <>
          <span className="font-semibold text-cyan-300">Open to impactful opportunities & innovation</span>
          <span className="hidden sm:inline text-gray-400"> — Ready for new challenges in web, AI, and cloud</span>
        </>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-20"
    >
      <AnimatedHeader>About Me</AnimatedHeader>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-blue-400 blur-2xl opacity-30 z-0"
            animate={{
              scale: imgHovered ? 1.1 : 1,
              opacity: imgHovered ? 0.5 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          />
          <motion.img
            src={profileImg}
            alt="Bhavesh Alawane"
            className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-4 border-cyan-400 shadow-2xl object-cover z-10"
            loading="lazy"
            whileHover={{
              scale: 1.06,
              rotate: -2,
              boxShadow: "0 8px 32px 0 rgba(6,182,212,0.25)",
            }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
          />
        </motion.div>
        <motion.div
          className="flex-1 w-full bg-gray-800/80 rounded-2xl shadow-xl p-8 border border-gray-700 backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-200 mb-7 text-base sm:text-lg leading-relaxed">
            <span className="text-cyan-300 font-bold">Hi, I’m Bhavesh Alawane</span> — a results-driven <span className="text-cyan-400 font-semibold">Full Stack Developer</span> and <span className="text-pink-400 font-semibold">AI Enthusiast</span> passionate about building robust, scalable web applications and leveraging data-driven insights for real-world impact.
            <br /><br />
            My expertise spans <span className="font-semibold text-cyan-300">JavaScript, TypeScript, React, Node.js, MongoDB</span>, and modern UI frameworks like <span className="font-semibold text-pink-300">Tailwind CSS</span>. I thrive in fast-paced, collaborative environments and am committed to continuous learning and innovation.
          </p>
          <ul className="mb-8 space-y-4">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-base sm:text-lg"
                initial="initial"
                whileInView="animate"
                custom={i}
                variants={highlightVariants}
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="flex items-center">{item.icon}</span>
                <span className="text-gray-200">{item.text}</span>
              </motion.li>
            ))}
          </ul>
          <div className="flex gap-4 mt-2">
            <motion.a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-colors text-white font-semibold shadow"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "tween", duration: 0.17 }}
              aria-label="View Projects"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-white font-semibold shadow"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "tween", duration: 0.17 }}
              aria-label="Contact Me"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
