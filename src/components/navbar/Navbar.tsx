import { NavLink } from "react-router-dom"
import { NavigationMenu } from "../ui/navigation-menu"

import { Button } from "../ui/button"
import SocialLinks from "./SocialLinks"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Menu } from "lucide-react"
import { navLinks } from "@/lib/data"

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center">
      <NavigationMenu className="flex items-center gap-4">
        <NavLink to="/">
          <img src="favicon.svg" alt="Logo" className="h-10" />
        </NavLink>
        {navLinks.map(({ name, to, icon }) => (
          <NavLink to={to} key={name}>
            <Button variant="outline" className="hidden sm:flex">
              {icon} {name}
            </Button>
          </NavLink>
        ))}
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <SocialLinks />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Navigation Links</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {navLinks.map(({ name, to, icon }) => (
              <DropdownMenuItem asChild>
                <NavLink to={to}>
                  {icon} {name}
                </NavLink>
              </DropdownMenuItem>
            ))}
            {/* Add more nav links here */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
export default Navbar
