const ThemeMotion = {
  initial: {
    y: -50,
    transition: {
      type: "spring",
      bounce: 0,
    },
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",

      bounce: 0,
      duration: 0.3,
    },
  },

  exit: {
    y: -50,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export default ThemeMotion;
