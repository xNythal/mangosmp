import { FaDiscord, FaYoutube, FaBookOpen } from "react-icons/fa6"

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
    url: "https://discord.gg/Dh8HtsMUsA",
  },
  {
    icon: <FaYoutube />,
    name: "YouTube",
    url: "https://youtube.com/@supercraft.server",
  },
]

export const navLinks: NavLink[] = [
  {
    name: "Guide",
    to: "/guide",
    icon: <FaBookOpen />,
  },
]
