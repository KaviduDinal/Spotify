import React, { useContext } from 'react'
import {songsData, assets} from '../assets/assets'
import PlayerContext from './PlayerContext'  


const Player = () => {
const {track,seekBar,seekBg,playStatus,play,pause,time,progress,seekSong}=useContext(PlayerContext);

const formatTime = (m,s)=> `${m}:${String(s).padStart(2,'0')}`;

  return (
    <div className='fixed bottom-0 left-0 w-full h-16 bg-black flex items-center justify-start text-white px-4 z-50'>
        <div className='flex items-center gap-4'>
            <img className='w-12 h-12 object-cover' src={track.image } alt={songsData[0].name} />
            <div className='flex flex-col'>
                <p className='text-sm font-medium'>{track.name}</p>
                <p className='text-xs text-gray-300'>{track.desc}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                {playStatus
                ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
            }
                

                <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />

            </div>
            <div className='flex items-center gap-5'>
                <p>{formatTime(time.currentTime.minute,time.currentTime.second)}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[40vw] max-w-[500px ] bg-gray-300 rounded-full cursor-pointer'>
                    <div ref={seekBar} className='h-1 bg-green-800 rounded-full' style={{width:`${progress}%`}} />
                </div>                                        
                <p>{formatTime(time.totalTime.minute,time.totalTime.second)}</p> 

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