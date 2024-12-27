'use client'

import { useProjects } from "@/context/TaskContext"
import { useState } from "react"
import DonutChart from "../molecules/DonutChart"
import DBProjectHeader from "../molecules/DBProjectHeader"

export default function DBOverview(){
    const { projects, tasks } = useProjects()
    const [ activeProject, setActiveProject ] = useState(projects[0])
    const data =[]
    activeProject.columns.forEach( col => {
        if(col.id !== 'col3'){
            const columnTasks = tasks.filter((task) => task.column_id === col.id && task.project_id === activeProject.id);
            const columnName = col.id == 'col1' ? 'Not Started' : col.name
            data.push({ id: col.id, label:columnName, value:columnTasks.length})
        }
    })
    const totalTasks = (data[0].value + data[1].value + data[2].value)
    const getValue = (percentage) => {
        const newValue = (percentage / totalTasks) * 100
        return newValue.toFixed(0)
    } 

    function handleClick(id){
        setIsOpen(false)
        const proj = projects.findIndex( proj => proj.id === id)
        console.log(proj) 
        setActiveProject(projects[proj])
    }

    return (
        <div className="p-8 bg-dark-900 rounded-small grid gap-2">
            <DBProjectHeader handleClick={handleClick} activeProject={activeProject}/>
            <div className="grid grid-cols-[2fr,1fr]">
                <div className="h-[200px] w-[200px] self-center m-auto">
                    <DonutChart data={data}/>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="grid grid-cols-[12px,1fr] gap-2 items-start">
                        <div className="rounded-full bg-purple-100 w-[12px] h-[12px] mt-[6px]"></div>
                        <p>
                            In Progress
                            <br/><span className="font-bold">{getValue(data[1].value)}%</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-[12px,1fr] gap-2 items-start">
                        <div className="rounded-full bg-salmon-100 w-[12px] h-[12px] mt-[6px]"></div>
                        <p>
                            Completed
                            <br/><span className="font-bold">{getValue(data[2].value)}%</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-[12px,1fr] gap-2 items-start">
                        <div className="rounded-full bg-green-100 w-[12px] h-[12px] mt-[6px]"></div>
                        <p>
                            Not Started
                            <br/><span className="font-bold">{getValue(data[0].value)}%</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
