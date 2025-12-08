import React, { createContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../assets/assets';

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
   

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar =useRef();

    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus]= useState(false);
    const [progress,setProgress] = useState(0);
    const [time,setTime] =useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play =()=>{
        if (!audioRef.current) return;
        audioRef.current.play();
        setPlayStatus(true);    
    }

    const pause =()=>{
        if (!audioRef.current) return;
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId =(id)=>{
        const found = songsData.find(s => String(s.id) === String(id));
        const next = found || songsData[0];
        setTrack(next);
        if (audioRef.current) {
            audioRef.current.src = next.file;
            audioRef.current.play();
            setPlayStatus(true);
        }
    }

    useEffect(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        audioEl.ontimeupdate = () => {
            const currentTime = audioEl.currentTime || 0;
            const duration = audioEl.duration || 0;
            const percent = duration ? (currentTime / duration) * 100 : 0;
            if (seekBar.current) {
                seekBar.current.style.width = `${percent}%`;
            }
            setTime({
                currentTime: {
                    second: Math.floor(currentTime % 60),
                    minute: Math.floor(currentTime / 60)
                },
                totalTime: {
                    second: Math.floor(duration % 60),
                    minute: Math.floor(duration / 60)
                }
            });
            setProgress(percent);
        }

        return () => {
            audioEl.ontimeupdate = null;
        }
    }, [])

    const seekSong = (e) => {
        const audioEl = audioRef.current;
        const bar = seekBg.current;
        if (!audioEl || !bar || !audioEl.duration) return;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(clickX / rect.width, 1));
        audioEl.currentTime = percent * audioEl.duration;
        setProgress(percent * 100);
        if (seekBar.current) {
            seekBar.current.style.width = `${percent * 100}%`;
        }
    }


    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        playStatus,setPlayStatus,
        progress,
        time,setTime,
        play,pause,
        seekSong,
        playWithId
    }
    return(

        <PlayerContext.Provider value={contextValue}>
        {props.children}
        </PlayerContext.Provider>
    )
    
}

export default PlayerContext;
export { PlayerContextProvider };