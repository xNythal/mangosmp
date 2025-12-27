import { NavLink } from "react-router-dom"
import { NavigationMenu } from "../ui/navigation-menu"
import ThemeToggle from "./ThemeToggle"
import { Button } from "../ui/button"
import SocialLinks from "./SocialLinks"

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center">
      <NavigationMenu className="flex items-center gap-4">
        <NavLink to="/" className="cursor-default">
          <img src="./logo.png" alt="Logo" className="h-10" />
        </NavLink>
        <NavLink to="/about">
          <Button variant="outline">About</Button>
        </NavLink>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </div>
  )
}
export default Navbar
