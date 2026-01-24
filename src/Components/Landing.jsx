import React from 'react'
import { useNavigate } from 'react-router-dom'
import cover from '../assets/cover.png'

const Landing = () => {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-y-auto bg-black">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src={cover} alt="cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar */}
      <header className="flex justify-end p-6">
        <nav className="flex items-center gap-6">
          <button onClick={() => scrollTo('about')} className="text-gray-200 hover:text-white">About us</button>
          <button onClick={() => scrollTo('plans')} className="text-gray-200 hover:text-white">Plans</button>
          <button onClick={() => scrollTo('mobile')} className="text-gray-200 hover:text-white">Mobile</button>
          <button onClick={() => scrollTo('contact')} className="text-gray-200 hover:text-white">Contact us</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex items-center justify-start h-screen px-12">
        <div className="max-w-xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Your favorite
            <br />artists. Your
            <br />perfect playlists.
          </h1>
          <p className="text-gray-300 text-lg mb-8">Anytime, anywhere.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-3 bg-white text-purple-700 font-semibold py-3 px-5 rounded-full shadow-md"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5l7 7-7 7" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Listen Now
            </button>

            <button onClick={() => scrollTo('about')} className="text-white/90 underline">Learn more</button>
          </div>
        </div>
      </section>

      {/* Landing content sections for scrolling targets (placeholders) */}
      <section id="about" className="min-h-screen px-12 py-24 bg-transparent">
        <h2 className="text-3xl font-bold text-white mb-4">About us</h2>
        <p className="text-gray-300 max-w-2xl">We connect people to the music they love. (Placeholder content)</p>
      </section>

      <section id="plans" className="min-h-screen px-12 py-24 bg-transparent">
        <h2 className="text-3xl font-bold text-white mb-4">Plans</h2>
        <p className="text-gray-300 max-w-2xl">Choose a plan that fits you. (Placeholder content)</p>
      </section>

      <section id="mobile" className="min-h-screen px-12 py-24 bg-transparent">
        <h2 className="text-3xl font-bold text-white mb-4">Mobile</h2>
        <p className="text-gray-300 max-w-2xl">Bring music on the go. (Placeholder content)</p>
      </section>

      <section id="contact" className="min-h-screen px-12 py-24 bg-transparent">
        <h2 className="text-3xl font-bold text-white mb-4">Contact us</h2>
        <p className="text-gray-300 max-w-2xl">Get in touch. (Placeholder content)</p>
      </section>
    </div>
  )
}


export default Landing
