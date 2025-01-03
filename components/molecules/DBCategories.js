'use client'

import { useProjects } from "@/context/TaskContext"
import CategoryChart from "../atoms/CategoryChart"

export default function DBCategories(){
    const { tasks } = useProjects()
    const categories = ['UX', 'UI', 'Development']   
    const categoriesData = []

    categories.forEach( cat => {
        let amount = 0
        tasks.forEach( tks => tks.category == cat ? amount ++ : null )
        categoriesData.push({name:cat, amount})
    })
    return (
        <div className="p-8 bg-light-100 rounded-small grid grid-rows-[max-content,1fr] gap-4 text-dark-700">
            <p className="font-bold text-xl">Categories Overview</p>
            <div className="justify-between grid grid-cols-3 px-4 w-full text-center">
                {
                    categoriesData.map((cat, index) => {
                        return <CategoryChart key={index} index={index}  name={cat.name} amount={cat.amount} total={tasks.length}/>
                    })
                }
            </div>       
        </div>
    )
} 