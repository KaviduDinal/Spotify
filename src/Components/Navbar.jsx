import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Previous" />
          <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Next" />
        </div>

        <div className='flex items-center gap-3'>
          <button className='px-3 py-1 bg-white text-black rounded-full text-sm font-medium hover:opacity-90'>Explore Premium</button>
          <button className='px-3 py-1 bg-black text-white border border-gray-700 rounded-full text-sm'>Install App</button>
          <div className='bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center'>G</div>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>  
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>

    </>
  )
}

export default Navbar