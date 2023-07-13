'use client';
import { motion } from 'framer-motion';
import { pulseContainer } from './page';

export function contactBackgroundAnimation(
  changeAnimationGap: number,
  childVariant: (delay: number) => {
    animate: {
      opacity: number | number[];
      y: number | number[];
      transition: {
        duration: number;
        ease: number[];
        repeat: number;
        delay: number;
      };
    };
  },
  animationStop: boolean,
  isNotXlMonitor: boolean
) {
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
      <motion.div
        className=' bg-red-500  grow'
        variants={childVariant(0)}
        key={`${animationStop.toString()}0`}
      />
      <motion.div
        className=' bg-yellow-500 grow'
        variants={childVariant(0.5)}
        key={`${animationStop.toString()}1`}
      />
      <motion.div
        className=' bg-green-500 grow'
        variants={childVariant(1)}
        key={`${animationStop.toString()}2`}
      />
      <motion.div
        className=' bg-cyan-500 grow '
        variants={childVariant(1.5)}
        key={`${animationStop.toString()}3`}
      />
      <motion.div
        className=' bg-purple-500 grow'
        variants={childVariant(2)}
        key={`${animationStop.toString()}4`}
      />
      {isNotXlMonitor && (
        <>
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0)}
            key={`${animationStop.toString()}5`}
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}
            key={`${animationStop.toString()}6`}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1)}
            key={`${animationStop.toString()}7`}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
            key={`${animationStop.toString()}8`}
          />
          <motion.div
            className=' bg-purple-500 grow'
            variants={childVariant(2)}
            key={`${animationStop.toString()}9`}
          />
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0)}
            key={`${animationStop.toString()}10`}
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}
            key={`${animationStop.toString()}11`}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1)}
            key={`${animationStop.toString()}12`}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
            key={`${animationStop.toString()}13`}
          />
          <motion.div
            className=' bg-purple-500 grow'
            variants={childVariant(2)}
            key={`${animationStop.toString()}14`}
          />
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0)}
            key={`${animationStop.toString()}15`}
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}
            key={`${animationStop.toString()}16`}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1)}
            key={`${animationStop.toString()}17`}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
            key={`${animationStop.toString()}18`}
          />
          <motion.div
            className=' bg-purple-500 grow'
            variants={childVariant(2)}
            key={`${animationStop.toString()}19`}
          />
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0)}
            key={`${animationStop.toString()}20`}
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}
            key={`${animationStop.toString()}21`}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1)}
            key={`${animationStop.toString()}22`}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
            key={`${animationStop.toString()}23`}
          />
          <motion.div
            className=' bg-purple-500 grow '
            variants={childVariant(2)}
            key={`${animationStop.toString()}24`}
          />
        </>
      )}
    </motion.div>
  );
}
