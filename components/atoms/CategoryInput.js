'use client'

import { useState } from "react";
import DropDown from "./DropDown";

export default function CategoryInput({category, onChange, isNew}){
    const [activeCategory, setActiveCategory] = useState(category)
    const [isOpen, setIsOpen] = useState(false)
    let priorityClass;    
    activeCategory == 'UI' ? priorityClass = 'text-purple-500' : null
    activeCategory == 'UX' ? priorityClass = 'text-purple-500' : null
    activeCategory == 'Development' ? priorityClass = 'text-orange-500' : null


    function handleClick(string){
        setActiveCategory(string)
        setIsOpen(false)
        onChange(string)
    }

    return(
        <div className="flex gap-1 items-center">
            <label htmlFor="priority">Category:</label>
            <div className="relative w-40">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={`bg-dark-500 px-3 py-1 rounded-full cursor-pointer w-full text-left font-bold ${priorityClass} hover:bg-dark-600
                        ${isNew && 'bg-dark-700 outline-1 outline-light-700 outline-dashed flex justify-between items-center hover:bg-dark-700 '}`}
                    >{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) }
                    {isNew &&
                        <svg className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                            <path d="M1 0.5L8 7.5L15 0.5" stroke="white" strokeWidth='2' strokeLinecap="round"/>
                        </svg>
                    }
                </button>
                <DropDown isOpen={isOpen}>
                    <button className={` w-full text-left hover:bg-purple-300 hover:text-white ${category === 'UI' ? 'text-purple-100' : 'text-light-500' } px-3 py-2 `} 
                            onClick={() => handleClick('UI')}                               
                            type="button"
                            value='UI'>
                                UI
                        </button>    
                        <button className={` w-full text-left hover:bg-purple-300 hover:text-white ${category === 'UX' ? 'text-purple-100' : 'text-light-500' } px-3 py-2 `} 
                            onClick={() => handleClick('UX')}
                            type="button"
                            value='UX'>
                                    UX
                        </button>    
                        <button className={` w-full text-left hover:bg-purple-300 hover:text-white ${category === 'Development' ? 'text-purple-100' : 'text-light-500' } px-3 py-2 `} 
                            onClick={() => handleClick('Development')}
                            type="button"
                            value='Development'>
                                    Development
                        </button> 
                </DropDown>
            </div>
        </div>
    )
}