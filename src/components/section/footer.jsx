import React from "react";
import { PrimaryButton, Branding } from "../index";

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-dark-secondary text-center transition-colors duration-300 relative w-full">
      <div className="container absolute w-full bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-between space-y-5 sm:space-y-0">
        <Branding />
        <PrimaryButton styles={"text-2xl sm:text-2xl"}>
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
  );
};

export default Footer;
