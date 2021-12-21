import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const rectangleMotion = {
  rest: {
    x: "-100%",
    transition: {
      type: "spring",
    },
  },
  hover: {
    x: "-75%",
    transition: {
      type: "spring",
    },
  },
};

const buttonMotion = {
  rest: {
    color: "#F1F5F9",
    transition: {
      type: "spring",
    },
  },
  hover: {
    color: "#F58634",
    transition: {
      type: "spring",
    },
  },
};

function NavItem({ children, href }) {
  return (
    <Link href={href}>
      <motion.li
        className="bg-light-secondary dark:bg-dark-secondary text-slate-100 rounded-md text-lg py-2 px-6 font-paragraph relative overflow-x-hidden cursor-pointer xs:hidden sm:hidden md:hidden lg:block hidden"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonMotion}
      >
        <motion.div
          variants={rectangleMotion}
          className="h-full w-1/2 absolute left-0 top-0 bg-light-tertiary"
        ></motion.div>
        {children}
      </motion.li>
    </Link>
  );
}

export default NavItem;
