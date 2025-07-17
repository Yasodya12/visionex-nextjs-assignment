"use client"

import { Search, Filter, Bell, Plus,Menu } from "lucide-react"


import { useTaskStore } from "@/lib/task-store"
import {Input} from "@/componenct/ui/input";
import {Button} from "@/componenct/ui/button";
import {Avatar, AvatarFallback} from "@/componenct/ui/avatar";

export function TopHeader() {
  const { searchQuery, setSearchQuery } = useTaskStore()

  return (
      <header className="bg-white border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
        {" "}
        {/* Adjusted padding */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            {" "}
            {/* Adjusted spacing */}
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                {" "}
                {/* Adjusted size */}
                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm"></div> {/* Adjusted size */}
              </div>
              <span className="font-semibold text-gray-900 text-base md:text-lg">Board App</span>{" "}
              {/* Adjusted font size */}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-sm hidden sm:flex">
              {" "}
              {/* Adjusted padding, hidden on xs */}
              <Plus className="w-4 h-4 mr-2" />
              Create new board
            </Button>
            {/* Mobile-only create new board button */}
            <Button size="icon" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:hidden">
              <Plus className="w-4 h-4" />
              <span className="sr-only">Create new board</span>
            </Button>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {" "}
            {/* Adjusted spacing */}
            <div className="relative flex-1 min-w-0">
              {" "}
              {/* Added flex-1 min-w-0 for responsiveness */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 w-full sm:w-64 md:w-80 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 rounded-lg text-sm" // Adjusted width and font size
              />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100 hidden sm:flex">
              {" "}
              {/* Hidden on xs */}
              <Filter className="w-4 h-4" />
              <span className="sr-only">Filter</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100 relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar className="w-7 h-7 md:w-8 md:h-8 bg-gray-800">
              {" "}
              {/* Adjusted size */}
              <AvatarFallback className="bg-gray-800 text-white text-xs">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
  )
}
