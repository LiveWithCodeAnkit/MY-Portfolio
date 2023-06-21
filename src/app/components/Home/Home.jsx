import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <>
    <section id="about">
      <div className="bg-[#1F1E1B] font-Inconsolata flex flex-col justify-center items-center p-6">
        <div className="flex justify-center items-center text-[#F0E3CA] p-5 gap-5">
          <Image
            src="/home1.png"
            alt="home icon not found"
            width={200}
            height={200}
          />
          <p className="w-[40%] text-lg">
            A few years ago, I became interested in developing websites and
            interfaces. Since then, I have been steadily improving my skills.
            Now I am developing websites and web applications to order or for
            myself.
          </p>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="flex flex-col items-start justify-self-auto gap-4">
            <h1 className="text-[#FF8303] text-6xl font-bold">
              Alexey Borisov
            </h1>
            <label className="text-[#F0E3CA] text-4xl">
              Frontend Developer
            </label>
            <p className="text-[#F0E3CA] text-xl w-96">
              Frontend developer looking for ideas and projects for himself and
              others
            </p>
          </div>
          <div>
            <Image
              src="/home2.png"
              width={600}
              height={700}
              alt={"Np Image Found"}
            />
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
