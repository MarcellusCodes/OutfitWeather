import React from "react";
import {
  PrimaryTitle,
  PrimaryButton,
  TextInput,
  NewsletterForm,
} from "../index";
import { useSelector } from "react-redux";

const Newsletter = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <section className="bg-slate-100 dark:bg-dark-secondary text-center py-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <PrimaryTitle styles={"mb-32"}>Newsletter</PrimaryTitle>
        <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors mb-16">
          Sign up to stay in the loop with my latest free to use Apps that
          enhance your life!
        </p>
        <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors lg:w-1/2 mb-8 block lg:hidden">
          Hello my name is Marcel! Im building free apps for people to use and
          make their lives easier. Feel free to subscribe to my newsletter which
          is completely spam free
        </p>
        <div className="w-full relative p-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-0 sm:space-y-5 md:space-y-10 w-full px-20">
            <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors w-1/2 hidden lg:block">
              Hello my name is Marcel! Im building free apps for people to use
              and make their lives easier. Feel free to subscribe to my
              newsletter which is completely spam free
            </p>
            <NewsletterForm />
            <p className="text-2xl break-all font-paragraph text-center text-dark-primary dark:text-slate-100 duration-300 transition-colors hidden sm:block">
              *Disclaimer you will be sent news about version updates, new apps
              and news articles.
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
          *Disclaimer you will be sent news about version updates, new apps and
          news articles.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
