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
        <div className="p-4 md:p-8 bg-light-100 rounded-small grid grid-rows-[max-content,1fr] gap-4 text-dark-700 h-[250px] md:h-full">
            <p className="font-bold text-[1rem] lg:text-xl">Categories Overview</p>
            <div className="grid grid-cols-[repeat(3,max-content)] justify-center px-0 w-full text-center gap-4
                            sm:grid-cols-3 md:px-4 sm:justify-between sm:gap-0
            ">
                {
                    categoriesData.map((cat, index) => { 
                        return <CategoryChart key={index} index={index}  name={cat.name} amount={cat.amount} total={tasks.length}/>
                    })
                }
            </div>       
        </div>
    )
} 