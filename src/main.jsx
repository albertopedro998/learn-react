import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
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
