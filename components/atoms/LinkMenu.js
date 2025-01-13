'use client'

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function LinkMenu({  active = false ,href ,children}){
    return (
        <motion.div
            className="relative group"
            whileHover="hover"
            initial="hidden"
        >
            <Link
                href={href}
                className={`w-[50px] lg:w-[66px] aspect-square rounded-full grid items-center justify-center`}
            >
                <div className={`relative z-10 ${active ? 'stroke-light-300' : 'stroke-dark-700'}`}>{children}</div>
                { !active && (
                    <motion.div
                        className='w-[50px] lg:w-[66px] bg-purple-300 absolute rounded-full top-0 right-0'
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            hover: { scale: 1, opacity: 1 },
                        }}
                    />
                )}
                <AnimatePresence>
                { active && (
                    <motion.div                    
                        initial={{ scale: 0 }}
                        animate={{ scale: 1}}
                        exit={{scale: 0, opacity:0}}
                        transition={{ 
                            duration: .1,
                            ease: 'easeOut', 
                            type: "spring",     
                            stiffness: 200,     
                            damping: 20,     
                            mass: 1,    
                        }}
                        className='w-full h-full bg-dark-500 absolute rounded-full top-0 right-0'
                    />
                )}
                </AnimatePresence>
                
                
      </Link>
    </motion.div>
    )
}