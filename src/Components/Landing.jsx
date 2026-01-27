import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import landing from '../assets/landing.png'
import watchSong from '../assets/cards/watch song-.png'
import watchImg from '../assets/cards/Watch.png'

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
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 p-6 md:p-8 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <nav className="hidden md:flex items-center gap-3 text-base text-cyan-200">
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white py-1 px-2 transition">Home</button>
            <button type="button" onClick={() => scrollTo('about')} className="hover:text-white py-1 px-2 transition">About</button>
            <button type="button" onClick={() => scrollTo('plans')} className="hover:text-white py-1 px-2 transition">Service</button>
            <button type="button" onClick={() => scrollTo('contact')} className="hover:text-white py-1 px-2 transition">Contact</button>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/login')} className="absolute right-4 top-4 md:right-6 md:top-6 inline-flex items-center gap-2 bg-[#063B2B] text-white font-medium px-3 py-3 rounded-full shadow-sm hover:bg-[#0a6b48] transition z-30">Log In</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex items-start justify-start min-h-screen px-12 pt-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 max-w-xl text-left">
          <h1 className="hero-heading text-6xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            <span className="block line whitespace-nowrap">
              {"Your Favorite Artists.".split('').map((ch, i) => {
                const idx = i
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

            <span className="block line mt-2">
              {"Your Perfect".split('').map((ch, i) => {
                const idx = i + 40
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

            <span className="block line mt-1">
              {"Playlists.".split('').map((ch, i) => {
                const idx = i + 80
                return (
                  <span
                    key={i}
                    className="letter animate-letter"Mobile pplans and 
                    style={{ animationDelay: `${idx * 35}ms` }}
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </span>
                )
              })}
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">Anytime, anywhere.</p>

          <div className="flex items-center gap-4 mt-24 md:mt-32">
            <button
              onClick={() => scrollTo('about')}
              className="flex items-center gap-4 bg-gradient-to-r from-[#6B1E23] to-[#2C0F12] text-white font-medium py-4 px-8 md:px-10 rounded-full shadow-[0_20px_30px_rgba(44,15,18,0.45)] border border-white/5 transition transform hover:-translate-y-0.5 animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#2C0F12] border border-white/8 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h12" stroke="#F8EDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 6l6 6-6 6" stroke="#F8EDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Listen Now
            </button>

            <button onClick={() => scrollTo('about')} className="text-white/90 underline animate-fade-up" style={{ animationDelay: '0.72s' }}>Learn more</button>
          </div>
        </div>
      </section>

      {/* Landing content sections for scrolling targets (placeholders) */}
      <section id="about" className="min-h-screen px-12 py-24 bg-transparent">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">About us</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">We’re building a new way to experience music. Our platform is designed for listeners who love discovery, quality sound, and beautifully crafted playlists. From trending hits to hidden gems, we help you find music that fits every mood. Whether you’re studying, working, or unwinding, your soundtrack is always just a tap away.</p>
      </section>

      <section id="plans" className="px-6 md:px-12 py-24 bg-transparent">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8">Plans</h2>
        <p className="text-gray-300 max-w-3xl mb-10">Choose a plan that fits you. Select monthly or one-time payment options and upgrade to Premium for more features.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Individual */}
          <div className="rounded-2xl border border-green-900 p-6 bg-black/60">
            <div className="inline-block bg-pink-200 text-pink-900 text-xs px-3 py-1 rounded-full mb-4">LKR 0 for 1 month</div>
            <h3 className="text-2xl font-bold text-white mb-2">Individual</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 0 for 1 month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>1 Premium account</li>
              <li>Cancel anytime</li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="bg-pink-200 text-black font-semibold py-3 rounded-full">Try 1 month for LKR 0</button>
              <button className="border border-gray-700 text-gray-300 py-2 rounded-full">One-time payment</button>
            </div>
          </div>

          {/* Student */}
          <div className="rounded-2xl border border-green-900 p-6 bg-black/60">
            <div className="inline-block bg-violet-200 text-violet-900 text-xs px-3 py-1 rounded-full mb-4">LKR 0 for 1 month</div>
            <h3 className="text-2xl font-bold text-white mb-2">Student</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 0 for 1 month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>1 verified Premium account</li>
              <li>Discount for eligible students</li>
              <li>Cancel anytime</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="bg-violet-200 text-black font-semibold py-3 rounded-full">Try 1 month for LKR 0</button>
              <button className="border border-gray-700 text-gray-300 py-2 rounded-full">One-time payment</button>
            </div>
          </div>

          {/* Duo */}
          <div className="rounded-2xl border border-green-900 p-6 bg-black/60">
            <div className="text-xs text-gray-300 mb-4"> </div>
            <h3 className="text-2xl font-bold text-white mb-2">Duo</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 969 / month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>2 Premium accounts</li>
              <li>Cancel anytime</li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="bg-yellow-400 text-black font-semibold py-3 rounded-full">Get Premium Duo</button>
              <button className="border border-gray-700 text-gray-300 py-2 rounded-full">One-time payment</button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/3 rounded-2xl border border-green-900 p-6 bg-black/60">
            <div className="inline-block bg-sky-500 text-white text-xs px-3 py-1 rounded-full mb-4">Premium</div>
            <h3 className="text-2xl font-bold text-white mb-2">Family</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 1,269 / month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>Up to 6 Premium accounts</li>
              <li>Parental controls for the plan manager</li>
              <li>Cancel anytime</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="bg-white text-black font-semibold py-3 rounded-full">Get Premium Family</button>
              <button className="border border-gray-700 text-gray-300 py-2 rounded-full">One-time payment</button>
            </div>
          </div>
        </div>
      </section>

      <section id="mobile" className="min-h-screen px-12 py-24 bg-transparent">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Mobile</h2>
        <p className="text-gray-300 text-lg max-w-3xl mb-8">Bring music on the go. Try our app on wearable devices — here are a couple of highlights.</p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src={watchImg} alt="Watch" className="w-56 md:w-72 rounded-lg shadow-lg" />
          <img src={watchSong} alt="Watch with song" className="w-56 md:w-72 rounded-lg shadow-lg" />
        </div>
      </section>

      <section id="contact" className="min-h-screen px-12 py-24 bg-transparent">
        <p className="text-sm text-gray-400 mb-4">Contact</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Send a message</h2>

        <p className="text-gray-300 max-w-3xl mb-8">If you message an advisor, response times throughout the conversation are usually a few minutes. You can reply back to the advisor at your convenience.</p>

        <div className="mb-6">
          <button onClick={() => navigate('/contact')} className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-full shadow-md">Start messaging</button>
        </div>

        <p className="text-gray-400 max-w-3xl">Information you submit will be used to respond to your enquiry, and as otherwise described in our <span className="text-green-400 underline">Privacy Policy</span>.</p>
      </section>
    </div>
  )
}


export default Landing
