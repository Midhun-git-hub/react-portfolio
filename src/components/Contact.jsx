import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Comment } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [letters, setLetters] = useState([]);

  /* CODE TOKENS */

  const htmlTags = ["<div>", "<section>", "<span>", "<form>", "<button>", "</div>", "</section>"];
  const jsKeywords = ["const", "let", "function", "return", "async", "await"];
  const reactHooks = ["useState()", "useEffect()", "useRef()"];
  const pythonWords = ["def", "return", "import", "class"];
  const djangoWords = ["request", "response", "views.py", "models.Model", "urlpatterns"];
  const tailwindClasses = ["flex", "grid", "px-4", "py-2", "bg-black", "text-white", "rounded-lg"];
  const symbols = ["{}", "[]", "</>", "=>", "()"];

  const allCode = [
    ...htmlTags,
    ...jsKeywords,
    ...reactHooks,
    ...pythonWords,
    ...djangoWords,
    ...tailwindClasses,
    ...symbols,
  ];

  /* OPTIONAL COLORS */

  const colors = [
    "text-indigo-400/50",
    "text-purple-400/50",
    "text-blue-400/50",
  ];

  const sizes = ["text-xs", "text-sm", "text-base"];

  /* EMAIL SEND */

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setMessageStatus("success");
          form.current.reset();
          setTimeout(() => setMessageStatus(null), 3000);
        },
        (error) => {
          setLoading(false);
          setMessageStatus("error");
          console.log(error.text);
          setTimeout(() => setMessageStatus(null), 3000);
        },
      );
  };

  /* CODE RAIN */

  useEffect(() => {
    const interval = setInterval(() => {
      const newLetter = {
        id: Math.random(),
        char: allCode[Math.floor(Math.random() * allCode.length)],
        left: Math.random() * 100,
        duration: 4 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
      };

      setLetters((prev) => [...prev, newLetter]);

      setTimeout(() => {
        setLetters((prev) => prev.slice(1));
      }, 7000);
    }, 220);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-24 px-6 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full relative">
        <h2 className="text-4xl font-semibold text-center mb-12 bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="relative">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-linear-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-white/10 relative overflow-hidden"
          >

            {/* CODE RAIN INSIDE FORM */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {letters.map((letter) => (
                <span
                  key={letter.id}
                  className={`absolute ${letter.color} font-mono whitespace-nowrap animate-fall`}
                  style={{
                    left: `${letter.left}%`,
                    top: "-40px",
                    animationDuration: `${letter.duration}s`,
                  }}
                >
                  {letter.char}
                </span>
              ))}
            </div>

            {/* Loader overlay */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  className="absolute -top-6 -bottom-6 left-0 right-0 bg-black/70 flex items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Comment
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="sending-loading"
                    color="#FFFFFF"
                    backgroundColor="#6366F1"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success/Error Message */}
            <AnimatePresence>
              {messageStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`absolute top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg font-semibold text-center shadow-lg z-30 ${messageStatus === "success"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    }`}
                >
                  {messageStatus === "success"
                    ? "Message has been sent successfully ✅"
                    : "Something went wrong ❌ Please try again."}
                </motion.div>
              )}
            </AnimatePresence>

            {/* FORM CONTENT */}
            <div className="relative z-10 space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 resize-none"
              ></textarea>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-linear-to-r from-purple-500 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/40 transition"
                >
                  Send Message
                </motion.button>

                <br />
                <br />

                <AnimatePresence>
                  {messageStatus === "success" && (
                    <motion.p
                      className="mt-2 text-sm text-gray-400 text-center"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      I’ll reply within 24 hours 💌
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-40px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(600px);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;