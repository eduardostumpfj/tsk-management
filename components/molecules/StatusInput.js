'use client'

import { useProjects } from "@/context/TaskContext"
import { useState } from "react"
import DropDown from "../atoms/DropDown";


export default function CatInput({colId, onChange}){
    const { projects }  = useProjects()
    const activeProject = projects[0]
    const col = findCol(colId)
    const [activeCol, setActiveCol] = useState(col[0])
    const [isOpen, setIsOpen] = useState(false)
    
    function findCol(id){
      return  activeProject.columns.filter(col => col.id === id)
    }

    function handleClick(id){
        const newCol = findCol(id)
        setActiveCol(newCol[0])
        setIsOpen(false)
        onChange(newCol[0].id)
    }
    return (
        <div className="relative w-40">
            <button 
                type="button" 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-purple-100 w-full font-bold text-light-100 px-4 py-2 rounded-md justify-self-end flex items-center justify-between gap-4 hover:bg-purple-300">
                <p>{activeCol.name}</p>
                <svg className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                    <path d="M1 0.5L8 7.5L15 0.5" stroke="white" strokeWidth='2' strokeLinecap="round"/>
                </svg>
                
            </button>
            <DropDown isOpen={isOpen}>
                { activeProject && activeProject.columns.map( column => {
                    return <button 
                                className={`w-full text-left hover:bg-purple-300 hover:text-white px-3 py-2 text-nowrap
                                            ${column.id === activeCol.id && 'text-purple-100'}`}
                                type="button"
                                onClick={() => handleClick(column.id)}
                                key={column.id}
                                value={column.id}
                                >
                                    {column.name}
                            </button>
                })} 
            </DropDown>
        </div>
    )
} 