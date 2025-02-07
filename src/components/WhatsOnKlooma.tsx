import React from "react";
import { GiFilmStrip } from "react-icons/gi";
import { SiNeteasecloudmusic } from "react-icons/si";
import { FaMicrophoneLines, FaTowerBroadcast } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

export default function WhatsOnKlooma() {
  return (
    <section className="w-full p-4 md:p-5">
      <div className="container mx-auto flex flex-col justify-center items-center font-montserrat gap-12 md:gap-20 lg:gap-32">
        <h1 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-center">
          WHAT&apos;S ON KLOOMA
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 md:gap-12 w-full max-w-[1600px]">
          <div className="flex flex-col items-center justify-center text-center gap-8 md:gap-16 p-4 mt-2">
            <GiFilmStrip className="size-16 md:size-20" />
            <p className="text-lg md:text-xl text-balance">
              THOUSANDS OF HOURS OF CONTENT
            </p>
          </div>

          <div className="w-full h-px md:hidden xl:h-[300px] bg-black/20 xl:w-px justify-self-center"></div>

          <div className="flex flex-col items-center justify-center text-center gap-8 md:gap-16 p-4">
            <SiNeteasecloudmusic className="size-16 md:size-20" />
            <p className="text-lg md:text-xl text-balance">
              MILLIONS OF SONGS
            </p>
          </div>

          <div className="w-full h-px md:hidden xl:h-[300px] bg-black/20 xl:w-px justify-self-center"></div>

          <div className="flex flex-col items-center justify-center text-center gap-8 md:gap-16 p-4">
            <FaMicrophoneLines className="size-16 md:size-20" />
            <p className="text-lg md:text-xl text-balance">
              KLOOMA ORIGINALS EXCLUSIVE CONTENT
            </p>
          </div>

          <div className="w-full h-px md:hidden xl:h-[300px] bg-black/20 xl:w-px justify-self-center"></div>

          <div className="flex flex-col items-center justify-center text-center gap-8 md:gap-16 p-4">
            <FaTowerBroadcast className="size-16 md:size-20" />
            <p className="text-lg md:text-xl text-balance">
              EXCLUSIVE LIVE STREAMING EVENTS
            </p>
          </div>

          <div className="w-full h-px md:hidden xl:h-[300px] bg-black/20 xl:w-px justify-self-center"></div>

          <div className="flex flex-col items-center justify-center text-center gap-8 md:gap-16 p-4">
            <FaGlobeAmericas className="size-16 md:size-20" />
            <p className="text-lg md:text-xl">
              SOCIAL + COMMUNITY FEATURES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}