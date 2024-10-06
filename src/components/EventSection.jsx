import React from 'react'

export default function EventSection() {
    const imageDiv= 'w-full h-auto bg-white rounded p-4 flex flex-col items-center justify-center text-black cursor-pointer';

    return (
        <div className='w-full p-4 px-24 text-center flex flex-col items-center justify-start mt-16'>
           <h2 className='text-3xl font-bold '>
                <p>
                   Events to be held
                </p>
                <hr className="mt-2 border-t-2 border-white" />
            </h2>
            <div className='grid grid-cols-4 w-full px-24 gap-10 mt-10'>
                <div className={imageDiv}>
                    <img src="https://via.placeholder.com/150" alt="placeholder" className='h-full w-full' />
                    <p>Oral Presentation</p>
                </div>
                <div className={imageDiv}>
                    <img src="https://via.placeholder.com/150" alt="placeholder" className='h-full w-full' />
                    <p>Scientific Poster Presentation</p>
                </div>
                <div className={imageDiv}>
                    <img src="https://via.placeholder.com/150" alt="placeholder" className='h-full w-full' />
                    <p>Quiz </p>
                </div>
                <div className={imageDiv}>
                    <img src="https://via.placeholder.com/150" alt="placeholder" className='h-full w-full' />
                    <p>Extempore </p>
                </div>
                <div className={imageDiv}>
                    <img src="https://via.placeholder.com/150" alt="placeholder" className='h-full w-full' />
                    <p>Image 5</p>
                </div>
                <div className={imageDiv}>
                    <img src="https://via.placeholder.com/150" alt="placeholder" className='h-full w-full' />
                    <p>Image 6</p>
                </div>
            </div>
        </div>
    )
}
