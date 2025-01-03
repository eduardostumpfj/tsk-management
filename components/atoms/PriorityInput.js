import { useState } from "react";
import DropDown from "./DropDown";

export default function PriorityInput({priority, onChange, isNew}){
    let priorityClass;    
    priority == 'high' ? priorityClass = 'text-pink-100' : null
    priority == 'medium' ? priorityClass = 'text-yellow-100' : null
    priority == 'low' ? priorityClass = 'text-green-100' : null

    const [activePriority, setActivePriority] = useState(priority)
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(string){
        setActivePriority(string)
        setIsOpen(false)
        onChange(string)
    }
    return (
        <div className="flex gap-1 items-center">
            <label htmlFor="priority">Priority:</label>
            <div className="relative w-28">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={`bg-dark-500 px-3 py-1 rounded-full cursor-pointer w-full text-left font-bold ${priorityClass} hover:bg-dark-600
                        ${isNew && 'bg-dark-700 outline-1 outline-light-700 outline-dashed flex justify-between items-center hover:bg-dark-700 '}`}
                    >{activePriority.charAt(0).toUpperCase() + activePriority.slice(1) }
                    {isNew &&
                        <svg className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                            <path d="M1 0.5L8 7.5L15 0.5" stroke="white" strokeWidth='2' strokeLinecap="round"/>
                        </svg>
                    }
                </button>
                <DropDown isOpen={isOpen}>
                    <button className={` w-full text-left hover:bg-purple-300 hover:text-white ${priority === 'low' ? 'text-purple-100' : 'text-light-500' } px-3 py-2 `} 
                            onClick={() => handleClick('low')}                               
                            type="button"
                            value='low'>
                                Low
                        </button>    
                        <button className={` w-full text-left hover:bg-purple-300 hover:text-white ${priority === 'medium' ? 'text-purple-100' : 'text-light-500' } px-3 py-2 `} 
                            onClick={() => handleClick('medium')}
                            type="button"
                            value='medium'>
                                    Medium
                        </button>    
                        <button className={` w-full text-left hover:bg-purple-300 hover:text-white ${priority === 'high' ? 'text-purple-100' : 'text-light-500' } px-3 py-2 `} 
                            onClick={() => handleClick('high')}
                            type="button"
                            value='high'>
                                    High
                        </button> 
                </DropDown>
            </div>
        </div>
    )
}   