'use client';
import Link from 'next/link';

export const DesktopNav = ({ path }: { path: string }) => {
  return (
    <div className='md:flex gap-4 visible  hidden relative mt-1 rounded-md place-items-center font-orbitron text-slate-300 border-l border-t border-r  border-cyan-700/20  '>
      <div className='absolute  w-full h-full shadow-[-3px_10px_7px_-6px_rgba(0,0,0,0.3)] shadow-cyan-600/30 animate-pulse z-0 ' />
      <Link
        className={`${
          path === '/' ? 'text-lime-500 scale-95  ' : null
        }  z-10 border-l border-t ml-1 border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40 active:scale-100 hover:scale-105 transition-all duration-200 flex items-center group`}
        href='/'
      >
        Home
        <span
          className={` ${
            path === '/' ? 'rotate-45 hue-rotate-30 ' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        />
      </Link>
      <Link
        className={`${
          path === '/projects' ? 'text-lime-500 scale-95 hover:scale-95 ' : null
        } z-10 border-l border-t  border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40 active:scale-100 hover:scale-105 transition-all duration-200 flex items-center group`}
        href='/projects'
      >
        Projects
        <span
          className={` ${
            path === '/projects' ? 'rotate-45 hue-rotate-30' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        />
      </Link>
      <Link
        className={`${
          path === '/about' ? 'text-lime-500 scale-95  hover:scale-95' : null
        } z-10 border-l border-t  border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40 active:scale-100 hover:scale-105 transition-all duration-200 flex items-center group`}
        href='/about'
      >
        About
        <span
          className={` ${
            path === '/about' ? 'rotate-45 hue-rotate-30 ' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        />
      </Link>
      <Link
        className={`${
          path === '/contact' ? 'text-lime-500 scale-95  hover:scale-95' : null
        }  z-10 border-t border-r mr-2 border-cyan-700  shadow-lg rounded-md xl:px-8 px-6 shadow-cyan-700/40 active:scale-100 hover:scale-105 transition-all duration-200 flex items-center group `}
        href='/contact'
      >
        Contact
        <span
          className={` ${
            path === '/contact' ? 'rotate-45 hue-rotate-30' : null
          } ml-4 h-3 w-3 bg-cyan-700 group-hover:hue-rotate-30 group-hover:rotate-45 duration-300 rounded-sm `}
        />
      </Link>
    </div>
  );
};
