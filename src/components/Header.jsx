"use client";
import { CrossIcon, HamburgerIcon } from "@/icons/icon";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

function Header() {
  const navref = useRef(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navref.current && !navref.current.contains(event.target)) {
        setHide(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navref]);

  return (
    <div className="w-full text-white h-auto md:h-24 items-center md:justify-between justify-center py-4 px-6 md:py-4 md:px-10 bg-transparent fixed top-0 left-0 backdrop-blur-xl z-10 flex ">
      <div className="logo w-full flex items-center">
        <Image src={logo} alt="" height={50} className="h-full w-auto" />
        <h2 className="w-full ml-2 text-white">
          Guru Tegh Bahadur 4th Centenary Engineering College
        </h2>
        <span
          className="md:hidden"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <HamburgerIcon />
        </span>
      </div>

      <nav
        ref={navref}
        className={`w-screen flex flex-col md:flex-row items-center justify-evenly text-white h-auto md:h-full bg-[#0d0e0e] rounded-b-2xl md:rounded-none md:bg-transparent backdrop-blur-3xl z-10 md:static absolute top-0 left-0 gap-4 py-10 md:hidden ${
          hide ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <span
          className="absolute top-2 right-2 cursor-pointer md:hidden"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <CrossIcon size={24} />
        </span>
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

      <nav className=" hidden md:w-fit gap-5 md:flex items-center justify-evenly text-white h-auto md:h-full  py-10">
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
    </div>
  );
}

export default Header;
