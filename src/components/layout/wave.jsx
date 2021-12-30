import React from "react";
import { useSelector } from "react-redux";

const Wave = ({ light_classname, dark_classname }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="bg-slate-100 dark:bg-dark-secondary transition-colors duration-300">
      <div
        className={`w-full aspect-[1920/200] svg-bg ${
          theme === "light" ? light_classname : dark_classname
        }`}
      ></div>
    </div>
  );
};

export default Wave;
