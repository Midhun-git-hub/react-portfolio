import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiSqlite,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex items-center py-24 px-6"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <h1 className="text-4xl font-semibold mb-16 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Skill Set
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Frontend */}
          <SkillCard title="Front-End">
            <Skill icon={<SiHtml5 className="text-orange-500" />} name="HTML5" />
            <Skill icon={<SiCss3 className="text-blue-500" />} name="CSS3" />
            <Skill icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" />
            <Skill icon={<SiBootstrap className="text-purple-500" />} name="Bootstrap" />
            <Skill icon={<SiReact className="text-cyan-400" />} name="React.js" />
            <Skill icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
          </SkillCard>

          {/* Backend */}
          <SkillCard title="Back-End">
            <Skill icon={<SiPython className="text-yellow-300" />} name="Python" />
            <Skill icon={<SiDjango className="text-green-500" />} name="Django" />
            <Skill icon={<SiDjango className="text-emerald-400" />} name="Django REST Framework" />
          </SkillCard>

          {/* Database */}
          <SkillCard title="Database">
            <Skill icon={<SiMysql className="text-blue-400" />} name="MySQL" />
            <Skill icon={<SiPostgresql className="text-indigo-400" />} name="PostgreSQL" />
            <Skill icon={<SiSqlite className="text-gray-400" />} name="SQLite" />
          </SkillCard>

        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
    >
      <h3 className="text-xl font-semibold mb-6 text-purple-400">{title}</h3>
      <div className="space-y-4 text-left">{children}</div>
    </motion.div>
  );
};

const Skill = ({ icon, name }) => {
  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer group"
      initial="rest"
      whileHover="hover"
    >
      {/* Icon reacts when the row (group) is hovered */}
      <motion.div
        className="text-2xl"
        variants={{
          rest: { rotateY: 0, filter: "drop-shadow(0 0 0px rgba(168,85,247,0))" },
          hover: { rotateY: 360, filter: "drop-shadow(0 0 12px rgba(168,85,247,0.8))" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {icon}
      </motion.div>

      {/* Text triggers the icon hover via group-hover */}
      <motion.span
        className="text-gray-300 group-hover:text-white transition-colors duration-300"
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

export default Skills;