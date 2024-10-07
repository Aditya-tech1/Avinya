"use client";
import React from "react";
import one from "../assets/gallery/1.jpg";
import two from "../assets/gallery/2.jpg";
import three from "../assets/gallery/3.jpg";
import four from "../assets/gallery/4.jpg";
import five from "../assets/gallery/5.jpg";
import six from "../assets/gallery/6.jpg";
import seven from "../assets/gallery/7.jpg";
import eight from "../assets/gallery/8.jpg";
import nine from "../assets/gallery/9.jpg";
import { Tilt } from "react-tilt";
import Image from "next/image";

export default function Gallery() {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const descEnable = (e) => {
    e.target.nextElementSibling.style.display = "block";
  };
  const descDisable = (e) => {
    e.target.nextElementSibling.style.display = "none";
  };

  /* const imageDiv =
    "w-52 h-64  rounded  flex flex-col items-center justify-center text-black relative cursor-pointer"; */

  const imgarr = [one, two, three, four, five, six, seven, eight, nine];

  return (
    <div className="w-full p-4 px-20 text-center flex flex-col items-center justify-start mt-0 mx-auto">
      <h1 className=" mt-16 w-full text-left">
        <span className="text-[3rem] w-full beforee relative">
          Glimpse of the{" "}
          <span className="allura-regular tracking-wider bg-gradient-to-r from-[#e63bdb] to-cyan-500 gradtext">
            <span className="kalam-regular">अ</span>VINYA 2023
          </span>
        </span>
      </h1>
      <div className="flex flex-grow flex-wrap w-full px-24 gap-10 mt-14 justify-center  ">
        {imgarr.map((data, index) => (
          <Tilt
            className="Tilt p-3 cursor-default"
            options={defaultOptions}
            key={index}
          >
            <div className="w-52 h-64  rounded  flex flex-col items-center justify-center text-black cursor-pointer relative  gradborder">
              <Image
                loading="lazy"
                src={data}
                alt="placeholder"
                className="h-full w-full rounded object-right object-cover"
                onMouseOver={descEnable}
                onMouseLeave={descDisable}
              />
              <p className="absolute w-full  bg-black bottom-0 text-gray-300 p-2 text-sm rounded hidden">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                ipsam amet dicta.
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
