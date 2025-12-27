import { createRoot } from "react-dom/client"
import "./index.css"
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import App from "./App.tsx"
import { ThemeProvider } from "./components/ThemeProvider.tsx"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ToastContainer />
    <App />
  </ThemeProvider>,
)
