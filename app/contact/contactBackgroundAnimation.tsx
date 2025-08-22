'use client';
import { motion } from 'framer-motion';

const pulseContainer = {
  animate: {
    transition: {
      repeat: Infinity,
    },
  },
};

export function contactBackgroundAnimation(
  changeAnimationGap: number,
  childVariant: (delay: number) => {
    animate: {
      opacity: number | number[];
      y: number | number[];
      transition: {
        duration: number;
        ease: any;
        repeat: number;
        delay: number;
      };
    };
  },
  animationStop: boolean,
  isNotXlMonitor: boolean
) {
  const colorClasses = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-cyan-500',
    'bg-purple-500',
  ];

  const delayTimes = [0, 0.5, 1, 1.5, 2];
  const divCount = isNotXlMonitor ? 25 : 5;

  const createDivs = (count: number) => {
    const divs = [];
    for (let i = 0; i < count; i++) {
      const colorIndex = i % colorClasses.length;
      const variant = childVariant(delayTimes[colorIndex]);
      divs.push(
        <motion.div
          className={`${colorClasses[colorIndex]} grow`}
          animate={variant.animate}
          key={`${animationStop.toString()}${i}`}
        />
      );
    }
    return divs;
  };

  return (
    <motion.div
      variants={pulseContainer}
      initial='animate'
      animate='animate'
      style={{ gap: `${changeAnimationGap}rem` }}
      className={
        '  flex  h-full w-full  border z-0  rounded-md  border-blue-900 bg-slate-900 absolute p-12  '
      }
    >
      {createDivs(divCount)}
    </motion.div>
  );
}
