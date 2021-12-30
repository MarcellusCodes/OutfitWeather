import React from "react";
import Link from "next/link";
import Image from "next/image";

const Branding = () => {
  return (
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
  );
};

export default Branding;
