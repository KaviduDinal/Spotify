import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const Displayalbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];



    return (
        <>
            <Navbar />
            <div className='mt-10 flex items-center gap-8 flex-nowrap'>
                <img className='w-48 h-48 object-cover rounded flex-shrink-0' src={albumData.image} alt={albumData.name} />

                <div className='flex-1 min-w-0'>
                    <p className='text-sm text-gray-400 mb-2 whitespace-nowrap'>Playlist</p>
                    <h2 className='font-bold mb-4 md:text-7xl text-4xl md:text-7xl leading-tight text-white truncate whitespace-nowrap'>{albumData.name}</h2>
                    <h4 className='text-gray-300 truncate whitespace-nowrap'>{albumData.desc}</h4>
                    <p className='mt-1 text-sm text-gray-300 truncate whitespace-nowrap'>
                        <img className='inline-block w-5 mr-2' src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        <span className='mx-2'>●</span>
                        1,231,594 likes
                        <span className='mx-2'>●</span>
                        <b>50 songs,</b>
                        <span className='ml-2'>about 2 hr 30 min</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Displayalbum