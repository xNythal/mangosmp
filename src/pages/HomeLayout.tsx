import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

function HomeLayout() {
  return (
    <div className="px-2 py-2">
      <Navbar />{" "}
      <div className="mt-2">
        <Outlet />
      </div>
    </div>
  )
}
export default HomeLayout
