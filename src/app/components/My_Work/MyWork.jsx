import React from "react";
import Image from "next/image";

const MyWork = () => {
  return (
    <>
    <section id="services">
      <div className="bg-[#1F1E1B] flex flex-col justify-center items-center font-Inconsolata  gap-12">
        <div className="flex justify-center items-center">
          <h1 className="text-[#FF8303] text-3xl font-semibold">My Work</h1>
        </div>
        <div className="flex gap-5">
          <div className="relative">
            <Image src="/workimg.png" width={300} height={325} alt="work" />
            <div className="bg-[#21201D] absolute top-0 flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
              <h1 className="text-[#FF8303] text-3xl font-semibold">
                News Blog
              </h1>
              <label className="text-[#F0E3CA] text-base">HTML, SCSS, JS</label>
              <span className="underline w-[200px] border border-solid border-orange-500"></span>
              <p className="text-[#F0E3CA] text-base text-left px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-[#32312E] py-2 px-2 rounded-md text-white hover:font-bold transition-transform">
                <label>See More</label>
              </button>
            </div>
          </div>
          <Image src="/workimg.png" width={300} height={325} alt="work" />
          <div className="relative">
            <Image src="/workimg.png" width={300} height={325} alt="work" />
            <div className="bg-[#21201D] absolute top-0 flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
              <h1 className="text-[#FF8303] text-3xl font-semibold">
                News Blog
              </h1>
              <label className="text-[#F0E3CA] text-base">HTML, SCSS, JS</label>
              <span className="underline w-[200px] border border-solid border-orange-500"></span>
              <p className="text-[#F0E3CA] text-base text-left px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-[#32312E] py-2 px-2 rounded-md text-white">
                <label className=" hover:font-bold transition-transform">See More</label>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default MyWork;
