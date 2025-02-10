import React from "react";
import Image from "next/image";
import heroImg from "../../public/hero-img.jpg";
import Header from "./Header";
import SemiCircleNavbar from "./SemiCircleNavbar"; // Import the new component

export default function Hero() {
  return (
    <>
      <section className="w-full relative h-screen font-montserrat">
        <div className="absolute inset-0 bg-[#20202A] opacity-60"></div>
        <div className="w-full absolute top-0">
          <Header />
        </div>
        <Image
          src={heroImg}
          alt=""
          className="object-cover object-center h-screen w-full"
        />
        <div className="absolute z-10 left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-base md:text-[24px] font-semibold bg-gradient-to-r from-[#DF3636] to-[#00C1D7] bg-clip-text text-transparent mb-5">
            WELCOME TO
          </h2>
          <h1 className=" text-3xl md:text-[48px] font-semibold text-white leading-[50px]">
            INFINITE ENTERTAINMENT
          </h1>
        </div>
        <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 z-20">
          <SemiCircleNavbar />
        </div>
      </section>
    </>
  );
}