'use client'

import { useTimelineContext } from "@/context/TimelineContext"
import DropDown from "../atoms/DropDown"
import { useState } from "react"
import NavigationButton from "../atoms/NavigationButton"
const timeOptions = ['Day', 'Week', 'Month']

export default function TimelineOptions(){  
    const {timelineType, changeTimelineType, timelineRange, increaseCount, decreaseCount} = useTimelineContext()
    const [isOpen, setIsOpen] = useState(false)
    let name = timelineType === 'Day' ? timelineRange[0].toLocaleDateString("en-US", { month: 'long', day:'numeric', year: "numeric",  }) : timelineRange[0].toLocaleDateString("en-US", { month: "long", year:"numeric" })

    function handleClick(op){
        changeTimelineType(op)
        setIsOpen(false)
    }

    return(
        <div className="flex h-max items-center gap-8"> 
            <div className="flex gap-4 items-center">
                <NavigationButton clickFn={decreaseCount} rotate={'rotate-90'} />
                <p className="text-xl font-bold">{name}</p>
                <NavigationButton clickFn={increaseCount} rotate={'rotate-[-90deg]'} />
            </div>
            <div className="relative w-40">
                <button 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-purple-100 w-full font-bold text-light-100 px-4 py-2 rounded-md justify-self-end flex items-center justify-between gap-4 hover:bg-purple-300">
                    <p>{timelineType}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M1 0.5L8 7.5L15 0.5" stroke="white" strokeWidth='2' strokeLinecap="round"/>
                    </svg>
                    
                </button>
                <DropDown isOpen={isOpen}>
                    { timeOptions.map( (op, index) => {
                        return <button 
                                    className={`w-full text-left hover:bg-purple-300 hover:text-white px-3 py-2 text-nowrap
                                                ${op === timelineType && 'text-purple-100'}`}
                                    type="button"
                                    onClick={() => handleClick(op)}
                                    key={index}
                                    >
                                        {op}
                                </button>
                    })} 
                </DropDown>
            </div>            
        </div>
    )
}