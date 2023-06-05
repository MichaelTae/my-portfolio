'use client';

import { motion } from 'framer-motion';
import AnimatedList from '../components/animatedlist/animated-list';
import Image from 'next/image';

const items = [
  { title: 'Item 1', action: 'Action 1' },
  { title: 'Item 2', action: 'Action 2' },
  { title: 'Item 3', action: 'Action 3' },
];

const container = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 0.70,
    scale: 1,
    
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.7,
     


    },
  },
};

const item = {
  hidden: { y: -500, opacity: 0 },
  show: {
    y: 0,
    opacity: 0.70,
    
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const image ='/City.jpg'
const images = new Array(10).fill(null);

const Projects = () => {
  return (
    <div className='flex h-[90vh] w-full px-4 pt-4 '>
      <div className='grow basis-1/4 '>
        <div className='flex flex-col h-full w-full'>
          <div className=' flex  justify-center'>
            <h1 className=' font-extrabold text-4xl absolute z-10 pt-4'>My Projects</h1>
          </div>
          <div className='grow  relative overflow-hidden'>
            <div className='flex flex-col h-full w-full relative top-48'>
              <div className=' basis-1/6 p-2 z-10 '>
                <AnimatedList items={items} />
              </div>
            </div>
            <motion.div
              className='border-2 flex  basis-5/6 bg-transparent absolute blur-[3px] flex-col-reverse z-0  top-0 bottom-0 right-0 left-0 '
              variants={container}
              initial='hidden'
              animate='show'
            >
                {images.map((_, i) => (
            <motion.div
                key={i}
                variants={item}
                className='grow basis-1/6 bg-no-repeat bg-cover '
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `0% ${(9 - i) * 10}%`,
                    backgroundSize: '100% 1000%'
                }}
            />
        ))}
              
            </motion.div>
          </div>
        </div>
      </div>
      <div className=' basis-3/4 border  flex flex-col '>
        <div className='justify-center flex basis-1/12 border'>Titel</div> 
        <div className='justify-center  flex  basis-2/12 border'>Written content Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, accusantium suscipit minima sapiente dolorum error obcaecati placeat? Rem, ex saepe repudiandae eligendi suscipit itaque assumenda officiis praesentium quod quis?</div>
        <div className='justify-center  flex basis-9/12 border relative '>  <Image  fill src={'/city.jpg'} alt='test' /> </div>

      </div>
    </div>
  );
};

export default Projects;
