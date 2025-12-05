import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumCard = ({image, name, desc, id, bgColor}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] rounded cursor-pointer hover:opacity-90 overflow-hidden' style={{background: bgColor ?? 'transparent'}}>
      <div className='p-3'>
        <img className='w-full h-36 object-cover rounded-md' src={image} alt={name} />
        <p className='font-bold mt-3 mb-1 text-white'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default AlbumCard
