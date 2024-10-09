"use client";
import Image from "next/image";
import React from "react";
import { Tilt } from "react-tilt";
import komic from "../assets/etherium.png";

function Sponsors() {
  const Sponsors = ["Sponsor1", "Sponsor2", "Sponsor3", "Sponsor4"];
  
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    /*  <Tilt className="Tilt p-3 cursor-default" tiltOptions={defaultOptions}>
      <h1 className=" md:text-8xl text-4xl md:py-4  [text-shadow:_7px_5px_16px_rgba(225,157,219,0.45)] allura-regular tracking-wider bg-gradient-to-r from-[#e63bdb] to-cyan-500 gradtext select-none">
        <span className="kalam-regular">अ</span>VINYA 2024
      </h1>
    </Tilt> */
    <section className="py-10">
      <h1 className="md:mt-16 mt-4 w-full md:px-24 px-10">
        <span className="text-[3rem] w-full text-center beforee relative text-white">
          Sponsorship Partners
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center mt-20">
        {Sponsors.map((sponsor, index) =>{
          const [hover, setHover] = React.useState(false);
          return(
          <Tilt
            className="Tilt p-3 cursor-default"
            tiltOptions={defaultOptions}
            key={index}
          >
            <div className=" m-6 rounded-lg w-32 h-32 md:w-48 md:h-48 flex items-center justify-center relative" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
              <p className={`opacity-0 text-[#FFD400] rokkitt-regular absolute -z-10 top-0 ${hover?'-translate-y-8 opacity-100':''} duration-100`}>{sponsor}</p>
              <Image
                src={komic}
                alt="sponsor1"
                className="h-full w-full object-contain "
              />
            </div>
          </Tilt>
        )})}
      </div>
    </section>
  );
}

export default React.memo(Sponsors);
