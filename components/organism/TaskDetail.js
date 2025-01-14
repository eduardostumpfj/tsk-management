'use client'

import { useModal } from "@/context/ModalContext"
import StatusInput from "../molecules/StatusInput"
import PriorityInput from "../atoms/PriorityInput"
import { useState } from "react"
import { useProjects } from "@/context/TaskContext"
import TextArea from "../atoms/TextArea"
import DateInput from "../atoms/DateInput"
import CategoryInput from "../atoms/CategoryInput"
import SaveButton from "../atoms/SaveButton"

export default function TaskDetail(){   
    const { modalContent, closeModal } = useModal()
    const [formError, setFormError] = useState(null)
    const { updateTask, tasks } = useProjects()

    const activeTask = tasks.find( obj => obj.id === modalContent.data)
    
    const [formData, setFormData] = useState({
        priority: activeTask.priority,
        category: activeTask.category,
        column_id: activeTask.column_id,
        name: activeTask.name,
        starting_date: activeTask.starting_date,
        delivery_date: activeTask.delivery_date,
        description: activeTask.description,
      });


    function validateForm(){
        let noError = true
        let error = {}
        
        // Name        
        if(formData.name == ''){
            noError = false
            error.name = true
        }
        // Start Date
        if(formData.starting_date == '' || formData.starting_date === null || formData.starting_date > formData.delivery_date){
            noError = false
            error.starting_date = true
        }
        // Delivery Date
        if(formData.delivery_date == '' || formData.delivery_date === null ||  formData.delivery_date < formData.starting_date){
            noError = false
            error.delivery_date = true
        }
        // Description        
        if(formData.description == ''){
            noError = false
            error.description = true
        }
        setFormError(error)
        return noError
    }

    function handleSave(e){
        const canSave = validateForm()        
        if(!canSave) { return } 
        e.preventDefault();
        updateTask(activeTask.id, formData)
        closeModal()
    }

    function handleFormChange(field, value){
        setFormError(null)
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <form className="text-light-700 grid gap-4">
            <div className="flex justify-between px-3 flex-col-reverse gap-4 md:flex-row md:gap-0">
                <PriorityInput priority={formData.priority} onChange={(value) => handleFormChange('priority', value)} />
                <CategoryInput category={formData.category} onChange={(value) => handleFormChange('category', value)} />
                <StatusInput colId={ formData.column_id } onChange={(value) => handleFormChange('column_id', value)} />
            </div>
            <TextArea 
                isWrong={formError?.name}
                isTitle={true}
                text={formData.name} 
                onChange={(value) => handleFormChange('name', value)}
            />
            <div className="flex flex-col sm:flex-row sm:gap-2 px-3 items-start sm:items-center">
                <label className="min-w-[6.5rem]">Start Date:</label>
                <DateInput 
                    isWrong={formError?.starting_date}
                    date={formData.starting_date} 
                    onChange={(value) => handleFormChange('starting_date', value)} 
                />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2 px-3 items-start sm:items-center">
                <label className="min-w-[6.5rem]">Delivery Date:</label>
                <DateInput
                    isWrong={formError?.delivery_date} 
                    date={formData.delivery_date} 
                    onChange={(value) => handleFormChange('delivery_date', value)} 
                />
            </div>
            <div className="px-3 flex flex-col gap-2 mt-4">
                <label htmlFor="description">Description</label>
                <TextArea 
                    isWrong={formError?.description}
                    text={formData.description}
                    onChange={(value) => handleFormChange('description', value)} />
            </div>
            <SaveButton saveFn={handleSave} />
        </form>   
            
    )
}