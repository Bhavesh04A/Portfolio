import  { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiTypescript, SiCplusplus, SiRedux, SiExpress, SiVercel, SiNextdotjs, SiPostgresql, SiDocker, SiOpenai,
} from "react-icons/si";


function AnimatedHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className={`flex justify-center mb-10 ${className}`}
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


const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "ReactJS", icon: <FaReact className="text-cyan-400" size={36} aria-label="ReactJS" />, level: 95 },
      { name: "Redux", icon: <SiRedux className="text-purple-400" size={36} aria-label="Redux" />, level: 88 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" size={36} aria-label="TypeScript" />, level: 92 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={36} aria-label="JavaScript" />, level: 97 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" size={36} aria-label="Tailwind CSS" />, level: 90 },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={36} aria-label="HTML5" />, level: 94 },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" size={36} aria-label="CSS3" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" size={36} aria-label="Next.js" />, level: 80 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" size={36} aria-label="Node.js" />, level: 91 },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" size={36} aria-label="Express.js" />, level: 89 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={36} aria-label="MongoDB" />, level: 87 },
      { name: "SQL/PostgreSQL", icon: <SiPostgresql className="text-blue-400" size={36} aria-label="PostgreSQL" />, level: 75 },
      { name: "REST APIs", icon: <FaDatabase className="text-indigo-400" size={36} aria-label="REST APIs" />, level: 85 },
    ],
  },
  {
    label: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={36} aria-label="JavaScript" />, level: 97 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" size={36} aria-label="TypeScript" />, level: 92 },
      { name: "Python", icon: <FaPython className="text-blue-300" size={36} aria-label="Python" />, level: 80 },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" size={36} aria-label="C++" />, level: 78 },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" size={36} aria-label="Git" />, level: 87 },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" size={36} aria-label="GitHub" />, level: 87 },
      { name: "Docker", icon: <SiDocker className="text-blue-400" size={36} aria-label="Docker" />, level: 72 },
      { name: "Vercel", icon: <SiVercel className="text-gray-200" size={36} aria-label="Vercel" />, level: 75 },
    ],
  },
  {
    label: "AI & Data",
    skills: [
      { name: "OpenAI API", icon: <SiOpenai className="text-green-300" size={36} aria-label="OpenAI API" />, level: 75 },
      { name: "Data Analysis", icon: <FaDatabase className="text-cyan-300" size={36} aria-label="Data Analysis" />, level: 78 },
    ],
  },
];


const getFloatVariant = (delay: number) => ({
  animate: {
    y: [0, -14, 0, 14, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      // ease: ["easeInOut"],
      delay,
    },
  },
  initial: { y: 0 },
});

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <AnimatedHeader>Skills</AnimatedHeader>
      <div className="max-w-6xl mx-auto space-y-16">
        {skillGroups.map((group, gIdx) => (
          <div key={group.label}>
            <motion.h3
              className="text-xl sm:text-2xl font-bold mb-7 pl-2 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + gIdx * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {group.label}
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
            >
              {group.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 bg-gray-800/70 rounded-xl p-6 shadow-xl border border-gray-700/50 transition-transform cursor-pointer group backdrop-blur-md"
                  variants={getFloatVariant((gIdx * 6 + idx) * 0.14)}
                  initial="initial"
                  animate="animate"
                  whileHover={{
                    scale: 1.10,
                    boxShadow: "0 8px 32px 0 rgba(6,182,212,0.18)",
                    borderColor: "#06b6d4",
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 15 }}
                >
                  <span className="transition-transform">{skill.icon}</span>
                  <span className="text-gray-200 font-semibold text-sm text-center tracking-wide">{skill.name}</span>
                  
                  <div className="w-full mt-2">
                    <div className="h-2 rounded-full bg-gray-700/60 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level ?? 70}%` }}
                        transition={{ duration: 0.7, delay: 0.2 + idx * 0.06 }}
                        viewport={{ once: true }}
                        style={{ minWidth: 12 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto mt-12 text-center text-gray-400 text-base sm:text-lg">
        <span>
          <span className="text-cyan-400 font-semibold">Tech Stack:</span> I build modern, scalable apps using the latest in JavaScript, TypeScript, React, Node.js, MongoDB, and more. Always learning, always growing.
        </span>
      </div>
    </section>
  );
}
