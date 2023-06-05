
'use client';

import { motion } from 'framer-motion';
import AnimatedList from '../components/animatedlist/animated-list';
import Image from 'next/image';
import { useState } from 'react';

const items = [
  { title: 'User management software', action: 'Action 1', image: '/City.jpg',content:'USER MANAGE',alt:'Picture of user management website' },
  { title: 'Le mondays', action: 'Action 2', image: '/frog.jpg',content:'LE MONDAYS',alt:'Picture of website le-mondays' },
  { title: 'Carelyo Dashboard', action: 'Action 3', image: '/bird.jpg',content:'CARELYO',alt:'picture of carelyo dashboard' },
  { title: 'E-commerce school project', action: 'Action 4',content:'E-COMMERCE',alt:'picture of e-commerce school project' },
  { title: 'Untitled jewelry website ', action: 'Action 5',content:'Jewelry Page',alt:'picture of untitled jewelry page' },
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
    const[projectChoice, setProjectChoice] = useState(items[0].action);
    const selectedItem = items.find(item => item.action === projectChoice);

    
  return (
    <div className='flex h-[90vh] w-full px-4 pt-4 '>
      <div className='grow basis-1/4 '>
        <div className='flex flex-col h-full w-full'>
          <div className=' flex  justify-center'>
            <h1 className=' font-extrabold text-4xl absolute z-10 pt-4'>My Projects</h1>
          </div>
          <div className='grow  relative overflow-hidden'>
            <div className='flex flex-col h-full w-full relative '>
              <div className=' basis-1/6 p-2 z-10 '>
                <AnimatedList items={items} setProjectChoice={setProjectChoice} />
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
      <div className=' basis-3/4 border  flex flex-col border-lime-500 '>
        <div className='justify-center flex basis-1/12  text-4xl text-lime-500'>{selectedItem?.title}</div> 
        <div className='justify-center  flex  basis-2/12 border-t border-lime-500'>{selectedItem?.content}Written content Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, accusantium suscipit minima sapiente dolorum error obcaecati placeat? Rem, ex saepe repudiandae eligendi suscipit itaque assumenda officiis praesentium quod quis?</div>
        <div className='justify-center  flex basis-9/12 border-t relative border-lime-500'> {selectedItem?.image && <Image  fill src={selectedItem.image} alt={selectedItem?.alt} />} </div>
                    
      </div>
    </div>
  );
};

export default Projects;
