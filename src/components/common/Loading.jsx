// components/common/Loading.jsx
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/logo.png";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giữ màn hình intro khoảng 3.5 giây
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: [0.6, 1.4, 1],
              opacity: [0, 1, 1],
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="DinoMovie Logo"
              className="w-24 h-24 object-contain"
              animate={{
                filter: [
                  "drop-shadow(0 0 0px rgba(16,185,129,0.8))",
                  "drop-shadow(0 0 20px rgba(16,185,129,0.9))",
                  "drop-shadow(0 0 0px rgba(16,185,129,0.8))",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
            {/* Tên */}
            <motion.span
              className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
              animate={{
                textShadow: [
                  "0 0 0px rgba(16,185,129,0.7)",
                  "0 0 15px rgba(16,185,129,0.9)",
                  "0 0 0px rgba(16,185,129,0.7)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              DinoMovie
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
