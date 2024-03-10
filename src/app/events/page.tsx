import React from 'react'
import Events from '../components/events/Events'
import Footer from '../components/footer/Footer'
import Image from 'next/image'

export default function page() {
  return (<>
  
    <div className='pb-44'><Events />
    
             <Image
          src="/logo.png"
          height={200}
          width={200}
          alt="brush-strokes"
          className="hidden md:flex invert z-50 absolute top-24  left-24  "
        />
    </div>
    <Footer />
    </>
  )
}
