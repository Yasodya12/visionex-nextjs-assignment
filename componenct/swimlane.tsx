"use client"

import type React from "react"

import { useDroppable } from "@dnd-kit/core"
import { cn } from "@/lib/utils"

interface SwimlaneProps {
  id: string
  title: string
  color: string
  headerColor: string
  taskCount: number
  children: React.ReactNode
}

export function Swimlane({ id, title, color, headerColor, taskCount, children }: SwimlaneProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  })

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div
          className={cn(
            "rounded-full px-4 py-2 flex items-center space-x-2 text-white font-medium text-sm",
            headerColor,
          )}
        >
          <span>{title}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <button className="hover:text-gray-600">
            <span className="text-lg">+</span>
          </button>
          <button className="hover:text-gray-600">
            <span className="text-lg">⋯</span>
          </button>
        </div>
      </div>

      <div
        ref={setNodeRef}
        className={cn(
          "rounded-lg p-4 min-h-[600px] transition-colors",
          color,
          isOver && "ring-2 ring-blue-500 ring-opacity-50",
        )}
      >
        {children}
      </div>
    </div>
  )
}
