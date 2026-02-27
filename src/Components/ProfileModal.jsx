import React, { useState } from 'react'
import { useProfileModal } from './ProfileModalContext'

const ProfileModal = () => {
  const { open, closeModal } = useProfileModal()

  const [name, setName] = useState('')
  const [image, setImage] = useState(null)

  if (!open) return null

  const handleSave = () => {
    console.log('Name:', name)
    console.log('Image:', image)
    closeModal()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

      <div className="relative bg-[#0f0f0f] rounded-lg p-6 w-[90%] max-w-md text-white border border-[#222]">
        <button
          className="absolute top-3 right-3 text-gray-400"
          onClick={closeModal}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

        {/* Name input */}
        <input
          type="text"
          placeholder="Display name"
          className="w-full mb-4 px-4 py-2 rounded bg-black border border-[#333]"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Image input */}
        <input
          type="file"
          className="w-full mb-6 text-sm"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded bg-[#222]"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 rounded bg-green-500 text-black font-semibold"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
