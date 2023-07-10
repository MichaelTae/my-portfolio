'use client';
import Image from 'next/image';
import { TypingText } from '../components/custom-text';
import { motion } from 'framer-motion';
import { fadeIn, navLayout, textVariant } from '../utils/motion/motion';
import Grid from '../components/grid_background/grid';
const introParagraph =
  'My name is Michael Stojanovic, I am a recent graduate from Nackademin. There I studied Web development with a focus on .NET CMS. I have a passion for learning new things and I am always looking for new challenges.';
const introParagraph2 =
  'I am currently looking for a job as a junior developer. My education made me full stack so I am comfortable with both frontend and backend. I am also open to learning new languages and frameworks.';
const AboutPage = () => {
 

  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={navLayout}
      className=' flex-1 h-screen gap-3  relative   '
    >
      
            <Grid  />
      <div className='flex  relative backdrop-blur-[2px] 2xl:flex-row xl:min-h-[40rem] justify-around items-center gap-4 flex-col 2xl:m-12 m-8  bg-slate-700/20 border border-slate-500 rounded-lg  p-4 text-lg '>
        <div className=' absolute  border  w-full h-full blur-sm   bg-slate-700/40  rounded-lg  p-2 '>
          {' '}
        </div>
        <div className='flex-1 self-start relative  hover:scale-[1.02] transition '>
          <div className='absolute inset-0 z-10  place-self-center shadow-md shadow-blue-500 border-teal-700 border rounded-xl animate-pulse p-6'></div>

          <motion.div
            variants={fadeIn('down', 'ease-in', 1 * 0.5, 0.75)}
            initial='hidden'
            whileInView={'show'}
            className='p-2   text-slate-300  z-20 relative bg-slate-900/50   rounded-xl'
            viewport={{ once: true }}
          >
            {introParagraph}
          </motion.div>
        </div>

        <div className='flex-1 self-end relative hover:scale-[1.02] transition   mb-2'>
          <div className='absolute inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl '></div>

          <motion.div
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
          >
            {' '}
            <TypingText
              title={introParagraph2}
              textStyles={
                'p-2    text-slate-300 bg-slate-900/50    rounded-xl z-20 relative text-lg '
              }
              startDelay={0}
            />
          </motion.div>
        </div>
        <div className='flex-1 w-full self-start relative  hover:scale-[1.02] transition'>
          <div className='absolute inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl'></div>
          <motion.div
            viewport={{ once: true }}
            initial='hidden'
            whileInView='show'
            className='p-2    text-slate-300 bg-slate-900/50    rounded-xl z-20 relative '
          >
            {' '}
            <motion.span viewport={{ once: true }} variants={textVariant(0.8)}>
              {' '}
              The languages I&apos;m most comfortable with are C# and
              Javascript.
            </motion.span>
            <motion.p viewport={{ once: true }} variants={textVariant(1.2)}>
              I&apos;m also comfortable with React, Next.js, Tailwind, HTML,
              CSS, SQL, Node.js and .NET. I&apos;m as well familiar with Git,
              Azure DevOps, Azure, Illustrator
            </motion.p>
          </motion.div>
        </div>
        <div className='self-center h-72 w-64 flex place-content-center  '>
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
              className='h-40 w-40 mt-44 rounded-[10rem]   rotate-180 opacity-[0.05] -scale-x-100'

            />
          </a>
      
        </div>

        <div className='flex-1 self-start relative hover:scale-[1.02] transition-all mt-32 2xl:mt-0 '>
          <div className='absolute inset-0  z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl'></div>

          <motion.div
            viewport={{ once: true }}
            initial='hidden'
            whileInView='show'
            className='p-2 flex    text-slate-300 bg-slate-900/50    rounded-xl z-20 relative '
          >
            <motion.p
              viewport={{ once: true }}
              variants={fadeIn('down', 'ease-in', 3 * 0.5, 0.75)}
            >
              This page is built with React, Next.js , Tailwind and the interactable parts of the background on the homepage is made with illustrator
              <motion.span variants={fadeIn('left', 'ease-in', 4 * 0.5, 0.75)}>
                {' '}
                I&apos;m using framer motion also for fun...? animations,{' '}
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                variants={fadeIn('right', 'ease-in', 5 * 0.5, 0.75)}
                
              >
                
                (i do like animations quite a lot).{' '}
              </motion.span>{' '}
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial='hidden'
          whileInView='show'
          className='flex-1 w-full self-end  relative my-4 sm:my-0 2xl:my-2   hover:scale-[1.02] transition '
        >
          <div className='absolute inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl'></div>
          <motion.p
            viewport={{ once: true }}
            variants={fadeIn('down', 'ease-in', 3 * 0.5, 0.75)}
            className='p-2  text-slate-300 bg-slate-900/50    rounded-t-xl z-20 relative'
          >
            I have a few projects on my github that you can check out. I have so
            far deployed two websites, which is{' '}
            <a
              className='text-sky-600 hover:underline'
              href='https://www.le-mondays.com'
              target='_blank'
            >
              www.le-mondays.com
            </a>
          </motion.p>
          <TypingText
            title={
              ' which is just a static website with links for the band Le mondays. And of course this website'
            }
            textStyles={
              'p-2  text-lg  text-slate-300 bg-slate-900/50    rounded-b-xl z-20 relative'
            }
            startDelay={4}
          />
        </motion.div>
        <div className='flex-1  self-start relative hover:scale-[1.02] transition  bg-slate-900/50   rounded-xl max-w-full min-w-0 '>
          <div className='absolute flex inset-0 z-10 place-self-center shadow-md shadow-blue-500 animate-pulse border-teal-700 border rounded-xl '></div>
          <motion.div
            viewport={{ once: true }}
            variants={fadeIn('up', 'ease-in', 5 * 0.5, 0.75)}
            className='  overflow-hidden p-2   text-slate-300   z-20 '
          >
            I&apos;ve kinda ran out of things to say about myself but in the
            interest of symmetry I&apos;ll just write a few more lines. Thank
            you for reading and if you have any questions feel free to contact
            me on the next page {'--->'}
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default AboutPage;
