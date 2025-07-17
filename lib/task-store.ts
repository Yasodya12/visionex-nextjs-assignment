"use client"

import { create } from "zustand"
import type { Task } from "./types"
import { mockTasks } from "./mock-data"

interface TaskStore {
  tasks: Task[]
  searchQuery: string
  filteredTasks: Task[]
  setTasks: (tasks: Task[]) => void
  setSearchQuery: (query: string) => void
  moveTask: (taskId: string, newStatus: string) => void
  loadTasks: () => void
  saveTasks: () => void
  updateFilteredTasks: () => void
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  searchQuery: "",
  filteredTasks: [],

  setTasks: (tasks) => {
    set({ tasks })
    get().updateFilteredTasks()
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query })
    get().updateFilteredTasks()
  },

  updateFilteredTasks: () => {
    const { tasks, searchQuery } = get()
    const filtered = tasks.filter(
        (task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
            task.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    set({ filteredTasks: filtered })
  },

  moveTask: (taskId, newStatus) => {
    console.log(`[moveTask] Attempting to move task ${taskId} to ${newStatus}`)
    const { tasks } = get()
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        console.log(`[moveTask] Found task ${taskId}. Changing status from ${task.status} to ${newStatus}`)
        return { ...task, status: newStatus }
      }
      return task
    })
    set({ tasks: updatedTasks })
    console.log("[moveTask] Tasks state updated. New tasks array:", updatedTasks)
    get().updateFilteredTasks()
    get().saveTasks()
    console.log("[moveTask] Filtered tasks updated and saved to localStorage.")
  },

  loadTasks: () => {
    try {
      const savedTasks = localStorage.getItem("swimlane-tasks")
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks)
        console.log("[loadTasks] Loaded tasks from localStorage:", tasks)
        get().setTasks(tasks)
      } else {
        // Load from mock data if no saved tasks
        console.log("[loadTasks] No tasks in localStorage, loading mock data.")
        get().setTasks(mockTasks)
      }
    } catch (error) {
      console.error("Error loading tasks:", error)
      get().setTasks(mockTasks)
    }
  },

  saveTasks: () => {
    try {
      const { tasks } = get()
      localStorage.setItem("swimlane-tasks", JSON.stringify(tasks))
      console.log("[saveTasks] Tasks saved to localStorage.")
    } catch (error) {
      console.error("Error saving tasks:", error)
    }
  },
}))

