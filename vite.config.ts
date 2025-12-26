import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default ({ mode }: { mode: "production" | "development" }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_")
  return defineConfig({
    base: env.VITE_BASENAME,
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
    ],
  })
}
