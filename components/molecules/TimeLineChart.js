'use client'

import { useProjects } from "@/context/TaskContext"
import { useTimelineContext } from "@/context/TimelineContext"
import TimelineCard from "../atoms/TimeLineCard"

export default function TimeLineChart({activeProject}){
    const {timelineRange} = useTimelineContext()
    const {tasks} = useProjects()
    const tlStart = timelineRange[0]
    const tlEnd = timelineRange[timelineRange.length - 1]

    // Get taks in Range
    const tasksInRange = tasks.filter(tks => {
        const date1 = new Date(tks.starting_date)
        const date2 = new Date(tks.delivery_date)

        return (
            tks.project_id == activeProject.id && 
            (
                (date1 >= tlStart && date1 <= tlEnd) || 
                (date2 >= tlStart && date2 <= tlEnd) || 
                (date1 <= tlStart && date2 >= tlEnd)
            )
        )
    })
    
    // Get the tasks position in grid
    const tasksWithGridPosition = tasksInRange.map((task) => {
        const date1 = new Date(task.starting_date)
        const date2 = new Date(task.delivery_date)

        let startIndex = 0
        let endIndex = 0 
        timelineRange.forEach((tl, index) => {
            if(date1.getDay() === tl.getDay() && date1.getMonth() === tl.getMonth() && date1.getFullYear() === tl.getFullYear() ){ startIndex = index}
            if(date2.getDay() === tl.getDay() && date2.getMonth() === tl.getMonth() && date2.getFullYear() === tl.getFullYear() ){ endIndex = index}         
        });
    
        return {
          ...task,
          gridColumnStart: startIndex + 1,
          gridColumnEnd: endIndex + 1,
        };
    });


    const style={gridTemplateColumns:`repeat(${timelineRange.length}, 1fr)`}

    return (
        <div className="w-full h-full grid grid-rows-[1.5rem,1fr]">
            <div className={`grid h-full`} style={style}>
                {timelineRange.map((dt, index) => {
                    let name = ''
                    timelineRange.length < 8 && timelineRange.length > 1 ? name = dt.toLocaleDateString("en-US", { weekday: "short" }) : null 
                    timelineRange.length > 7 ? name = dt.toLocaleDateString("en-US", { day: "numeric" }) : null 
                    return (
                        <p 
                            
                            className="w-full text-center text-light-700"
                            key={index}>
                                {name}
                        </p>
                    )
                })}
            </div>
            <div className="h-[200px] grid overflow-scroll scrollbar-none row-start-2 row-end col-start-1 col-end-2 relative z-10" style={style}>
                {
                    tasksWithGridPosition.map( (tks, index) => {
                        const Nstyle={gridColumn:`${tks.gridColumnStart}/${tks.gridColumnEnd}`, gridRow:`${index+1}/${index+2}`}
                        return (
                            <TimelineCard style={Nstyle} task={tks} key={tks.id}/>
                        )
                    })
                }
            </div>
            <div className="h-[200px] grid border-t-[1px] border-dark-500 row-start-2 row-end-3 col-start-1 col-end-2 " style={style}>
                { 
                    timelineRange.map((el, index) => {
                        return <div key={index} className="relative before:absolute before:w-[1px] before:h-full before:bg-dark-500 before:content-['']"></div>
                    })
                }
            </div>
        </div>
    )
}