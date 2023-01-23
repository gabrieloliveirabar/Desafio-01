import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnticipationProvider } from './context/anticipationContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnticipationProvider>
      <App />
    </AnticipationProvider>
  </React.StrictMode>,
)
