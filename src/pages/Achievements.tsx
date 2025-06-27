import { motion } from "framer-motion";
import { FaAward, FaMedal, FaCertificate, FaTrophy, FaGithub } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader"; 

const achievements = [
  {
    title: "Solved 400+ Coding Problems on Codechef",
    description: "Demonstrated advanced problem-solving and algorithmic skills, achieving a max rating of 1383.",
    icon: <FaMedal className="text-orange-300 text-xl" />,
  },
  {
    title: "Selected for Internal Hackathon",
    description: "Chosen to represent PCCOER in a competitive internal hackathon for innovative project ideas.",
    icon: <FaTrophy className="text-yellow-300 text-xl" />,
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to multiple full-stack and web development projects on GitHub.",
    icon: <FaGithub className="text-gray-300 text-xl" />,
  },
  {
    title: "Technical Event Team Member, Code Craft Coding Club",
    description: "Organized and executed technical events, workshops, and coding contests at the college level.",
    icon: <FaAward className="text-pink-300 text-xl" />,
  },
  {
    title: "Academic Excellence",
    description: "Achieved 9.19 CGPA (till 3rd sem) in B.E., 96.60% in SSC, and 82.67% in HSC.",
    icon: <FaCertificate className="text-blue-300 text-xl" />,
  },
];


export default function Achievements() {
  return (
    <section id="achievements" className="min-h-[60vh] bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-20">
      <SectionHeader>Achievements</SectionHeader>
      <motion.div
        className="grid gap-8 w-full max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.13 } },
        }}
      >
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-0 transition-all duration-200 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 90 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(56,189,248,0.13)",
                borderColor: "#38bdf8",
              }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="flex items-start gap-4 rounded-xl p-6 cursor-pointer border border-transparent group-hover:border-cyan-400 transition-all duration-200"
              style={{ background: "inherit" }}
            >
              <div className="flex-shrink-0 pt-1">{ach.icon}</div>
              <div>
                <h4 className="text-base font-semibold text-cyan-200 mb-1">{ach.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
