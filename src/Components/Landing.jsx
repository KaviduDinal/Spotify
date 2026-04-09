import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import landing from '../assets/landing.png'
import watchSong from '../assets/cards/watch song-.png'
import watchImg from '../assets/cards/Watch.png'
import worldMap from '../assets/Map.png'

const Landing = () => {
  const navigate = useNavigate()

  const containerRef = useRef(null)
  const watchImgRef = useRef(null)
  const watchSongRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    // scroll the target into view; this will work whether the page
    // scrolls the window or a scrollable container
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const els = [watchImgRef.current, watchSongRef.current].filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.35 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="landing-headings relative min-h-screen overflow-y-auto bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${landing})`, filter: 'none' }}
    >
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 p-6 md:p-8 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <nav className="hidden md:flex items-center gap-4 text-base text-cyan-200">
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white py-1 px-3 transition">Home</button>
            <button type="button" onClick={() => scrollTo('plans')} className="hover:text-white py-1 px-3 transition">Explore</button>
            <button type="button" onClick={() => scrollTo('plans')} className="hover:text-white py-1 px-3 transition">Premium</button>
            <button type="button" onClick={() => scrollTo('about')} className="hover:text-white py-1 px-3 transition">About</button>
            <button type="button" onClick={() => scrollTo('contact')} className="hover:text-white py-1 px-3 transition">Contact</button>
            <button type="button" onClick={() => navigate('/login')} className="bg-[#063B2B] text-white font-medium py-2 px-4 rounded-full shadow-sm hover:bg-[#0a6b48] transition">Log In</button>
          </nav>

          <div className="flex items-center gap-3" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex items-start justify-start min-h-screen px-12 pt-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 max-w-xl text-left">
          <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-[0_6px_18px_rgba(0,0,0,0.8)]">
            <span className="block whitespace-normal text-4xl md:text-5xl lg:text-6xl lg:leading-tight animate-fade-up" style={{ animationDelay: '300ms' }}>Stream the Artists You Love.</span>
            <span className="block mt-3 text-4xl md:text-5xl lg:text-6xl lg:leading-tight animate-fade-up" style={{ animationDelay: '420ms' }}>Build the Perfect Playlist.</span>
          </h1>
           <p className="text-gray-200 text-lg mb-8 animate-fade-up" style={{ animationDelay: '540ms' }}>Listen anywhere. Anytime.</p>

          <div className="flex items-center gap-4 mt-32 md:mt-40">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#0f4b3a] to-[#2c1212] text-white font-semibold py-4 px-8 md:px-10 rounded-full shadow-lg border border-white/6 transition transform hover:-translate-y-0.5 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Start Listening
            </button>

            <button onClick={() => scrollTo('about')} className="text-white/90 underline animate-fade-up" style={{ animationDelay: '0.72s' }}>Explore Features</button>
          </div>
        </div>
      </section>

      {/* Landing content sections for scrolling targets (placeholders) */}
      <section id="about" className="px-6 md:px-12 py-20 bg-transparent scroll-mt-20 md:scroll-mt-24 mt-24 md:mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Left content */}
          <div className="md:w-1/2 lg:w-2/5 md:-ml-10 lg:-ml-30">
            <p className="text-base md:text-6xl uppercase tracking-wider text-white mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">We connect listeners with music they love</h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">We built Melodex to help listeners discover and enjoy music effortlessly. From trending hits to underground gems, our platform helps you find, stream, and organize playlists tailored to your mood — anytime, anywhere. Join millions who use our app for discovery and high-quality listening.</p>

            <div className="flex items-center gap-4 mt-4">
              <button className="bg-green-500 text-black font-bold btn-pill">Learn More</button>
              <button className="flex items-center gap-2 border border-green-400 text-green-400 px-4 py-3 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.518-3.76A1 1 0 007 8.242v7.516a1 1 0 001.234.97l6.518-1.506a1 1 0 00.766-.97V12.14a1 1 0 00-.766-.972z" /></svg>
                Watch Video
              </button>
            </div>
          </div>

          {/* Divider and stats */}
          <div className="hidden md:flex items-center">
            <div className="w-px h-64 bg-white/10 mx-6" />
          </div>

          <div className="md:w-1/2 lg:w-3/5 flex items-center">
            <div className="grid grid-cols-2 gap-6 w-full">
                <div className="plan-card-3d p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">20M+</div>
                  <div className="text-sm text-gray-400">Streams Played</div>
                </div>

                <div className="plan-card-3d p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">500K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>

                <div className="plan-card-3d p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">100K+</div>
                  <div className="text-sm text-gray-400">Playlists Created</div>
                </div>

                <div className="plan-card-3d p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">20K+</div>
                  <div className="text-sm text-gray-400">Artists Hosted</div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section id="plans" className="px-6 md:px-12 py-24 bg-transparent scroll-mt-20 md:scroll-mt-24">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-center w-full">Plans</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-10">Choose a plan that fits you. Select monthly or one-time payment options and upgrade to Premium for more features.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Individual */}
          <div className="plan-card-3d p-6">
            <div className="inline-block bg-pink-200 text-pink-900 text-xs px-3 py-1 rounded-full mb-4">LKR 0 for 1 month</div>
            <h3 className="text-2xl font-bold text-white mb-2">Individual</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 0 for 1 month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>1 Premium account</li>
              <li>Cancel anytime</li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="card-cta-primary">Try 1 month for LKR 0</button>
              <button className="card-cta-secondary">One-time payment</button>
            </div>
          </div>

          {/* Student */}
          <div className="plan-card-3d p-6">
            <div className="inline-block bg-violet-200 text-violet-900 text-xs px-3 py-1 rounded-full mb-4">LKR 0 for 1 month</div>
            <h3 className="text-2xl font-bold text-white mb-2">Student</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 0 for 1 month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>1 verified Premium account</li>
              <li>Discount for eligible students</li>
              <li>Cancel anytime</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="card-cta-primary">Try 1 month for LKR 0</button>
              <button className="card-cta-secondary">One-time payment</button>
            </div>
          </div>

          {/* Duo */}
          <div className="plan-card-3d p-6">
            <div className="text-xs text-gray-300 mb-4"> </div>
            <h3 className="text-2xl font-bold text-white mb-2">Duo</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 969 / month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>2 Premium accounts</li>
              <li>Cancel anytime</li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="card-cta-primary">Get Premium Duo</button>
              <button className="card-cta-secondary">One-time payment</button>
            </div>
          </div>
        </div>

          <div className="mt-8 flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/3 plan-card-3d p-6">
            <div className="inline-block bg-sky-500 text-white text-xs px-3 py-1 rounded-full mb-4">Premium</div>
            <h3 className="text-2xl font-bold text-white mb-2">Family</h3>
            <p className="text-sm text-gray-400 mb-4">LKR 1,269 / month</p>
            <ul className="text-gray-400 text-sm mb-6 space-y-2">
              <li>Up to 6 Premium accounts</li>
              <li>Parental controls for the plan manager</li>
              <li>Cancel anytime</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="card-cta-primary">Get Premium Family</button>
              <button className="card-cta-secondary">One-time payment</button>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img ref={watchImgRef} src={watchImg} alt="Watch" className="w-80 md:w-96 rounded-lg shadow-lg fade-in" />
          <img ref={watchSongRef} src={watchSong} alt="Watch with song" className="w-80 md:w-96 rounded-lg shadow-lg fade-in" />
        </div>
      </div>

      <section id="contact" className="px-6 md:px-12 py-20 bg-transparent scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-4">Contact Us</h2>
          <p className="text-gray-300 text-base md:text-lg text-center max-w-2xl mx-auto mb-10">Need help with your account, playlists, or subscriptions? Our support team is here to help — reach out anytime and we'll get back to you as soon as possible.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Form column */}
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full rounded-lg border border-gray-200 bg-white/5 px-4 py-3 text-gray-100" />
                <input type="email" placeholder="Email" className="w-full rounded-lg border border-gray-200 bg-white/5 px-4 py-3 text-gray-100" />
                <input type="text" placeholder="Subject" className="w-full rounded-lg border border-gray-200 bg-white/5 px-4 py-3 text-gray-100" />
                <textarea placeholder="Message" rows={6} className="w-full rounded-lg border border-gray-200 bg-white/5 px-4 py-3 text-gray-100" />

                <button type="submit" className="mt-3 inline-flex items-center gap-3 bg-gradient-to-r from-[#8b2e2e] to-[#0f6b3a] text-white font-semibold px-6 py-3 rounded-full shadow-lg">Send Message</button>
              </form>
              <p className="text-gray-400 text-sm mt-4">Information you submit will be used to respond to your enquiry and as described in our <span className="text-green-400 underline">Privacy Policy</span>.</p>
            </div>

            {/* Map column */}
            <div className="relative">
              <img src={worldMap} alt="World map" className="w-full h-auto rounded-md  transform scale-105 md:scale-110 lg:scale-125" />

              {/* Example pins with labels - positioned with percentages to match wireframe */}
                <div className="absolute" style={{ left: '28%', top: '36%' }} aria-hidden>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow" />
                </div>

              <div className="absolute" style={{ left: '45%', top: '18%' }} aria-hidden>
                <div className="w-3 h-3 bg-cyan-400 rounded-full shadow" />
              </div>

              <div className="absolute" style={{ left: '60%', top: '52%' }} aria-hidden>
                <div className="w-3 h-3 bg-cyan-400 rounded-full shadow" />
              </div>

              <div className="absolute" style={{ left: '34%', top: '66%' }} aria-hidden>
                <div className="w-3 h-3 bg-cyan-400 rounded-full shadow" />
              </div>

              <div className="absolute" style={{ left: '82%', top: '68%' }} aria-hidden>
                <div className="w-3 h-3 bg-cyan-400 rounded-full shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Landing
