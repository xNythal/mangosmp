import { Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { socialLinks } from "@/lib/data"

function SocialLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Social Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {socialLinks.map(({ icon, name, url }) => (
          <DropdownMenuItem asChild>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {icon} {name}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SocialLinks
