import { Button } from "@/components/ui/button"
import { Copy, Users, Check, Circle } from "lucide-react"
import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function Hero() {
  const serverIP = "join.supercraft.play.hosting"

  const [playerNum, setPlayerNum] = useState(0)
  const [online, setOnline] = useState(false)
  const [copied, setCopied] = useState(false)

  async function fetchPlayerNum() {
    try {
      const res = await axios(
        `https://api.mcstatus.io/v2/status/java/${serverIP}`,
      )

      console.log(res.data)

      setPlayerNum(res.data.players?.online || 0)
      setOnline(res.data.online || false)
    } catch (err) {
      console.error("Failed to fetch server status:", err)
      setPlayerNum(0)
      setOnline(false)
    }
  }

  useEffect(() => {
    fetchPlayerNum()

    // Refresh every 30 seconds
    const interval = setInterval(fetchPlayerNum, 30000)

    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP)
    toast.success("Copied to clipboard!", { autoClose: 2000 })

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-[calc(100dvh-56px)] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-linear-to-br from-[#9D0F07]/15 via-background to-[#E21A0F]/10" />

      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 text-center px-6 sm:px-8 md:px-4 max-w-4xl mx-auto space-y-8 w-full">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight wrap-break-word">
            Welcome to{" "}
            <span className="bg-linear-to-r from-[#5C0704] via-[#9D0F07] to-[#E21A0F] bg-clip-text text-transparent">
              SuperCraft
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A vanilla+ survival experience where every decision matters. Build
            shops, form alliances, wage wars, and grow your wealth in a
            player-driven economy powered by Amethyst Shards.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <div className="flex items-center gap-2 bg-secondary px-4 sm:px-6 py-3 rounded-lg border max-w-full">
            <code className="text-sm sm:text-lg font-mono">{serverIP}</code>

            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="relative h-8 w-8"
            >
              <Copy
                className={`absolute h-4 w-4 transition-all duration-200 ${
                  copied ? "scale-0 rotate-90" : "scale-100 rotate-0"
                }`}
              />

              <Check
                className={`absolute h-4 w-4 transition-all duration-200 ${
                  copied ? "scale-100 rotate-0" : "scale-0 -rotate-90"
                }`}
              />

              <span className="sr-only">Copy server IP</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-center">
          <a href="/discord" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="text-lg px-8 bg-[#9D0F07] hover:bg-[#B3120A] text-white"
            >
              Join our community
            </Button>
          </a>

          <Link to="/about">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn more
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
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
                className={`h-5 w-5 ${
                  online ? "fill-green-500" : "fill-red-500"
                }`}
              />

              <span className="text-3xl font-bold">
                {online ? "Online" : "Offline"}
              </span>
            </div>

            <p className="text-sm text-muted-foreground">Server Status</p>
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
