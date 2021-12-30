import React from "react";
import { AnimatedPaths } from "../../constants/index";
import { AnimatedPath } from "../index";

const AuthBg = () => {
  return (
    <>
      {AnimatedPaths.map((path) => (
        <AnimatedPath path={path} />
      ))}
    </>
  );
};

export default AuthBg;
