'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, navLayout, textVariant } from '../utils/motion/motion';
import Grid from '../components/grid_background/grid';
const AboutPage = () => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={navLayout}
      className=' flex-1 h-screen gap-3 relative '
    >
      <Grid />
      <div className='flex relative backdrop-blur-[2px] xl:min-h-[40rem] justify-around items-center gap-4 flex-col 2xl:m-12 m-8 bg-slate-700/20 border border-slate-500 rounded-lg  p-4 text-lg '>
        <div className=' absolute  border  w-full h-full blur-sm bg-slate-700/40  rounded-lg  p-2 '>
          {' '}
        </div>
        <div className='flex-1 relative  hover:scale-[1.02] transition'>
          <div className='absolute inset-0 z-10  place-self-center shadow-md shadow-blue-500 border-teal-700 border rounded-xl animate-pulse w-full h-full'></div>

          <motion.div
            variants={fadeIn('down', 'tween', 1 * 0.5, 0.75)}
            initial='hidden'
            whileInView={'show'}
            className='p-2   text-slate-300  z-20 relative bg-slate-900/50   rounded-xl '
            viewport={{ once: true }}
          >
            A little bit more about me, I am a junior developer that is
            currently available for work. My passion lies in Frontend
            development, and I spend most of my time in the Javascript/React
            ecosystem. This website was built as a personal project to showcase
            my skills and experience. It&apos;s Created using React, Next.js,
            Tailwind CSS, and Framer Motion for animations. So far I&apos;ve
            launched two websites, This one and one for a band called Lemondays.
            I&apos;m born and raised in Stockholm, Sweden and it&apos;s where i
            currently live as well. If you have any exciting opportunities or
            projects that you think I would be a good fit for, please feel free
            to reach out, my contact information is available in the contact
            section.
            <br />
            <br />
            If you&apos;d like to read more about my work experience as well as
            education you can view my Resume down below.
          </motion.div>
        </div>
        <div className='flex-1  relative  hover:scale-[1.02] transition '>
          <div className='absolute inset-0 z-10  place-self-center shadow-md shadow-blue-500 border-teal-700 border rounded-xl animate-pulse p-6 w-full h-full'></div>

          <motion.div
            variants={fadeIn('down', 'tween', 1 * 0.5, 0.75)}
            initial='hidden'
            whileInView={'show'}
            className='p-2   text-slate-300  z-20 relative bg-slate-900/50   rounded-xl'
            viewport={{ once: true }}
          >
            <a
              href='/CVMichaelStojanovic.pdf'
              target='_blank'
              className='text-blue-500 underline flex items-center gap-2 flex-col'
            >
              <Image
                src='/pdfIcon.svg'
                width={50}
                height={50}
                className=' bg-lime-500'
                alt='pdf icon'
              />
              Resume Michael Stojanovic
            </a>
          </motion.div>
        </div>
        <div className='self-center h-72 w-64 flex place-content-center mb-32'>
          <div className='h-44 w-44 absolute rounded-[10rem] z-10 place-self-center shadow-md shadow-blue-500 animate-pulse '></div>
          <div className='h-44 w-44 absolute mt-[22rem] rounded-[10rem] opacity-[0.5] z-10 place-self-center shadow-md shadow-blue-500 animate-reflection '></div>

          <a
            href='https://github.com/MichaelTae'
            target='_blank'
            className='group h-40 w-40 z-10 relative rounded-[10rem] place-self-center cursor-pointer z-100  '
          >
            <span
              className='group-hover:opacity-100 transition-opacity bg-gray-800 px-1 container  text-sm text-slate-400 rounded-md absolute  text-center 
       m-4 mx-auto border border-lime-500/50 animate-toolTipBounce font-orbitron '
            >
              Visit my github!
            </span>
            <Image
              src='/github-mark-white.svg'
              alt='github logo svg'
              width={500}
              height={400}
              className='h-40 w-40 absolute rounded-[10rem]  backdrop-brightness-50 '
            />
            <Image
              src='/github-mark-white.svg'
              alt='github logo svg'
              width={500}
              height={400}
              className='h-40 w-40 mt-44 rounded-[10rem] rotate-180 opacity-[0.05] -scale-x-100 '
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
