import React from 'react'
import { assets, albumsData, songsData } from '../assets/assets'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mt-4'>
        <h2 className='text-white text-2xl font-bold mb-4'>Featured Albums</h2>
        <div className='flex space-x-3 overflow-x-auto py-2 px-2'>
          {albumsData.map((item) => (
            <AlbumItem key={item.id} image={item.image} name={item.name} desc={item.desc} id={item.id} />
          ))}
        </div>
      </div>

      <div className='mt-4'>
        <h2 className='text-white text-2xl font-bold mb-4'>Today's biggest hits</h2>
        <div className='flex space-x-3 overflow-x-auto py-2 px-2'>
          {songsData.map((item,index)=>(<SongItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
        </div>

      </div>
    </>
  )
}

export default DisplayHome