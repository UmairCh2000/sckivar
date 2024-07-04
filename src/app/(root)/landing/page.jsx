import Main from '@/components/landing/Main.jsx'
import Process from '@/components/landing/Process.jsx'
import Testimonials from '@/components/landing/Testimonials.jsx'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full flex flex-col'>
      <Main />
      <Process />
      <Testimonials />
    </div>
  )
}

export default LandingPage