import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";

export default function Header() {
  return (
    <>
      <section className="w-full bg-[#20202A] p-5">
        <div className="container mx-auto">
          <Image src={logo} alt="logo" />
        </div>
      </section>
    </>
  );
}
