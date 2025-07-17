"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { Card, CardContent } from "@/components/ui/card"
import type { Task } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"
import {Avatar, AvatarFallback} from "@/componenct/ui/avatar";

interface TaskCardProps {
  task: Task
  isDragging?: boolean
}

const categoryColors = {
  Research: "bg-green-500",
  Design: "bg-red-500",
  Feedback: "bg-blue-500",
  Other: "bg-gray-500",
  Presentation: "bg-orange-500",
  Interface: "bg-purple-500",
  "UX Research": "bg-yellow-500",
}

const priorityLabels = {
  low: "Low",
  medium: "Medium",
  high: "High",
}

export function TaskCard({ task, isDragging = false }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging, // This tells us if *this specific card* is being dragged
  } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const categoryColor = categoryColors[task.category as keyof typeof categoryColors] || categoryColors.Other

  return (
      <Card
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          className={cn(
              "cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow bg-white",
              (isDragging || isSortableDragging) && "opacity-50 rotate-1 shadow-lg", // Apply dragging styles
          )}
      >
        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Category dot and title */}
            <div className="flex items-start space-x-2">
              <div className={cn("w-2 h-2 rounded-full mt-2", categoryColor)}></div>
              <div className="flex-1">
                <span className="text-xs text-gray-500">{task.category}</span>
                <h4 className="font-medium text-gray-900 mt-1">{task.title}</h4>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <span className="text-sm">⋯</span>
              </button>
            </div>

            {/* Assignees */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {task.assignees?.map((assignee, index) => (
                    <Avatar key={index} className="w-6 h-6 border-2 border-white bg-gray-800">
                      <AvatarFallback className="bg-gray-800 text-white text-xs">{assignee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                ))}
              </div>
              {task.priority && <span className="text-xs text-gray-500 ml-auto">{priorityLabels[task.priority]}</span>}
            </div>

            {/* Image preview if exists */}
            {task.hasImage && (
                <div className="w-full h-24 bg-gray-800 rounded flex items-center justify-center">
                  <div className="w-6 h-6 border border-gray-600 rounded"></div>
                </div>
            )}

            {/* Footer stats */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                {task.attachments && (
                    <div className="flex items-center space-x-1">
                      <span>📎</span>
                      <span>{task.attachments}</span>
                    </div>
                )}
                {task.comments && (
                    <div className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{task.comments}</span>
                    </div>
                )}
                {task.reports && <span className="text-red-500">{task.reports} Reports</span>}
                {task.streamLink && <span className="text-blue-500">🔗 Stream</span>}
              </div>

              {task.dueDate && <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
            </div>
          </div>
        </CardContent>
      </Card>
  )
}
