import { motion } from "framer-motion";

export default function CategoryChart({name, amount, total, index}){
    const style = {
        'height': `${(amount/total) * 100}%`,
        transformOrigin: "bottom center" 
    }
    
    return (
        <div className="grid grid-rows-[1fr,max-content] gap-2">
            <div className="h-full w-10 m-auto bg-repeat bg-stripes rounded-full relative">
                <motion.div
                    initial={{ scaleY:0}}
                    animate={{scaleY: 1}}
                    transition={{ delay: index / 20 }}
                    className="w-full absolute bg-purple-100 rounded-full bottom-0 cursor-pointer group"
                    style={style}
                >
                    <div className="w-full h-full relative">
                        <div className="absolute z-10 w-max bg-dark-700 rounded-full top-[-45px] py-1 px-2 left-[50%] translate-x-[-50%]
                                        opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-[250ms] ease-in-out"
                        >
                            <p className="text-light-700 text-sm relative z-20">
                                <span className="font-bold text-white">{amount} </span>
                                 Tasks
                            </p>
                            <div className="w-4 absolute aspect-square bg-purple-300 border-white bottom-[-25px] border-[1px] rounded-full left-[50%] translate-x-[-50%]"></div> 
                            <div className="w-4 absolute aspect-square bg-dark-700 rotate-45 bottom-[-5px] left-[50%] translate-x-[-50%]"></div> 
                        </div>
                    </div> 
                </motion.div>
            </div> 
            <motion.p 
                initial={{ opacity:0,y:5 }}
                animate={{opacity: 1, y:0}}
                transition={{ delay: index / 20 }}
                className="text-dark-500 uppercase text-sm lg:text-[1rem]"
            >
                {name}
            </motion.p>
        </div>
    )
}