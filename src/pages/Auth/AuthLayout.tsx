import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="h-screen bg-background flex items-center justify-center px-8">
      <Outlet/>
    </div>
  )
}
