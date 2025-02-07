import Image from "next/image";
import { FaMusic, FaMicrophone, FaFilm, FaTv, FaVideo } from "react-icons/fa";
import { FaTowerBroadcast } from "react-icons/fa6";
import ellipse from "../../public/Ellipse 1.png";

const SemiCircleNavbar = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <Image src={ellipse} alt="ellipse" className="relative" />
        <div className="absolute text-white left-[2%] hover:left-[3.3%] bottom-0 hover:bottom-2 md:left-[2%] md:hover:left-[3%] lg:left-[11%] lg:hover:left-[11.2%] xl:left-[22%] xl:hover:left-[22.3%] md:bottom-0 2xl:left-[29.4%] 2xl:hover:left-[29.2%] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/30 hover:backdrop-blur-2xl p-5 md:p-10 lg:p-12 hover:rounded-full z-10 group">
          <FaMusic className="text-2xl md:text-5xl" />
          <p className="group-hover:hidden text-xs md:text-base">MUSIC</p>
        </div>
        <div className="absolute text-white left-[11%] hover:left-[13.5%] bottom-[33%] hover:bottom-[40%] md:left-[12%] md:hover:left-[11.5%] md:hover:bottom-[35%] lg:left-[18%] lg:hover:left-[18.5%] lg:hover:bottom-[35%] xl:left-[28%] xl:hover:left-[27.5%] md:bottom-[32%] xl:hover:bottom-[35%] 2xl:left-[33%] 2xl:hover:left-[33%] 2xl:hover:bottom-[35%] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/30 hover:backdrop-blur-2xl p-5 md:p-10 lg:p-12 hover:rounded-full z-10 group">
          <FaVideo className="text-2xl md:text-5xl" />
          <p className="group-hover:hidden text-xs md:text-base">VIDEO</p>
        </div>
        <div className="absolute text-white left-[24%] hover:left-[30%] bottom-[54%] hover:bottom-[59%] md:left-[25%] md:hover:left-[27%] md:bottom-[56%] md:hover:bottom-[57%] lg:left-[30%] lg:hover:left-[31%] lg:bottom-[56%] lg:hover:bottom-[57%] xl:left-[35%] xl:hover:left-[37%] xl:bottom-[56%] xl:hover:bottom-[57%] 2xl:left-[39.5%] 2xl:hover:left-[41.5%] 2xl:bottom-[56%] 2xl:hover:bottom-[59%] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/30 hover:backdrop-blur-2xl p-5 md:p-10 lg:p-12 hover:rounded-full z-10 group">
          <FaMicrophone className="text-2xl md:text-5xl" />
          <p className="group-hover:hidden text-xs md:text-base">MICROPHONE</p>
        </div>

        <div className="absolute text-white right-[2%] hover:right-[3.3%] bottom-0 hover:bottom-2 md:right-[2%] md:hover:right-[3%] lg:right-[11%] lg:hover:right-[11.2%] xl:right-[22%] xl:hover:right-[22.3%] md:bottom-0 2xl:right-[29.4%] 2xl:hover:right-[29.2%] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/30 hover:backdrop-blur-2xl p-5 md:p-10 lg:p-12 hover:rounded-full z-10 group">
          <FaTowerBroadcast className="text-2xl md:text-5xl" />
          <p className="group-hover:hidden text-xs md:text-base">LIVE</p>
        </div>
        <div className="absolute text-white right-[12%] hover:right-[13.5%] bottom-[33%] hover:bottom-[40%] md:right-[12%] md:hover:right-[11.5%] md:hover:bottom-[35%] lg:right-[18%] lg:hover:right-[18.5%] lg:hover:bottom-[35%] xl:right-[28%] xl:hover:right-[27.5%] md:bottom-[32%] xl:hover:bottom-[35%] 2xl:right-[33%] 2xl:hover:right-[33%] 2xl:hover:bottom-[35%] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/30 hover:backdrop-blur-2xl p-5 md:p-10 lg:p-12 hover:rounded-full z-10 group">
          <FaTv className="text-2xl md:text-5xl" />
          <p className="group-hover:hidden text-xs md:text-base">TV</p>
        </div>
        <div className="absolute text-white right-[25%] hover:right-[30%] bottom-[54%] hover:bottom-[59%] md:right-[27%] md:hover:right-[27%] md:bottom-[56%] md:hover:bottom-[57%] lg:right-[32%] lg:hover:right-[32%] lg:bottom-[56%] lg:hover:bottom-[57%] xl:right-[37%] xl:hover:right-[37%] xl:bottom-[56%] xl:hover:bottom-[57%] 2xl:right-[39.5%] 2xl:hover:right-[41.5%] 2xl:bottom-[56%] 2xl:hover:bottom-[59%] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/30 hover:backdrop-blur-2xl p-5 md:p-10 lg:p-12 hover:rounded-full z-10 group">
          <FaFilm className="text-2xl md:text-5xl" />
          <p className="group-hover:hidden text-xs md:text-base">MOVIES</p>
        </div>
      </div>
    </>
  );
};

export default SemiCircleNavbar;
