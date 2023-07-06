'use client';
import Image from 'next/image';
import { TitleText, TypingText } from './components/custom-text';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motion/motion';
import BackgroundWrapper from './components/background/backgroundWrapper';
export default function Home() {
 
  
  return (
    <motion.main className='flex-1  relative justify-center items-center  bg-transparent  '>
      
    <div className='flex z-10 absolute flex-col  sm:w-[35%] md:w-1/2 lg:w-[35%] right-0 p-4   pointer-events-none'>
        <div className='flex order-2 flex-col  gap-1 '>
          <TitleText
            title=' Michael Stojanovic'
            textStyles=' pl-2 text-slate-300 backdrop-blur-sm sm:backdrop-blur-0 backdrop-brightness-50 font-orbitron shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] drop-shadow-2xl border border-green-400/40 rounded-xl p-1  ' />
          <motion.div initial='hidden' whileInView={'show'} variants={fadeIn('top', 'ease', 0.5, 1)} className='  text-2xl font-bold text-slate-300 backdrop-brightness-50 backdrop-blur-sm sm:backdrop-blur-0 font-orbitron shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] drop-shadow-2xl border border-green-400/40 rounded-xl'>
            <TypingText
              title='Junior Developer'
              textStyles='pl-8 '
              startDelay={0} />
            <TypingText
              title='Advanced Higher Vocational Education Diploma .NET CMS'
              textStyles=' pl-8 '
              startDelay={0} />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('bottom', 'ease', 1, 1)}
            className=' p-1 xl:mt-52 2xl:mt-0 pl-8 backdrop-brightness-50 backdrop-blur-sm sm:backdrop-blur-0 text-slate-200 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] drop-shadow-2xl border border-green-400/40 rounded-xl'
          >
            Hello! Welcome to my portfolio page, here I show some of the stuff I
            have been working on during my education and internship. If
            you&apos;re curious, <br /> make sure to check out the rest of the
            website!
          </motion.div>
        </div>
        <motion.div initial='hidden' whileInView={'show'} variants={fadeIn('top', 'ease', 0.5, 1)} className='self-center'>
          <Image
            src='/123me.jpg'
            alt='Picture of the author'
            width={100}
            height={100}
            className='h-24 w-24 rounded-[10rem]  border border-slate-500/40   mr-4' />
        </motion.div>
      </div><div className=' z-0 relative h-[90vh]   '>
          <BackgroundWrapper />
        </div>
    </motion.main>
  );
}
