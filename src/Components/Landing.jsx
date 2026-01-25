import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import landing from '../assets/landing.png'

const Landing = () => {
  const navigate = useNavigate()

  const containerRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    // scroll the target into view; this will work whether the page
    // scrolls the window or a scrollable container
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-y-auto bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${landing})`, filter: 'none' }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 p-6 z-20">
        <nav className="flex items-center gap-6 justify-end">
          <button type="button" onClick={() => scrollTo('about')} className="text-gray-200 hover:text-white">About us</button>
          <button type="button" onClick={() => scrollTo('plans')} className="text-gray-200 hover:text-white">Plans</button>
          <button type="button" onClick={() => scrollTo('mobile')} className="text-gray-200 hover:text-white">Mobile</button>
          <button type="button" onClick={() => scrollTo('contact')} className="text-gray-200 hover:text-white">Contact us</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex items-center justify-start h-screen px-12 pt-24">
        <div className="max-w-xl text-left">
          <h1 className="hero-heading text-7xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {['Your favorite', 'artists. Your', 'perfect playlists.'].map((line, li) => (
              <span key={li} className="block line">
                {line.split('').map((ch, i) => {
                  const idx = i + li * 20
                  return (
                    <span
                      key={i}
                      className="letter animate-letter"
                      style={{ animationDelay: `${idx * 35}ms` }}
                    >
                      {ch === ' ' ? '\u00A0' : ch}
                    </span>
                  )
                })}
              </span>
            ))}
          </h1>
          <p className="text-gray-300 text-lg mb-8">Anytime, anywhere.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-3 bg-white text-purple-700 font-semibold py-3 px-5 rounded-full shadow-md animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5l7 7-7 7" stroke="#6B21A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Listen Now
            </button>

            <button onClick={() => scrollTo('about')} className="text-white/90 underline animate-fade-up" style={{ animationDelay: '0.72s' }}>Learn more</button>
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
