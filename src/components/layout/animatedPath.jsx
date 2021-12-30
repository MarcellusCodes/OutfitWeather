import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { PathMotion } from "../../constants/index";

const AnimatedPath = ({ path }) => {
  const [pathLength, setPathLength] = useState(true);

  const initial = {
    pathLength: 0,
    scale: 0,
    transition: {
      bounce: 0,
      type: "spring",
      duration: 1,
    },
  };

  const animate = {
    pathLength: 1,
    scale: 1,
  };

  const resetPath = (condition) => {
    setPathLength(condition);
  };
  return (
    <motion.svg
      key={path.id}
      whileHover={() => {
        resetPath(false);
      }}
      onTouchStart={() => {
        resetPath(false);
      }}
      onTouchEnd={() => {
        resetPath(true);
      }}
      onHoverEnd={() => {
        resetPath(true);
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 400"
      className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] transform z-20 ${path.x} ${path.y} ${path.rotate}`}
    >
      <motion.path
        fill="none"
        d={path.path}
        strokeWidth={25}
        className="stroke-current text-light-primary dark:text-dark-tertiary transition-colors duration-300"
        strokeLinecap="round"
        initial={PathMotion.initial}
        animate={pathLength ? PathMotion.animate : PathMotion.initial}
        transition={{ type: "spring", duration: 1 }}
      />
    </motion.svg>
  );
};

export default AnimatedPath;
