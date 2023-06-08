import { textContainer, textVariant2 } from '../utils/motion/motion';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
export const TypingText = ({ title, textStyles,startDelay }:{title:string, textStyles:string,startDelay:number}) => (
    
  <motion.p
    variants={textContainer(startDelay)}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    viewport={{ once: true }}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }:{title:string, textStyles:string}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);



export const AnimatedTextSorting = ({ delay = 0 }) => {
  const controls = useAnimation();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const targetValue = "I've kinda ran out of things to say about myself but in the interest of symmetry I'll just write a few more lines. Thank you for reading and if you have any questions feel free to contact me!";
  const [headerText, setHeaderText] = useState(targetValue);

  useEffect(() => {
    let animationFrameId = 0;
    let iteration = 0;
    
    const animateText = () => {
      setHeaderText(
        targetValue.slice(0, Math.ceil(iteration)) +
          targetValue.slice(Math.ceil(iteration)).replace(/./g, () => letters[Math.floor(Math.random() * 26)])
      );
      if (iteration < targetValue.length) {
        iteration += 1 / 3;
        animationFrameId = requestAnimationFrame(animateText);
      }
    };
    
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animateText);
      controls.start({ opacity: 1 }).catch(() => {});
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      controls.stop();
    };
  }, [delay, controls]);

  return <motion.p animate={controls} initial={{ opacity: 0 }}>{headerText}</motion.p>;
};


  
