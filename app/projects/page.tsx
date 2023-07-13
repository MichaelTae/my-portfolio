'use client';

import { AnimatePresence, motion } from 'framer-motion';
import AnimatedList from '../components/animatedlist/animated-list';
import Image from 'next/image';
import { useState } from 'react';
import styles from './projects.module.css';
import { navLayout } from '../utils/motion/motion';
import useMediaQuery from '../utils/hooks/use-mediaQuery';
import ImageModal from '../components/modal/imageModal';
import { items } from './ProjectItems';
const container = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 0.7,
    scale: 1,

    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.7,
    },
  },
};

const item = {
  hidden: { y: -500, opacity: 0 },
  show: {
    y: 0,
    opacity: 0.7,

    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const image = '/City.jpg';
const images = new Array(10).fill(null);

const Projects = () => {
  const [projectChoice, setProjectChoice] = useState(items[0].action);
  const selectedItem = items.find((item) => item.action === projectChoice);
  const [isExpanded, setIsExpanded] = useState(false);
  const isNotMobile = useMediaQuery('(min-width: 1024px)');
  const [openImageModal, setOpenImageModal] = useState(false);
  const handleModal = () => {
    setOpenImageModal(!openImageModal);
  };
  const renderContent = toggleReadMoreMobile(isExpanded);

  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={navLayout}
      className='flex flex-col lg:flex-row h-screen sm:h-[92.5vh] w-full   pt-4 '
    >
      <div className='grow basis-1/4 '>
        <div className='flex flex-col h-full w-full sm:mb-2 lg:mb-0 '>
          <div className=' flex  justify-center '>
            <h1 className=' font-extrabold text-2xl sm:text-3xl md:text-3xl lg:text-4xl z-10 absolute  pt-4 text-lime-500 font-orbitron '>
              My Projects
            </h1>
          </div>
          {animatedListBackground(setProjectChoice)}
        </div>
      </div>
      <div className=' basis-3/4 border  z-10 relative flex flex-col mt-2 border-lime-500/70 rounded-md '>
        <div className='absolute  basis-1/12  bg-lime-900/20  blur-xl w-full h-full rounded-md z-0 ' />
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedItem?.action}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='justify-center flex basis-1/12 z-10  text-lime-500 mx-auto  relative '
          >
            <span
              className={`container sm:text-[4cqw] text-[5cqw] ${styles.textEffect} font-orbitron`}
            >
              {selectedItem?.title}
            </span>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedItem?.action}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='justify-center  flex  border-t z-10 border-lime-500  p-4  '
          >
            {!isNotMobile &&
              selectedItem &&
              renderContent(selectedItem.content, 100)}
            {!isNotMobile &&
              selectedItem &&
              selectedItem?.content?.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className=' flex  m-4 p-1  rounded-md border-t border-cyan-400 text-cyan-400  '
                  type='button'
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
              )}
            {isNotMobile && selectedItem && selectedItem?.content}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedItem?.action}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='justify-center flex grow  border-t relative  border-lime-500 overflow-hidden cursor-pointer group'
            onClick={() => setOpenImageModal(true)}
          >
            {' '}
            {selectedItem?.image && (
              <Image
                src={selectedItem?.image}
                alt={selectedItem?.alt}
                className='rounded-md  w-full h-full object-fill'
                placeholder='blur'
              />
            )}{' '}
            <div className='absolute border border-lime-500/20 bottom-0 w-full h-[12%] backdrop-blur-sm text-center font-inter text-lg text-lime-500 backdrop-brightness-[.3]  group-hover:opacity-100 opacity-0 transition-all duration-1000 delay-500'>
              Click to open image
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence
          initial={false}
          mode='wait'
          onExitComplete={() => null}
        >
          {openImageModal && (
            <ImageModal
              title={selectedItem?.title}
              image={selectedItem?.image}
              onClose={handleModal}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;

function animatedListBackground(setProjectChoice: Function) {
  return (
    <div className='grow  overflow-hidden relative mt-2 '>
      <div className='flex flex-col h-full w-full relative bottom-0 sm:bottom-48 lg:bottom-0'>
        <div className=' px-2 basis-1/6 pt-12 z-10 '>
          <AnimatedList items={items} setProjectChoice={setProjectChoice} />
        </div>
      </div>
      <motion.div
        className='border-2 flex  basis-5/6  absolute  blur-[3px] flex-col-reverse z-0  top-0 bottom-0 right-0 left-0 '
        variants={container}
        initial='hidden'
        animate='show'
      >
        {images.map((_, i) => (
          <motion.div
            key={i}
            variants={item}
            className='grow  basis-1/6 bg-no-repeat bg-cover '
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: `0% ${(9 - i) * 10}%`,
              backgroundSize: '100% 1000%',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function toggleReadMoreMobile(isExpanded: boolean) {
  return (content: string, limit: number) => {
    if (content?.length <= limit || isExpanded) {
      return content;
    } else {
      return `${content?.substring(0, limit)}...`;
    }
  };
}
