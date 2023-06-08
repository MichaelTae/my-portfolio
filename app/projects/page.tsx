'use client';

import { AnimatePresence, motion } from 'framer-motion';
import AnimatedList from '../components/animatedlist/animated-list';
import Image from 'next/image';
import { useState } from 'react';
import styles from './projects.module.css';
import { navLayout } from '../utils/motion/motion';
import useMediaQuery from '../utils/hooks/use-mediaQuery';

const items = [
  {
    title: 'User Management Software',
    action: 'Action 1',
    image: '/ManagementSoftware.png',
    content:
      "This is the work I did for my exam. It is more of a mockup/prototype than a finished project. The project is based on the work I did at Swedcon during my internship, for a project called Carelyo. In short, the application consumes an API, which I also created, and displays metrics regarding the users. Not shown in the images is the User/Revenue table where users' information is displayed along with the revenue from the tickets that have been sold. The backend is built with C# .Net 6 and Entity Framework, while the frontend is built with React + Vite.",
    alt: 'Picture of user management website',
  },
  {
    title: 'Le Mondays',
    action: 'Action 2',
    image: '/leMondays.png',
    content:
      "This website is built using React + Vite and hosted on Netlify. It serves as a hub for the band Le Mondays, featuring a set of links with animations shown on the full site. You can visit the site at le-mondays.com if you're interested in seeing it live.",
    alt: 'Picture of website le-mondays',
  },
  {
    title: 'Carelyo Dashboard',
    action: 'Action 3',
    image: '/CarelyoDashboard.png',
    content:
      'This is the website I worked on during my internship. It is built using React + Vite. The web app serves as an internal system that, similar to my exam work, displays information and relevant metrics for the admin regarding users. I contributed to most parts of the website, but I spent the most time working on the dashboard. The dashboard uses react-grid-layout to allow the user to create their own widgets and set their size and location within the dashboard container. Users can open a menu where they are prompted to specify the type of component they want to add and the information they want to display. In total, I committed around 20,000 lines of code just for this site.',
    alt: 'Picture of Carelyo Dashboard',
  },
  {
    title: 'E-commerce School Project',
    action: 'Action 4',
    image: '/Ecommerce.png',
    content:
      "This is an old school project that I created. Sadly, I no longer have the database and recreating it is more trouble than it's worth, so I can't show much. In essence, the website was created using C#; it is an MVC that consumes an API, both of which I created. The website incorporates session helpers for a cart when a user adds an item to it. It also uses Identity to verify users and store user information. In short, it is an e-commerce site, and the only functionality that is missing is the ability to purchase items.",
    alt: 'Picture of e-commerce school project',
  },
  {
    title: 'Untitled Jewelry Website',
    action: 'Action 5',
    image: '/Jewelpage.jpg',
    content:
      'This website is built using React + Vite with Tailwind. I created this during my internship, and as of now, I am unaware if the website has been deployed. It is an e-commerce site for a jeweler, incorporating a lot of animation and components to make the site stand out. All the functionality is there except, at the time of creation, no backend existed and there was no login/ability to purchase.',
    alt: 'picture of untitled jewelry page',
  },
];

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
  const isNotMobile = useMediaQuery('(min-width: 640px)');
  const renderContent = (content: string, limit: number) => {
    if (content?.length <= limit || isExpanded) {
      return content;
    } else {
      return `${content?.substring(0, limit)}...`;
    }
  };

  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={navLayout}
      className='flex flex-col sm:flex-row h-screen sm:h-[90vh] w-full px-4 pt-4 '
    >
      <div className='grow basis-1/4 '>
        <div className='flex flex-col h-full w-full '>
          <div className=' flex  justify-center '>
            <h1 className=' font-extrabold text-2xl sm:text-3xl md:text-3xl lg:text-4xl z-10 absolute  pt-4 text-lime-500 '>
              My Projects
            </h1>
          </div>
          <div className='grow  relative overflow-hidden '>
            <div className='flex flex-col h-full w-full relative '>
              <div className=' px-2 basis-1/6 pt-12 z-10 '>
                <AnimatedList
                  items={items}
                  setProjectChoice={setProjectChoice}
                />
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
                  className='grow basis-1/6 bg-no-repeat bg-cover '
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `0% ${(9 - i) * 10}%`,
                    backgroundSize: '100% 1000%',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className=' basis-3/4 border  z-10 relative flex flex-col  border-lime-500/70 rounded-md '>
        <div className='absolute  basis-1/12  bg-lime-900/20  blur-xl w-full h-full rounded-md z-0 ' />
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedItem?.action}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='justify-center flex basis-1/12 z-10  text-lime-500 mx-auto  relative font-mono'
          >
            <span
              className={`container sm:text-[4cqw] text-[5cqw] ${styles.textEffect} `}
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
            className='justify-center  flex  border-t z-10 border-lime-500 font-mono p-4  text-sm'
          >
            {!isNotMobile &&
              selectedItem &&
              renderContent(selectedItem.content, 100)}
            {!isNotMobile &&
              selectedItem &&
              selectedItem?.content?.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className=' flex  m-4 p-1  rounded-md border-t border-cyan-400 text-cyan-400 '
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
            className='justify-center flex grow  border-t relative  border-lime-500'
          >
            {' '}
            {selectedItem?.image && (
              <Image
                fill
                src={selectedItem.image}
                alt={selectedItem?.alt}
                className='rounded-md '
              />
            )}{' '}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;
