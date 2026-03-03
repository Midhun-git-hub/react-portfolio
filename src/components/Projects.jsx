import { motion } from "framer-motion";

const projects = [
  {
    title: "Library Management System",
    desc: "Django & PostgreSQL system to manage books, members, and borrowing history using Django ORM with responsive UI.",
    github: "https://github.com/Midhun-git-hub/django_library_project",
    live: null,
  },
  {
    title: "To-Do List Application",
    desc: "Full-stack Django task manager with CRUD functionality, Django forms & template inheritance.",
    github: "https://github.com/Midhun-git-hub/django-todo-list",
    live: null,
  },
  {
    title: "E-Commerce Website",
    desc: "Full-stack Django app with product listing, authentication, cart & order workflow.",
    github: "https://github.com/Midhun-git-hub/django_ecommerce_project.git",
    live: "https://django-ecommerce-project-el5l.onrender.com",
  },
  {
    title: "Weather App (API Integrated)",
    desc: "Django + OpenWeather API app fetching real-time weather data dynamically.",
    github: "https://github.com/Midhun-git-hub/weather-app-using-api",
    live: "https://skypia-forcast-g0lm.onrender.com",
  },
  {
    title: "Netflix Clone (React)",
    desc: "React-based Netflix homepage clone using components, props & state.",
    github: "https://github.com/Midhun-git-hub/netflix-clone-using-react",
    live: "https://netflix-clone-using-react-tau.vercel.app/",
  },
  {
    title: "Trailer Explorer",
    desc: "Modern React + Vite movie browsing app integrated with TMDB API.",
    github: "https://github.com/Midhun-git-hub/trailer-explorer-react",
    live: "https://trailer-explorer-react-5gfu.vercel.app/",
  },
  {
    title: "Automated Email Content Platform",
    desc: "Full-stack SaaS using React + Django REST with JWT, Celery & automated email delivery.",
    github: "https://github.com/Midhun-git-hub/mailpr",
    live: "https://mailpr-frontend.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
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

              <p className="project-desc">{project.desc}</p>

              <div className="project-buttons">
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