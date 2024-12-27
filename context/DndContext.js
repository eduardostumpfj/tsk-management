'use client'

import { createContext, useContext, useState } from "react"

const localDndContext = createContext()

export const DndContextProvider = ({children}) => {
    const [activeTask, setActiveTask] = useState(null)
    const [wasClicked, setWasClicked] = useState(null)
    const [isOnDiferentColumn, setisOnDiferentColumn] = useState(null)

    function changeTask(task){
        setActiveTask(task)
    }

    function changeWasClicked(value){
        setWasClicked(value)
    }

    function changeIsOnDiferentColumn(value){
        setisOnDiferentColumn(value)
    }

    return (
        <localDndContext.Provider value={{ activeTask, changeTask, wasClicked, changeWasClicked, isOnDiferentColumn, changeIsOnDiferentColumn }}>
            {children}
        </localDndContext.Provider>
    )
}

export const uselocalDndContext = () => {
    return useContext(localDndContext)
}