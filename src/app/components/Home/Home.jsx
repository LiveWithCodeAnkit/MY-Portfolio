import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <section id="about">
        <div className="bg-[#1F1E1B] font-Inconsolata flex  flex-col-reverse lg:flex-col justify-center items-center py-40 gap-14">
          <div className="flex flex-col md:flex-row justify-center text-lg items-center gap-3 text-[#F0E3CA] flex-wrap p-4">
            <div className="relative w-48 h-48">
              <Image src="/home1.png" alt="home icon not found" fill />
            </div>
            <div className="lg:w-1/2">
              <p>
                A few years ago, I became interested in developing websites and
                interfaces. Since then, I have been steadily improving my
                skills. Now I am developing websites and web applications to
                order or for myself.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center  gap-10">
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-[#FF8303] text-4xl font-bold">
                Ankit Yadav
              </h1>
              <label className="text-[#F0E3CA] text-3xl">
                MERN Developer
              </label>
              <p className="text-[#F0E3CA] text-lg w-96">
                MERN developer looking for ideas and projects for himself
                and others
              </p>
            </div>
            <div className="relative w-96 h-96">
              <Image src="/homepic2.png" fill alt={"Np Image Found"} />

              <div className="w-56 h-56 absolute left-20  top-24" >
                <Image src="/pp.png" fill alt={"No Image Found"}/>
            </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
