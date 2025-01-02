import React from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import ProgressBar from '@/components/ProgressBar'

export default function RoutesLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
     <ProgressBar />
     <Header />
      {children}
      <Footer />
    </div>
  )
}
