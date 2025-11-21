import React from 'react'
import * as assetsModule from '../assets/assets'
const assets = (assetsModule && (assetsModule.assets ?? assetsModule.default ?? assetsModule)) || {}

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen p-4 flex flex-col gap-4 text-white bg-black">

      {/* Box 1 */}
      <div className="bg-[#121212] rounded-md p-3 flex flex-col gap-3">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={assets?.home_icon ?? ''} alt="Home" className="w-5 h-5" />
          <p className="font-bold text-sm">Home</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <img src={assets?.search_icon ?? ''} alt="Search" className="w-5 h-5" />
          <p className="font-bold text-sm">Search</p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="bg-[#121212] rounded-md p-3 flex flex-col gap-3">
        {/* Library Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets?.stack_icon ?? ''} alt="Library" className="w-5 h-5" />
            <p className="font-semibold text-sm whitespace-nowrap">Your Library</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={assets?.arrow_icon ?? ''} alt="Arrow" className="w-4 h-4 cursor-pointer" />
            <img src={assets?.plus_icon ?? ''} alt="Add" className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        <div className="bg-[#242424] rounded-md p-3 flex flex-col items-start gap-2">
          <h1 className="text-sm font-semibold text-white">Create your first playlist</h1>
          <p className="text-xs text-gray-300">It's easy, we'll help you.</p>
          <button className="px-3 py-1 bg-white text-xs font-medium text-black rounded-full mt-1 hover:bg-gray-200 transition">
            Create Playlist
          </button>
        </div>

        <div className="bg-[#242424] rounded-md p-3 flex flex-col items-start gap-2">
          <h1 className="text-sm font-semibold text-white">Let's find some podcasts to follow</h1>
          <p className="text-xs text-gray-300">We'll keep you updated on new episodes</p>
          <button className="px-3 py-1 bg-white text-xs font-medium text-black rounded-full mt-1 hover:bg-gray-200 transition">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar