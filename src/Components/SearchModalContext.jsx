import React, { createContext, useContext, useState } from 'react'

const SearchModalContext = createContext(null)

export const SearchModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const openSearch = () => setOpen(true)
  const closeSearch = () => setOpen(false)

  return (
    <SearchModalContext.Provider value={{ open, openSearch, closeSearch }}>
      {children}
    </SearchModalContext.Provider>
  )
}

export const useSearchModal = () => {
  const ctx = useContext(SearchModalContext)
  if (!ctx) throw new Error('useSearchModal must be used within SearchModalProvider')
  return ctx
}

export default SearchModalContext
