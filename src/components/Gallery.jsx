'use client'
import React from 'react'
import one from '../assets/gallery/1.jpg'
import two from '../assets/gallery/2.jpg'
import three from '../assets/gallery/3.jpg'
import four from '../assets/gallery/4.jpg'
import five from '../assets/gallery/5.jpg'
import six from '../assets/gallery/6.jpg'
import seven from '../assets/gallery/7.jpg'
import eight from '../assets/gallery/8.jpg'
import nine from '../assets/gallery/9.jpg'

import Image from 'next/image'

export default function Gallery() {
    const descEnable = (e) => {
        e.target.nextElementSibling.style.display = 'block';
    }
    const descDisable = (e) => {
        e.target.nextElementSibling.style.display = 'none';
    }
        
    const imageDiv= 'w-48 h-64  rounded  flex flex-col items-center justify-center text-black relative border border-white cursor-pointer';
    return (    
        <div className='w-full p-4 px-20 text-center flex flex-col items-center justify-start mt-16 mx-auto'>
           <h2 className='text-3xl font-bold '>
                <p>
                   Glimpse of the अVINYA 2023
                </p>
                <hr className="mt-2 border-t-2 border-white" />
            </h2>
            <div className='flex flex-grow flex-wrap w-full px-24 gap-10 mt-10   '>
                <div className={imageDiv}>
                    <Image loading='lazy' src={one} alt="placeholder" className='h-full w-full rounded object-right object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={two} alt="placeholder" className='h-full w-full rounded object-right object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={three} alt="placeholder" className='h-full w-full rounded object-right object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={four} alt="placeholder" className='h-full w-full rounded object-center object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={five} alt="placeholder" className='h-full w-full rounded object-center object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={six} alt="placeholder" className='h-full w-full rounded object-center object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={seven} alt="placeholder" className='h-full w-full rounded object-center object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={eight} alt="placeholder" className='h-full w-full rounded object-left object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
                <div className={imageDiv}>
                    <Image loading='lazy' src={nine} alt="placeholder" className='h-full w-full rounded object-center object-cover' onMouseOver={descEnable} onMouseLeave={descDisable} />
                    <p className='absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam amet dicta.</p>
                </div>
              
            </div>
        </div>
        
    )
}
