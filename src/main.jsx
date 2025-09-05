import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import './index.css'
import SoftwarePage from './components/pages/SoftwarePage.jsx'

function routes() {
    const route = createBrowserRouter([
      {
        path: "/",
        element: <App />
      },
      {
        path: "/software",
        element: <SoftwarePage />
      },
      {
        path: "/website",
        element: <></>
      }
    ])

    return route
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes()} />
  </StrictMode>,
)
