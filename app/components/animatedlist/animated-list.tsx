import { motion } from "framer-motion";
import { JSX, Key } from "react";

const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

const AnimatedListItem = ({ title, action }:{title:string,action:string}) => (
    <motion.li
        className={"py-2 px-4  cursor-pointer  text-xl text-center border border-lime-500 rounded-md backdrop-filter backdrop-blur-sm  hover:bg-opacity-40 hover:bg-lime-500 hover:text-white transition-all "}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => console.log(action)}
    >
        {title}
    </motion.li>
);

const AnimatedList = ({ items }:{items:any}) => (
    <motion.ul className="space-y-2">
        {items.map((item: JSX.IntrinsicAttributes & { title: string; action: string; }, index: Key | null | undefined) => (
            <AnimatedListItem key={index} {...item} />
        ))}
    </motion.ul>
);

export default AnimatedList;