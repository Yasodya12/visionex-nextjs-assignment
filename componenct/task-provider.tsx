"use client"

import type React from "react"

import { useEffect } from "react"
import { useTaskStore } from "@/lib/task-store"

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const { loadTasks } = useTaskStore()

  useEffect(() => {
    loadTasks()
  }, [loadTasks])

  return <>{children}</>
}
