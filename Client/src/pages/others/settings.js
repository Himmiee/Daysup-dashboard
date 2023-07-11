import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import NavComponent from "../Dashboard/navbar";

const SettingsComponent = () => {
  const { setShowNav, setShowHeader, showHeader } = ItemContext();
  useEffect(() => {
    setShowNav(true);
    setShowHeader(true);
  }, []);
  return (
    <section className="sm:w-[90%] border-l-[1px] border-gray-200 w-[100%] inter lg:w-[82%] bg-[#ffffff] ">
      {showHeader && <NavComponent />}
      <h1>Settings works duhhh...</h1>
    </section>
  );
};

export default SettingsComponent;
