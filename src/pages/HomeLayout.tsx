import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

function HomeLayout() {
  return (
    <>
      <div className="px-2 py-2">
        <Navbar />
      </div>
      <Outlet />
    </>
  )
}
export default HomeLayout
