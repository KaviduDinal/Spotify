import React, { useState, useMemo, useContext } from 'react'
import { songsData } from '../assets/assets'
import { useSearchModal } from './SearchModalContext'
import PlayerContext from './PlayerContext'

const SearchModal = () => {
  const { open, closeSearch } = useSearchModal()
  const { playWithId } = useContext(PlayerContext)
  const [query, setQuery] = useState('')

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return songsData.filter(s => s.name.toLowerCase().includes(q)).slice(0, 8)
  }, [query])

  if (!open) return null

  const handleSelect = (id) => {
    playWithId(id)
    closeSearch()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-start justify-center pt-20'>
      <div className='absolute inset-0 bg-black/60' onClick={closeSearch} />
      <div className='relative w-[90%] max-w-xl bg-[#0f0f0f] rounded-lg p-4 text-white border border-[#222]'>
        <div className='flex items-center gap-2'>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full bg-[#121212] px-4 py-2 rounded-lg text-white outline-none border border-[#222]'
            placeholder='Search for songs, artists, or albums'
          />
          <button onClick={closeSearch} className='text-gray-400 px-3'>✕</button>
        </div>

        <div className='mt-3'>
          {query === '' ? (
            <p className='text-gray-400 text-sm'>Start typing to search</p>
          ) : (
            <ul className='space-y-2'>
              {suggestions.length === 0 && <li className='text-gray-400 text-sm'>No results</li>}
              {suggestions.map(s => (
                <li key={s.id} onClick={() => handleSelect(s.id)} className='flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer'>
                  <img src={s.image} alt={s.name} className='w-10 h-10 rounded' />
                  <div>
                    <div className='font-semibold'>{s.name}</div>
                    <div className='text-sm text-gray-400'>{s.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal
