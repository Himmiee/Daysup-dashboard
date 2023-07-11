import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import NavComponent from "../Dashboard/navbar";

const NotificationComponent = () => {
  const { setShowNav, setShowHeader, showHeader } = ItemContext();
  useEffect(() => {
    setShowNav(true);
    setShowHeader(true);
  }, []);
  return (
    <section className="sm:w-[90%] border-l-[1px] border-gray-200 w-[100%] inter lg:w-[82%] bg-[#ffffff] ">
      {showHeader && <NavComponent />}
      <div className="wrapper px-7 my-2 ">
        <div className="mor">
          <h3 className="font-bold text-lg">Notifications</h3>
        </div>
        <div className="bottom absolute top-48  opacity-30  left-0 sm:left-[20%] lg:left-[40%]">
          <img src="../bare.png" className=" " alt="logo" />
          <h3 className="flex justify-center font-bold text-[#4343ac]">No notification yet</h3>
        </div>
      </div>
    </section>
  );
};

export default NotificationComponent;
