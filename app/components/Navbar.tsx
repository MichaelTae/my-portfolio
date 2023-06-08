'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../utils/hooks/use-mediaQuery';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const item = {
  hidden: { y: 50, opacity: 0, filter: 'blur(20px)' },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const isMobile = useMediaQuery('(min-width: 640px)');
  return (
    <nav className=' bg-slate-900/50 w-full flex flex-col  relative z-30    '>
      <div className='animate-pulse  h-2 relative order-4 z-0 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] drop-shadow-2xl'></div>
      <div className=' flex sticky  '>
        <div className='flex gap-4 p-4 '>
          <Link href='/'>
            <img
              src='/icon.png'
              alt='logo'
              className='w-12 h-12 animate-pulse'
            />
          </Link>
          <Link href='/'>
            <h1 className='text-2xl font-bold text-slate-300  '>
              Michael Stojanovic
            </h1>
          </Link>
        </div>
        {!isMobile && (
          <MobileNav
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            container={container}
            item={item}
          />
        )}
        {isMobile && <DesktopNav active={active} setActive={setActive} />}
      </div>
    </nav>
  );
};

export default Navbar;

const DesktopNav = ({
  active,
  setActive,
}: {
  active: string;
  setActive: Function;
}) => {
  return (
    <div className='flex gap-4  relative mt-1 rounded-md place-items-center font-bold text-slate-300 border-l border-t border-r  border-cyan-700/20  '>
      <div className='absolute  w-full h-full shadow-[-3px_10px_7px_-6px_rgba(0,0,0,0.3)] shadow-cyan-600/30 animate-pulse z-0 '></div>
      <Link
        onClick={() => setActive('Home')}
        className={`${
          active === 'Home' ? 'text-lime-500 scale-95  ' : null
        }  z-10 border-l border-t ml-1 border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40 hover:scale-105 transition-all duration-200 flex items-center group`}
        href='/'
      >
        Home
        <span
          className={` ${
            active === 'Home' ? 'rotate-45 hue-rotate-30' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        ></span>
      </Link>
      <Link
        onClick={() => setActive('Projects')}
        className={`${
          active === 'Projects' ? 'text-lime-500 scale-95  ' : null
        } z-10 border-l border-t  border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40  hover:scale-105 transition-all duration-200 flex items-center group`}
        href='/projects'
      >
        Projects
        <span
          className={` ${
            active === 'Projects' ? 'rotate-45 hue-rotate-30' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        ></span>
      </Link>
      <Link
        onClick={() => setActive('About')}
        className={`${
          active === 'About' ? 'text-lime-500 scale-95  ' : null
        } z-10 border-l border-t  border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40  hover:scale-105 transition-all duration-200 flex items-center group`}
        href='/about'
      >
        About
        <span
          className={` ${
            active === 'About' ? 'rotate-45 hue-rotate-30' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        ></span>
      </Link>
      <Link
        onClick={() => setActive('Contact')}
        className={`${
          active === 'Contact' ? 'text-lime-500 scale-95  ' : null
        }  z-10 border-t border-r mr-2 border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40  hover:scale-105 transition-all duration-200 flex items-center group `}
        href='/contact'
      >
        Contact
        <span
          className={` ${
            active === 'Contact' ? 'rotate-45 hue-rotate-30' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        ></span>
      </Link>
    </div>
  );
};

const MobileNav = ({
  setIsOpen,
  isOpen,
  container,
  item,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  container: any;
  item: any;
}) => {
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer order-1 relative z-20 p-4 ml-auto'
      >
        <svg className='h-8 w-8 fill-current' viewBox='0 0 24 24'>
          <path
            visibility={!isOpen ? 'hidden' : 'visible'}
            fillRule='evenodd'
            d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
          />
          <path
            visibility={isOpen ? 'hidden' : 'visible'}
            fillRule='evenodd'
            d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
          />
        </svg>
      </div>
      <motion.ul
        variants={container}
        initial='hidden'
        animate={isOpen ? 'show' : 'hidden'}
        className={` ${
          isOpen ? 'visible' : 'hidden'
        }  absolute text-center top-4 right-5 border  bg-slate-900/50 backdrop-blur-sm flex flex-col justify-center items-center gap-4 py-4 w-36 rounded-md `}
      >
        <motion.li variants={item}>
          <Link onClick={() => setIsOpen(!isOpen)} href='/'>
            Home
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link onClick={() => setIsOpen(!isOpen)} href='/about'>
            About
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link onClick={() => setIsOpen(!isOpen)} href='/projects'>
            Projects
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link onClick={() => setIsOpen(!isOpen)} href='/contact'>
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </>
  );
};
