"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaPlay, FaCirclePlay } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import CarouselCard from "./ui/CarouselCard";
import jurassic_park from "../../public/jurassic_park.jpg";
import jurassic_carousel from "../../public/jurassic_carousel.png";
import inception from "../../public/inception.jpg";
import inception_carousel from "../../public/inception_carousel.jpg";

const contentData = {
  MOVIES: {
    JURASSIC_WORLD: {
      title: "Jurassic World: Fallen Kingdom",
      year: "2018",
      genre: "Action/Sci-fi",
      duration: "2h 9m",
      description:
        "Dinosaurs face extinction again in this thrilling sequel...",
      background: jurassic_park,
      carouselImg: jurassic_carousel,
    },
    INCEPTION: {
      title: "Inception",
      year: "2010",
      genre: "Sci-fi/Thriller",
      duration: "2h 28m",
      description:
        "A thief who enters the dreams of others to steal secrets faces his toughest mission yet.",
      background: inception,
      carouselImg: inception_carousel,
    },
  },
  PODCAST: {
    DINOSAUR_SCIENCE: {
      title: "The Science Behind Dinosaurs",
      year: "2023",
      genre: "Educational",
      duration: "45m",
      description: "A deep dive into the history and science of dinosaurs...",
      background: "https://source.unsplash.com/1920x1080/?fossil",
      carouselImg: "https://source.unsplash.com/320x450/?dinosaur,science",
    },
  },
  MUSIC: {
    JURASSIC_SOUNDTRACK: {
      title: "Jurassic Soundtrack",
      year: "2015",
      genre: "Orchestral",
      duration: "1h 20m",
      description: "An epic orchestral soundtrack from the Jurassic series...",
      background: "https://source.unsplash.com/1920x1080/?orchestra,music",
      carouselImg: "https://source.unsplash.com/320x450/?violin,conductor",
    },
  },
} as const;

export default function ContentSection() {
  type ContentType = keyof typeof contentData;
  const [activeTab, setActiveTab] = useState<ContentType>("MOVIES");
  const [activeMovieIndex, setActiveMovieIndex] = useState(0);

  const contentArray = Object.values(contentData[activeTab]);
  const activeContent = contentArray[activeMovieIndex];

  // Handle Next Movie
  const handleNext = () => {
    setActiveMovieIndex((prevIndex) =>
      prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle Previous Movie
  const handlePrev = () => {
    setActiveMovieIndex((prevIndex) =>
      prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full relative font-poppins">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-70 2xl:h-[1070px]"></div>

      {/* Background Image */}
      <Image
        src={activeContent.background}
        alt={activeContent.title}
        className="object-cover object-center w-full h-full"
        width={0}
        height={0}
        priority
      />

      <div className="absolute top-[20px] md:top-[40px] md:left-[30px] xl:top-[50px] xl:left-[90px] flex flex-col">
        {/* Tab Selection */}
        <div className="h-20 bg-black w-[350px] md:w-[500px] rounded-3xl text-white flex items-center justify-center p-2 ml-2 md:ml-0">
          <div className="w-full flex items-center justify-around md:text-sm lg:text-md xl:text-lg">
            {Object.keys(contentData).map((tab) => (
              <p
                key={tab}
                onClick={() => {
                  setActiveTab(tab as ContentType);
                  setActiveMovieIndex(0); // Reset index on tab change
                }}
                className={`cursor-pointer flex items-center justify-center w-[140px] h-[50px] rounded-2xl transition-all duration-300 ${
                  activeTab === tab ? "bg-gray-600 scale-105" : "bg-transparent"
                }`}
              >
                {tab}
              </p>
            ))}
          </div>
        </div>

        {/* Title and Category */}
        <div className="relative mt-10 w-[350px] md:w-[725px] ml-3 md:ml-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white w-[300px] md:w-[725px]">
            {activeContent.title}
          </h1>
          <div className="mt-6 flex items-center gap-2 text-white bg-black rounded-xl border border-white p-3 w-max">
            <BsCameraReelsFill className="text-sm" />
            <p className="text-sm md:text-lg">{activeTab}</p>
          </div>
        </div>

        {/* Metadata */}
        <div className="relative mt-8 w-[350px] md:w-[720px] ml-3 md:ml-0">
          <div className="w-fullmd:w-[720px] h-px bg-white/60"></div>
          <div className="flex items-center md:w-[550px] gap-8 text-white text-md md:text-xl mt-4">
            <p>{activeContent.year}</p>
            <div className="w-px h-7 bg-white/60"></div>
            <p>{activeContent.genre}</p>
            <div className="w-px h-7 bg-white/60"></div>
            <div className="flex items-center gap-2">
              <FaPlay />
              <p>{activeContent.duration}</p>
            </div>
          </div>
          <div className="w-full md:w-[720px] h-px bg-white/60 mt-4"></div>
        </div>

        {/* Description */}
        <p className="w-[350px] md:w-[720px] text-xl text-white mt-4 ml-3 md:ml-0">
          {activeContent.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-16 md:gap-20 mt-8 ml-3">
          <button className="flex items-center gap-2 text-white bg-black rounded-xl border border-white p-3">
            <FaCirclePlay className="text-xl" />
            <p className="text-sm md:text-xl">Watch Now</p>
          </button>
          <div className="flex items-center gap-20 md:gap-32 text-white">
            <MdOutlineKeyboardArrowLeft
              className="text-4xl cursor-pointer"
              onClick={handlePrev}
            />
            <MdOutlineKeyboardArrowRight
              className="text-4xl cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
      {/* Movie Carousel */}
      <div className="flex justify-center items-center gap-x-4 md:gap-x-6 -mt-[280px] md:-mt-72 lg:-mt-64 xl:-mt-80 2xl:-mt-96 w-full">
        {contentArray.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveMovieIndex(index)}
            className={`cursor-pointer transition-all duration-300 ease-in-out rounded-lg shrink-0 ${
              index === activeMovieIndex
                ? "scale-110"
                : "opacity-60"
            }`}
          >
            <CarouselCard
              carouselImg={item.carouselImg}
              isActive={index === activeMovieIndex}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
