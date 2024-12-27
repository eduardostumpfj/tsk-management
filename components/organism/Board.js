"use client";

import { useProjects } from "@/context/TaskContext";
import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import TaskButton from "../atoms/TaskButton";
import ProjectColumn from "../molecules/ProjectColum";
import { useActiveProject } from "@/context/ActiveProject";
import { uselocalDndContext } from "@/context/DndContext";

export default function Board() {
  const { tasks, updateTask, switchTask } = useProjects();
  const { activeProject } = useActiveProject();
  const { activeTask, changeTask, wasClicked, changeWasClicked, changeIsOnDiferentColumn } = uselocalDndContext();
  const [posY, setPosY] = useState(null)

  function handleDragStart(event) {
    const { active } = event;
    const draggedTask = tasks.find((task) => task.id === active.id);
    changeTask(draggedTask);
    setPosY(event.activatorEvent.clientY)
  }

  function handleDragOver(event) {
    const { active, over } = event;
    let id = over.id
    // Get active Column
    let activeColumn 
    const activeTask = tasks.find(tks => tks.id === active.id)
    activeColumn = activeTask.column_id 
    // Get over Column
    
    let overColumn = id
    if(id.includes('drop')){
      const overTask = tasks.find(tks => tks.id === id.replace('drop-', ''))
      overColumn = overTask.column_id 
    }  
    
    activeColumn !== overColumn && changeIsOnDiferentColumn(true)
  }

  function handleDragEnd(event) {
    if(wasClicked){
        changeWasClicked(false)
       return
    }
    const { active, over } = event;
    if (!over) return;
    changeIsOnDiferentColumn(false)
    const draggedTask = tasks.find((task) => task.id === active.id);
    let columnId = over.id;

    if (over.id.includes('drop')) {
      const targetTaskId = over.id.replace('drop-', '');
      const targetTask = tasks.find((task) => task.id === targetTaskId);
      columnId = targetTask?.column_id;
    }
    
    const updatedTask = {
      ...draggedTask,
      column_id: columnId,
    };

    // Check if task is up or down
    let posOver = event.over.rect.top
    const direction = posY > posOver ? 'up' : 'down' 
    //Check if ut is the same column
    if(draggedTask.column_id === columnId){
      const targetTask = tasks.find((task) => task.id === over.id.replace('drop-', ''))
      targetTask && switchTask(active.id, targetTask.id, direction)
    } else {
      updateTask(active.id, updatedTask, 'dragged');
    }

    // Reset Active Task
    changeTask(null)
  }

  return (
        
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <ul className={`w-full h-[calc(100%-2rem)] grid grid-cols-4 gap-8 relative row-[2/3]`}>
          {
            activeProject?.columns.map((column, index) => {
              const columnTasks = tasks.filter((task) => task.column_id === column.id && task.project_id === activeProject.id );
              column.tasks = columnTasks;

              return (
                <SortableContext
                  key={column.id}
                  items={columnTasks.map((task) => task.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <ProjectColumn key={column.id} index={index} column={column} />
                </SortableContext>
              );
            })}
        </ul>
        <DragOverlay>
          {activeTask ? (
            <div className="rounded shadow">
              <TaskButton task={activeTask} isDragged={true}/>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    
  );
}
