import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Salutation, FoodOne, FoodTwo } from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Salutation />
    <FoodOne />
    <FoodTwo />
    <App />
  </StrictMode>,
)
