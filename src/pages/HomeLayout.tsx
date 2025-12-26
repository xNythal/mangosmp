import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function HomeLayout() {
  return (
    <div>
      <Navbar /> <Outlet />
    </div>
  );
}
export default HomeLayout;
