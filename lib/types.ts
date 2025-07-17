export interface Task {
  id: string
  title: string
  description?: string
  status: string
  priority: "low" | "medium" | "high"
  category: string
  assignees?: Array<{
    name: string
    avatar?: string
  }>
  dueDate?: string
  tags?: string[]
  comments?: number
  attachments?: number
  reports?: number
  streamLink?: boolean
  hasImage?: boolean
  createdAt: string
  updatedAt: string
}
