import Image from "next/image";
import React from "react";
import movies from "../../public/movies.png";
import discover from "../../public/discover.png";
import podcast from "../../public/podcast.png";
import { RxRocket } from "react-icons/rx";

export default function SecondSection() {
  return (
    <>
      <section className="w-full p-3 md:p-5">
        <div className="container mx-auto flex flex-col justify-center items-center text-center font-montserrat gap-4 md:gap-7">
          {/* Text Content */}
          <div className="w-full px-4 md:px-0 max-w-[900px] flex flex-col gap-3 md:gap-10">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight">
              KLOOMA IS A FULLY INTEGRATED ENTERTAINMENT PLATFORM.
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Klooma combines millions of songs, exclusive podcasts, hours of
              film and TV content, live concerts, and sporting events streamed
              from around the world in a highly personalized, social experience.
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-[200px] h-[400px] xl:w-[294px] xl:h-[600px]">
              <Image
                src={movies}
                alt="movies"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[240px] h-[480px] xl:w-[360px] xl:h-[740px]">
              <Image
                src={discover}
                alt="discover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[200px] h-[400px] xl:w-[294px] xl:h-[600px]">
              <Image
                src={podcast}
                alt="podcast"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Button */}
          <button className="flex items-center justify-center border border-black p-3 rounded-2xl font-poppins gap-2">
            <RxRocket className="size-4 md:size-6" />
            <p className="text-sm md:text-base">COMING SOON</p>
          </button>
        </div>
      </section>
    </>
  );
}
