import  { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Achievements", to: "achievements" }, 
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.to));
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        if (!section) continue;
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white/10 backdrop-blur-md shadow-xl rounded-b-2xl border-b border-cyan-400/20">
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-400 to-blue-400 bg-clip-text text-transparent cursor-pointer relative group transition-colors"
        >
          Bhavesh Alawane
          <span className="block h-0.5 w-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
        <div className="hidden md:flex gap-7">
          {navLinks.map(link => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              className={`relative font-semibold px-2 py-1 transition-colors duration-300 cursor-pointer ${
                activeSection === link.to
                  ? "text-cyan-400"
                  : "text-gray-100 hover:text-cyan-300"
              }`}
            >
              {link.name}
              {activeSection === link.to && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-pink-400 to-blue-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </ScrollLink>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7 text-cyan-400" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-cyan-400" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-gray-900/95 via-gray-800/95 to-cyan-900/95 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col pt-28 px-6 space-y-6">
              {navLinks.map(link => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  className={`py-3 px-4 rounded-xl text-lg text-center font-semibold transition-all cursor-pointer ${
                    activeSection === link.to
                      ? "bg-gradient-to-r from-cyan-500 via-pink-400 to-blue-400 text-white shadow-lg"
                      : "hover:bg-gray-800/80 text-gray-200"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
