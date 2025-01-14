'use client'

import { useModal } from "@/context/ModalContext"
import { useRef } from "react"
import { AnimatePresence, motion } from "framer-motion";
import TaskDetail from "./TaskDetail";
import NewTask from "./NewTask";
import NewProject from "../molecules/NewProject";

export default function Modal(){
    const { isOpen, closeModal, modalContent} = useModal()
    const bgModal = useRef()
    
    function handleClick(e){
        e.target === bgModal.current && closeModal()
    }

    if(!isOpen) { return null }
    return (
        <div ref={bgModal} onClick={(e) => handleClick(e) } className="fixed w-full h-full bg-dark-900/85 top-0 left-0 z-[1000] grid items-center">
            <AnimatePresence>        
                <motion.div 
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    className="max-h-[90vh] w-[95vw] lg:w-[70vw] xl:w-[50vw] bg-dark-500 m-auto rounded-normal p-8"
                    >
                    {modalContent.type === 'newTask' && <NewTask/>}
                    {modalContent.type === 'detail' && <TaskDetail />} 
                    {modalContent.type === 'newProject' && <NewProject />} 
                </motion.div>   
            </AnimatePresence>
        </div>
    )
}

