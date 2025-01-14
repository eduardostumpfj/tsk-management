'use client'

import { useProjects } from "@/context/TaskContext";
import DBStatusCard from "../atoms/DBStatusCard";

export default function DBStatus(){
    const { projects } = useProjects()
    
    return (
        <div
            className="grid grid-cols-1 gap-4 h-fit max-w-full w-full
                        sm:grid-cols-2
                        md:grid-cols-4 md:w-full
            ">
            {projects[0]?.columns.map((column, index) => {
                return <DBStatusCard key={column.id} column={column} index={index} />
            })}
        </div>
    )
}