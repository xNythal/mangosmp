import { FaDiscord } from "react-icons/fa6"

interface SocialLink {
  icon: React.ReactNode
  name: string
  url: string
}

export const socialLinks: SocialLink[] = [
  {
    icon: <FaDiscord />,
    name: "Discord",
    url: "https://discord.gg/GSXsF3KFQ3",
  },
]
