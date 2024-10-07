import React from 'react'
import Image from 'next/image'
import poster from '../assets/poster.jpg'

export default function EventItem() {
    const headingStyle = 'text-lg font-bold mt-4'
    return (
        <div className=' w-full h-auto px-24 flex flex-col justify-center min-h-screen'>

            <div className='flex flex-row gap-10'>
                <div className='w-1/3 '>

                    <Image src={poster} alt='Poster' className='w-full h-auto rounded' />
                    <p className=' w-full py-6 '>
                        <strong> Venue:  </strong>Auditorium <br /> <br />
                        <strong> Timing:</strong>  09:00 AM - 11:00 AM
                    </p>
                </div>
                <div className='w-2/3 text-sm'>
                    <h2 className={headingStyle}>

                        Explicon: Scientific Poster Competition
                    </h2>


                    Join us at Explicon, where science meets creativity. This event offers participants a platform to present original ideas through visually engaging scientific posters. Explicon is the perfect opportunity to share your vision and connect with like-minded peers.

                    <h2 className={headingStyle}>

                        Event Format:
                    </h2>

                    The journey begins with an abstract submission round. Participants must submit a 150-word abstract in Microsoft Word by <strong className='text-red-600'> 11th October 2024, formatted in Times New Roman, size 12.</strong>  The abstract should include the title of the poster, author name(s), and college affiliation. The most compelling abstracts will be shortlisted for the final presentation.

                    <h2 className={headingStyle}>

                        Final Presentation:
                    </h2>
                    Shortlisted participants will create their posters using a designated template that will be provided. Posters will be presented on 15th October 2024.

                    <h2 className={headingStyle}>

                        Each presentation will follow this format:
                    </h2>

                    3 minutes to explain the core concepts of the poster


                    2 minutes for a dynamic Q&A session with the judging panel

                    <strong className='text-cyan-600'>

                        Note: All participants must adhere to the provided topics when creating their posters.
                    </strong>

                    <h2 className={headingStyle}>

                        Judging Criteria:
                    </h2>
                    Participants will be evaluated on content, originality, and presentation. Only 15 abstract will be shortlisted.
                    The judges' decision will be final and binding.
                    Explicon promises to be an intellectually stimulating and competitive event, where groundbreaking ideas come to life. Step forward and share your insights with the next generation of innovators!

                </div>
            </div>

        </div>
    )
}
