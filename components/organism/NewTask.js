'use client'
import { useState } from "react";
import { useModal } from "@/context/ModalContext"
import { useProjects } from "@/context/TaskContext";
import PriorityInput from "../atoms/PriorityInput"
import DateInput from "../atoms/DateInput"
import TextAreaNew from "../atoms/TextAreaNew";
import { useId } from "react";
import CategoryInput from "../atoms/CategoryInput";
import SaveButton from "../atoms/SaveButton";
import { useActiveProject } from "@/context/ActiveProject";

export default function NewTask(){
    const {modalContent, closeModal} = useModal()
    const [formError, setFormError] = useState(null)
    const { projects, addTask }  = useProjects()
    const {activeProject} = useActiveProject()
    const col = findCol(modalContent.data.col)[0]
    
    function findCol(id){
      return  activeProject.columns.filter(col => col.id === id)
    }
    const [formData, setFormData] = useState({
        id:useId(),
        priority: 'low',
        category: 'UI',
        column_id: modalContent.data.col,
        name: '',
        starting_date: '',
        delivery_date: '',
        description: '',
        project_id:activeProject.id
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
        if(formData.starting_date == '' || formData.starting_date > formData.delivery_date){
            noError = false
            error.starting_date = true
        }
        // Delivery Date
        if(formData.delivery_date == '' ||  formData.delivery_date < formData.starting_date){
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

    function handleSave(){
        const canSave = validateForm()        
        if(!canSave) { return } 
        addTask(formData)
        closeModal()
    }
    function handleFormChange(field, value){
        setFormError(null)
        setFormData((prev) => ({ ...prev, [field]: value }));
      };

    return(
        <form className="text-light-700 grid gap-4">
            <div className="flex justify-between px-3">
                <PriorityInput isNew={true} priority='low' onChange={(value) => handleFormChange('priority', value)} />
                <CategoryInput isNew={true} category='UI' onChange={(value) => handleFormChange('category', value)}></CategoryInput>
                <p className="text-light-100 text-xl font-bold">{col.name}</p>
            </div>
            <TextAreaNew 
                isWrong={formError?.name}
                isTitle={true}
                name='Name'
                text={formData.name} 
                onChange={(value) => handleFormChange('name', value)}
            />
            <div className="flex gap-2 px-3 items-center">
                <label className="min-w-[6.5rem]">Start Date:</label>
                <DateInput
                    isWrong={formError?.starting_date} 
                    isNew={true}
                    date={formData.starting_date}
                    onChange={(value) => handleFormChange('starting_date', value)}
                />
            </div>
            <div className="flex gap-2 px-3 items-center">
                <label className="min-w-[6.5rem]">Delivery Date:</label>
                <DateInput
                    isWrong={formError?.delivery_date}  
                    isNew={true} 
                    date={formData.delivery_date} 
                    onChange={(value) => handleFormChange('delivery_date', value)} 
                />
            </div>
            <TextAreaNew 
                isWrong={formError?.description} 
                text={formData.description}
                name='Description'
                onChange={(value) => handleFormChange('description', value)} />
            <SaveButton saveFn={handleSave} />
        </form>   
    )
}