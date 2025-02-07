import Image, { StaticImageData } from "next/image";
import React from "react";

interface CarouselCardProps {
  carouselImg: StaticImageData;
  isActive?: boolean; // Determines if the card is active
  className?: string; // Allows passing additional class names
}

export default function CarouselCard({
  carouselImg,
  isActive = false,
  className = "",
}: CarouselCardProps) {
  return (
    <div
      className={`flex items-center justify-center transition-all duration-300 rounded-lg overflow-hidden${
        isActive
          ? "w-[180px] h-[250px] sm:w-[200px] sm:h-[270px] md:w-[160px] md:h-[240px] xl:w-[200px] xl:h-[295px] 2xl:w-[280px] 2xl:h-[350px]"
          : "w-[150px] h-[220px] sm:w-[170px] sm:h-[240px] md:w-[150px] md:h-[220px] xl:w-[180px] xl:h-[260px] 2xl:w-[250px] 2xl:h-[320px]"
      } ${className}`}
    >
      <Image
        src={carouselImg}
        alt="carouselImg"
        className="object-contain object-center w-full h-full rounded-lg"
        width={0}
        height={0}
        priority
      />
    </div>
  );
}
