// lib/glow.ts

const RADIUS = 150

let initialized = false
let glowElements: HTMLElement[] = []

let mouseX = 0
let mouseY = 0
let framePending = false

function updateGlowElements() {
  glowElements = Array.from(document.querySelectorAll<HTMLElement>(".glow"))
}

function updateGlow() {
  framePending = false

  for (const element of glowElements) {
    const rect = element.getBoundingClientRect()

    element.style.setProperty("--x", `${mouseX - rect.left}px`)
    element.style.setProperty("--y", `${mouseY - rect.top}px`)

    const dx = Math.max(rect.left - mouseX, 0, mouseX - rect.right)
    const dy = Math.max(rect.top - mouseY, 0, mouseY - rect.bottom)

    const distance = Math.hypot(dx, dy)
    const opacity = Math.max(0, 1 - distance / RADIUS)

    element.style.setProperty("--glow-strength", opacity.toString())
  }
}

export function initializeGlow() {
  if (initialized || typeof window === "undefined") return
  initialized = true

  updateGlowElements()

  const observer = new MutationObserver(updateGlowElements)

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  })

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    if (!framePending) {
      framePending = true
      requestAnimationFrame(updateGlow)
    }
  })
}
