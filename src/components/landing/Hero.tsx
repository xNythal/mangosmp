import { Button } from "@/components/ui/button"
import { Copy, Users, Check, Circle } from "lucide-react"
import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { socialLinks } from "@/lib/data"

export default function Hero() {
  const serverIP = "join.mango.play.hosting"

  const [playerNum, setPlayerNum] = useState(0)
  const [online, setOnline] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null
    let cancelled = false

    const fetchStatus = async () => {
      try {
        const { data } = await axios.get(
          `https://api.mcstatus.io/v2/status/java/${serverIP}`,
        )

        if (cancelled) return

        setPlayerNum(data.players?.online ?? 0)
        setOnline(data.players?.online > 0)

        const delay = Math.max(
          (data.expires_at ?? Date.now() + 30_000) - Date.now(),
          5_000,
        )

        timeout = setTimeout(fetchStatus, delay)
      } catch (err) {
        console.error(err)

        if (!cancelled) {
          timeout = setTimeout(fetchStatus, 30_000)
        }
      }
    }

    fetchStatus()

    return () => {
      cancelled = true
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP)
    toast.success("Copied to clipboard!", { autoClose: 2000 })

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-[calc(100dvh-56px)] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-linear-to-br from-[#FF7F2A]/10 via-background to-[#FF7F2A]/10" />

      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 text-center px-6 sm:px-8 md:px-4 max-w-4xl mx-auto space-y-8 w-full">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight wrap-break-word">
            Welcome to{" "}
            <span className="bg-linear-to-r from-[#FFDD55] to-[#FF7F2A] bg-clip-text text-transparent">
              Mango SMP
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A vanilla+ survival experience where every decision matters. Build
            shops, form alliances, wage wars, and grow your wealth in a
            player-driven economy powered by Amethyst Shards.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <div className="glow flex items-center gap-2 bg-secondary pl-4 pr-2 sm:pl-6 sm:pr-3 py-3 rounded-lg border max-w-full">
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
          <a
            href={socialLinks[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="text-lg px-8 bg-[#FF7F2A] hover:bg-[#FF7F2A] text-white glow"
              style={{ "--glow-alpha": 0.3 } as React.CSSProperties}
            >
              Join our community
            </Button>
          </a>

          <Link to="/guide">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 hover:bg-background dark:hover:bg-input/30 glow"
            >
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
