'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useMediaQuery from '../utils/hooks/use-mediaQuery';
import { navLayout } from '../utils/motion/motion';
import { contactBackgroundAnimation } from './contactBackgroundAnimation';

const Contact = () => {
  const isNotXlMonitor = useMediaQuery('(min-width: 1000px)');

  const [animationStop, setAnimationStop] = useState(false);
  const [changeAnimationGap, setChangeAnimationGap] = useState(
    isNotXlMonitor ? 1 : 2
  );
  useEffect(() => {
    if (isNotXlMonitor) {
      setChangeAnimationGap(2);
    } else {
      setChangeAnimationGap(1);
    }
  }, [isNotXlMonitor]);

  const childVariant = (delay: number) => ({
    animate: {
      opacity: animationStop ? 0.5 : [0.5, 0.2, 0.5],
      y: animationStop ? 0 : [0, 30, 0],
      transition: {
        duration: 4,
        ease: [0.4, 0, 0.6, 1],
        repeat: Infinity,
        delay,
      },
    },
  });

  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={navLayout}
      className='relative h-screen lg:h-[92.5vh] lg:overflow-hidden  '
    >
      <div className='absolute  inset-x-0 inset-y-0   '>
        {contactBackgroundAnimation(
          changeAnimationGap,
          childVariant,
          animationStop,
          isNotXlMonitor
        )}
        <div className='flex flex-col items-center z-10 bg-slate-900/40 h-full w-full rounded-md font-orbitron px-2  backdrop-blur-md pt-4'>
          <h1 className='text-4xl font-bold text-lime-500 font-orbitron pb-2'>
            Contact
          </h1>
          <div className='  grid  w-full sm:w-[80%] h-[80%] rounded-xl '>
            <div className='border-t border-l border-r rounded-t-xl border-lime-500/50 items-center backdrop-blur-md bg-slate-100/5 justify-center flex flex-col px-6 sm:px-8 hover:scale-110 transition-all duration-300 hover:z-10 hover:border-none  '>
              <span className=' pt-1 text-xl text-center lg:text-2xl font-mono'>
                Make sure to check out my socials, or send me an email!😁{' '}
              </span>
              <span className='   text-slate-500 text-xs pt-1'>
                Or don&apos;t, I mean, whatever is fine :(
              </span>
            </div>
            <div className='  border border-lime-500/50 hover:border-none backdrop-blur-md bg-slate-100/5 justify-center flex px-6 sm:px-8 hover:scale-110 transition-all duration-300 hover:z-10 '>
              <div className='flex flex-row sm:flex-row items-center justify-center'>
                <a
                  href='https://github.com/MichaelTae'
                  target='_blank'
                  rel='noreferrer'
                  className='flex-col flex hover:scale-110 transition-all '
                >
                  <Image
                    src='/github-mark-white.svg'
                    width={50}
                    height={50}
                    className='ml-2 lg:ml-5 '
                    alt='github icon'
                  />
                  <p className='text-lg lg:text-2xl font-bold text-lime-500 font-orbitron'>
                    Github
                  </p>
                </a>
                <a
                  href='https://www.linkedin.com/in/michael-stojanovic-36a83821a/'
                  target='_blank'
                  rel='noreferrer'
                  className='flex-col flex px-4 hover:scale-110 transition-all '
                >
                  <Image
                    src='/linkedin.svg'
                    width={50}
                    height={50}
                    className='ml-4 lg:ml-7 '
                    alt='linkedin icon'
                  />
                  <p className='text-lg lg:text-2xl font-bold text-lime-500 font-orbitron'>
                    LinkedIn
                  </p>
                </a>
                <a
                  href='mailto:Michael.Stojanovic@hotmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='flex-col flex  hover:scale-110 transition-all'
                >
                  <Image
                    src='/email.svg'
                    width={50}
                    height={50}
                    className=' lg:ml-2 '
                    alt='Mail icon'
                  />
                  <p className='text-lg lg:text-2xl font-bold text-lime-500 font-orbitron'>
                    Email
                  </p>
                </a>
              </div>
            </div>
            <div className='border-b border-r border-l rounded-b-xl border-lime-500/50 items-center flex justify-center text-xl lg:text-2xl backdrop-blur-md bg-slate-100/5 hover:scale-110 transition-all duration-300 hover:z-10 hover:border-none'>
              <div className='flex flex-col h-full w-full '>
                <p className=' text-xl lg:text-2xl text-center pt-0 lg:pt-4  text-slate-300/80 font-mono'>
                  Try playing around with the animation gap!
                </p>
                <div className='w-0 h-2 sm:w-full lg:h-10' />
                <p className='text-lime-500 font-bold text-xl lg:text-2xl font-mono text-center '>
                  Animation Gap: {changeAnimationGap.toFixed(2)}rem
                </p>
                <div className='flex flex-row justify-center font-orbitron '>
                  <button
                    className=' z-100 border border-lime-500/50 text-lime-500/90 rounded-md p-0 sm:p-1 px-4 sm:px-4 active:bg-green-500 active:scale-90 hover:scale-110 transition-all bg-cyan-900 shadow-inner shadow-slate-900'
                    onClick={() =>
                      setChangeAnimationGap(changeAnimationGap - 0.2)
                    }
                    type='button'
                  >
                    {'<<<'}
                  </button>
                  <button
                    className={` z-100 border border-lime-500/50 text-lime-500/90 rounded-md p-0 sm:p-1 px-4 sm:px-4 mx-2 hover:scale-110 transition-all active:bg-green-500 active:scale-95 shadow-inner shadow-slate-900 ${
                      animationStop
                        ? 'bg-cyan-900 '
                        : 'bg-red-800/70 text-slate-100 font-bold'
                    }`}
                    onClick={() => setAnimationStop(!animationStop)}
                    type='button'
                  >
                    {!animationStop ? 'Stop Animation' : 'Start Animation'}
                  </button>
                  <button
                    className=' z-100 border border-lime-500/50 text-lime-500/90 rounded-md p-0 sm:p-1 px-4 sm:px-4 active:bg-green-500 active:scale-90 hover:scale-110 transition-all bg-cyan-900 shadow-inner shadow-slate-900 '
                    onClick={() =>
                      setChangeAnimationGap(changeAnimationGap + 0.2)
                    }
                    type='button'
                  >
                    {'>>>'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
