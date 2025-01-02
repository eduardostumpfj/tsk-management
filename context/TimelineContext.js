'use client'

import { createContext, useContext, useEffect, useState } from "react"

const TimelineContext = createContext()

export const TimelineContextProvider = ({children}) => {
    const [timelineType, setTimelineType] = useState('Week')
    const [clickCount, setclickCount] = useState(0)
    const [timelineRange, setTimelineRange] = useState(getTimelineRange('Week'))

    useEffect(() => {
        const newRange = getTimelineRange(timelineType)
        setTimelineRange(newRange)
    },[clickCount])

    function getTimelineRange(type){
        let range = []
        if(type === 'Month'){
            const today = new Date();
            const month = today.getMonth() + Math.ceil((clickCount*-1)/12)*12 + clickCount;
            const year = today.getFullYear() + Math.floor(clickCount/12);
            range = getDaysInMonth(year, month)
            
        } else {        
            let count
            if(type === 'Week'){
                count = 7 
            } else if(type === 'Day'){
                count = 1
            }

            const today = new Date();
            const startDay = new Date(today)    
            startDay.setDate(today.getDate() + clickCount * count)
            
            for(let i = 0; i < count; i++){
                const nextDate = new Date(startDay);
                nextDate.setDate(startDay.getDate() + i);
                range.push(nextDate)
            }
        }
        return range 
    }
    function getDaysInMonth(year, month) {
        const days = [];
        const date = new Date(year, month, 1);
      
        while (date.getMonth() === month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
      
        return days;
    };

    function changeTimelineType(type){
        setTimelineType(type)
        setclickCount(0)
        const newRange = getTimelineRange(type)
        setTimelineRange(newRange)
    }

    function decreaseCount(){      
        setclickCount(prev => (prev -= 1))
    }
    function increaseCount(){
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