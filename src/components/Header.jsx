import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-20 flex items-center justify-between p-6 px-10 bg-transparent fixed top-0 left-0 backdrop-blur-md z-10">
      <div className="logo w-2/5 flex items-center">
        <Image src={logo} alt="" height={50} className="h-full w-auto" />
        <h2 className="w-1/2 ml-2">
          Guru Tegh Bahadur 4th Centenary Engineering College
        </h2>
      </div>
      <nav className="w-1/3 flex flex-row items-center justify-evenly">
        <Link href="./" className="border-b pb-[0.15rem] px-1 text-center">
          Home
        </Link>
        <Link href="./#about">About</Link>
        <Link href="/Gallery">Gallery</Link>
        <Link href="/Events">Events</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
