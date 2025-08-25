// pages/ErrorPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-9xl font-extrabold text-red-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
