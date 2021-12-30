import React from "react";
import { PrimaryTitle, AuthBg } from "../index";
import { useSelector } from "react-redux";

const AuthLayout = ({ title, formTitle, children }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <AuthBg />
      <div className="container mx-auto">
        <PrimaryTitle styles={"mb-32"}>{title}</PrimaryTitle>
        <h2 className="font-secondary text-4xl text-dark-primary dark:text-slate-100 transition-colors duration-300 text-center block sm:hidden">
          {formTitle}
        </h2>
        <div
          className={`w-full aspect-[2400/2000] sm:aspect-[1600/1000] lg:aspect-[1000/400] svg-bg relative ${
            theme === "light" ? "auth-blob-light" : "auth-blob-dark"
          }`}
        >
          <div className="flex flex-col items-center space-y-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-1/2 sm:w-10/12 lg:w-1/2">
            <h2 className="font-secondary text-4xl text-dark-primary dark:text-slate-100 transition-colors duration-300 hidden sm:block mb-6">
              {formTitle}
            </h2>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
