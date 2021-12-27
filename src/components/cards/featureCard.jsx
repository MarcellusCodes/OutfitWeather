import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const pathMotion = {
  initial: { pathLength: 0, scale: 0 },
  animate: { pathLength: 1, scale: 1 },
};

const imageMotion = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

const textMotion = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const FeatureCard = ({ feature }) => {
  return (
    <>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`flex items-center flex-col justify-between ${
          feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } space-y-20 lg:space-x-20 lg:space-y-0`}
      >
        <motion.div className="relative p-4">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="absolute top-0 left-0 w-[300px] h-[100px] sm:w-[350px] sm:h-[115px] lg:w-[430px] lg:h-[215px]"
          >
            <motion.path
              viewport={{ once: true }}
              d={feature.path}
              fill="none"
              strokeWidth={22.506}
              className="stroke-current text-light-primary dark:text-dark-tertiary transition-colors duration-300"
              strokeLinecap="round"
              variants={pathMotion}
              transition={{ type: "spring", duration: 2, delay: 0.3 }}
            />
          </motion.svg>
          <motion.div
            viewport={{ once: true }}
            variants={imageMotion}
            transition={{ type: "spring", duration: 2 }}
            className="-mb-20 lg:mb-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px]"
          >
            <Image
              src={feature.img}
              alt={feature.title}
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`relative transform rotate-[90deg] lg:rotate-0 ${
            feature.reverse ? "lg:rotate-[180deg]" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]"
          >
            <motion.path
              d="M26.457 252.018c15.098-3.588 63.08-22.422 90.583-21.525 27.504.897 45.292 27.803 74.44 26.906 29.148-.897 74.29-31.988 100.448-32.287 26.159-.299 31.091 31.24 56.502 30.493 25.412-.747 70.105-34.529 95.965-34.977 25.86-.449 35.575 32.586 59.192 32.287 23.618-.3 60.09-31.839 82.512-34.08 22.421-2.243 32.885 17.936 52.018 20.627 19.133 2.69 44.992-4.185 62.78-4.484 17.788-.3 30.942 1.793 43.946 2.69 13.005.897 28.4 2.242 34.08 2.69"
              fill="none"
              strokeWidth={25}
              className="stroke-current text-light-primary dark:text-dark-tertiary transition-colors duration-300"
              strokeLinecap="round"
              variants={pathMotion}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 2, delay: 1 }}
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="absolute -right-[3.7rem] top-[0.1rem] sm:-right-[5rem] sm:top-1 lg:-right-[7.6rem] lg:top-2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]"
          >
            <motion.path
              d="m331.39 160.538 124.664 57.4"
              fill="none"
              strokeWidth={25}
              className="stroke-current text-light-primary dark:text-dark-tertiary transition-colors duration-300"
              strokeLinecap="round"
              variants={pathMotion}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 2, delay: 1.3 }}
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="absolute -right-[3.7rem] top-[0.95rem] sm:-right-[5rem] sm:top-[1.20rem] lg:-right-[7.5rem] lg:top-7 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]"
          >
            <motion.path
              d="m327.525 207.319 132.394-36.162"
              fill="none"
              strokeWidth={25}
              className="stroke-current text-light-primary dark:text-dark-tertiary transition-colors duration-300"
              strokeLinecap="round"
              variants={pathMotion}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 2, delay: 1.3 }}
            />
          </svg>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3
            className="font-secondary text-3xl text-light-primary dark:text-dark-tertiary"
            variants={textMotion}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 2, delay: 1.3 }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            className="text-lg font-paragraph text-dark-primary dark:text-slate-100 break-all"
            variants={textMotion}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 2, delay: 1.6 }}
          >
            {feature.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FeatureCard;
