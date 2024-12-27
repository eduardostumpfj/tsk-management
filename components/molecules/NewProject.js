'use client'

import { useId, useRef, useState } from "react"
import { motion } from "framer-motion";
import SaveButton from "../atoms/SaveButton";
import { useModal } from "@/context/ModalContext";
import { useProjects } from "@/context/TaskContext";
import { useActiveProject } from "@/context/ActiveProject";

export default function NewProject(){
    const {projects, addProject} = useProjects()
    const {changeProject} = useActiveProject()
    const {closeModal} = useModal()
    const [isWrong, setIsWrong] = useState(false)
    const inputRef = useRef()
    const id = useId()    
    function createNewProject(){
        const cols = [
            { id: 'col1', name:'Backlog', tasks:[] },
            { id: 'col2', name:'In Progress', tasks:[] },
            { id: 'col3', name:'Pending', tasks:[] },
            { id: 'col4', name:'Completed', tasks:[] },
        ]
        const newProj = {
            id:id,
            name:inputRef.current.value,
            columns:cols
        }
        return newProj
    }

    function handleSave(){
        if(inputRef.current.value === '' ){
            setIsWrong(true)
            return
        }
        const newProject = createNewProject() 
        addProject(newProject)
        changeProject(newProject)
        closeModal()
    }

    return (
        <div className="py-8 grid gap-8">
            <h1 className="text-3xl justify-self-center">New Project</h1>
            <div className="grid gap-4">
                <label className="text-light-700">Project Name:</label>
                <motion.input
                    animate={isWrong && {y: [0, -2, 2, -2, 2, 0]}}
                    transition={{duration: .2}}
                    ref={inputRef}
                    onChange={() => setIsWrong(false)}
                    className={`
                        font-extrabold text-3xl h-full
                        text-light-100 px-3 pt-2 rounded-small bg-dark-700 w-full mb-3 
                        outline-1 outline-dashed outline-light-700
                        ${isWrong && 'outline-pink-100 outline-double outline-2'}
                        `}
                        />
            </div>
            <SaveButton saveFn={handleSave} />
        </div>
    )
}