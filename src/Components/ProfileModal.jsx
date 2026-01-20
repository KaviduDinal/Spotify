import React from 'react'
import { useProfileModal } from './ProfileModalContext'

const ProfileModal = () => {
  const { open, closeModal } = useProfileModal()

  if (!open) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/60' onClick={closeModal} />
      <div className='relative bg-[#0f0f0f] rounded-lg p-6 w-[90%] max-w-md text-white border border-[#222]'>
        <button className='absolute top-3 right-3 text-gray-400' onClick={closeModal}>✕</button>
        <h2 className='text-xl font-bold mb-2'>Your Profile</h2>
        <p className='text-gray-400 mb-4'>This is a placeholder profile popup. Add account details and settings here.</p>
        <div className='flex justify-end'>
          <button className='px-4 py-2 bg-white text-black rounded-full font-semibold' onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
