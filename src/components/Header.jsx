"use client"
import { CrossIcon, HamburgerIcon } from "@/icons/icon";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [hide,setHide] = useState(false)
  return (
    <div className="w-full text-white h-auto md:h-20 items-center md:justify-between justify-center py-4 px-6 md:py-6 md:px-10 bg-transparent fixed top-0 left-0 backdrop-blur-xl z-10 flex ">
      <div className="logo w-full flex items-center">
        <Image src={logo} alt="" height={50} className="h-full w-auto" />
        <h2 className="w-full ml-2 text-white">
          Guru Tegh Bahadur 4th Centenary Engineering College
        </h2>
        <span className="md:hidden" onClick={()=>{setHide(!hide)}}>
        <HamburgerIcon />
        </span>
      </div>
      {hide &&
      <nav className="md:w-1/3 w-full flex flex-col md:flex-row items-center justify-evenly text-white h-auto md:h-full bg-[#0b0b0b] rounded-b-2xl md:rounded-none md:bg-transparent backdrop-blur-xl z-10 md:static absolute top-0 left-0 gap-4 py-10">
        <span className="absolute top-2 right-2 cursor-pointer md:hidden" onClick={()=>{setHide(!hide)}}><CrossIcon size={24}/></span>
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/#about" className="">
          About
        </Link>
        <Link href="/#gallery" className="">
          Gallery
        </Link>
        <Link href="/events" className="">
          Events
        </Link>
        <Link href="/contacts" className="">
          Contact
        </Link>
      </nav>
      }
    </div>
  );
}

export default Header;
