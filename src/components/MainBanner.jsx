import React from 'react'
import Image from 'next/image'
import mainBack from '../assets/main_banner_back.jpg'

export default function MainBanner() {
  return (
    <div className="w-full h-screen bg-mainBanner bg-cover bg-center flex flex-col items-center justify-center ">
      <h1 className='text-7xl italic py-4 text-[#8417D8] mt-24  '>अVINYA 2024</h1>
      <p className='text-2xl italic mt-8'>Where Code Meets Chaos!</p>  
      <h5 className='text-lg mt-6 pt-4'>We Are Waiting For You Guess On</h5>
      <h2 className='text-4xl text-[#FFD400] mt-4'>October 15, 2024</h2>
      <button type="button" className='mt-10 bg-white p-4 px-10 rounded-full text-black font-bold'>Register Yourself To The Event</button>
  
      <Image src={mainBack} className='absolute top-0 left-0 w-full h-full object-cover -z-10'alt='banner'/>
    </div>
  )
}
