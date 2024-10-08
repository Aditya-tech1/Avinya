import React from "react";
import Image from "next/image";
import aboutImg from "../assets/aboutImg.jpg";
import mainBack2 from "../assets/FEST2.png";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-16 relative">
      <h1 className=" md:mt-16 mt-4 w-full md:px-24 px-10">
        <span className="text-[3rem] w-full text-center beforee relative">
          About
        </span>
      </h1>

      <div className="flex md:flex-row flex-col items-start justify-center md:px-24 px-10  py-14 gap-10">
        <div className="md:w-1/2 w-full">
          <Image
            src={aboutImg}
            className="w-full h-full bg-red-400 flex items-center justify-center rounded-md"
            alt="about"
          />
        </div>
        <div className="md:w-1/2 w-full text-base text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, qui
          perspiciatis. Temporibus ratione vitae accusamus deserunt labore
          nesciunt voluptates eos autem facilis adipisci harum quam, nemo quasi
          mollitia atque quae repellat obcaecati quidem nam voluptatem molestiae
          consequuntur quo illo! Consectetur magnam quibusdam facilis omnis
          laborum fugit esse sint laudantium repellendus ipsam, explicabo beatae
          error, eligendi, dicta neque quas ut architecto aliquid necessitatibus
          hic quia optio debitis? Illum nobis tenetur totam soluta sequi?
          Tempore, facilis ipsam animi culpa labore, hic explicabo quod impedit,
          eos porro accusantium voluptates rem. Aperiam ipsa molestias cum
          ratione natus debitis aliquid mollitia temporibus, fuga animi eum?
        </div>
      </div>
     
    </div>
  );
}
