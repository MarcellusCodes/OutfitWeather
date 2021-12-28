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
import Link from "next/link";

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
              "text-2xl w-full sm:w-auto sm:text-xl py-1 sm:py-2 block sm:hidden"
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
      <footer className="bg-slate-100 dark:bg-dark-secondary text-center transition-colors duration-300 relative w-full">
        <div className="container absolute w-full bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-between">
          <Link href="/">
            <div className="flex flex-col sm:flex-row items-center cursor-pointer">
              <Image
                src="/images/branding.svg"
                alt="App Icon"
                width={64}
                height={64}
              />
              <h1 className="text-slate-100 text-2xl font-primary">
                OutfitWeather ™ by Marcel Pohl
              </h1>
            </div>
          </Link>
          <PrimaryButton styles={"text-2xl sm:text-3xl"}>
            ☕ Buy me a Coffee
          </PrimaryButton>
        </div>
        <svg
          width={1920}
          height={600}
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="m0 175 32-10.7c32-10.6 96-32 160-39.8 64-7.8 128-2.2 192 19.8s128 60.4 192 60.4 128-38.4 192-55.2c64-16.8 128-12.2 192 4.8s128 46.4 192 41.9 128-42.9 192-50.4 128 15.9 192 38.2c64 22.3 128 43.7 192 33.7s128-51.4 160-72l32-20.7v476H0Z"
            className="fill-current text-light-primary dark:text-dark-tertiary transition-colors duration-300"
          />
          <path
            d="m0 340 32 3.8c32 3.9 96 11.5 160-.5s128-43.6 192-54.3c64-10.7 128-.3 192 3.7s128 1.6 192 3.5c64 1.8 128 7.8 192 5.6 64-2.1 128-12.5 192-1.8s128 42.3 192 56.5c64 14.2 128 10.8 192-.8 64-11.7 128-31.7 192-41.4 64-9.6 128-9 160-8.6l32 .3v295H0Z"
            className="fill-current text-[#00977e] dark:text-[#D6732C] transition-colors duration-300"
          />
          <path
            d="m0 502 32-14.8c32-14.9 96-44.5 160-49.2 64-4.7 128 15.7 192 14.8 64-.8 128-22.8 192-27.3s128 8.5 192 25.2c64 16.6 128 37 192 45.6 64 8.7 128 5.7 192-9.6 64-15.4 128-43 192-56s128-11.4 192-4.2 128 19.8 192 24.8 128 2.4 160 1l32-1.3v150H0Z"
            fill="#00806b"
            className="fill-current text-[#00806b] dark:text-[#B76124] transition-colors duration-300"
          />
        </svg>
      </footer>
    </>
  );
}
