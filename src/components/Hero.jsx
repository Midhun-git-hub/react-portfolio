import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-neutral-950 text-white "
        >
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-semibold mb-4"
            >
                Hi, I’m{" "}
                <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                    Midhun M
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl text-neutral-300 mb-4"
            >
                Aspiring Python Fullstack Developer | Backend & Frontend Enthusiast
            </motion.h3>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl text-neutral-400"
            >
                Passionate about building scalable web apps and learning new
                technologies to create smart solutions.
            </motion.p>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex gap-8 mt-8 text-2xl"
            >
                <a
                    href="mailto:m20787549@gmail.com?subject=Portfolio Contact"
                    className="hover:text-purple-400 transition transform hover:scale-125"
                >
                    <FaEnvelope />
                </a>

                <a
                    href="https://www.instagram.com/_midhun_codes_/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition transform hover:scale-125"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://github.com/Midhun-git-hub"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition transform hover:scale-125"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/in/midhun-m-683126298"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition transform hover:scale-125"
                >
                    <FaLinkedin />
                </a>
            </motion.div>

            {/* Resume Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10"
            >
                <a
                    href="https://drive.google.com/file/d/1urXr954NKyzzEEAEW2DjpYN_7ZYpm5qK/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="px-6 py-3 rounded-lg bg-linear-to-r from-purple-500 to-indigo-600 hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30">
                        Download Resume
                    </button>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;