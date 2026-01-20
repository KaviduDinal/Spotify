import React, { useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Displayalbum from './Displayalbum'
import Premium from './Premium'
import Profile from './Profile'
import { albumsData } from '../assets/assets'


const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = (typeof albumsData !== 'undefined' && albumsData[Number(albumId)]) ? albumsData[Number(albumId)].bgColor : '#121212';
  console.log(bgColor);

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212'
    }
  }, [isAlbum, bgColor]);

  return (
    <div ref={displayRef} className='flex-1 m-2 px-8 pt-6 rounded bg-[#121212] text-white overflow-auto flex flex-col items-start'>
      <Routes>
        <Route index element={<DisplayHome />} />
        <Route path='album/:id' element={<Displayalbum />} />
        <Route path='premium' element={<Premium/>} />
        <Route path='profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default Display