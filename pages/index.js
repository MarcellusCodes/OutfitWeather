import {
  Navbar,
  NavItem,
  PrimaryTitle,
  PrimaryButton,
  FeatureCard,
  TextInput,
} from "../src/components/index";
import Image from "next/image";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Features } from "../src/constants/index";

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
        className={`bg-slate-100 dark:bg-dark-secondary transition-colors duration-300 pt-12 relative svg-bg z-10 aspect-[1920/700] ${
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
      <div className="bg-slate-100 dark:bg-dark-secondary transition-colors duration-300">
        <div
          className={`w-full aspect-[1920/200] svg-bg ${
            theme === "light" ? "header-wave-light" : "header-wave-dark"
          }`}
        ></div>
      </div>
      <section className="bg-slate-100 dark:bg-dark-secondary text-center py-20">
        <div className="container mx-auto">
          <PrimaryTitle styles={"mb-32"}>Features</PrimaryTitle>
          <div className="flex flex-col items-center space-y-20 px-4 md:px-0">
            {Features.map((feature) => (
              <FeatureCard feature={feature} />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-slate-100 dark:bg-dark-secondary transition-colors duration-300">
        <div
          className={`w-full aspect-[1920/200] svg-bg ${
            theme === "light" ? "feature-wave-light" : "feature-wave-dark"
          }`}
        ></div>
      </div>
      <section className="bg-slate-100 dark:bg-dark-secondary text-center py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <PrimaryTitle styles={"mb-16"}>Newsletter</PrimaryTitle>
          <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors mb-16">
            Sign up to stay in the loop with my latest free to use Apps that
            enhance your life!
          </p>
          <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors lg:w-1/2 mb-8 block lg:hidden">
            Hello my name is Marcel! Im building free apps for people to use and
            make their lives easier. Feel free to subscribe to my newsletter
            which is completely spam free
          </p>
          <div className="w-full relative p-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-0 sm:space-y-5 md:space-y-10 w-full px-20">
              <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors w-1/2 hidden lg:block">
                Hello my name is Marcel! Im building free apps for people to use
                and make their lives easier. Feel free to subscribe to my
                newsletter which is completely spam free
              </p>
              <div className="flex flex-col items-center justify-center sm:flex-row w-full space-y-0 sm:space-x-2 sm:space-y-0 sm:-mt-0">
                <TextInput
                  type="email"
                  placeholder="Your Email"
                  styles={"w-full sm:w-1/2 text-base sm:text-xl py-1 sm:py-2"}
                />
                <PrimaryButton
                  styles={
                    "text-2xl w-full sm:w-auto text-lg sm:text-xl py-1 sm:py-2 hidden sm:block"
                  }
                >
                  🖖 Sign Up
                </PrimaryButton>
              </div>

              <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors hidden sm:block">
                *Disclaimer you will be sent news about version updates, new
                apps and news articles.
              </p>
            </div>

            <div
              className={`w-full aspect-[800/400] svg-bg ${
                theme === "light"
                  ? "newsletter-wave-light"
                  : "newsletter-wave-dark"
              }`}
            ></div>
          </div>
          <PrimaryButton
            styles={
              "text-2xl w-full sm:w-auto text-lg sm:text-xl py-1 sm:py-2 block sm:hidden"
            }
          >
            🖖 Sign Up
          </PrimaryButton>
          <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 mt-8 transition-colors block sm:hidden">
            *Disclaimer you will be sent news about version updates, new apps
            and news articles.
          </p>
        </div>
      </section>
    </>
  );
}
