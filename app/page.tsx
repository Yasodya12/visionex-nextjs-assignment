import Image from "next/image";
import styles from "./page.module.css";
import {TaskProvider} from "@/componenct/task-provider";
import {Sidebar} from "@/componenct/sidebar";
import {TopHeader} from "@/componenct/top-header";
import {ProjectHeader} from "@/componenct/project-header";
import {SwimlanesBoard} from "@/componenct/swimlanes-board";

export default function Home() {
  return (
      <TaskProvider>
          <div className="flex h-screen bg-gray-50">
              {/* Sidebar - Hidden on small screens, visible on md and up */}
              <div className="hidden md:block">
                  <Sidebar />
              </div>
              <div className="flex-1 flex flex-col overflow-hidden">
                  {" "}
                  {/* Added overflow-hidden */}
                  <TopHeader />
                  <main className="flex-1 p-4 md:p-6 overflow-auto">
                      {" "}
                      {/* Adjusted padding */}
                      <ProjectHeader />
                      <SwimlanesBoard />
                  </main>
              </div>
          </div>
      </TaskProvider>
  );
}
