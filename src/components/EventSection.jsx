import React from "react";
import Image from "next/image";
import Link from "next/link";
import komicSense from "@/assets/komicSense.jpg";
import battleOfMinds from "@/assets/battleOfMinds.png";
import bugHunt from "@/assets/bugHunt.jpg";
import bitNBytes from "@/assets/bitsNBytes.jpg";
import techStar from "@/assets/techStar.jpg";
import innovision from "@/assets/innovision.jpg";
import iqonnect from "@/assets/iQonnect.jpg";
import explison from "@/assets/explicon.jpg";


export default function EventSection() {
 

  const mainEvents = {
    event1: {
      eventname: "Komic Sense",
      eventimage: komicSense,
      pageLink: "events/komicsense"
    },
    event2: {
      eventname: "Battle Of Minds",
      eventimage: battleOfMinds,
      pageLink: "events/battleofminds"
    },
    event3: {
      eventname: "The Bug Hunt",
      eventimage: bugHunt,
      pageLink: "events/thebughunt"
    },
    event4: {
      eventname: "Tomorow's Tech Star",
      eventimage: techStar,
      pageLink: "events/techstar"
    },
    event5: {
      eventname: "Innovision",
      eventimage: innovision,
      pageLink: "events/innovision"
    },
    event6: {
      eventname: "IQonnect",
      eventimage: iqonnect,
      pageLink: "events/iqonnect"
    },
    event7: {
      eventname: "Explicon",
      eventimage: explison,
      pageLink: "events/explicon"
    },
    event8: {
      eventname: "Bits 'N' Bytes",
      eventimage: bitNBytes,
      pageLink: "events/bitsnbytes"
    },
  };

  return (
    <div className="text-white w-full p-4 md:px-24 px-10 text-center flex flex-col items-center justify-start md:mt-16 mt-4">
      <h1 className=" md:mt-16 mt-0 w-full text-left">
        <span className="text-[3rem] w-full beforee relative">
          Events
        </span>
      </h1>
      <div className="flex flex-wrap justify-center w-full md:px-2 px-2 gap-10 mt-14">
        {Object.keys(mainEvents).map((event, index) => (
          <Link href={`${mainEvents[event].pageLink}`} className="w-60 h-72  rounded p-4 flex flex-col items-center hover:-translate-y-2 transition-transform justify-center gradborderevent cursor-pointer relative shadow" key={index}>
           
            <Image
              src={mainEvents[event].eventimage}
              alt="placeholder"
              className="h-full w-full mb-4"
            />
            <p className="text-[#FFD400] rokkitt-regular">{mainEvents[event].eventname}</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 -z-10"></div>
            
          </Link>
        ))}

      </div>
    </div>
  );
}
