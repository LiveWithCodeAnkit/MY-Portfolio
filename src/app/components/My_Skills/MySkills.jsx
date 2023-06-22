import React from "react";
import Image from "next/image";
import { skills } from "../Constant/skills";

const MySkills = () => {
  return (
    <>
      <section id="skills">
        <div className="bg-[#1F1E1B] flex flex-col justify-center items-center font-Inconsolata  gap-9 flex-wrap py-44">
          <div className="flex justify-center items-center">
            <h1 className="text-[#FF8303] text-3xl font-semibold">My Skills</h1>
          </div>
          <div>
            <div className="flex flex-wrap justify-center items-center gap-5 p-2">
              {skills.map((item) => (
                <div
                  className="flex flex-col justify-center items-center gap-3 font-Lato bg-[#21201D] p-12 rounded-lg"
                  key={item.id}
                >
                  <div className="relative w-20 h-20">
                    <Image src={item.img} fill alt="Image Not Found" />
                  </div>

                  <label className="text-xl lg:text-3xl text-white">
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
