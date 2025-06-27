import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <SectionHeader>Get In Touch</SectionHeader>

      
      <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12 px-4 text-lg sm:text-xl">
        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out via the form or any of the contact options below!
      </p>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 flex flex-col justify-between"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>

            <ContactItem
              icon={<FaEnvelope />}
              label="Email"
              value="bhaveshalawane96@gmail.com"
              href="mailto:bhaveshalawane96@gmail.com"
            />

            <ContactItem
              icon={<FaPhone />}
              label="Phone"
              value="+91 8468992501"
              href="tel:+918468992501"
            />

            <ContactItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Pune, Maharashtra, India"
            />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/Bhavesh04A"
                icon={<FaGithub />}
                label="GitHub"
                hoverColor="hover:bg-cyan-500"
              />
              <SocialIcon
                href="https://linkedin.com/in/bhavesh-alawane"
                icon={<FaLinkedin />}
                label="LinkedIn"
                hoverColor="hover:bg-blue-600"
              />
            </div>

            <a
              href="public/My-Resume.pdf" 
              download
              className="flex items-center gap-2 px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md font-semibold transition cursor-pointer"
              aria-label="Download Resume"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </motion.div>

       
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send a Message</h3>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <FormInput id="name" label="Name" type="text" placeholder="Your name" required />
            <FormInput id="email" label="Email" type="email" placeholder="your.email@example.com" required />
            <FormInput id="message" label="Message" textarea placeholder="Your message..." required />

            <motion.button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-md font-medium transition shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send Message"
            >
              <FaPaperPlane />
              <span>Send Message</span>
            </motion.button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-green-400 font-semibold"
              role="alert"
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}


function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-cyan-500/10 rounded-full text-cyan-400 text-xl flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-gray-400 font-medium">{label}</h4>
        {href ? (
          <a href={href} className="text-gray-200 hover:text-cyan-400 transition" target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <p className="text-gray-200">{value}</p>
        )}
      </div>
    </div>
  );
}


function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  textarea = false,
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-400 mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          required={required}
          rows={4}
          placeholder={placeholder}
          className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      )}
    </div>
  );
}


function SocialIcon({ href, icon, label, hoverColor }: { href: string; icon: React.ReactNode; label: string; hoverColor: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`p-3 bg-gray-700 rounded-full transition ${hoverColor}`}
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}
