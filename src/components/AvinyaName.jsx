"use client";
import React from "react";
import { Tilt } from "react-tilt";

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

function AvinyaName() {
  return (
    <Tilt className="Tilt p-3 cursor-default" options={defaultOptions}>
      <h1 className="text-8xl py-4 [text-shadow:_7px_5px_16px_rgba(225,157,219,0.45)] allura-regular tracking-wider bg-gradient-to-r from-[#e63bdb] to-cyan-500 gradtext">
        <span className="kalam-regular">अ</span>VINYA 2024
      </h1>
    </Tilt>
  );
}

export default AvinyaName;
