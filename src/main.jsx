import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PagPreg from './PagPreg.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PagPreg />
  </StrictMode>,
)
