import React from 'react'

const SongItem = ({name,image,desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3  rounded cursor-pointer hover:bg-[#ffffff26]'>
<img className='rounded' src={image} alt={name}/>
<p className='font-bold mt-2 mb-1'>{desc}</p>
<p className='text-slate-2000 text'>{desc}</p>

    </div>
  )
}

export default SongItem