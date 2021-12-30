import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Menu, Cross, UtilityButton, Branding } from "../index";
import useTheme from "../../utils/useTheme";
import { changeTheme } from "../../features/theme/themeSlice";
import { toggle } from "../../features/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar({ children }) {
  const { colorTheme, setTheme } = useTheme();
  const theme = useSelector((state) => state.theme.theme);
  const sidebar = useSelector((state) => state.sidebar.display);
  const dispatch = useDispatch();
  return (
    <nav className="bg-slate-100 dark:bg-dark-secondary transition-colors duration-300">
      <div className="w-full bg-light-primary dark:bg-dark-primary transition-colors duration-300 px-4 sm:px-0">
        <div className="container mx-auto py-4 flex flex-row justify-between items-center">
          <Link href="/">
            <div className="flex flex-col sm:flex-row items-center cursor-pointer">
              <Image
                src="/images/branding.svg"
                alt="App Icon"
                width={64}
                height={64}
              />
              <h1 className="text-slate-100 text-2xl font-primary">
                OutfitWeather
              </h1>
            </div>
          </Link>
          <ul className="flex flex-row items-center space-x-6">
            {children}
            <UtilityButton
              firstIcon={<Moon />}
              secondIcon={<Sun />}
              condition={theme}
              rule="dark"
              onClick={() => {
                setTheme(colorTheme);
                dispatch(changeTheme());
              }}
              styles={"hidden sm:block"}
            />
            <UtilityButton
              firstIcon={<Cross />}
              secondIcon={<Menu />}
              condition={sidebar}
              rule={true}
              onClick={() => {
                dispatch(toggle());
              }}
              styles={"block lg:hidden"}
            />
          </ul>
        </div>
      </div>

      <svg width={1920} height={100} xmlns="http://www.w3.org/2000/svg">
        <path
          d="m0 96 17.8-14.2c17.9-14.1 53.5-42.5 89-45.3 35.5-2.8 70.9 19.8 106.4 18 35.5-1.8 71.1-28.2 106.8-33.3C355.7 16 391.3 32 426.8 37.3c35.5 5.4 70.9 0 106.4-2.3s71.1-1.7 106.8 2.8S711.3 50.7 746.8 54c35.5 3.3 70.9 1.7 106.4-7.5S924.3 20.7 960 20.2s71.3 15.1 106.8 30.1c35.5 15 70.9 29.4 106.4 23.2 35.5-6.2 71.1-32.8 106.8-46.5 35.7-13.7 71.3-14.3 106.8-14 35.5.3 70.9 1.7 106.4 15.7s71.1 40.6 106.8 43.6 71.3-17.6 106.8-25.3c35.5-7.7 70.9-2.3 106.4 6s71.1 19.7 89 25.3L1920 84V0H0Z"
          className="transition-colors duration-300 text-light-primary fill-current dark:text-dark-primary"
        />
      </svg>
    </nav>
  );
}

export default Navbar;
