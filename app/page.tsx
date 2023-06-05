'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TitleText, TypingText } from './components/custom-text';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motion/motion';
import Loader from './components/loader';
import ImageGrid from './components/imageGrid';
export default function Home() {
  return (
    <main className='flex-1 relative items-center justify-between  bg-slate-900/50 '>
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
        </div>
        <div className='  '>
          <Image
            src='/me.jpg'
            alt='Picture of the author'
            width={100}
            height={100}
            className='h-24 w-24 rounded-[10rem]   mr-4'
          />
        </div>
      </div>
      <div className=' z-0 relative h-[90vh]   '>
     <ImageGrid/>
</div>

    </main>
  );
}
