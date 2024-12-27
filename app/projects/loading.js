'use client'

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <motion.div
            className="bg-dark-900 rounded-normal overflow-hidden w-full h-full p-8 grid grid-rows-[1fr_800px] gap-8"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
        >
            <div className="flex justify-between">
                <div className="text-2xl font-bold bg-dark-500 w-[200px] rounded-full h-[50px]"></div>
                <div className="text-2xl font-bold bg-dark-500 w-[200px] rounded-full h-[50px]"></div>
            </div>
            <ul className="w-full h-[calc(100%-2rem)] grid grid-cols-4 gap-8 relative row-[2/3] translate-x-[10px]">
                <li className="h-[640px] bg-dark-500 rounded-small p-4"></li>
                <li className="h-[640px] bg-dark-500 rounded-small p-4"></li>
                <li className="h-[640px] bg-dark-500 rounded-small p-4"></li>
                <li className="h-[640px] bg-dark-500 rounded-small p-4"></li>
            </ul>
        </motion.div>
    );
}
