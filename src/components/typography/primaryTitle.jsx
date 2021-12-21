import React from "react";
import { motion } from "framer-motion";
const PrimaryTitle = ({
  initial,
  animate,
  exit,
  variants,
  transition,
  children,
  styles,
}) => {
  return (
    <motion.h2
      initial={initial}
      whileInView={animate}
      exit={exit}
      variants={variants}
      transition={transition}
      className={`text-6xl bg-slate-100 rounded-md text-light-primary shadow-light-primary shadow-md border-2 border-light-primary inline-block py-2 px-6 dark:border-dark-primary dark:bg-dark-secondary transition-colors dark:text-dark-tertiary dark:shadow-dark-tertiary font-primary duration-300 ${styles}`}
    >
      {children}
    </motion.h2>
  );
};

export default PrimaryTitle;
