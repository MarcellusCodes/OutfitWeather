import {
  Navbar,
  NavItem,
  PrimaryTitle,
  PrimaryButton,
} from "../src/components/index";
import Image from "next/image";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <Navbar>
        <NavItem href="try-it-out">🔥 Try it out</NavItem>
        <NavItem href="https://buymeacoffee.com/marcelluscodes">
          Support
        </NavItem>
        <NavItem href="/register">Create Account</NavItem>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/about">About</NavItem>
      </Navbar>
      <header
        className={`bg-slate-100 dark:bg-dark-secondary transition-colors duration-300 pt-12 relative svg-bg header-bg-light z-10 aspect-[1920/700] ${
          theme === "light" ? "header-bg-light" : "header-bg-dark"
        }`}
      >
        <div className="container mx-auto z-20 text-center">
          <div className="flex flex-col items-center space-y-10">
            <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 items-center space-x-6 sm:space-x-24 ">
              <PrimaryTitle
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: -12 }}
                transition={{ type: "spring" }}
              >
                Never
              </PrimaryTitle>
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring" }}
                className="text-2xl sm:text-4xl text-light-tertiary font-paragraph"
              >
                to
              </motion.span>
              <PrimaryTitle
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: 12 }}
                transition={{ type: "spring" }}
              >
                Cold
              </PrimaryTitle>
            </div>
            <div className="flex items-center space-x-12 sm:flex-row flex-col space-y-12 sm:space-y-0">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, rotate: -12 }}
                transition={{ type: "spring" }}
                className="p-4 shadow-lg shadow-light-primary rounded-md border-2 bg-slate-100
              border-light-primary dark:border-dark-primary transition-colors dark:text-dark-tertiary dark:shadow-dark-tertiary dark:bg-dark-secondary duration-300 transform -rotate-12 z-20"
              >
                <Image
                  src="/images/rain.png"
                  alt="Raining Cloud"
                  width={128}
                  height={128}
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, rotate: 12 }}
                transition={{ type: "spring" }}
                className="p-4 shadow-lg shadow-light-primary rounded-md border-2 bg-slate-100 dark:bg-dark-secondary border-light-primary dark:border-dark-primary transition-colors dark:text-dark-tertiary dark:shadow-dark-tertiary duration-300 transform rotate-12"
              >
                <Image
                  src="/images/cold.png"
                  alt="Freezing Men"
                  width={128}
                  height={128}
                />
              </motion.div>
            </div>
            <div className="flex items-center space-x-12 sm:flex-row flex-col space-y-12 sm:space-y-0">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, rotate: 12 }}
                transition={{ type: "spring" }}
                className="p-4 shadow-lg shadow-light-primary rounded-md border-2 border-light-primary bg-slate-100 dark:bg-dark-secondary dark:border-dark-primary transition-colors dark:text-dark-tertiary dark:shadow-dark-tertiary duration-300 transform rotate-12"
              >
                <Image
                  src="/images/sun.png"
                  alt="Sun"
                  width={128}
                  height={128}
                />
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, rotate: -12 }}
                transition={{ type: "spring" }}
                className="p-4 shadow-lg shadow-light-primary rounded-md border-2 border-light-primary bg-slate-100 dark:bg-dark-secondary dark:border-dark-primary transition-colors dark:text-dark-tertiary dark:shadow-dark-tertiary duration-300 transform -rotate-12"
              >
                <Image
                  src="/images/hot.png"
                  alt="Sweating Men"
                  width={128}
                  height={128}
                />
              </motion.div>
            </div>
            <div className="flex sm:flex-row flex-col space-y-12 sm:space-y-0 items-center space-x-6 sm:space-x-24">
              <PrimaryTitle
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: 12 }}
                transition={{ type: "spring" }}
              >
                Or
              </PrimaryTitle>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring" }}
                className="text-4xl text-light-tertiary font-paragraph"
              >
                to
              </motion.span>
              <PrimaryTitle
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: -12 }}
                transition={{ type: "spring" }}
              >
                Warm
              </PrimaryTitle>
            </div>
          </div>
          <PrimaryButton styles={"text-2xl sm:text-3xl mt-28"}>
            🔥 Try it out
          </PrimaryButton>
        </div>
      </header>
      <section className="bg-slate-100 dark:bg-dark-secondary">
        <div
          className={`w-full aspect-[1920/200]  svg-bg ${
            theme === "light" ? "header-wave-light" : "header-wave-dark"
          }`}
        ></div>
      </section>
    </>
  );
}
