'use client'

import { useModal } from "@/context/ModalContext";
import TaskButton from "../atoms/TaskButton";
import { motion } from "framer-motion";
import { useDroppable } from "@dnd-kit/core";
import { useRef } from "react";
import { uselocalDndContext } from "@/context/DndContext";


export default function ProjectColumn({ column, index }) {
  const { openModal } = useModal();
  const { activeTask, isOnDiferentColumn } = uselocalDndContext()
  const columnRef = useRef()
  const { isOver, setNodeRef } = useDroppable({ id: column.id });
  let columnColor;

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

  return (
    <motion.li      
      ref={(node) => {
        setNodeRef(node)
        columnRef.current = node
      }}
      initial={{ opacity: 0.5, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index / 40 }}
      style={{ outline: isOver ? "solid 2px black" : undefined }}
      className={`h-max max-h-full ${columnColor} rounded-small p-4`}
    >
      <div className="bg-dark-700 rounded-small p-4 font-bold text-light-300 text-[1.15rem] flex justify-between items-center">
        <p>{column.name}</p>
        <button
          className="text-xl stroke-white hover:stroke-purple-100 transition-colors duration-200"
          onClick={() => openModal({ type: "newTask", data: { col: column.id } })}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17.5"  strokeWidth='2'/>
                    <path d="M18.5 27V9"  strokeWidth='2'/>
                    <line x1="10" y1="17.5" x2="27" y2="17.5"  strokeWidth='2'/>
                </svg>
        </button>
      </div>
      {
        !isOnDiferentColumn &&
        <div className="flex flex-col gap-4 mt-8 h-max max-h-[550px] overflow-y-scroll overflow-x-hidden scrollbar-none" id={column.id}>
          {column.tasks.map((task) => <TaskButton key={task.id} task={task} activeTask={activeTask} /> )}
        </div>
      }
      {
        isOnDiferentColumn && 
          <motion.div 
            initial={{height: columnRef.current.offsetHeight - 62 - 32 - 32 }}
            animate={{height: 550}}
            transition={{ duration:.1 }}
            className="mt-8 bg-black/10 rounded-small grid content-center text-center h-[550px]"
          >
          <p>Drag Here</p>
          </motion.div>
      }
    </motion.li>
  );
}
