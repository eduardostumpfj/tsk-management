'use client'

import ProjectHeader from "@/components/molecules/ProjectHeader";
import Board from "@/components/organism/Board";
import Modal from "@/components/organism/Modal";
import { ActiveProjectProvider} from "@/context/ActiveProject";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { useRef, useEffect, Suspense } from "react";
import Loading from "./loading"
import { useProjects } from "@/context/TaskContext";
import { DndContextProvider } from "@/context/DndContext";

export default function Projects(){
    const page = useRef()
    const {projects} = useProjects()

    return (
        <Suspense fallback={<Loading />}>
            <ActiveProjectProvider>
                <DndContextProvider>
                <ModalProvider>
                    <Modal />
                    {
                        projects.length > 0
                        && <div
                            ref={page}
                            className="bg-dark-900 rounded-normal overflow-hidden w-full h-full p-4 xl:p-8 grid grid-rows-[1fr_800px] gap-4 lg:gap-8">
                                <ProjectHeader />
                                <Board parentRef={page} />
                        </div>
                     
                    }
                </ModalProvider>
                </DndContextProvider>
            </ActiveProjectProvider>
        </Suspense>
    )
}