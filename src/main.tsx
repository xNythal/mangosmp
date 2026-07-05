import { createRoot } from "react-dom/client"
import "./index.css"
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import App from "./App.tsx"
import { ThemeProvider, useTheme } from "./components/ThemeProvider.tsx"
import { initializeGlow } from "./lib/glow.ts"

function ThemedToastContainer() {
  const { theme } = useTheme()

  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme

  return <ToastContainer theme={resolvedTheme} />
}

initializeGlow()

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ThemedToastContainer />
    <App />
  </ThemeProvider>,
)
