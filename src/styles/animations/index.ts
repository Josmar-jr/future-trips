export const containerAnimate = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.75,
    },
  },
};

export const itemAnimate = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.2, 0.7, 1, 1],
      type: 'spring',
    },
  },
};
