import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Guide, HomeLayout, Landing, Error } from "./pages"
import { socialLinks } from "./lib/data"

function DiscordRedirect() {
  window.location.href = socialLinks[0].url
  return null
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Landing /> },
        { path: "guide", element: <Guide /> },
      ],
    },
    { path: "/discord", element: <DiscordRedirect /> },
  ],
  { basename: import.meta.env.VITE_BASENAME },
)

function App() {
  return <RouterProvider router={router} />
}
export default App
