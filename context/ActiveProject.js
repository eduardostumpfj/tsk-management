'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { useProjects } from './TaskContext';

const ActiveProject = createContext({
    activeProject : null,
    changeProject: null
});

export const ActiveProjectProvider = ({ children }) => {
    const { projects } = useProjects()
    const [activeProject, setActiveProject] = useState(projects[0])


    function changeProject( proj ){
        setActiveProject(proj)
    }

    return (
        <ActiveProject.Provider value={{activeProject, changeProject}}>
            {children}
        </ActiveProject.Provider>
    )
}

export const useActiveProject = () => {     
    return useContext(ActiveProject) 
}
