import React from 'react'

const Banner = () => {
  return (
    <div className="bg-black text-white py-5 md:py-30 hidden lg:flex justify-center">
      <img
        src="/logos/10.jpeg"
        alt="Banner Logo"
        className="max-w-[1350px] w-full h-auto object-cover"
      />
    </div>
  )
}

export default Banner
