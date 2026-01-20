import React from 'react'
import Sidebar from './Components/Sidebar'
import Display from './Components/Display'
import Player from './Components/Player'
import { useContext } from 'react'
import PlayerContext from './Components/PlayerContext'

const App = () => {

  const {audioRef,track} = useContext(PlayerContext);
  return (
<div className='h-screen bg-black'>
  
  <div className='h-[90%] flex'>
    <Sidebar/>
    <Display/>
  </div>
  <Player /> 
  <audio ref={audioRef} src={track.file} preload='auto'></audio>
</div>
  )
}

export default App