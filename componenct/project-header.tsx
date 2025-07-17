"use client"

import { Settings } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback } from "./ui/avatar"
import {Badge} from "@/componenct/ui/badge";


export function ProjectHeader() {
  return (
      <div className="mb-4 md:mb-6">
        {" "}
        {/* Adjusted margin */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          {" "}
          {/* Flex direction change */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2">
              {" "}
              {/* Adjusted spacing */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Sport XI Project</h1> {/* Adjusted font size */}
              <Badge className="bg-orange-500 text-white rounded-full px-2.5 py-0.5 text-xs md:px-3 md:py-1">
                IN PROGRESS
              </Badge>{" "}
              {/* Adjusted padding/font size */}
            </div>
            <p className="text-gray-600 text-sm mb-3 md:mb-4">event production</p> {/* Adjusted font size */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              {" "}
              {/* Flex direction change */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">assigned</span>
                <div className="flex -space-x-2">
                  <Avatar className="w-6 h-6 border-2 border-white bg-gray-800">
                    <AvatarFallback className="bg-gray-800 text-white text-xs">A</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-white bg-gray-700">
                    <AvatarFallback className="bg-gray-700 text-white text-xs">B</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-white bg-gray-600">
                    <AvatarFallback className="bg-gray-600 text-white text-xs">C</AvatarFallback>
                  </Avatar>
                  <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-gray-600">+2</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-lg bg-transparent text-sm">
                {" "}
                {/* Adjusted font size */}
                <Settings className="w-4 h-4 mr-2" />
                Manage
              </Button>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-4 md:mb-6">Last updated on: 04 April, 2022</p> {/* Adjusted font size */}
      </div>
  )
}
