"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { CrossIcon2 } from "@/icons/icon";

function AvinyaName() {
  
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

  const [days, setDays] = React.useState(5);
  const [hours, setHours] = React.useState(17);
  const [minutes, setMinutes] = React.useState(5);
  const [seconds, setSeconds] = React.useState(16);
  const [hide, setHide] = React.useState(true);

  React.useEffect(() => {
    const targetDate = new Date("2024-10-13T23:59:59"); // Set your target date here

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <Tilt className="Tilt p-3 cursor-default" options={defaultOptions}>
        <h1 className=" md:text-8xl text-4xl md:py-4 z-30 [text-shadow:_7px_5px_16px_rgba(225,157,219,0.45)] allura-regular tracking-wider bg-gradient-to-r from-[#e63bdb] to-cyan-500 gradtext select-none">
          <span className="kalam-regular">अ</span>VINYA 2024
        </h1>
      </Tilt>
      
      {hide && (
      <div className="alertbg backdrop-blur-sm">
      <div className="w-auto md:w-96 h-fit pt-8 pb-4 rounded-2xl flex flex-col items-center justify-center bg-cover bg-center absolute bottom-1/2 left-3 right-3 md:left-1/2 md:-translate-x-1/2 translate-y-1/2 px-3 bg-gradient-to-r from-[#e63bdb] to-cyan-500 bgop">
     
      <span
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <CrossIcon2 size={20}/>
        </span>
        <h1 className="rokkitt-regular text-[#FFD400] text-3xl flex items-center mb-4 gap-2"><span className="kalam-regular">अ</span><span className="allura-regular">VINYA</span> is Live Now <div className="w-3 h-3 bg-red-500 rounded-full"></div></h1>
        <h2 className="rokkitt-regular text-[#ffffff] text-xl flex items-center mb-2">Registeration Ends In</h2>
        <div className="flex items-start justify-center w-full gap-1.5">
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 w-full flex items-center justify-center flex-col gap-1 px-3">
            
            <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">
              {days}
            </h3>
            <p className="text-xs uppercase font-normal text-white mt-1 text-center w-full">
              days
            </p>
          </div>

          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 w-full flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-white text-center">
              {hours}
            </h3>
            <p className="text-xs uppercase font-normal text-white mt-1 text-center w-full">
              Hour
            </p>
          </div>

          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 w-full flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-white text-center">
              {minutes}
            </h3>
            <p className="text-xs uppercase font-normal text-white mt-1 text-center w-full">
              Min
            </p>
          </div>

          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 w-full flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-white text-center">
              {seconds}
            </h3>
            <p className="text-xs uppercase font-normal text-white mt-1 text-center w-full">
              Sec
            </p>
          </div>
        </div>
      </div>
      </div>
      )}
    </>
  );
}

export default React.memo(AvinyaName);
