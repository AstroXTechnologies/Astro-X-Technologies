export const heroVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const translateVariant = ({
  upDown = false,
  dur = 0.5,
  initial = {},
  animate = {},
} = {}) => {
  return {
    hidden: { opacity: 0, y: upDown ? -25 : 25, ...initial },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: dur,
        ease: "easeInOut",
      },
      ...animate,
    },
  };
};

export const staggerParentVariant = ({ reverse = false, dur = 0.7 } = {}) => {
  return {
    hidden: {},
    animate: {
      transition: {
        staggerChildren: dur,
        staggerDirection: reverse ? -1 : 1,
      },
    },
  };
};

export const scaleVariant = ({ dur = 1.2 } = {}) => {
  return {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [1, 1.15, 1],
      transition: {
        duration: dur,
        ease: "easeInOut",
      },
    },
  };
};
