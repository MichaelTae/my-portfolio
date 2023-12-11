import { textContainer, textVariant2 } from '../utils/motion/motion';
import React from 'react';
import { motion } from 'framer-motion';
export const TypingText = ({
  title,
  textStyles,
  startDelay,
}: {
  title: string;
  textStyles: string;
  startDelay: number;
}) => (
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

export const TitleText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[5px] font-bold 2xl:text-[45px] text-[30px] xl:text-[36px] md:text-[28px]  ${textStyles}`}
  >
    {title}
  </motion.h2>
);
