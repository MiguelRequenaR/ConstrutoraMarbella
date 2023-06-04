import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Portada from './Pages/Portada.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Portada/>
  </React.StrictMode>,
)
