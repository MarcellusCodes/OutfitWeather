import React from "react";
import { PrimaryTitle, FeatureCard } from "../index";
import { Features } from "../../constants/index";

const Feature = () => {
  return (
    <section className="bg-slate-100 dark:bg-dark-secondary text-center py-20 transition-colors duration-300">
      <div className="container mx-auto">
        <PrimaryTitle styles={"mb-32"}>Features</PrimaryTitle>
        <div className="flex flex-col items-center space-y-20 px-4 md:px-0">
          {Features.map((feature) => (
            <FeatureCard feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
