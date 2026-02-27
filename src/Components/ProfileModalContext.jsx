import React, { createContext, useContext, useState } from 'react'

const ProfileModalContext = createContext(null)

export const ProfileModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <ProfileModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ProfileModalContext.Provider>
  )
}

export const useProfileModal = () => {
  const ctx = useContext(ProfileModalContext)
  if (!ctx) throw new Error('useProfileModal must be used within ProfileModalProvider')
  return ctx
}

export default ProfileModalContext
