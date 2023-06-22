"use client";
import { useState } from "react";
import { menuList } from "../Constant/menuList";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="bg-[#1F1E1B] z-20 flex justify-around items-center gap-20  lg:gap-5 p-4 font-Inconsolata font-bold text-white sticky top-0 opacity-90">
        <h1 className="text-2xl lg:text-4xl text-[#F0E3CA] font-bold">
          <span className="text-[#FF8303]">&lt;/A</span>nkit
          <span className="text-[#FF8303]">&gt;</span>
        </h1>

        <nav className="">
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <GiHamburgerMenu className="text-2xl" />
            </div>
            <div
              className={
                isNavOpen ? "showMenuNav relative" : "hideMenuNav relative"
              }
            >
              <div
                className="absolute top-4 z-10 right-1 px-8 py-8 font-extrabold text-9xl"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-white "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                {menuList.map((item) => (
                  <li key={item.id} className="hover:text-[#FF8303] text-lg">
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <ul className=" items-center justify-around gap-10 DESKTOP-MENU hidden  lg:flex">
            {menuList.map((item) => (
              <li key={item.id} className="hover:text-[#FF8303] text-lg">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: 1;
        background:#1F1E1B;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  );
};

export default Navbar;
