import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

import { UtilityContextProvider } from './context/UtilityContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UtilityContextProvider >
        <App />
      </UtilityContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
