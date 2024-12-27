import { uselocalDndContext } from "@/context/DndContext";
import { useModal } from "@/context/ModalContext";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";

export default function TaskButton({ task, isDragged }) {
    const { openModal } = useModal();
    const {activeTask, changeWasClicked, changeTask} = uselocalDndContext()
    const priorityClass = {
        high: "text-pink-500 bg-pink-900",
        medium: "text-yellow-500 bg-yellow-900",
        low: "text-green-500 bg-green-900",
    }[task.priority];

    const categoryColor = {
        UX: "text-purple-500 bg-purple-900",
        UI: "text-purple-500 bg-purple-900",
        Development: "text-salmon-500 bg-salmon-900",
        Meeting: "text-pink-500 bg-pink-900",
    }[task.category];

    const timeLeft = (() => {
        const today = new Date();
        const now = new Date(today.toISOString().split("T")[0]);
        const delivery = new Date(task.delivery_date);
        return Math.ceil((delivery - now) / (1000 * 60 * 60 * 24));
    })();

    const taskDescription =
        task.description.length > 57
            ? `${task.description.slice(0, 57)}...`
            : task.description;

    // Draggable logic ----------------------------------------------------------------------------
    const [isDragging, setIsDragging] = useState(false);
    
    const { attributes, listeners, setNodeRef: setDraggableRef, transform } = useDraggable({
        id: task.id,
    });
    const { isOver, setNodeRef: setDroppableRef } = useDroppable({
        id: `drop-${task.id}`,
    });
    function setCombinedRef(node) {
        setDraggableRef(node);
        setDroppableRef(node); 
    }

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    const enhancedListeners = {
        ...listeners,
        onPointerDown: (event) => {
            setIsDragging(false);
            listeners.onPointerDown?.(event);
        },
        onPointerMove: (event) => {
            setIsDragging(true);
            listeners.onPointerMove?.(event);
        },
    };

    function handlePointerUp() {
        if (!isDragging) {
            changeTask(null)
            changeWasClicked(true)
            openModal({ type: "detail", data: task.id });
        }
    }

    return (
        <div
            ref={node => {
                setCombinedRef(node)
                if (node) {
                    node.scrollIntoView = () => {}
                    }
                }}
            style={style}
            {...attributes}
            {...enhancedListeners}
            onPointerUp={handlePointerUp}
            className={`bg-dark-700 rounded-small p-4 flex flex-col gap-2 
                cursor-pointer hover:bg-dark-900 transitio-[background-color]
                ${(activeTask?.id === task.id) && !isDragged ? 'opacity-0' : null}`}
        >
            <div className="flex gap-1">
                <p className={`${priorityClass} text-[.75rem] rounded-full px-2`}>
                    {task.priority}
                </p>
                <p className={`${categoryColor} text-[.75rem] rounded-full px-2`}>
                    {task.category}
                </p>
            </div>

            <h2 className="min-h-[48px] grid items-center font-semibold">
                {task.name}
            </h2>
            <p className="text-light-700">{taskDescription}</p>

            <div className="flex items-center gap-2 justify-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#9A9A9D" />
                    <path d="M7 4V7.75L9 10" stroke="#9A9A9D" />
                </svg>
                <p className="text-light-700">{timeLeft} days</p>
            </div>
        </div>
    );
}
