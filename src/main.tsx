import { createRoot } from "react-dom/client"
import "./index.css"
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import App from "./App.tsx"
import { initializeGlow } from "./lib/glow.ts"

initializeGlow()

createRoot(document.getElementById("root")!).render(
  <>
    <ToastContainer />
    <App />
  </>,
)
