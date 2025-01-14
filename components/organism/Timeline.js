'use client'

import { useProjects } from "@/context/TaskContext"
import { useState } from "react"
import DBProjectHeader from "../molecules/DBProjectHeader"
import { TimelineContextProvider, useTimelineContext } from "@/context/TimelineContext"
import TimelineOptions from "../molecules/TimelineOptions"
import TimeLineChart from "../molecules/TimeLineChart"

export default function Timeline(){
    const { projects } = useProjects()
    const [ activeProject, setActiveProject ] = useState(projects[0])

    function handleClick(id){
        const proj = projects.findIndex( proj => proj.id === id) 
        setActiveProject(projects[proj])
    }
    return (
        <TimelineContextProvider>
            <div className="hidden md:grid p-8 bg-dark-900 rounded-small grid-rows-[max-content,1fr] gap-4">
                <div className="grid grid-cols-[1fr,max-content] gap-2">
                    <DBProjectHeader handleClick={handleClick} activeProject={activeProject}/>
                    <TimelineOptions />
                </div>
                <TimeLineChart activeProject={activeProject} />
            </div>
        </TimelineContextProvider>
    )
}