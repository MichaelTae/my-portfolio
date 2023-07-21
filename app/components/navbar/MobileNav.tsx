import Link from 'next/link';
import { Variants, motion } from 'framer-motion';

interface MobileNavTypes {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  container: Variants;
  item: Variants;
  path: string;
}

export const MobileNav = ({
  setIsOpen,
  isOpen,
  container,
  item,
  path,
}: MobileNavTypes) => {
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer  order-1 relative w-full  flex  z-20  p-4 mr-4 mt-1  '
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
        }  absolute text-center  top-4 right-5 border text-xl bg-slate-900/60   backdrop-blur-sm flex flex-col   pt-12 w-36 rounded-md font-orbitron`}
      >
        <motion.li
          variants={item}
          className={`${path === '/' ? 'text-lime-500' : ''} w-full h-full`}
        >
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href='/'
            className='w-full h-full flex  justify-center border-t pt-2 pb-2 border-lime-500 mt-4 '
          >
            Home
          </Link>
        </motion.li>

        <motion.li
          variants={item}
          className={`${
            path === '/projects' ? 'text-lime-500' : ''
          } w-full h-full `}
        >
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href='/projects'
            className='w-full flex  justify-center  border-t pb-2 border-lime-500 pt-2'
          >
            Projects
          </Link>
        </motion.li>

        <motion.li
          variants={item}
          className={`${
            path === '/about' ? 'text-lime-500' : ''
          } w-full h-full`}
        >
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href='/about'
            className='w-full flex  justify-center  border-t   pb-2 border-lime-500 pt-2'
          >
            About
          </Link>
        </motion.li>

        <motion.li
          variants={item}
          className={`${
            path === '/contact' ? 'text-lime-500' : ''
          } w-full h-full`}
        >
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href='/contact'
            className='w-full flex  justify-center   border-t  border-lime-500 pt-2 pb-2'
          >
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </>
  );
};
