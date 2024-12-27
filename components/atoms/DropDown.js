import { AnimatePresence, motion } from "framer-motion";

export default function DropDown({isOpen, children}){
    return(
        <AnimatePresence>
        { isOpen &&
            <motion.div 
                
                initial={{ opacity: 0, y:-10 }}
                animate={{ opacity: 1, y: 0}}
                exit={{ opacity: 0, y:-10 }}
                className=" absolute bg-dark-700 l-0 rounded-md mt-2 w-fit py-2 z-20">
                {children}
            </motion.div>
        }
        </AnimatePresence>
    )
}