import React from "react";
import { motion } from "framer-motion";

function SvgIcon({
  initial,
  animate,
  exit,
  variants,
  key,
  width,
  height,
  color,
  children,
}) {
  return (
    <motion.svg
      initial={initial}
      animate={animate}
      exit={exit}
      className="group-hover:text-light-tertiary group-hover:fill-current transition-colors duration-300"
      variants={variants}
      key={key}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
    >
      {children}
    </motion.svg>
  );
}

export default SvgIcon;
