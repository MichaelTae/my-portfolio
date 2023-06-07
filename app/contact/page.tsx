'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useMediaQuery from '../utils/hooks/use-mediaQuery';

const pulseContainer = {
  animate: {
  
    transition: {
      repeat: Infinity,
      
      
    },
  },
};


const Contact = () => {
    const isNotXlMonitor = useMediaQuery('(min-width: 1000px)');

    const [animationStop, setAnimationStop] = useState(false);
    const [changeAnimationGap, setChangeAnimationGap] = useState( isNotXlMonitor? 1 : 2);
    useEffect(() => {
        if (isNotXlMonitor) {
            setChangeAnimationGap(2);
        } else {
            setChangeAnimationGap(1);
        }
    }, [isNotXlMonitor]);
    
    const childVariant = (delay: number) => ({
        animate: {
          opacity: animationStop ? 0.5 :  [0.5, 0.2, 0.5],
          y: animationStop ? 0 : [0, 30, 0], 
          transition: {
            duration: 4,
            ease: [0.4, 0, 0.6, 1],
            repeat: Infinity,
            delay, 
          },
        },
      });
      // TODO: Check hover effect on chrome and if there is a fix.
  return (
    <div className='relative h-[90vh]   '>
        
      <div className='absolute  m-4 inset-x-0 inset-y-0   '>
        
        <motion.div
          variants={pulseContainer}
          initial='animate'
          animate='animate'
          style={{gap: `${changeAnimationGap}rem`}}
          className={`  flex  h-full w-full  border z-0  rounded-md  border-blue-900 bg-slate-900 absolute p-12  `}
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
          { isNotXlMonitor && <><motion.div
                      className=' bg-red-500  grow'
                      variants={childVariant(0.0)}
                      key={animationStop.toString() + "5"} /><motion.div
                          className=' bg-yellow-500 grow'
                          variants={childVariant(0.5)}
                          key={animationStop.toString() + "6"} /><motion.div
                          className=' bg-green-500 grow'
                          variants={childVariant(1.0)}
                          key={animationStop.toString() + "7"} /><motion.div
                          className=' bg-cyan-500 grow '
                          variants={childVariant(1.5)}
                          key={animationStop.toString() + "8"} /><motion.div
                          className=' bg-purple-500 grow'
                          variants={childVariant(2.0)}
                          key={animationStop.toString() + "9"} /><motion.div
                          className=' bg-red-500  grow'
                          variants={childVariant(0.0)}
                          key={animationStop.toString() + "10"} /><motion.div
                          className=' bg-yellow-500 grow'
                          variants={childVariant(0.5)}
                          key={animationStop.toString() + "11"} /><motion.div
                          className=' bg-green-500 grow'
                          variants={childVariant(1.0)}
                          key={animationStop.toString() + "12"} /><motion.div
                          className=' bg-cyan-500 grow '
                          variants={childVariant(1.5)}
                          key={animationStop.toString() + "13"} /><motion.div
                          className=' bg-purple-500 grow'
                          variants={childVariant(2.0)}
                          key={animationStop.toString() + "14"} /><motion.div
                          className=' bg-red-500  grow'
                          variants={childVariant(0.0)}
                          key={animationStop.toString() + "15"} /><motion.div
                          className=' bg-yellow-500 grow'
                          variants={childVariant(0.5)}
                          key={animationStop.toString() + "16"} /><motion.div
                          className=' bg-green-500 grow'
                          variants={childVariant(1.0)}
                          key={animationStop.toString() + "17"} /><motion.div
                          className=' bg-cyan-500 grow '
                          variants={childVariant(1.5)}
                          key={animationStop.toString() + "18"} /><motion.div
                          className=' bg-purple-500 grow'
                          variants={childVariant(2.0)}
                          key={animationStop.toString() + "19"} /><motion.div
                          className=' bg-red-500  grow'
                          variants={childVariant(0.0)}
                          key={animationStop.toString() + "20"} /><motion.div
                          className=' bg-yellow-500 grow'
                          variants={childVariant(0.5)}
                          key={animationStop.toString() + "21"} /><motion.div
                          className=' bg-green-500 grow'
                          variants={childVariant(1.0)}
                          key={animationStop.toString() + "22"} /><motion.div
                          className=' bg-cyan-500 grow '
                          variants={childVariant(1.5)}
                          key={animationStop.toString() + "23"} /><motion.div
                          className=' bg-purple-500 grow '
                          variants={childVariant(2.0)}
                          key={animationStop.toString() + "24"} /></>}
        
        </motion.div>
        <div className='flex flex-col items-center z-10 bg-slate-900/40 h-full w-full rounded-md font-mono  backdrop-blur-md'>
          <h1 className='text-4xl font-bold text-lime-500'>Contact</h1>
          <div className='border border-lime-500/50 grid  w-full sm:w-[80%] h-[80%] rounded-xl '>
            <div className='border-b rounded-t-xl border-lime-500/50 items-center backdrop-blur-md bg-slate-100/5 justify-center flex flex-col px-6 sm:px-8 hover:scale-110 transition-all duration-300 hover:z-10 hover:border-none  '>
            <span className=' pt-1 text-2xl font-mono'>Make sure to check out my socials, or send me an email!😁  </span>
                 <span className='   text-slate-500 text-xs '>Or don&apos;t, I mean, whatever is fine :(</span>
            </div>
            <div className='  backdrop-blur-md bg-slate-100/5 justify-center flex px-6 sm:px-8 hover:scale-110 transition-all duration-300 hover:z-10 '>
                 
                <div className='flex flex-row sm:flex-row items-center justify-center'>
                <a href='https://github.com/MichaelTae' target='_blank' rel="noreferrer" className='flex-col flex hover:scale-110 transition-all '>
                <Image src='/github-mark-white.svg' width={50} height={50} className='ml-1 sm:ml-3'  alt='github icon'/>
                <p className='text-md sm:text-2xl font-bold text-lime-500 font-mono'>Github</p>
                </a>
                <a href='https://www.linkedin.com/in/michael-stojanovic-36a83821a/' target='_blank' rel="noreferrer" className='flex-col flex px-4 hover:scale-110 transition-all '>
                <Image src='/linkedin.svg'  width={50} height={50} className='ml-3 sm:ml-5'  alt='linkedin icon'/>
                <p className='text-md sm:text-2xl font-bold text-lime-500 font-mono'>LinkedIn</p>
                </a>
                <a href='mailto:Michael.Stojanovic@hotmail.com' target='_blank' rel="noreferrer" className='flex-col flex  hover:scale-110 transition-all'>
                <Image src='/email.svg'  width={50} height={50} className='-ml-1 sm:ml-2'  alt='Mail icon'/>
                <p className='text-md sm:text-2xl font-bold text-lime-500 font-mono'>Email</p>
                </a>
                    </div>
            </div>
            <div className='border-t rounded-b-xl border-lime-500/50 items-center flex justify-center  backdrop-blur-md bg-slate-100/5 hover:scale-110 transition-all duration-300 hover:z-10 hover:border-none'>
            
            <div className='flex flex-col h-full w-full '>
            <p className='text-md sm:text-xl text-center   text-slate-300/80 font-mono'>
                Try playing around with the animation gap!
            </p>
            <div className='w-0 h-0 sm:w-full sm:h-10'></div>
          <p className='text-lime-500 font-bold text-md sm:text-xl font-mono text-center '>Animation Gap: {changeAnimationGap.toFixed(2)}rem</p>
            <div className='flex flex-row justify-center '>
          <button className=' z-100 border rounded-md p-0 sm:p-1 px-0 sm:px-2 active:bg-green-500 active:scale-90 hover:scale-110 transition-all bg-cyan-700' onClick={() => setChangeAnimationGap(changeAnimationGap -0.2)}>{'<<<'}</button>
          <button className={` z-100 border rounded-md p-0 sm:p-1 px-0 sm:px-4 mx-2 hover:scale-110 transition-all active:bg-green-500 active:scale-95  ${animationStop ?'bg-cyan-700' :'bg-red-800/70'}`} onClick={()=> setAnimationStop(!animationStop)}>{!animationStop ? 'Stop Animation' : 'Start Animation'}</button>
          <button className=' z-100 border rounded-md p-0 sm:p-1 px-0 sm:px-2 active:bg-green-500 active:scale-90 hover:scale-110 transition-all bg-cyan-700' onClick={() => setChangeAnimationGap(changeAnimationGap +0.2)} >{'>>>'}</button>
            </div>
          </div>
          
            </div>

          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
