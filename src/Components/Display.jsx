import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Displayalbum from './Displayalbum'

const Display = () => {
  return (
    <div className='flex-1 m-2 px-8 pt-6 rounded bg-[#121212] text-white overflow-auto flex flex-col items-start'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<Displayalbum />} />

      </Routes>

    </div>
  )
}

export default Display