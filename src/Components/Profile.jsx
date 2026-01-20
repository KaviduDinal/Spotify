import React from 'react'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <div className='w-full h-full text-white px-6 py-8'>
      <div className='max-w-4xl mx-auto'>
        <Navbar />
        <div className='mt-6 bg-[#121212] p-6 rounded-lg border border-[#222]'>
          <h1 className='text-2xl font-bold mb-2'>Your Profile</h1>
          <p className='text-gray-400'>This is a placeholder profile page. Add account details and settings here.</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
