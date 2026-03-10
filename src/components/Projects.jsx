import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Automated Email Content Platform",
    desc: "Full-stack SaaS platform for automated email campaigns with authentication, background task processing, and API-driven architecture.",
    tech: ["React", "Django REST Framework", "JWT", "Celery", "PostgreSQL"],
    github: "https://github.com/Midhun-git-hub/mailpr",
    live: "https://mailpr-frontend.onrender.com/",
  },
  {
    title: "E-Commerce Website",
    desc: "Full-stack Django e-commerce application with product catalog, authentication system, shopping cart, and order workflow.",
    tech: ["Django", "SQLite/PostgreSQL", "Bootstrap", "Authentication"],
    github: "https://github.com/Midhun-git-hub/django_ecommerce_project.git",
    live: "https://django-ecommerce-project-el5l.onrender.com",
  },
  {
    title: "Trailer Explorer",
    desc: "Modern movie browsing app that fetches movie data dynamically from TMDB API with a responsive React interface.",
    tech: ["React", "Vite", "TMDB API", "JavaScript", "CSS"],
    github: "https://github.com/Midhun-git-hub/trailer-explorer-react",
    live: "https://trailer-explorer-react-5gfu.vercel.app/",
  },
  {
    title: "Weather App (API Integrated)",
    desc: "Weather forecasting application fetching real-time weather data using the OpenWeather API with dynamic updates.",
    tech: ["Django", "OpenWeather API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Midhun-git-hub/weather-app-using-api",
    live: "https://skypia-forcast-g0lm.onrender.com",
  },
  {
    title: "Library Management System",
    desc: "Django-based system to manage books, members, borrowing history, and library records using Django ORM.",
    tech: ["Django", "PostgreSQL", "Bootstrap", "Django ORM"],
    github: "https://github.com/Midhun-git-hub/django_library_project",
    live: null,
  },
  {
    title: "To-Do List Application",
    desc: "Task management web app with full CRUD functionality using Django forms and template inheritance.",
    tech: ["Django", "SQLite", "HTML", "CSS"],
    github: "https://github.com/Midhun-git-hub/django-todo-list",
    live: null,
  },
  {
    title: "Netflix Clone (React)",
    desc: "Frontend Netflix homepage clone built using reusable React components, props, and state management.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Midhun-git-hub/netflix-clone-using-react",
    live: "https://netflix-clone-using-react-tau.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card flex flex-col h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="project-title">
                {project.title}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-badge"
                  >
                    LIVE
                  </a>
                )}
              </h3>

              <p className="project-desc flex-grow">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-buttons mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  View Repository
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;