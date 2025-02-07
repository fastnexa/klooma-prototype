import React from "react";
import { MdEmail } from "react-icons/md";

export default function GetAccessToKlooma() {
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto flex flex-col justify-center items-center font-montserrat gap-32 p-5 mb-20">
          <h1 className="text-[32px] font-semibold text-center">GET ACCESS TO KLOOMA</h1>
        </div>
        <div className="flex justify-center items-center w-full bg-[#20202A] h-[200px]">
        <div className="flex flex-row bg-white justify-between items-center w-[320px] md:w-[630px] h-[50px] p-2 md:p-10 rounded-xl">
            <div className="flex justify-between items-center gap-3">
              <MdEmail className="text-black md:size-[24px]" />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="outline-none text-black w-[180px] md:w-[350px]"
              />
            </div>
            <button
              className="flex justify-center items-center border border-black p-3 w-[90px] md:w-[140px] h-[32px] md:h-[50px] rounded-2xl text-sm md:text-lg"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
