import { motion } from "framer-motion";

export default function StatusPercentage({children, index}){
    return(
        <motion.div
            initial={{opacity:0, x:20}}
            animate={{opacity:1, x:0}}
            transition={{delay: index / 20 }}
            className="grid grid-cols-[12px,1fr] gap-2 items-start"
        >
            {children}
        </motion.div>
    )
}