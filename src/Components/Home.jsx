import { useContext } from "react"
import Sidebar from "./Sidebar"
import Display from "./Display"
import Player from "./Player"
import SongItem from "./SongItem"
import PlayerContext from "./PlayerContext"

const Home = () => {
  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}

export default Home
