import komicSense from "@/assets/komicSense.jpg";
import battleOfMinds from "@/assets/battleOfMinds.png";
import bugHunt from "@/assets/bugHunt.jpg";
import bitNBytes from "@/assets/bitsNBytes.jpg";
import techStar from "@/assets/techStar.jpg";
import innovision from "@/assets/innovision.jpg";
import iqonnect from "@/assets/iQonnect.jpg";
import explison from "@/assets/explicon.jpg";
import Inauguration from "@/assets/Inauguration.jpg";
import breaktime from "@/assets/break.png";
import facil from "@/assets/facil.png";
import Image from "next/image";

function TimeLine() {
  const times = [
    {
      date: "2024-10-15",
      time: "10:00 AM",
      evets: [
        {
          name: "Inauguration",
          image: Inauguration,
          ends: "10:30 AM",
          time: "10:00 AM",
        },
      ],
    },
    {
      date: "2024-10-15",
      time: "10:30 AM",
      evets: [
        {
          name: "Innovision",
          image: innovision,
          ends: "12:00 PM",
          time: "10:30 AM",
        },
        {
          name: "The Bug Hunt",
          image: bugHunt,
          ends: "11:30 AM",
          time: "10:30 AM",
        },
        {
          name: "IQonnect",
          image: iqonnect,
          ends: "11:30 AM",
          time: "10:30 AM",
        },
      ],
    },
    {
      date: "2024-10-15",
      time: "12:00 AM",
      evets: [
        {
          name: "Battle Of Minds",
          image: battleOfMinds,
          ends: "01:00 PM",
          time: "12:00 AM",
        },
        {
          name: "Bits 'N' Bytes",
          image: bitNBytes,
          ends: "01:00 PM",
          time: "12:00 AM",
        },
        {
          name: "Explicon",
          image: explison,
          ends: "01:45 PM",
          time: "12:00 AM",
        },
      ],
    },
    {
      date: "2024-10-15",
      time: "01:00 PM",
      evets: [
        {
          name: "Break",
          image: breaktime,
          ends: "01:45 PM",
          time: "01:00 PM",
        },
      ],
    },
    {
      date: "2024-10-15",
      time: "01:45 PM",
      evets: [
        {
          name: "Tomorow's Tech Star",
          image: techStar,
          ends: "03:00 PM",
          time: "01:45 PM",
        },
        {
          name: "Komic Sense",
          image: komicSense,
          ends: "02:45 PM",
          time: "01:45 PM",
        },
      ],
    },
    {
      date: "2024-10-15",
      time: "03:15 PM",
      evets: [
        {
          name: "Felicitation Ceromony",
          image: facil,
          ends: "04:15 PM",
          time: "03:15 PM",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col  mt-24 px-6 md:px-24 text-white">
      <h1 className="mt-16 w-full text-left">
        <span className="text-[3rem] w-full beforee relative">Timeline</span>
      </h1>

      <ol className="my-16">
        {times.map((time, index) => (
          <li className="border-l-2 border-purple-600 relative" key={index}>
            <div className="flex">
              <div className=" absolute w-fit top-0.5 md:top-1 md:left-10 left-6 flex flex-col px-3 py-1 rounded-full bg-purple-500">
                <h1 className="text-sm font-bold tracking-wide">{time.time}</h1>
              </div>
              <div className="bg-purple-600 w-8 h-8 flex items-center justify-center rounded-full -ml-[1rem] absolute">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="text-white w-3 h-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-6 pb-6 max-w-full w-[20rem] ml-6 mt-14">
                {time.evets.map((event, index) => (
                  <div className="flex flex-col gap-3 rounded-lg shadow-lg bg-[#000000] p-3 relative gradbordereventtime" key={index}>
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <p className="text-xs rokkitt-regular text-[#77f850]">Starts at</p>
                        <h2 className="text-sm font-bold rokkitt-regular">{event.time}</h2>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs text-right rokkitt-regular text-[#eb4848]">Ends at</p>
                        <h2 className="text-sm font-bold rokkitt-regular">{event.ends}</h2>
                      </div>
                    </div>

                    <div className="flex w-full aspect-square">
                    <Image src={event.image} alt="eventimage" className="h-full w-full" />
                    </div>

                    <div className="flex">
                        <h2 className="text-2xl font-bold text-[#FFD400] rokkitt-regular">{event.name}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TimeLine;
