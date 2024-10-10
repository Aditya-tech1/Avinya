import Image from "next/image";
import mainBack from "../assets/FEST.png";
import AvinyaName from "./AvinyaName";
import Link from "next/link";

export default function MainBanner() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <AvinyaName />
      <div className="md:text-2xl text-lg md:mt-0 mt-2 text-white">
        Ideation for Viksit Bharat
        <br />
        <p className="text-base text-center w-full text-slate-100 italic">"Inter-College Tech Fest"</p>
      </div>
      <h5 className="text-lg mt-6 pt-4 rokkitt-regular text-center text-white">
        Let&apos;s Be A Part Of An Exciting Journey On
      </h5>
      <h2 className="md:text-4xl text-3xl text-[#FFD400] rokkitt-regular">
        October 15, 2024
      </h2>
      <Link
        href="/events"
        type="button"
        className="mt-10 bg-white p-4 px-10 rounded-full text-white font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transform transition duration-300 ease-in-out"
      >
        Register Yourself To The Event
      </Link>

      <Image
        src={mainBack}
        className="absolute top-0 left-0 right-0 w-full h-screen object-cover -z-10 md:object-cover object-left"
        alt="banner"
      />
    </div>
  );
}
