import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center bg-neutral-900 text-white px-6 "
        >
            <div className="max-w-4xl mx-auto text-center">

                {/* Section Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-semibold mb-8 bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
                >
                    About Me
                </motion.h1>

                {/* Main Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg text-neutral-300 mb-6 leading-relaxed"
                >
                    I am a <span className="text-purple-400 font-medium">Python Fullstack Developer </span>
                    with experience in building web applications using{" "}
                    <span className="text-indigo-400">
                        HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, React, Django, and Django REST Framework
                    </span>.
                    I work on both backend logic and frontend design, integrating databases,
                    APIs, and interactive features to deliver seamless user experiences.
                </motion.p>

                {/* Secondary Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-neutral-400 text-base md:text-lg leading-relaxed"
                >
                    I enjoy creating scalable web apps, learning new technologies,
                    and solving real-world problems with clean, maintainable code.
                    I am passionate about modern web development, responsive design,
                    and continuously improving my skills in Python, Django, JavaScript,
                    and related tools.
                </motion.p>

            </div>
        </section>
    );
};

export default About;