import React from 'react'
import { cardAssets } from '../assets/assets'

const PlanCard = ({badgeColor, badgeText, title, priceMain, priceSub, bullets, primaryText, primaryColor}) => {
  return (
    <div className='bg-[#121212] rounded-2xl p-6 flex flex-col justify-between h-full border border-[#222] ring-2 ring-[#1DB954]/10 hover:shadow-[0_10px_30px_rgba(29,185,84,0.12)] hover:ring-4 hover:ring-[#1DB954]/30 transition'>
      <div>
        {badgeText && (
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${badgeColor}`}>
            {badgeText}
          </div>
        )}

        <h3 className='text-3xl font-extrabold mb-1'>{title}</h3>
        <p className='text-lg font-semibold mb-4'>{priceMain}</p>
        {priceSub && <p className='text-xs text-gray-400 mb-4'>{priceSub}</p>}

        <ul className='text-sm text-gray-300 space-y-2 mb-6'>
          {bullets.map((b, i) => (
            <li key={i} className='flex items-start gap-2'>
              <span className='w-2 h-2 mt-2 rounded-full bg-gray-400/60' />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-3'>
        <button className={`w-full px-4 py-3 rounded-full font-semibold ${primaryColor} text-black`}>{primaryText}</button>
        <button className='w-full px-4 py-3 rounded-full border border-gray-600 text-sm text-gray-300'>One-time payment</button>
      </div>
    </div>
  )
}

const Premium = () => {
  const individual = {
    badgeColor: 'bg-pink-200 text-black',
    badgeText: 'LKR 0 for 1 month',
    title: 'Individual',
    priceMain: 'LKR 0 for 1 month',
    priceSub: 'LKR 749/month after',
    bullets: ['1 Premium account', 'Cancel anytime', 'Subscribe or one-time payment'],
    primaryText: 'Try 1 month for LKR 0',
    primaryColor: 'bg-pink-200'
  }

  const student = {
    badgeColor: 'bg-purple-200 text-black',
    badgeText: 'LKR 0 for 1 month',
    title: 'Student',
    priceMain: 'LKR 0 for 1 month',
    priceSub: 'LKR 375/month after',
    bullets: ['1 verified Premium account', 'Discount for eligible students', 'Cancel anytime'],
    primaryText: 'Try 1 month for LKR 0',
    primaryColor: 'bg-purple-200'
  }

  const duo = {
    badgeColor: 'bg-amber-300 text-black',
    badgeText: null,
    title: 'Duo',
    priceMain: 'LKR 969 / month',
    priceSub: null,
    bullets: ['2 Premium accounts', 'Cancel anytime', 'Subscribe or one-time payment'],
    primaryText: 'Get Premium Duo',
    primaryColor: 'bg-amber-300'
  }

  const family = {
    badgeColor: 'bg-gray-800 text-white',
    badgeText: 'Premium',
    title: 'Family',
    priceMain: 'LKR 1,269 / month',
    priceSub: null,
    bullets: ['Up to 6 Premium accounts', 'Parental controls for the plan manager', 'Cancel anytime', 'Subscribe or one-time payment'],
    primaryText: 'Get Premium Family',
    primaryColor: 'bg-slate-200'
  }

  return (
    <div className='w-full h-full text-white px-6 py-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='max-w-4xl mx-auto text-center mb-6'>
          <h2 className='text-4xl font-extrabold text-gray-200 mb-2'>Listen without limits.</h2>
          <p className='text-sm text-gray-400 mb-4'>Try 1 month of Premium Individual for LKR 0.</p>
        </div>

        {/* Experience the difference - feature comparison */}
        <div className='max-w-3xl mx-auto text-center mb-8'>
          <p className='text-gray-300 mb-4'>Experience the difference</p>
          <p className='text-sm text-gray-400 mb-6'>Go Premium and enjoy full control of your listening. Cancel anytime.</p>

          <div className='grid grid-cols-3 gap-4 text-sm text-gray-300 items-center'>
            <div className='text-left'>
              <div className='font-semibold mb-2 pb-2 border-b border-gray-700 w-full'>What you'll get</div>
              <ul className='space-y-3'>
                <li className='text-left'>Ad-free music listening</li>
                <li className='text-left'>Download to listen offline</li>
                <li className='text-left'>Play songs in any order</li>
                <li className='text-left'>High audio quality</li>
                <li className='text-left'>Listen with friends in real time</li>
                <li className='text-left'>Organise listening queue</li>
              </ul>
            </div>

            <div className='flex flex-col items-center'>
              <div className='font-semibold mb-2 pb-2 border-b border-gray-700 w-full text-center'>Spotify's Free plan</div>
              <ul className='space-y-3'>
                <li className='text-gray-400'>—</li>
                <li className='text-gray-400'>—</li>
                <li className='text-gray-400'>—</li>
                <li className='text-gray-400'>—</li>
                <li className='text-gray-400'>—</li>
                <li className='text-gray-400'>—</li>
              </ul>
            </div>

            <div className='flex flex-col items-center'>
              <div className='font-semibold mb-2 pb-2 border-b border-gray-700 w-full text-center'>Spotify's Premium plans</div>
              <ul className='space-y-3'>
                <li className='flex items-center gap-2'><span className='h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs'>✓</span> <span>Ad-free</span></li>
                <li className='flex items-center gap-2'><span className='h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs'>✓</span> <span>Download</span></li>
                <li className='flex items-center gap-2'><span className='h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs'>✓</span> <span>On-demand play</span></li>
                <li className='flex items-center gap-2'><span className='h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs'>✓</span> <span>High quality</span></li>
                <li className='flex items-center gap-2'><span className='h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs'>✓</span> <span>Listen with friends</span></li>
                <li className='flex items-center gap-2'><span className='h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs'>✓</span> <span>Organise queue</span></li>
              </ul>
            </div>
          </div>
        </div>

        

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
          <PlanCard {...individual} />
          <PlanCard {...student} />
          <PlanCard {...duo} />

          {/* Family card placed under the Student card on medium+ screens */}
          <div className='md:col-start-2 md:row-start-2 w-full'>
            <PlanCard {...family} />
          </div>
        </div>

        {/* Affordable plans intro - moved after plan cards */}
        <div className='max-w-4xl mx-auto text-center mt-8 mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Affordable plans for any situation</h2>
          <p className='text-sm text-gray-400 mb-4'>Choose a Premium plan and listen to ad-free music without limits on your phone, speaker and other devices. Pay in various ways. Cancel anytime.</p>

          <div className='flex items-center justify-center gap-3 mb-4'>
            <img src={cardAssets.visa} alt='VISA' className='h-6' />
            <img src={cardAssets.mastercard} alt='Mastercard' className='h-6' />
            <img src={cardAssets.amex} alt='AMEX' className='h-6' />
            <img src={cardAssets.paypal} alt='PayPal' className='h-6' />
          </div>

          <div className='flex items-start justify-center gap-8'>
            <div className='text-left'>
              <div className='font-semibold mb-2'>All Premium plans include</div>
            </div>
            <ul className='text-sm text-gray-300 space-y-2'>
              <li className='flex items-center gap-2'>✓ Ad-free music listening</li>
              <li className='flex items-center gap-2'>✓ Download to listen offline</li>
              <li className='flex items-center gap-2'>✓ Play songs in any order</li>
              <li className='flex items-center gap-2'>✓ High audio quality</li>
              <li className='flex items-center gap-2'>✓ Listen with friends in real time</li>
              <li className='flex items-center gap-2'>✓ Organise listening queue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
