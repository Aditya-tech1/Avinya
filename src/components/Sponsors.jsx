"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import epa from "../assets/epa.png";
import azure from "../assets/azure.png";
import reskill from "../assets/reskill.png";
import youngSkill from "../assets/youngSkill.png";

function Sponsors() {
  const Sponser = {
    Sponsor1: {
      name: "EPA Global",
      logo: epa,
    },
    Sponsor2: {
      name: "Microsoft Azure Developer Community",
      logo: azure,
    },
    Sponser3: {
      name: "Reskill",
      logo: reskill,
    },
    Sponsor4: {
      name: "Young Skill India",
      logo: youngSkill,
    },
    
  };

  // Initialize hover state for all sponsors
  const [hover, setHover] = useState(Object.keys(Sponser).map(() => false));

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hover];
    newHoverStates[index] = true;
    setHover(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hover];
    newHoverStates[index] = false;
    setHover(newHoverStates);
  };

  const defaultOptions = {
    reverse: true,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section className="py-10">
      <h1 className="md:mt-16 mt-4 w-full md:px-24 px-10">
        <span className="text-[3rem] w-full text-center beforee relative text-white">
          Sponsorship Partners
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center mt-20  md:flex-row md:px-24 px-10">
        {Object.values(Sponser).map((sponsor, index) => (
          <Tilt
            className="Tilt md:p-3 py-0 cursor-default flex items-center justify-center flex-row md:w-1/4 w-full md:h-48 h-auto px-2" 
            tiltOptions={defaultOptions}
            key={index}
          >
            <div
              className="m-6 rounded-lg w-full h-full md:w-full md:h-48 flex flex-row items-center justify-center relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* <p
                className={`opacity-0 text-[#FFD400] rokkitt-regular absolute -z-10 top-0 ${
                  hover[index] ? "-translate-y-8 opacity-100" : ""
                } duration-100`}
              >
                {sponsor.name}
              </p> */}
              
              <Image
                src={sponsor.logo}
                alt={`sponsor-${index}`}
                className="h-full w-full object-contain drop-shadow-xl "
              />
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Sponsors);
