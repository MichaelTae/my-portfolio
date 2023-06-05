'use client';
import Image from 'next/image';
import { AnimatedTextSorting, TypingText } from '../components/custom-text';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion/motion';
const introParagraph =
  'My name is Michael Stojanovic, I am a recent graduate from Nackademin. There I studied Web development with a focus on .NET CMS. I have a passion for learning new things and I am always looking for new challenges.';
const introParagraph2 =
  'I am currently looking for a job as a junior developer. My education made me full stack so I am comfortable with both frontend and backend. I am also open to learning new languages and frameworks.';
const AboutPage = () => {
  return (
    <div className=' flex-1 h-screen gap-3  animate-background-animation bg-[length:400%] bg-gradient-to-r from-indigo-900/70 from-10% via-sky-950/70 via-30% to-emerald-950/70 to-90% p-12  '>
      

      <div className='flex relative 2xl:flex-row xl:min-h-[40rem] justify-around items-center gap-4 flex-col bg-slate-700/20 border border-slate-500 rounded-lg  p-4 '>
        <div className=' absolute    w-full h-full blur-sm   bg-slate-700/40  rounded-lg  p-2 '> </div>
        <div className='flex-1 self-start relative hover:scale-110 transition '>
          <div className='absolute inset-0 z-10  place-self-center shadow-md shadow-blue-500 border-teal-700 border rounded-xl animate-pulse p-6'></div>

          <motion.div
            variants={fadeIn('down', 'ease-in', 1 * 0.5, 0.75)}
            initial='hidden'
            whileInView={'show'}
            className='p-2   text-slate-300 font-mono z-20 relative bg-slate-900/20  rounded-xl'
          >
            {introParagraph}
          </motion.div>
        </div>

        <div className='flex-1 self-end relative hover:scale-110 transition  mb-2'>
          <div className='absolute inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl '></div>
         
          <motion.div initial='hidden' whileInView={'show'} >
            {' '}
            <TypingText
              title={introParagraph2}
              textStyles={'p-2  font-mono  text-slate-300 bg-slate-900/20  rounded-xl z-20 relative'}
              startDelay={2}
            />
          </motion.div>
        </div>
        <div className='flex-1 self-start relative  hover:scale-110 transition'>
          <div className='absolute inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl'></div>
          <motion.div initial='hidden' whileInView='show'  className='p-2  font-mono  text-slate-300 bg-slate-900/20  rounded-xl z-20 relative '>
            {' '}
            <motion.span variants={textVariant(0.8)}>
              {' '}
              The languages I'm most comfortable with are C# and Javascript.
            </motion.span>
            <motion.p variants={textVariant(1.2)}>
              I'm also comfortable with React, Next.js, Tailwind, HTML, CSS,
              SQL, Node.js and .NET. I'm also familiar with Git, Azure DevOps,
              Azure
            </motion.p>
          </motion.div>
        </div>
        <div className='self-center  h-72 w-64   flex place-content-center '>
          <div className=' h-44 w-44 rounded-[10rem] z-10 place-self-center shadow-md shadow-blue-500 animate-pulse'></div>
          <Image
            src='/bird.jpg'
            alt='Picture of the author'
            width={500}
            height={400}
            className='h-40 w-40 absolute rounded-[10rem]  place-self-center '
          />
        </div>
        <div className='flex-1 self-start relative hover:scale-110 transition' >
          <div className='absolute inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl'></div>
        
          <motion.div initial='hidden' whileInView='show' className='p-2 flex  font-mono  text-slate-300 bg-slate-900/20  rounded-xl z-20 relative '>
            <motion.p  variants={fadeIn('down', 'ease-in', 3 * 0.5, 0.75)}>This page is built with React, Next.js and Tailwind.<motion.span  variants={fadeIn('left', 'ease-in', 4 * 0.5, 0.75)}> I'm using framer motion as well for fun animations  </motion.span>
            <motion.span  variants={fadeIn('right', 'ease-in', 5 * 0.5, 0.75)}>(you can probably tell but i do like animations a little bit too much). </motion.span> </motion.p>
            
          </motion.div>
        </div>
        <motion.div initial='hidden' whileInView='show' className='flex-1  self-end relative mb-2 hover:scale-110 transition'>
          <div className='absolute inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl'></div>
          <motion.p  variants={fadeIn('down', 'ease-in', 3 * 0.5, 0.75)} className='p-2  font-mono  text-slate-300 bg-slate-900/20  rounded-xl z-20 relative'>
            I have a few projects on my github that you can check out. I have so
            far deployed one website, which is{' '}
            

            <a
              className='text-sky-600 hover:underline'
              href='https://www.le-mondays.com'
              target='_blank'
            >
              www.le-mondays.com
            </a>
           
           
          </motion.p>
          <TypingText
              title={' which is just a static website with links for the band Le mondays. I bought the domain on Google Domains and it is hosted on Netlify.'}
              textStyles={'p-2  font-mono  text-slate-300 bg-slate-900/20  rounded-xl z-20 relative'}
              startDelay={4}
            />
        </motion.div>
        <div className='flex-1  self-start relative hover:scale-110 transition h-64 bg-slate-900/20 rounded-xl max-w-full min-w-0 '>
          <div className='absolute flex inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl '></div>
          <div className='  overflow-hidden p-2  font-mono  text-slate-300   z-20 '><AnimatedTextSorting delay={2000}/></div>
        
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
