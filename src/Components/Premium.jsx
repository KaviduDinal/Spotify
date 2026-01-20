import React from 'react'

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
        <h1 className='text-4xl font-extrabold mb-6'>Premium</h1>
        <p className='text-gray-300 mb-8'>Choose the plan that fits you best.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
          <PlanCard {...individual} />
          <PlanCard {...student} />
          <PlanCard {...duo} />

          {/* Family card placed under the Student card on medium+ screens */}
          <div className='md:col-start-2 md:row-start-2 w-full'>
            <PlanCard {...family} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
