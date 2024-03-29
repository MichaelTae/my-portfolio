export const staggerContainer = (staggerChildren: any, delayChildren: any) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });


export const textVariant = (delay:number) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  });
  
  export const textContainer =(delay:number) => ({
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * delay },
      
    }),
  });
  
  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'ease',
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  };
  
  export const fadeIn = (direction:string, type:string, delay:number, duration:number) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  export const navLayout = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
     
      transition: {
        delay: 0.2,
        duration: 2.5,
       
      },
    },
  };
  