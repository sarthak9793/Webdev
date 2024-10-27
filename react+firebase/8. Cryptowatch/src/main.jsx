import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import {BrowserRouter} from "react-router-dom"
import { FirebaseContextProvider } from './contexts/FirebaseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FirebaseContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
