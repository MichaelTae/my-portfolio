import { motion } from "framer-motion";
import { JSX, Key } from "react";
import useMediaQuery from "@/app/utils/hooks/use-mediaQuery";

const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 200, transition: { duration: 0.5, ease:'easeIn' } },
};

const variantsMobile = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease:'easeIn' } },

};


const AnimatedListItem = ({ title, action,setProjectChoice  }:{title:string,action:string,setProjectChoice:Function}) => (
    <motion.li
        className={"py-1 px-1 sm:py-2 lg:px-4 text-lime-500 font-mono font-semibold cursor-pointer  text-sm sm:text-md lg:text-lg text-center border border-lime-500 rounded-md backdrop-filter backdrop-blur-sm  hover:bg-opacity-40 hover:bg-lime-500 hover:text-white transition-all "}
        onClick={() => setProjectChoice(action)}
    >
        {title}
    </motion.li>
);

const AnimatedList = ({ items,setProjectChoice  }:{items:any, setProjectChoice: Function}) => {
    const isNotMobile = useMediaQuery('(min-width: 640px)');

    return(<motion.ul className="space-y-2 py-1"  variants={isNotMobile ? variants : variantsMobile}
        initial="hidden"
        animate="visible"
        exit="hidden">
        {items.map((item: JSX.IntrinsicAttributes & { title: string; action: string; }, index: Key | null | undefined) => (
            <AnimatedListItem key={index} {...item} setProjectChoice={setProjectChoice} />
        ))}
    </motion.ul>)
};

export default AnimatedList;