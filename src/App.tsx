import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, HomeLayout, Landing, Error } from "./pages"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Landing /> },
        { path: "about", element: <About /> },
      ],
    },
  ],
  { basename: import.meta.env.VITE_BASENAME },
)

function App() {
  return <RouterProvider router={router} />
}
export default App
