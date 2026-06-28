import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import PlayerContext from './PlayerContext';

const Displayalbum = () => {
    const { id } = useParams();
    const albumData = albumsData.find(a => String(a.id) === String(id)) || albumsData[id] || null;
    const { playWithId } = useContext(PlayerContext);

    if (!albumData) {
        return (
            <>
                <Navbar />
                <div className="p-8 text-white">Album not found.</div>
            </>
        )
    }



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
            <div className='grid grid-cols-3 sm:grid-cols-[auto_1fr_200px_80px] gap-x-6 mt-10 mb-4 pl-2 text-[#a7a7a7] items-center'>
                <div className='flex items-center'><b className='mr-4'>#</b>Title</div>
                <div className='hidden sm:flex items-center'>Album</div>
                <div className='hidden sm:block text-right'>Date Addedd </div>
                <div className='flex justify-center sm:justify-end'><img className='w-4' src={assets.clock_icon} alt="" /></div>
            </div>

            <hr />
            {
                songsData.map((item, index) => (
                    <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-[auto_1fr_200px_80px] gap-x-6 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>

                        <div className='flex items-center'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <img className='w-10 h-10 mr-3 object-cover rounded' src={item.image} alt={item.name} />
                            <div className='flex flex-col min-w-0'>
                                <span className='text-white truncate'>{item.name}</span>
                                <span className='text-sm text-gray-400 hidden sm:block truncate'>{item.desc}</span>
                            </div>
                        </div>
                        <div className='hidden sm:flex items-center truncate'>{albumData?.name}</div>
                        <div className='hidden sm:block text-right'>{item.added ?? '5 days ago'}</div>
                        <div className='text-right text-[#a7a7a7]'>{item.duration}</div>
                    </div>
                ))
            }
        </>
    )
}

export default Displayalbum