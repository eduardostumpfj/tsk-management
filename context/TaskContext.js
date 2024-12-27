'use client'

import { createContext, useContext, useState } from 'react';
import { useFetchedProjects } from '@/hooks/useFetchedProjects';
import { useFetchedTasks } from '@/hooks/useFetchedTasks';

export const TaskContext = createContext();

export const TaskProvider = ({children }) => {
  const fetchedProjects = useFetchedProjects()
  const fetchedTasks = useFetchedTasks()
  const [projects, setProjects] = useState(fetchedProjects);
  const [tasks, setTasks] = useState(fetchedTasks);

  function addProject(newProject){
    setProjects(prev => [...prev, newProject] )
  }

  function addTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function updateTask(taskId, formData, dragged) {
    setTasks((prev) => {
      const newTasks = [...prev];
      const taskIndex = newTasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        newTasks[taskIndex] = { ...newTasks[taskIndex], ...formData };
      }

      // check if dragged task is in the same column
      if(dragged){
        newTasks.splice(taskIndex, 1)
        newTasks.splice(0, 0, {...formData})
      }

      return newTasks;
    });
  }

  function switchTask(activeTaskId, overTaskId, direction){
    setTasks((prev) => {
      let newTasks = [...prev];
      const activeTask = newTasks.find((task) => task.id === activeTaskId)
      const actieTaskIndex = newTasks.findIndex((task) => task.id === activeTaskId)
      newTasks.splice(actieTaskIndex, 1)
      let overTaskIndex = newTasks.findIndex((task) => task.id === overTaskId);
      if(direction === 'down'){ overTaskIndex = overTaskIndex + 1}
      newTasks.splice(overTaskIndex, 0, {...activeTask})      

      return newTasks
    })
  }

  return (
    <TaskContext.Provider value={{ projects, tasks, addTask, updateTask, switchTask, addProject }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useProjects = () => {
  return useContext(TaskContext);
};
