'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const pulseContainer = {
  animate: {
  
    transition: {
      repeat: Infinity,
      
    },
  },
};


const contact = () => {
    const [animationStop, setAnimationStop] = useState(false);
    
    const childVariant = (delay: number) => ({
        animate: {
          opacity: animationStop ? 0.5 :  [0.5, 0.2, 0.5],
          y: animationStop ? 0 : [0, 20, 0], 
          transition: {
            duration: 4,
            ease: [0.4, 0, 0.6, 1],
            repeat: Infinity,
            delay, 
          },
        },
      });
      

  return (
    <div className='relative h-[90vh] '>
        
      <div className='absolute   inset-x-0 inset-y-0 border  border-red-500 backdrop-blur p-16 '>
        
        <motion.div
          variants={pulseContainer}
          initial='animate'
          animate='animate'
          
          className='  flex  h-[90%] w-[95%]  border z-0 gap-12 border-blue-900 bg-slate-900 absolute p-12 '
        >
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0.0)}
             key={animationStop.toString() + "0"}           
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}       
            key={animationStop.toString() + "1"}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1.0)}
             key={animationStop.toString() + "2"}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
             key={animationStop.toString() + "3"}
          />
          <motion.div
            className=' bg-purple-500 grow'
            variants={childVariant(2.0)}
             key={animationStop.toString() + "4"}
          />
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0.0)}
             key={animationStop.toString() + "5"}
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}
             key={animationStop.toString() + "6"}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1.0)}
             key={animationStop.toString() + "7"}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
             key={animationStop.toString() + "8"}
          />
          <motion.div
            className=' bg-purple-500 grow'
            variants={childVariant(2.0)}
             key={animationStop.toString() + "9"}
          />
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0.0)}
             key={animationStop.toString() + "10"}
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}
             key={animationStop.toString() + "11"}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1.0)}
             key={animationStop.toString() + "12"}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
             key={animationStop.toString() + "13"}
          />
          <motion.div
            className=' bg-purple-500 grow'
            variants={childVariant(2.0)}
             key={animationStop.toString() + "14"}
          />
          <motion.div
            className=' bg-red-500  grow'
            variants={childVariant(0.0)}
             key={animationStop.toString() + "15"}
          />
          <motion.div
            className=' bg-yellow-500 grow'
            variants={childVariant(0.5)}
             key={animationStop.toString() + "16"}
          />
          <motion.div
            className=' bg-green-500 grow'
            variants={childVariant(1.0)}
             key={animationStop.toString() + "17"}
          />
          <motion.div
            className=' bg-cyan-500 grow '
            variants={childVariant(1.5)}
             key={animationStop.toString() + "18"}
          />
          <motion.div
            className=' bg-purple-500 grow'
            variants={childVariant(2.0)}
             key={animationStop.toString() + "19"}
          /><motion.div
          className=' bg-red-500  grow'
          variants={childVariant(0.0)}
           key={animationStop.toString() + "20"}
        />
        <motion.div
          className=' bg-yellow-500 grow'
          variants={childVariant(0.5)}
           key={animationStop.toString() + "21"}
        />
        <motion.div
          className=' bg-green-500 grow'
          variants={childVariant(1.0)}
           key={animationStop.toString() + "22"}
        />
        <motion.div
          className=' bg-cyan-500 grow '
          variants={childVariant(1.5)}
           key={animationStop.toString() + "23"}
        />
        <motion.div
          className=' bg-purple-500 grow '
          variants={childVariant(2.0)}
           key={animationStop.toString() + "24"}
        />
        
        </motion.div>
        <div className='flex flex-col items-center z-10 bg-slate-900/40 h-full w-full border m-4  backdrop-blur-md'>
          <h1 className='text-4xl font-bold text-lime-500'>Contact</h1>
          <div className='border grid  w-[70%] h-[80%]'>
            <div className='border'></div>
            <div className='  backdrop-blur-md bg-slate-100/5 justify-center flex px-6 sm:px-8'>
                 <span className='absolute pt-1 text-2xl font-mono'>Make sure to check out my socials!</span>
                <div className='flex flex-col sm:flex-row items-center justify-center'>
                <a href='https://github.com/MichaelTae' target='_blank' rel="noreferrer" className='flex-col flex  '>
                <Image src='/github-mark-white.svg' width={50} height={50} className='ml-3'  alt='github icon'/>
                <p className='text-xl sm:text-2xl font-bold text-lime-500 font-mono'>Github</p>
                </a>
                <a href='https://www.linkedin.com/in/michael-stojanovic-36a83821a/' target='_blank' rel="noreferrer" className='flex-col flex px-4  '>
                <Image src='/linkedin.svg'  width={50} height={50} className='ml-5'  alt='linkedin icon'/>
                <p className='text-xl sm:text-2xl font-bold text-lime-500 font-mono'>LinkedIn</p>
                </a>
                <a href='https://www.linkedin.com/in/michael-stojanovic-36a83821a/' target='_blank' rel="noreferrer" className='flex-col flex  '>
                <Image src='/email.svg'  width={50} height={50} className='ml-0 sm:ml-2'  alt='Mail icon'/>
                <p className='text-xl sm:text-2xl font-bold text-lime-500 font-mono'>Email</p>
                </a>
                    </div>
            </div>
            <div className='border'></div>

          </div>
          <button className=' z-100 border rounded-md p-1 px-2' onClick={()=> setAnimationStop(!animationStop)}>{!animationStop ? 'Stop Animation' : 'Start Animation'}</button>
        </div>
      </div>
    </div>
  );
};

export default contact;
