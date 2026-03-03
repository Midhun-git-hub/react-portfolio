import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Comment } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null); // "success" | "error" | null

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

            {/* Form Fields */}
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

            {/* Button + Reply Note */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-linear-to-r from-purple-500 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/40 transition relative z-10"
              >
                Send Message
              </motion.button>

              <br />
              <br />

              {/* Reply time note */}
              <AnimatePresence>
                {messageStatus === "success" && (
                  <motion.p
                    className="mt-2 text-sm text-gray-400 text-center"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.8 }}
                  >
                    I’ll reply within 24 hours 💌
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
