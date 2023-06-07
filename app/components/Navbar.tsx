'use client';
import Link from 'next/link';
import {  useState } from 'react';
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
  const[active,setActive]=useState('')
  console.log(active)
  const isMobile = useMediaQuery('(min-width: 640px)');
  return (
    <nav className=' bg-slate-900 w-full flex flex-col     pb-2 '>
     <div className='animate-pulse  h-2 relative order-4  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] drop-shadow-2xl'></div>
      <div className=' flex sticky  '>
        <div className='flex gap-4 p-4 '>
          
          <Link href='/'>
            <h1 className='text-2xl font-bold text-white '>Michael Stojanovic</h1>
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
      {isMobile && <DesktopNav active={active} setActive={setActive}/>}
      </div>
      
     
    </nav>
  );
};

export default Navbar;

const DesktopNav = ({active, setActive}:{active:string,setActive:Function}) => {
  return (
    <div className='flex gap-4 p-4  place-items-center '>
      <Link onClick={()=> setActive('Home')} className={`${active === 'Home' ? 'text-lime-500' : null}`} href='/'>Home</Link>
      <Link onClick={()=> setActive('Projects')} className={`${active === 'Projects' ? 'text-lime-500' : null}`} href='/projects'>Projects</Link>
      <Link onClick={()=> setActive('About')} className={`${active === 'About' ? 'text-lime-500' : null}`}href='/about'>About</Link>
      <Link onClick={()=> setActive('Contact')} className={`${active === 'Contact' ? 'text-lime-500' : null}`} href='/contact'>Contact</Link>
    </div>
  );
};
// TODO: Fix mobile nav z-index or something, not workign when overflowing parent. 
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
        className='cursor-pointer order-1 z-20 p-4 ml-auto'
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
        }  absolute text-center top-4 right-5   bg-slate-900/50  flex flex-col justify-center items-center gap-4 py-4 w-36 rounded-md `}
      >
        <motion.li variants={item}>
          <Link  href='/'>Home</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/about'>About</Link> 
        </motion.li>
        <motion.li variants={item}>
          <Link  href='/projects'>Projects</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/'>Contact</Link>
        </motion.li>
      </motion.ul>
    </>
  );
}
