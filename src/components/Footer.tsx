import Image from "next/image";
import React from "react";
import footerLogo from "../../public/footerLogo.svg";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col w-full bg-[#F9F9F9] p-4 md:p-5 font-montserrat">
        <div className="container mx-auto min-h-[100px] md:h-[150px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 py-4 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-32">
            <Image
              src={footerLogo}
              alt="footerLogo"
              className="w-32 md:w-auto"
            />
            <nav className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-20 font-[500] mt-0 md:mt-2">
              <Link
                href="/movies"
                className="hover:opacity-80 text-sm md:text-base"
              >
                MOVIES
              </Link>
              <Link
                href="/music"
                className="hover:opacity-80 text-sm md:text-base"
              >
                MUSIC
              </Link>
              <Link
                href="/advertise"
                className="hover:opacity-80 text-sm md:text-base"
              >
                ADVERTISE
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <CiFacebook className="size-8 md:size-[40px] hover:opacity-80 cursor-pointer" />
            <BsTwitterX className="size-7 md:size-[32px] hover:opacity-80 cursor-pointer" />
          </div>
        </div>
      </section>
      <div className="bg-white text-center p-3 text-sm md:text-base">
        @KLOOMA, INC
      </div>
    </>
  );
}
