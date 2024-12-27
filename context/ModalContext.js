'use client'

import { uselocalDndContext } from "./DndContext";
import { useProjects } from "./TaskContext";

const { createContext, useState, useContext } = require("react");

const ModalContext = createContext({
    isOpen:null,
    modalContent:null,
    openModal: null,
    closeModal:null,
})

export const ModalProvider = ({children}) => {
    const {projects} = useProjects()
    const {changeWasClicked} = uselocalDndContext()
    let initModal = { type: null, data:null}
    if(projects.length == 0){
        initModal = { type: 'newProject', data:null}
    } 
    const [isOpen, setIsOpen] = useState(projects.length == 0 ? true : false)
    const [modalContent, setModalContent]= useState(initModal)

    function openModal(content){
        setModalContent(content)
        setIsOpen(true)
    }
    function closeModal(){
        setModalContent('')
        setIsOpen(false)
    }

    return (
        <ModalContext.Provider value={{ isOpen, modalContent, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)