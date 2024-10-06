import React from 'react'
import Image from 'next/image'
import aboutImg from '../assets/aboutImg.jpg'

export default function About() {
    return (
        <div className='flex flex-col items-center justify-start mt-16'>

            <h2 className='text-3xl font-bold '>
                <p>
                    About
                </p>
                <hr className="mt-2 border-t-2 border-white" />
            </h2>

            <div className='flex flex-row items-start justify-center px-24 py-14 gap-10'>
                <div className='w-1/2'>
                    <Image src={aboutImg} className='w-full h-full bg-red-400 flex items-center justify-center' />
                </div>
                <div className='w-1/2 text-base text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, qui perspiciatis. Temporibus ratione vitae accusamus deserunt labore nesciunt voluptates eos autem facilis adipisci harum quam, nemo quasi mollitia atque quae repellat obcaecati quidem nam voluptatem molestiae consequuntur quo illo! Consectetur magnam quibusdam facilis omnis laborum fugit esse sint laudantium repellendus ipsam, explicabo beatae error, eligendi, dicta neque quas ut architecto aliquid necessitatibus hic quia optio debitis? Illum nobis tenetur totam soluta sequi? Tempore, facilis ipsam animi culpa labore, hic explicabo quod impedit, eos porro accusantium voluptates rem. Aperiam ipsa molestias cum ratione natus debitis aliquid mollitia temporibus, fuga animi eum?</div>
            </div>
        </div>
    )
}
