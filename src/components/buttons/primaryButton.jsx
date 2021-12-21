import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const transition = {
  type: "spring",
  scale: { type: "spring", duration: 0.4 },
  duration: 0.4,
};

const PrimaryButton = ({ children, styles }) => {
  const theme = useSelector((state) => state.theme.theme);
  const buttonMotion = {
    initial: {
      color: "#f1f5f9",
    },
    hover: {
      color: "#F58634",
    },
    tap: {
      scale: 0.9,
      rotate: 5,
      color: "#F58634",
    },
  };

  const rectangleMotion = {
    hover: {
      scale: 0,
    },
  };

  const borderMotion = {
    initial: { scale: 1.2, opacity: 0 },
    hover: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      animate="initial"
      transition={transition}
      variants={buttonMotion}
      className={`relative py-2 px-6 font-paragraph z-20 rounded-md ${styles}`}
    >
      <span className="relative z-20">{children}</span>
      <motion.div
        transition={transition}
        variants={rectangleMotion}
        className="absolute top-0 left-0 w-full h-full rounded-md z-10 bg-light-primary dark:bg-dark-primary transition-colors duration-300"
      ></motion.div>
      <motion.div
        transition={transition}
        variants={borderMotion}
        className="absolute top-0 left-0 w-full h-full rounded-md z-10 bg-transparent border-2 border-light-primary dark:border-dark-primary "
      ></motion.div>
    </motion.button>
  );
};

export default PrimaryButton;
