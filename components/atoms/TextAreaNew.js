'use client'

import { useEffect, useRef } from "react"
import { motion } from "framer-motion";

export default function TextAreaNew({text, onChange, name, isTitle, isWrong}){
    const textRef = useRef()
    useEffect(() => {
        if(textRef.current){
            textRef.current.style.height = 'auto';
            textRef.current.style.height = `${textRef.current.scrollHeight + 8}px`;
        }
    }, [])
    function handleTextChange(){
        textRef.current.style.height = 'auto';
        textRef.current.style.height = `${textRef.current.scrollHeight + 8}px`;
        onChange(textRef.current.value)
    }
    return(
    <div className="px-3 flex flex-col gap-2 mt-4">
        <p className="mb-2">{name}:</p>
        <motion.textarea
            animate={isWrong && {y: [0, -2, 2, -2, 2, 0]}}
            transition={{duration: .2}}
            ref={textRef}
            value={text}
            placeholder={'task '+ name}
            rows='1'
            className={`
                ${isTitle ? 'font-extrab>old text-3xl' : 'text-xl' }
                text-light-100 px-3 pt-2 resize-none rounded-small bg-dark-700 mb-3 w-full 
                outline-1 outline-dashed outline-light-700
                placeholder:text-light-700 placeholder:text-[1rem] placeholder:font-normal
                ${isTitle && isWrong && 'outline-pink-100 outline-double'}
                ${isWrong && 'outline-pink-100 outline-double outline-2'}
                `}
            onChange={handleTextChange}
        />
    </div>
    )
}
