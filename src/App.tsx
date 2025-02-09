import VideoConference from "../pages/VideoConference"
import HomePage from "../pages/HomePage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "video-call",
      element: <VideoConference />
    }
  ])

  createBrowserRouter
  return (
    <RouterProvider router={router} />
  )
}

export default App
