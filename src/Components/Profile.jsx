import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import { supabase } from '../assets/supabase'
import { auth } from '../Auth/firebase'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef(null)

  useEffect(() => {
    const u = auth.currentUser
    setUser(u)

    // fetch profile avatar from Supabase if user exists
    if (u) fetchProfile(u.uid)

    // listen for auth changes (optional)
    const unsub = auth.onAuthStateChanged?.((usr) => {
      setUser(usr)
      if (usr) fetchProfile(usr.uid)
    })
    return () => unsub && unsub()
  }, [])

  async function fetchProfile(uid) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('avatar_url')
        .eq('id', uid)
        .single()
      if (error && error.code !== 'PGRST116') {
        // ignore not found vs real errors
        console.error('profile fetch error', error)
        return
      }
      if (data?.avatar_url) setAvatarUrl(data.avatar_url)
    } catch (err) {
      console.error(err)
    }
  }

  async function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file || !user) return
    setUploading(true)
    try {
      const path = `avatars/${user.uid}/${Date.now()}_${file.name}`

      // upload to Supabase storage (bucket name: avatars)
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(path, file, { upsert: true })
      if (uploadError) throw uploadError

      const { publicURL } = supabase.storage.from('avatars').getPublicUrl(path)

      // persist to profiles table (create or update)
      const { error: upsertError } = await supabase.from('profiles').upsert({
        id: user.uid,
        avatar_url: publicURL,
        updated_at: new Date()
      })
      if (upsertError) throw upsertError

      setAvatarUrl(publicURL)
    } catch (err) {
      console.error('Upload error', err)
      alert('Failed to upload avatar. Check console for details.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className='w-full h-full text-white px-6 py-8'>
      <div className='max-w-4xl mx-auto'>
        <Navbar />

        <div className='mt-6 bg-[#121212] p-6 rounded-lg border border-[#222]'>
          <div className='flex items-center gap-6'>
            <div className='relative'>
              <div className='w-28 h-28 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center'>
                {avatarUrl ? (
                  <img src={avatarUrl} alt='avatar' className='w-full h-full object-cover' />
                ) : (
                  <span className='text-gray-300'>No Image</span>
                )}
              </div>
              <button
                onClick={() => fileRef.current?.click()}
                className='absolute bottom-0 right-0 bg-green-600 rounded-full p-2 text-sm'
                title='Edit avatar'
              >
                ✎
              </button>
            </div>

            <div>
              <h1 className='text-2xl font-bold mb-1'>{user?.displayName || 'Your Name'}</h1>
              <p className='text-gray-400'>{user?.email || 'you@example.com'}</p>
              <button
                onClick={() => fileRef.current?.click()}
                className='mt-3 inline-block bg-green-600 text-black px-4 py-1 rounded-md font-medium'
              >
                Edit Profile
              </button>
            </div>
          </div>

          <input
            ref={fileRef}
            type='file'
            accept='image/*'
            className='hidden'
            onChange={handleFile}
          />

          <div className='mt-6'>
            <h2 className='text-lg font-semibold mb-2'>Account</h2>
            <p className='text-gray-400'>This profile stores an avatar image in Supabase storage and saves its public URL to the `profiles` table.</p>
            {uploading && <p className='text-sm text-yellow-300 mt-2'>Uploading...</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
