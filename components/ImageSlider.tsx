
'use client'
import React from 'react'
import { useState } from 'react'

// Example images array with placeholder images
const images = [
    'images/photo1.svg',
    'images/photo2.svg',
    'images/photo3.svg',
    'images/photo4.svg',
    'images/photo5.svg',
    'images/photo6.svg'
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length) // cycle to the first image after the last
  }
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length) // cycle to the last image if going back from the first
  }
  return (
    <section className=' h-screen w-screen slider'>
       <div className='left-arrow' onClick={prevImage}>&lt;</div>
      <div className='image'>
        <img src={images[currentImage]} alt={`Displaying image ${currentImage + 1}`} className='w-full h-full object-cover' />
      </div>
      <div className='right-arrow' onClick={nextImage}>&gt;</div>
    </section>
 
  )
}

export default ImageSlider
