import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PlayerContextProvider } from './Components/PlayerContext'
import { ProfileModalProvider } from './Components/ProfileModalContext'
import ProfileModal from './Components/ProfileModal'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileModalProvider>
        <PlayerContextProvider>
          <App />
          <ProfileModal />
        </PlayerContextProvider>
      </ProfileModalProvider>
    </BrowserRouter>
  </React.StrictMode>
)
