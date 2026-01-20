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
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
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

    const setAndPlayTrack = (nextTrack) => {
        setTrack(nextTrack);
    }

    const previous = () => {
        const currentIndex = songsData.findIndex(s => String(s.id) === String(track.id));
        if (currentIndex > 0) {
            setAndPlayTrack(songsData[currentIndex - 1]);
        }
    }

    const next = () => {
        const currentIndex = songsData.findIndex(s => String(s.id) === String(track.id));
        const total = songsData.length;
        if (total === 0) return;

        if (isShuffling && total > 1) {
            let randomIndex = currentIndex;
            // Ensure we pick a different track when possible
            while (randomIndex === currentIndex) {
                randomIndex = Math.floor(Math.random() * total);
            }
            setAndPlayTrack(songsData[randomIndex]);
            return;
        }

        if (currentIndex >= 0 && currentIndex < total - 1) {
            setAndPlayTrack(songsData[currentIndex + 1]);
        }
    }

    const playWithId =(id)=>{
        const found = songsData.find(s => String(s.id) === String(id));
        const nextTrack = found || songsData[0];
        setAndPlayTrack(nextTrack);
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

        audioEl.onended = () => {
            if (!isLooping) {
                next();
            }
        }

        return () => {
            audioEl.ontimeupdate = null;
            audioEl.onended = null;
        }
    }, [isLooping, isShuffling, track])

    // When the track changes via next/previous/playlist selection, force the new
    // source into the audio element and auto-play (skipping the very first mount).
    const didMountRef = useRef(false);
    useEffect(() => {
        const audioEl = audioRef.current;
        if (!audioEl || !track) return;

        audioEl.src = track.file;
        audioEl.load();
        audioEl.currentTime = 0;
        audioEl.loop = isLooping;

        if (seekBar.current) {
            seekBar.current.style.width = '0%';
        }
        setProgress(0);
        setTime((prev) => ({
            ...prev,
            currentTime: { second: 0, minute: 0 }
        }));

        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }

        const playPromise = audioEl.play();
        if (playPromise && playPromise.then) {
            playPromise
                .then(() => setPlayStatus(true))
                .catch(() => setPlayStatus(false));
        } else {
            setPlayStatus(true);
        }
    }, [track])

    useEffect(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return;
        audioEl.loop = isLooping;
    }, [isLooping])

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


    const toggleLoop = () => setIsLooping((prev) => !prev);
    const toggleShuffle = () => setIsShuffling((prev) => !prev);

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
        playWithId,
        previous,next,
        isLooping,
        toggleLoop,
        isShuffling,
        toggleShuffle
    }
    return(

        <PlayerContext.Provider value={contextValue}>
        {props.children}
        </PlayerContext.Provider>
    )
    
}

export default PlayerContext;
export { PlayerContextProvider };