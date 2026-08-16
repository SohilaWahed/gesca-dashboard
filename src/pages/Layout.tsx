import { Outlet } from "react-router-dom";
import Sidebar from '../components/layout/Sidebar';
import Navbar from "../components/layout/Navbar";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="bg-background flex min-h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`flex-1 min-w-0 md:ps-20 lg:ps-64`}>
        <Navbar setIsOpen={setIsOpen} />
        <div className=" px-4 sm:px-8 py-4 min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
