import Link from "next/link";
import Image from "next/image";
import { HamburgerMinus } from "react-animated-burgers";
import React, { useState } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState(0);

  return (
    <nav className="w-full bg-green-700 flex h-20 justify-center">
      <div className=" flex  justify-between">
        <div className="flex">
          <Image
            src="/logo.PNG"
            alt="maya bistro logo"
            width=""
            height=""
            className="object-contain "
          ></Image>
          {/* Für größere displays */}
          <div className="hidden md:flex">
            <Link href="/">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                START
              </a>
            </Link>
            <Link href="/speisekarte">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                SPEISEKARTE
              </a>
            </Link>

            <Link href="/kontakt">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                KONTAKT
              </a>
            </Link>
            <Link href="/kontakt">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                IMPRESSUM
              </a>
            </Link>
          </div>

          {/* Für Kleinere displays */}
          <div className="flex md:hidden">
            <HamburgerMinus
              barColor="#fff"
              isActive={isActive}
              onClick={() => setIsActive(!isActive)}
            />
            {isActive ? (
              <div className="absolute w-full h-full left-0 mt-20">
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-green-700 text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/">START</Link>
                </div>
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-green-700 text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/speisekarte">SPEISEKARTE</Link>
                </div>

                <div
                  onClick={() => setIsActive(false)}
                  className="bg-green-700 text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/kontakt">KONTAKT</Link>
                </div>
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-green-700 text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/kontakt">IMPRESSUM</Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
