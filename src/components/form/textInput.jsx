import React from "react";

const TextInput = ({ type, placeholder, styles }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`py-2 px-6 font-paragraph text-xl rounded-md focus:outline-none bg-[#00af91B3] dark:bg-[#1a1d24B3] border-2 border-light-primary dark:border-dark-primary hover:bg-[#00af9199] dark:hover:bg-[#1a1d2499] dark:focus:bg-transparent dark:text-slate-100 focus:bg-transparent text-dark-primary transition-colors duration-400 ${styles}`}
    />
  );
};

export default TextInput;
