'use client'

import { useProjects } from "@/context/TaskContext"
import { useState } from "react"
import DropDown from "../atoms/DropDown"

export default function DBProjectHeader({ handleClick, activeProject}){
    const {projects} = useProjects()
    const [isOpen, setIsOpen] = useState(false)


    function toggleOpen(){
        if(projects.length < 2){ return }
        setIsOpen(!isOpen)
    }

    function dropClick(id){
        setIsOpen(false)
        handleClick(id)
    }

    return(
        <div className="relative w-full">
            <button className={`flex gap-4 items-center ${projects.length < 2 && 'cursor-default'} `} onClick={toggleOpen}>
                <p className="font-bold text-xl">{activeProject.name}</p>
                {projects.length > 1 &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M1 0.5L8 7.5L15 0.5" stroke="white" strokeWidth='2' strokeLinecap="round"/>
                    </svg>
                }
            </button>
            <DropDown isOpen={isOpen}>
            { projects.map( proj => {
                return <button 
                            className={`w-full text-left hover:bg-purple-300 hover:text-white px-3 py-2
                                ${proj.id === activeProject.id && 'text-purple-100'}`}
                                onClick={() => dropClick(proj.id)}
                                key={proj.id}
                                value={proj.id}
                                >
                                {proj.name}
                        </button>
            })} 
            </DropDown>
        </div>
    )
}