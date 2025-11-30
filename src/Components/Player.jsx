import React from 'react'
import {songsData, assets} from '../assets/assets'

const Player = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full h-16 bg-black flex items-center justify-start text-white px-4 z-50'>
        <div className='flex items-center gap-4'>
            <img className='w-12 h-12 object-cover' src={songsData[0].image} alt={songsData[0].name} />
            <div className='flex flex-col'>
                <p className='text-sm font-medium'>{songsData[0].name}</p>
                <p className='text-xs text-gray-300'>{songsData[0].desc}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />

            </div>
            <div className='flex items-center gap-5'>
                <p>1.06</p>
                <div className='w-[40vw] max-w-[500px ] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-50 bg-green-800 ronded-full'/>
                </div>
                <p>3.45</p> 

            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4 cursor-pointer' src={assets.plays_icon} alt='Plays' />
            <img className='w-4 cursor-pointer' src={assets.mic_icon} alt='Mic' />
            <img className='w-4 cursor-pointer' src={assets.queue_icon} alt='Queue' />
            <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt='Speaker' />
            <img className='w-4 cursor-pointer' src={assets.volume_icon} alt='Volume' />
            <div className='w-20 bg-slate-200 h-1 rounded overflow-hidden'>
                <div className='w-8 h-1 bg-green-600' />
            </div>


        </div>
    </div>
  )
}


export default Player