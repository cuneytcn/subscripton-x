'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LOGIN_CREDENTIALS = {
  username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'cuneytcz',
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || '5a21bb2aa0C!',
}

export default function KeystaticLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      username === LOGIN_CREDENTIALS.username &&
      password === LOGIN_CREDENTIALS.password
    ) {
      // Başarılı giriş durumunda session'ı kaydet
      sessionStorage.setItem('keystaticAuth', 'true')
      router.push('/keystatic')
    } else {
      setError('Kullanıcı adı veya şifre hatalı')
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <form
          onSubmit={handleSubmit}
          className='rounded-lg bg-white p-8 shadow-md'>
          <div className='mb-5 flex justify-center'>
            <Image
              src='/images/logos/logo-dark.svg'
              alt='Logo'
              width={180}
              height={40}
              className='h-7 w-auto md:h-8'
              priority
            />
          </div>

          {error && (
            <div className='mb-4 text-center text-sm text-red-500'>{error}</div>
          )}

          <div className='space-y-4'>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-700'>
                Kullanıcı Adı
              </label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'>
                Şifre
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500'
              />
            </div>
          </div>

          <Button variant={'default'} type='submit' className='mt-5 w-full'>
            Giriş Yap
          </Button>
        </form>
      </div>
    </div>
  )
}
