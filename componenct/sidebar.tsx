"use client"

import {
  LayoutDashboard,
  Folder,
  MessageCircle,
  Calendar,
  Users,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react"



import { useState } from "react"
import { Button } from "./ui/button"
import {Avatar, AvatarFallback} from "@/componenct/ui/avatar";
import {Badge} from "@/componenct/ui/badge";

export function Sidebar() {
  const [boardsExpanded, setBoardsExpanded] = useState(true)

  return (
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
        {" "}
        {/* Added h-full */}
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-semibold text-gray-900">Board App</span>
          </div>
        </div>
        {/* Workspace */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8 bg-gray-800">
              <AvatarFallback className="bg-gray-800 text-white text-sm">R</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-xs text-gray-500">workspace</p>
              <p className="text-sm font-medium text-gray-900">Root folder</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-auto">
          {" "}
          {/* Added overflow-auto */}
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
            <LayoutDashboard className="w-4 h-4 mr-3" />
            Dashboard
          </Button>
          <div>
            <Button
                variant="ghost"
                className="w-full justify-start text-blue-600 hover:text-blue-700"
                onClick={() => setBoardsExpanded(!boardsExpanded)}
            >
              <Folder className="w-4 h-4 mr-3" />
              Boards
              {boardsExpanded ? (
                  <ChevronDown className="w-4 h-4 ml-auto" />
              ) : (
                  <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </Button>

            {boardsExpanded && (
                <div className="ml-7 mt-1 space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600 hover:text-gray-900">
                    Create routes
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600 hover:text-gray-900">
                    Deployment React App
                  </Button>
                  <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-blue-600 hover:text-blue-700 bg-blue-50"
                  >
                    Sport XI Project
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600 hover:text-gray-900">
                    Wordpress theme
                  </Button>
                </div>
            )}
          </div>
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
            <MessageCircle className="w-4 h-4 mr-3" />
            Messages
            <Badge className="ml-auto bg-orange-500 text-white text-xs">3</Badge>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
            <Calendar className="w-4 h-4 mr-3" />
            Calendar
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
            <Users className="w-4 h-4 mr-3" />
            Team members
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
            <HelpCircle className="w-4 h-4 mr-3" />
            Support
          </Button>
        </nav>
        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </Button>
        </div>
      </div>
  )
}
