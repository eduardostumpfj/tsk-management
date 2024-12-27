'use client'

import { useEffect, useRef } from "react"
import { motion } from "framer-motion";


export default function TextArea({text, onChange, isTitle, isWrong}){
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

    return (
        <motion.textarea
            animate={isWrong && {y: [0, -2, 2, -2, 2, 0]}}
            transition={{duration: .2}}
            ref={textRef}
            value={text}
            rows='1'
            className={`
                ${isTitle ? 'font-extrabold text-3xl' : 'text-xl' }
                cursor-pointer text-light-100 px-3 pt-2 overflow-hidden resize-none rounded-small bg-dark-500 mb-3
                focus:bg-dark-700 focus:outline-none focus-visible:outline-none
                hover:bg-dark-6007
                ${isTitle && isWrong && 'outline-red-600 outline-double'}
                ${isWrong && 'outline-pink-100 outline-double outline-2'}
                `}
            onChange={handleTextChange}
        />
    )
}4