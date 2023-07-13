import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const ImageModal = ({
  image,
  onClose,
  title,
}: {
  image: StaticImageData;
  onClose: () => void;
  title: string | undefined;
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      key='modal'
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      onClick={onClose}
      className='fixed z-50  overflow-auto  left-0 top-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center'
    >
      <div className='bg-slate-900 border border-slate-300/40  rounded-lg w-[90%] h-[85%] flex flex-col pt-6 mt-20 '>
        <div className='p-4  border-cyan-500 text-center pb-2 pt-1 mb-1'>
          <p className='sm:text-2xl lg:text-3xl font-bold font-orbitron text-lime-500 '>
            {title}
          </p>
        </div>
        <div className='self-center   w-full h-full relative '>
          <Image
            src={image}
            alt={title || ''}
            fill
            placeholder='blur'
            sizes='(max-width: 768px) 200vw, (max-width: 1200px) 90vw, 90vw'
          />
        </div>
        <div className='flex '>
          <button
            className='p-1 sm:pt-2 font-orbitron  px-1 sm:py-2 lg:px-4 my-1 mx-1 sm:mt-2 sm:mx-2 text-lime-500  font-semibold cursor-pointer  text-sm sm:text-md lg:text-lg text-center border border-lime-500 rounded-md    hover:bg-opacity-40 hover:bg-lime-500 hover:text-white transition-all duration-500 hover:scale-105 '
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;
