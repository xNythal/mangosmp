import { Button } from "@/components/ui/button"
import { Copy, Users, Check, Puzzle, Circle } from "lucide-react"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

function Hero() {
  const serverIP = "supercraftplay.aternos.me:17341"
  const [playerNum, setPlayerNum] = useState(0)
  const [pluginNum, setPluginNum] = useState(0)
  const [online, setOnline] = useState(false)
  const [copied, setCopied] = useState(false)
  async function fetchPlayerNum() {
    const res = await axios(
      `https://api.mcstatus.io/v2/status/java/${serverIP}`,
    )
    setPlayerNum(res.data.players.online)
    setOnline(res.data.software !== null)
    setPluginNum(res.data.plugins.length)
  }
  fetchPlayerNum()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP)
    toast.success("Copied to clipboard!", { autoClose: 2000 })
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-[calc(100dvh-56px)] flex items-center justify-center overflow-hidden py-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-primary/10" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-4 max-w-4xl mx-auto space-y-8 w-full">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight wrap-break-words">
            Welcome to{" "}
            <span className="bg-linear-to-r from-red-950 to-red-900 bg-clip-text text-transparent">
              SUPER CRAFT
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join the ultimate Minecraft experience with custom addons, epic
            fights, and an amazing community
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <div className="flex items-center gap-2 bg-secondary px-4 sm:px-6 py-3 rounded-lg border max-w-full">
            <code className="text-sm sm:text-lg font-mono truncate">
              {serverIP}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="h-8 w-8"
            >
              {copied ? <Check /> : <Copy />}
            </Button>
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-center">
          <Link to="/join">
            <Button size="lg" className="text-lg px-8">
              Join Now
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-3xl font-bold">{playerNum}</span>
            </div>
            <p className="text-sm text-muted-foreground">Online Players</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Circle
                className={`h-5 w-5 text-primary ${online ? "fill-green-500" : "fill-red-500"}`}
              />
              <span className="text-3xl font-bold">
                {online ? "Online" : "Offline"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Server Status</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Puzzle className="h-5 w-5 text-primary" />
              <span className="text-3xl font-bold">{pluginNum}</span>
            </div>
            <p className="text-sm text-muted-foreground">Active Addons</p>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  )
}

export default Hero
