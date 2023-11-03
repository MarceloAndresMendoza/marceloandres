import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Landing } from './views/Landing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div
      className='min-h-screen bg-slate-900'
    >
      <React.StrictMode>
        <Landing />
      </React.StrictMode>
    </div>
  </>,
)
