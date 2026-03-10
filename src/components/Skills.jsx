import React from "react";
import { motion } from "framer-motion";
import { FaNpm } from "react-icons/fa";
import { SiHtml5,SiCss3,SiJavascript,SiBootstrap,SiReact,SiTailwindcss,SiPython,SiDjango,SiPostgresql,SiMysql,SiSqlite,SiRedis,SiCelery,SiReactrouter,SiFramer,SiRender,SiVercel,SiAntdesign,} from "react-icons/si";

const skills = {
  Frontend: [
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
    { icon: <SiReact className="text-cyan-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  ],

  Backend: [
    { icon: <SiPython className="text-yellow-300" />, name: "Python" },
    { icon: <SiDjango className="text-green-500" />, name: "Django" },
    { icon: <SiDjango className="text-emerald-400" />, name: "Django REST" },
  ],

  Database: [
    { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
    { icon: <SiPostgresql className="text-indigo-400" />, name: "PostgreSQL" },
    { icon: <SiSqlite className="text-gray-400" />, name: "SQLite" },
  ],
};

const exploring = [
  { icon: <SiCelery className="text-green-400" />, name: "Celery" },
  { icon: <SiRedis className="text-red-400" />, name: "Redis" },
  { icon: <SiReactrouter className="text-orange-400" />, name: "React Router" },
  { icon: <SiFramer className="text-purple-400" />, name: "Framer Motion" },
  { icon: <SiAntdesign className="text-blue-400" />, name: "Ant Design" },
  { icon: <FaNpm className="text-red-500" />, name: "NPM" },
  { icon: <SiRender className="text-gray-300" />, name: "Render" },
  { icon: <SiVercel className="text-white" />, name: "Vercel" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Skills
          </h1>

          <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
            Technologies I use to build modern full-stack web applications.
          </p>
        </div>

        {/* Skill Categories */}
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              {category}
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="
                  flex items-center gap-2 px-4 py-2
                  bg-gradient-to-br from-slate-900 to-slate-800
                  border border-white/10 rounded-lg
                  hover:border-purple-400/50
                  hover:shadow-lg hover:shadow-purple-500/20
                  transition-all duration-300
                  "
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Currently Exploring Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Currently Exploring
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {exploring.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                flex items-center gap-2 px-4 py-2
                bg-gradient-to-br from-slate-900 to-slate-800
                border border-purple-500/30 rounded-lg
                hover:border-purple-400
                hover:shadow-lg hover:shadow-purple-500/20
                transition-all duration-300
                "
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;