import React from "react";
import Image from "next/image";
import mainBack from "../assets/FEST.png";


export default function MainBanner() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl py-4 text-[#e63bdb] mt-24 [text-shadow:_7px_5px_9px_rgba(225,157,219,0.56)] allura-regular tracking-wider">
      <span className="kalam-regular">अ</span>VINYA 2024
      </h1>
      <p className="text-2xl mt-8">Where Code Meets Chaos!</p>
      <h5 className="text-lg mt-6 pt-4 rokkitt-regular">We Are Waiting For You Guyz On</h5>
      <h2 className="text-4xl text-[#FFD400] mt-4 rokkitt-regular">October 15, 2024</h2>
      <button
        type="button"
        className="mt-10 bg-white p-4 px-10 rounded-full text-white font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transform transition duration-300 ease-in-out"
      >
        Register Yourself To The Event
      </button>

      <Image
        src={mainBack}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="banner"
      />
    </div>
  );
}
