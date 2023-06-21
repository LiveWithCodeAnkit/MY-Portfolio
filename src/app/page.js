import React from "react";
import Home from "./components/Home/Home";
import MySkills from "./components/My_Skills/MySkills";
import MyWork from "./components/My_Work/MyWork";
import Contacts from "./components/Contacts/Contacts";

const Page = () => {
  return (
    <>
      <Home />
      <MySkills />
      <MyWork />
      <Contacts />
    </>
  );
};

export default Page;
