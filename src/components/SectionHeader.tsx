import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ children }: { children: React.ReactNode }) {
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
