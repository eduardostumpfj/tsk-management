'use client'

import { useActiveProject } from "@/context/ActiveProject"
import { useModal } from "@/context/ModalContext"
import { useProjects } from "@/context/TaskContext"
import { useState } from "react"
import DropDown from "../atoms/DropDown"

export default function ProjectHeader(){
    const { projects } = useProjects()
    const {openModal} = useModal()
    const { activeProject, changeProject } = useActiveProject()
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(id){
        setIsOpen(false)
        const proj = projects.find( proj => proj.id === id) 
        changeProject(proj)
    }

    function toggleOpen(){
        if(projects.length < 2){ return }
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex sm:grid grid-cols-[1fr,max-content] items-center  md:w-full">
            <div className="relative w-full ">
                <button className={`flex gap-4 items-center ${projects.length < 2 && 'cursor-default'} `} onClick={toggleOpen}>
                    <h1 className="text-xl lg:text-2xl font-bold">{activeProject.name}</h1>
                    {projects.length > 1 &&
                        <svg className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                            <path d="M1 0.5L8 7.5L15 0.5" stroke="white" strokeWidth='2' strokeLinecap="round"/>
                        </svg>
                    }
                </button>
                <DropDown isOpen={isOpen}>
                    { projects.map( proj => {
                        return <button 
                                    className={`w-full text-left hover:bg-purple-300 hover:text-white px-3 py-2
                                                ${proj.id === activeProject.id && 'text-purple-100'}`}
                                    onClick={() => handleClick(proj.id)}
                                    key={proj.id}
                                    value={proj.id}
                                    >
                                        {proj.name}
                                </button>
                    })} 
                </DropDown>
            </div>
            
            
            
            <button
                className="text-xl flex gap-4 group stroke-white 
                hover:text-purple-100 hover:stroke-purple-100
                transition-colors duration-200"
                onClick={() => openModal({type:'newProject'})}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17.5"  strokeWidth='2'/>
                    <path d="M18.5 27V9" strokeWidth='2'/>
                    <line x1="10" y1="17.5" x2="27" y2="17.5" strokeWidth='2'/>
                </svg>
                <p>New Project</p>
        </button>
        </div>
    )

}