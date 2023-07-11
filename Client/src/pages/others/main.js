import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import NavComponent from "../Dashboard/navbar";
import CardComponent from "../../components/card";

const MainComponent = () => {
  const { setShowNav, setShowHeader, showHeader } = ItemContext();
  useEffect(() => {
    setShowNav(true);
    setShowHeader(true);
  }, []);
  return (
    <section className="sm:w-[90%] border-l-[1px] border-gray-200 w-[100%] -z-10 inter lg:w-[82%] bg-[#ffffff] ">
      {showHeader && <NavComponent />}
      <div className="px-8">
        <div className="wrap   from-[#3D3CC6] to-gray-400 bg-gradient-to-tr w-full h-40 my-3 rounded-md">
          <img
            src="../bg.jpg"
            className="w-full h-40 object-cover opacity-20"
            alt=""
          />
          <div className=" -mt-32 sm:-mt-24 px-4 italic text-white inter">
            <h2 className="font-bold text-2xl">Annual Convocation Time!</h2>
            <p className="text-[12px] italic">
              You know you bad when you can pose from any angle blick blickkk{" "}
              <br />
              Be great keeeeds.{" "}
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="pt-5 font-bold text-lg">Departments</h3>
          <div className="card-wrap  gap-4 grid grid-cols-2 sm:flex justify-between">
            <CardComponent
              className="w-10  flex justify-center items-center h-10 rounded-full ml-4 text-red-600 bg-red-200"
              name="Art"
              number="246"
            />
            <CardComponent
              className="w-10 flex justify-center items-center h-10 rounded-full ml-4 text-blue-600 bg-blue-200"
              name="Science"
              number="300"
            />
            <CardComponent
              className="w-10 flex justify-center items-center h-10 rounded-full ml-4 text-green-600 bg-green-200"
              name="Education"
              number="70"
            />
            <CardComponent
              className="w-10 flex justify-center items-center h-10 rounded-full ml-4 text-orange-600 bg-orange-200"
              name="Wahalurdd"
              number="198"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
