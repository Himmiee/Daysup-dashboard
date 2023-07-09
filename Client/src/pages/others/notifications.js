import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";

const NotificationComponent = () => {
  const { setShowNav } = ItemContext();
  useEffect(() =>{
    setShowNav(true);
  },[])
  return (
    <div className="sm:w-[88%] lg:w-[82%] bg-[#f3f3f3]">
      <h1>Notification works duhhh...</h1>
    </div>
  );
};

export default NotificationComponent;