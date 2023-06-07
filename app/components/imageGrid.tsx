import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Loader from './loader';
import { fadeIn } from '../utils/motion/motion';

const ImageGrid = () => {
  const controls = useAnimation();
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [imageIndex, setImageIndex] = useState(0); 
  const images = ['/frog.jpg', '/mountains.jpg', '/smallTree.jpg','/bird.jpg']; 
  const [initialLoad, setInitialLoad] = useState(true);
  const[isMounted,setIsMounted]=useState(true);
 
  const image = images[imageIndex];

  useEffect(() => {
    
    setIsMounted(true);
    if (initialLoad) {
      controls.start("show").then(() => {
        if (isMounted) {
          controls.start({ filter: 'blur(0px)', transition: { duration: 0.5 } });
        }
      }).catch(() => {  });  
      setInitialLoad(false); 
    }
    else if (loadingFinished) {
      controls.start("hidden")
        .then(() => {
          if (isMounted) {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setLoadingFinished(false);
            controls.start("show").then(() => {
              if (isMounted) {
                controls.start({ filter: 'blur(0px)', transition: { duration: 0.5 } });
              }
            }).catch(() => { });
          }
        })
        .catch(() => { });
    } 
  
    return () => {
      setIsMounted(false);
    };
  }, [loadingFinished, initialLoad,controls,isMounted,images?.length]);

  
  return (
    <motion.div
    className="grid grid-cols-3 h-[100%] w-[100%] absolute overflow-hidden pt-2"
    initial="hidden"
    animate={controls}
    variants={{
      show: { opacity: 0.2, filter: 'blur(3px)' },
      hidden: { opacity: 0, },
    }}
    
  >
       
  <motion.div
    variants={fadeIn('right', 'ease-in', 1 * 0.5, 0.75)}
    className='border-l border-t bg-no-repeat bg-cover   '
    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'left top', backgroundSize: '300% 200%' }}
  />
  <motion.div
    variants={fadeIn('up', 'ease-in', 2 * 0.5, 0.75)}
    className='border-t bg-no-repeat bg-cover '
    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center top', backgroundSize: '300% 200%' }}
  />
  <motion.div
    variants={fadeIn('left', 'ease-in', 3 * 0.5, 0.75)}
    className='border-r border-t bg-no-repeat bg-cover '
    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'right top', backgroundSize: '300% 200%' }}
  />
  <motion.div
    variants={fadeIn('left', 'ease-in', 4 * 0.5, 0.75)}
    className='border-l border-b bg-no-repeat bg-cover '
    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'left bottom', backgroundSize: '300% 200%' }}
  />
  <motion.div
  
    variants={fadeIn('down', 'ease-in', 5 * 0.5, 0.75)}
    className='border-b bg-no-repeat bg-cover flex justify-center  items-end '
    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center bottom', backgroundSize: '300% 200%' }}
  >  <Loader onFinishedLoading={() => setLoadingFinished(true)} /></motion.div>
  <motion.div
    variants={fadeIn('up', 'ease-in', 6 * 0.5, 0.75)}
    className='border-b border-r bg-no-repeat bg-cover '
    style={{ backgroundImage: `url(${image})`, backgroundPosition: 'right bottom', backgroundSize: '300% 200%' }}
  />

    
    
    </motion.div>
    
  );
};

export default ImageGrid;
