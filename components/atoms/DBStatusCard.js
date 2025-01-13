'use client'

import { useProjects } from "@/context/TaskContext";
import { motion } from "framer-motion";

export default function DBStatusCard({column, index}){
    const { tasks } = useProjects();
    const columnTasks = tasks.filter((task) => task.column_id === column.id);
    const totalTasks = ((columnTasks.length / tasks.length) * 100).toFixed(0)
    let columnColor
    switch (column.id) {
        case "col1":
          columnColor = "bg-green-100";
          break;
        case "col2":
          columnColor = "bg-purple-100";
          break;
        case "col3":
          columnColor = "bg-pink-100";
          break;
        case "col4":
          columnColor = "bg-salmon-100";
          break;
        default:
          columnColor = "bg-gray-100";
      }

    return(
        <motion.div
            initial={{ opacity: 0.5, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index / 40 }}
            className={`${columnColor} rounded-small px-8 py-4 text-dark-500 grid items-centerl w-full`}
        >
            <h1 className="text-l font-bold">{column.name}</h1>
            <div className="flex justify-between items-end w-full">
                <p className="text-5xl font-black">{columnTasks.length}</p>
                <p className="bg-dark-500 rounded-full text-light-100 px-4 py-1 text-sm font-bold">{totalTasks}%</p> 
            </div>
        </motion.div>
    )
}