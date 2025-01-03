'use client'

import { useProjects } from "@/context/TaskContext"
import { useState } from "react"
import DonutChart from "../molecules/DonutChart"
import { motion } from "framer-motion";
import StatusPercentage from "../atoms/StatusPercentage";

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
        setActiveProject(projects[proj])
    }

    return (
        <div className="p-8 bg-dark-900 rounded-small grid gap-2">
            <p className="font-bold text-xl" >Projects Overview</p>
            <div className="grid grid-cols-[2fr,1fr]">
                <motion.div
                    initial={{opacity:0, y:20}} 
                    animate={{opacity:1, y:0}} 
                    className="h-[200px] w-[200px] self-center m-auto"
                >
                    <DonutChart data={data}/>
                </motion.div>
                <div className="flex flex-col justif>y-between">
                    <StatusPercentage index={0}>
                        <div className="rounded-full bg-purple-100 w-[12px] h-[12px] mt-[6px]"></div>
                        <p>
                            In Progress
                            <br/><span className="font-bold">{getValue(data[1].value)}%</span>
                        </p>
                    </StatusPercentage>
                    <StatusPercentage index={1}>
                        <div className="rounded-full bg-salmon-100 w-[12px] h-[12px] mt-[6px]"></div>
                        <p>
                            Completed
                            <br/><span className="font-bold">{getValue(data[2].value)}%</span>
                        </p>
                    </StatusPercentage>
                    <StatusPercentage index={2}>
                        <div className="rounded-full bg-green-100 w-[12px] h-[12px] mt-[6px]"></div>
                        <p>
                            Not Started
                            <br/><span className="font-bold">{getValue(data[0].value)}%</span>
                        </p>
                    </StatusPercentage>
                </div>
            </div>
        </div>
    )
}
