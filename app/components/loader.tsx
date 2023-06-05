import React, { useState, useEffect,  } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onFinishedLoading }:{onFinishedLoading:Function}) => {
    const [percent, setPercent] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setPercent((prevPercent) => {
          if (prevPercent >= 100) {
            clearInterval(intervalId);
            setTimeout(onFinishedLoading, 0); // Wrap the callback in a setTimeout
            return 0;
          }
          return prevPercent + 1;
        });
      }, 100);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [onFinishedLoading]);

  return (
    <div className="relative pt-1 w-full " >
      <div className="flex mb-2 items-center justify-between">
        <div >
          <span  className="text-xs  font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 animate-bounce sm:mr-2 ">
            Loading 
          </span>
          <span  className="text-xs  font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 animate-bounce">
             next 
          </span>
          <span  className="text-xs  font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 animate-bounce sm:ml-2">
             image
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs pl-2 font-semibold inline-block text-indigo-600">
            {percent}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
        <motion.div
          style={{ width: `${percent}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap  text-white justify-center bg-indigo-500"
        ></motion.div>
      </div>
    </div>
  );
};

export default Loader;
