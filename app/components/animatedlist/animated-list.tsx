import { motion } from 'framer-motion';
import { JSX, Key } from 'react';
import useMediaQuery from '@/app/utils/hooks/use-mediaQuery';

const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 200,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

const variantsMobile = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeIn' } },
};

const AnimatedListItem = ({
  title,
  action,
  setProjectChoice,
}: {
  title: string;
  action: string;
  setProjectChoice: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <motion.li>
    <button
      className={
        'py-1 px-1 sm:py-2 lg:px-0  text-lime-500 font-orbitron font-semibold cursor-pointer w-full text-sm sm:text-md  2xl:text-lg text-center border border-lime-500 rounded-md backdrop-filter backdrop-blur-sm backdrop-brightness-50 -backdrop-hue-rotate-90  hover:bg-opacity-40 hover:bg-lime-500 hover:text-white transition-all hover:scale-105 active:scale-100 '
      }
      onClick={() => setProjectChoice(action)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setProjectChoice(action);
        }
      }}
      aria-label={`view ${title} project`}
    >
      {title}
    </button>
  </motion.li>
);

const AnimatedList = ({
  items,
  setProjectChoice,
}: {
  items: JSX.IntrinsicAttributes & { title: string; action: string }[];
  setProjectChoice: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const isNotMobile = useMediaQuery('(min-width: 640px)');

  return (
    <motion.ul
      className='space-y-2 py-1 px-2'
      variants={isNotMobile ? variants : variantsMobile}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {items.map(
        (
          item: JSX.IntrinsicAttributes & { title: string; action: string },
          index: Key | null | undefined
        ) => (
          <AnimatedListItem
            key={index}
            {...item}
            setProjectChoice={setProjectChoice}
          />
        )
      )}
    </motion.ul>
  );
};

export default AnimatedList;
