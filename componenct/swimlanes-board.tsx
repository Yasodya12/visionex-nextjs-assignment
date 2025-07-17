"use client"

import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useState } from "react"

import { useTaskStore } from "@/lib/task-store"
import type { Task } from "@/lib/types"
import {Swimlane} from "@/componenct/swimlane";
import {TaskCard} from "@/componenct/task-card";

const SWIMLANES = [
  { id: "todo", title: "To Do", color: "bg-gray-50", headerColor: "bg-gray-400" },
  { id: "in-progress", title: "In Progress", color: "bg-orange-50", headerColor: "bg-orange-500" },
  { id: "approved", title: "Approved", color: "bg-green-50", headerColor: "bg-green-500" },
  { id: "reject", title: "Reject", color: "bg-red-50", headerColor: "bg-red-500" },
]

export function SwimlanesBoard() {
  const { tasks, moveTask, filteredTasks } = useTaskStore()
  const [activeTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 8,
        },
      }),
  )

  const handleDragStart = (event: DragStartEvent) => {
    console.log("Drag started. Active ID:", event.active.id)
    const task = tasks.find((t) => t.id === event.active.id)
    setActiveTask(task || null)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    console.log("Drag ended. Active ID:", active?.id, "Over ID:", over?.id)

    if (!over) {
      console.log("Dropped outside any droppable area.")
      setActiveTask(null)
      return
    }

    const taskId = active.id as string
    const newStatus = over.id as string

    const isDroppingOnSwimlane = SWIMLANES.some((lane) => lane.id === newStatus)

    if (isDroppingOnSwimlane) {
      const currentTask = tasks.find((t) => t.id === taskId)
      if (currentTask && currentTask.status !== newStatus) {
        console.log(`Attempting to move task '${taskId}' from '${currentTask.status}' to '${newStatus}'`)
        moveTask(taskId, newStatus)
      } else {
        console.log(`Task '${taskId}' is already in status '${newStatus}' or not found.`)
      }
    } else {
      console.log(`Dropped on a non-swimlane element with ID: ${newStatus}`)
    }

    setActiveTask(null)
  }

  return (
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {/* Added overflow-x-auto for horizontal scrolling on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4">
          {SWIMLANES.map((lane) => {
            const laneTasks = filteredTasks.filter((task) => task.status === lane.id)

            return (
                <Swimlane
                    key={lane.id}
                    id={lane.id}
                    title={lane.title}
                    color={lane.color}
                    headerColor={lane.headerColor}
                    taskCount={laneTasks.length}
                >
                  <SortableContext items={laneTasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-3 min-w-[280px]">
                      {" "}
                      {/* Added min-w to ensure columns don't shrink too much */}
                      {laneTasks.map((task) => (
                          <TaskCard key={task.id} task={task} />
                      ))}
                    </div>
                  </SortableContext>
                </Swimlane>
            )
          })}
        </div>

        <DragOverlay zIndex={9999}>{activeTask ? <TaskCard task={activeTask} isDragging /> : null}</DragOverlay>
      </DndContext>
  )
}
