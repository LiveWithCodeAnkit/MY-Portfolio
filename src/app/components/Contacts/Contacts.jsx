import React from "react";
import Image from "next/image";
const Contacts = () => {
  return (
    <>
      <section id="contact">
        <div className="bg-[#1F1E1B] flex  justify-center p-40 gap-10 font-Inconsolata ">
          <div className="flex flex-col gap-4">
            <Image src="/title.png" width={160} height={40} />
            <p className="text-[#F0E3CA] text-xl">
              If you liked my work and you need me, I'm ready to talk to you.
            </p>
          </div>
          <div className="flex flex-col  items-start gap-5 w-auto">
            <h1 className="text-[#FF8303] text-3xl font-bold">Сontacts</h1>
            <div className="flex justify-center items-start gap-12">
              <div className="flex justify-center items-center gap-4">
                <Image src="/mail.png" width={32} height={32} />
                <label className="text-[#FF8303] text-2xl">ankityadav119liv@gmail.com</label>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image src="/github.png" width={32} height={32} />
                <label className="text-[#FF8303] text-2xl">
                  LiveWithCodeAnkit
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
