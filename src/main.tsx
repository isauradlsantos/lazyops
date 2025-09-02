import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import CookiePolicy from './pages/CookiePolicy.tsx'
import TermsConditions from './pages/TermsConditions.tsx'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/privacy', element: <PrivacyPolicy /> },
  { path: '/cookies', element: <CookiePolicy /> },
  { path: '/terms', element: <TermsConditions /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)