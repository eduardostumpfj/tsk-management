'use client'

import { createContext, useContext, useEffect, useState } from "react"

const TimelineContext = createContext()

export const TimelineContextProvider = ({children}) => {
    const [timelineType, setTimelineType] = useState('Week')
    const [timelineRange, setTimelineRange] = useState(getTimelineRange('Week'))
    const [clickCount, setclickCount] = useState(0)

    useEffect(() => {
        console.log(clickCount)
        const newRange = getTimelineRange(timelineType)
        setTimelineRange(newRange)
    },[clickCount])

    function getTimelineRange(type){
        let range = []
        if(type === 'Month'){
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + clickCount;
            range = getDaysInMonth(year, month)
            
        } else {            
            let count
            if(type === 'Week'){
                 count = 7
            } else if(type === 'Day'){
                count = 1
            }
    
            for(let i = 0; i < count; i++){
                const today = new Date();
                const nextDate = new Date(today);
                nextDate.setDate(today.getDate() + i);
                range.push(nextDate)
            }
        }

        return range 
    }
    function getDaysInMonth(year, month) {
        const days = [];
        const date = new Date(year, month, 1);
      
        while (date.getMonth() === month) {
          days.push(new Date(date)); // Add a copy of the current date
          date.setDate(date.getDate() + 1); // Move to the next day
        }
      
        return days;
    };

    function changeTimelineType(type){
        setTimelineType(type)
        const newRange = getTimelineRange(type)
        setTimelineRange(newRange)

    }

    function decreaseCount(){
        console.log('voltou')
        setclickCount(prev => (prev -= 1))
    }
    function increaseCount(){
        if(clickCount >= 0){ return }
        setclickCount(prev => prev += 1)
    }
    return (
        <TimelineContext.Provider value={{timelineType, changeTimelineType, timelineRange, decreaseCount, increaseCount}}>
            {children}
        </TimelineContext.Provider>
    )
}

export const useTimelineContext = () => {
    return useContext(TimelineContext)
}