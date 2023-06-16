import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-tr from-pink-100 to-indigo-200'>
      <App />
    </div>
  </React.StrictMode>,
)
