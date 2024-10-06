import { Instagram, Linkedin } from "@/icons/icon";
import Image from "next/image";
import React from "react";
import society from "../assets/Society_Logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-3 flex flex-col md:flex-row justify-between items-center">

      <div className="flex flex-col items-center gap-1 w-full">
        <p className="text-xs">designed and developed with ❤️ by</p>
        <div className="flex space-x-3">
          <Link
            href="https://github.com/Rahmanhusain"
            className="flex flex-col items-center gap-1"
            target="_blank"
          >
            <Image
              src={"https://avatars.githubusercontent.com/u/157372566?v=4"}
              width={32}
              height={32}
              alt="profile"
              className="rounded-full"
            />
            <p className="text-[0.6rem]">Rahmanhusain</p>
          </Link>

          <Link
            href="https://github.com/Aditya-tech1"
            className="flex flex-col items-center gap-1"
            target="_blank"
          >
            <Image
              src={"https://avatars.githubusercontent.com/u/134770934?v=4"}
              width={32}
              height={32}
              alt="profile"
              className="rounded-full"
            />
            <p className="text-[0.6rem]">Aditya-tech1</p>
        </Link>
        </div>
      </div>

      <div className="w-[0.2rem] h-8 my-1 bg-white"></div>

      <div className="flex items-center justify-center gap-2 w-full">
        <p className="text-center text-sm">@ Organized By</p>
        <div className="bg-white p-2 rounded-full">
          <Image
            src={society}
            alt="society"
            height={50}
            className="w-36 aspect-auto"
          />
        </div>
      </div>

      <div className="w-[0.2rem] h-8  my-1 bg-white"></div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-1">
          <p className="text-[0.6rem]">Follow us on</p>
          <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/the_empirical_society/"
            className="flex flex-col items-center gap-1"
            target="_blank"
          >
            <Instagram className='w-8 h-8'/>
          </Link>
          <Link
            href="https://www.linkedin.com/company/the-empirical-society/"
            className="flex flex-col items-center gap-1"
            target="_blank"
          >
            <Linkedin className='w-8 h-8'/>
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
