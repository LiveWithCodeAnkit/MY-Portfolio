import React from "react";
import { menuList } from "../Constant/menuList";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#1F1E1B] z-20 flex justify-around gap-96 p-4 font-Inconsolata font-bold text-white sticky top-0 opacity-90">
        <Image src="/title.png" alt="Img not Found" width={200} height={200} />
        <nav className="flex">
          <ul className="flex items-center justify-around gap-10">
            {menuList.map((item) => (
              <li key={item.id} className="hover:text-[#FF8303] text-lg">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
