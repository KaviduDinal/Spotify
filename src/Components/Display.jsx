import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
     <div className='flex-1 m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
      </Routes>
      
    </div>
  )
}

export default Display