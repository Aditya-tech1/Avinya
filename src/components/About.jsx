import React from "react";
import Image from "next/image";
import aboutImg from "../assets/aboutImg.jpg";
import mainBack2 from "../assets/FEST2.png";

export default function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-start pt-16 relative"
    >
      <h1 className="md:mt-16 mt-4 w-full md:px-24 px-10">
        <span className="text-[3rem] w-full text-center beforee relative">
          About
        </span>
      </h1>

      <div className="flex md:flex-row flex-col items-start justify-center md:px-24 px-10 py-14 gap-10">
        <div className="md:w-1/2 w-full">
          <Image
            src={aboutImg}
            className="w-full h-full bg-red-400 flex items-center justify-center rounded-md"
            alt="about"
          />
        </div>
        <div className="md:w-1/2 w-full text-base text-justify text-white">
          अVINYA, the Annual Tech Fest of Guru Tegh Bahadur 4th Centenary
          Engineering College, is a distinguished event celebrating innovation,
          knowledge, and creativity. Derived from Sanskrit, अVINYA means
          &quot;Innovation,&quot; embodying the fest&apos;s mission to offer a
          platform for students to engage with emerging technologies through a
          range of exciting events. Guided by our college motto, &apos;Fostering
          Dreams, Forging Futures,&apos; अVINYA focuses on developing technical,
          communication, and presentation skills. This year marks the second
          edition, now an inter-college event, welcoming participants from
          various institutions to collaborate and showcase their abilities.{" "}
          <br />
          The fest features eight unique events: <br />
          <ul>
            <li className="list-disc ml-2">Komic Sense</li>
            <li className="list-disc ml-2">Battle of Minds</li>
            <li className="list-disc ml-2">The Bug Hunt</li>
            <li className="list-disc ml-2">
              Tomorrow&apos;s Tech Star - Viksit Bharat Edition
            </li>
            <li className="list-disc ml-2">InnoVision</li>
            <li className="list-disc ml-2">IQonnect</li>
            <li className="list-disc ml-2">Bits N Bytes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
