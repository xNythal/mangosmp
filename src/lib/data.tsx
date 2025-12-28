import { Info } from "lucide-react"
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa6"

interface SocialLink {
  icon: React.ReactNode
  name: string
  url: string
}

interface NavLink {
  name: string
  to: string
  icon: React.ReactNode
}

export const socialLinks: SocialLink[] = [
  {
    icon: <FaDiscord />,
    name: "Discord",
    url: "https://discord.gg/GSXsF3KFQ3",
  },
  {
    icon: <FaFacebook />,
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    icon: <FaYoutube />,
    name: "Youtube",
    url: "https://youtube.com/@supercraft.server",
  },
]

export const navLinks: NavLink[] = [
  {
    name: "About",
    to: "/about",
    icon: <Info />,
  },
]
