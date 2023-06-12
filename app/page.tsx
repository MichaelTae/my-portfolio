'use client';
import Image from 'next/image';
import { TitleText, TypingText } from './components/custom-text';
import { motion } from 'framer-motion';
import ImageGrid from './components/imageGrid';
import { navLayout } from './utils/motion/motion';
export default function Home() {
  return (
    <motion.main initial='hidden' animate='show' variants={navLayout} className='flex-1 relative items-center justify-between  bg-slate-900/50 '>
      <div className='flex z-10 absolute flex-col sm:flex-row p-4'>
        <div className='flex order-2 flex-col'>
          <TitleText title='| Michael Stojanovic' textStyles='' />
          <motion.div initial='hidden' whileInView={'show'}>
            <TypingText
              title='Junior Developer'
              textStyles='pl-8 text-2xl font-bold text-slate-400'
              startDelay={0}
            />
            <TypingText
              title='Advanced Higher Vocational Education Diploma .NET CMS'
              textStyles='pl-8 text-2xl font-bold text-slate-400'
              startDelay={0}
            />
          </motion.div>
          <p>
            Hello! Welcome to my portfolio page, here I show some of the stuff I
            have been working on during my education and internship. If you&apos;re
            curious, <br /> make sure to check out the rest of the website!
            I am currently available for
            <button className='border relative cursor-default bg-transparent  p-2 text-xl rounded-xl animate-bounce text-orange-500 shadow-md shadow-blue-300 drop-shadow-xl m-2'> Work</button>
          </p>
        </div>
        
          <Image
            src='/123me.jpg'
            alt='Picture of the author'
            width={100}
            height={100}
            className='h-24 w-24 rounded-[10rem]   mr-4'
          />
        
      </div>
      <div className=' z-0 relative h-[90vh]   '>
        <ImageGrid />
      </div>
    </motion.main>
  );
}
