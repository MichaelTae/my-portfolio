'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

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
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav
      className={`${
        path === '/' ? 'lg:hidden ' : 'relative scale-100'
      } bg-slate-900/50 w-full flex flex-col  z-30    `}
    >
      <div className='animate-pulse pointer-events-none h-2 relative order-4 z-0 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] drop-shadow-2xl'></div>
      <div className=' flex sticky justify-between lg:justify-normal '>
        <div className='flex  gap-4 p-4 '>
          <div className='lg:min-w-[15rem] '>
            <Link href='/'>
              <h1 className='text-2xl font-bold text-slate-300 font-orbitron  '>
                Michael Stojanovic
              </h1>
            </Link>
          </div>
        </div>
        <div className='md:hidden  '>
          <MobileNav
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            container={container}
            item={item}
          />
        </div>

        <DesktopNav path={path} />
      </div>
    </nav>
  );
};

export default Navbar;
