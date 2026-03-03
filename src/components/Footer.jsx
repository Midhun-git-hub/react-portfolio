// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            className="bg-slate-900 text-gray-400 py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Copyright */}
                <p className="text-sm text-gray-400">© 2026 Midhun</p>

                {/* Social icons */}
                <div className="flex justify-center items-center space-x-5 mt-4">
                    <a
                        href="https://github.com/midhun-git-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/midhun-m-683126298"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="mailto:m20787549@gmail.com?subject=Portfolio Contact"
                        className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>

                {/* Tech stack */}
                <p className="text-sm text-gray-400 mt-4 flex justify-center items-center space-x-3">
                    <span>Built with :</span>
                    <motion.span
                        className="inline-block"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    >
                        <SiReact size={20} className="text-blue-400" />
                    </motion.span>
                    <SiTailwindcss size={20} className="text-teal-400" />
                    <SiFramer size={20} className="text-purple-400" />
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;