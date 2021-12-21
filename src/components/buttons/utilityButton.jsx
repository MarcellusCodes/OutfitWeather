import React from "react";
import { AnimatePresence } from "framer-motion";
import { SvgIcon, Moon, Sun } from "../index";
import { useDispatch, useSelector } from "react-redux";
import useTheme from "../../utils/useTheme";
import { changeTheme } from "../../features/theme/themeSlice";
import { ThemeMotion } from "../../constants/index";
const UtilityButton = ({
  onClick,
  firstIcon,
  secondIcon,
  condition,
  rule,
  styles,
}) => {
  const { colorTheme, setTheme } = useTheme();
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <button
      onClick={onClick}
      className={`bg-light-secondary dark:bg-dark-secondary group text-slate-100 rounded-md text-lg py-2.5 px-6 font-paragraph relative overflow-x-hidden cursor-pointer ${styles}`}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {condition === rule ? (
          <SvgIcon
            initial="initial"
            animate="animate"
            exit="exit"
            variants={ThemeMotion}
            key="moon"
            width={24}
            height={24}
            color="#FFFFFF"
          >
            {firstIcon}
          </SvgIcon>
        ) : (
          <SvgIcon
            initial="initial"
            animate="animate"
            exit="exit"
            variants={ThemeMotion}
            key="sun"
            width={24}
            height={24}
            color="#FFFFFF"
          >
            {secondIcon}
          </SvgIcon>
        )}
      </AnimatePresence>
    </button>
  );
};

export default UtilityButton;
