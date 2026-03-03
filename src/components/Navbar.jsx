import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
  ];

  //  Smooth scroll with dynamic offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar.offsetHeight;

    const offsetPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  //  Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar.offsetHeight;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - navbarHeight - 100;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-medium tracking-wide text-white"
        >
          Port
          <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            folio
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-10 text-neutral-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <button
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors duration-300 ${
                  active === link.id
                    ? "text-purple-400"
                    : "hover:text-purple-400"
                }`}
              >
                {link.name}
              </button>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-linear-to-r from-purple-400 to-indigo-500 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 rounded-md bg-linear-to-r from-purple-500 to-indigo-600 text-white hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
          >
            Contact
          </button>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="xl:hidden bg-neutral-950/40 backdrop-blur-md border-t border-white/5 overflow-hidden"
    >
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
        className="flex flex-col gap-6 px-6 py-6 text-neutral-300 font-medium"
      >
        {navLinks.map((link) => (
          <motion.button
            key={link.id}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.25 }}
            onClick={() => scrollToSection(link.id)}
            className={`text-left transition ${
              active === link.id
                ? "text-purple-400"
                : "hover:text-purple-400"
            }`}
          >
            {link.name}
          </motion.button>
        ))}

        <motion.button
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.25 }}
          onClick={() => scrollToSection("contact")}
          className="mt-2 px-5 py-2 rounded-md bg-linear-to-r from-purple-500 to-indigo-600 text-white text-center"
        >
          Contact
        </motion.button>
      </motion.ul>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;