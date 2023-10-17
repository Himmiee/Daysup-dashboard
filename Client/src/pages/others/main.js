import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import NavComponent from "../Dashboard/navbar";
import CardComponent from "../../components/card";
import { tags, events } from "../../utils/menu";
import { useScrollDirection } from "react-use-scroll-direction";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const MainComponent = () => {
  const {
    setShowNav,
    setShowHeader,
    showHeader,
    showNav,
    popupMsg,
    setPopUpMsg,
  } = ItemContext();

  const [data, useData] = useState(tags);
  const [evt, useEvt] = useState(events);
  useEffect(() => {
    setShowNav(true);
    setShowHeader(true);
    if (popupMsg === true) {
      setTimeout(() => {
        setPopUpMsg(false);
      }, 3000);
    }
  }, []);
  return (
    <section className="sm:w-[90%] overflow-hidden  border-l-[1px]  border-gray-200 w-[100%] h-[98vh] sm:h-[100vh] inter lg:w-[82%] bg-[#ffffff] ">
      {showHeader && <NavComponent />}
      <div
        className="px-8  overflow-y-auto tbl"
      >
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
          <h3 className=" mt-2 sm:pt-5 font-bold text-lg">Departments</h3>
          <div className="card-wrap gap-4 mt-2 grid grid-cols-2 sm:flex justify-between">
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
        <div className="bottom tbl my-2  mt-5 sm:mt-2 h-80  grid-cols 1 grid sm:grid-cols-2 lg:grid-cols-3 sm:h-[340px] sm:gap-6 ">
          <div className="my-3 sm:my-0 h-80 shadow-sm rounded-md border-gray-100 border-[1px] ">
            <p className="p-2 px-4 font-bold text-[16px]">Events</p>
            <div className="px-4 ">
              <ul className=" list-disc">
                {evt.map((item, i) => {
                  return (
                    <li key={i} className="flex my-2 h-11 justify-between">
                      <div className="">
                        {" "}
                        <h1 className="text-sm font-bold">{item.name}</h1>
                        <p className="text-[12px] text-gray-300">
                          {item?.date}
                        </p>
                      </div>
                      <div className="mr-3 w-8 hover:bg-[#2322CD] cursor-pointer hover:text-white flex text-gray-400 rounded-full justify-center items-center h-8 bg-[#dedefaa8]">
                        <IoMdNotificationsOutline />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="my-3 sm:my-0 h-80  rounded-md  bg-[#dedefaa8] border-gray-100 border-[1px] ">
            <p className="p-2 px-4 font-bold  text-gray-600 text-[16px]">
              Schedule
            </p>
            <div className="">
              <img
                src="../bare.png"
                className="w-64 opacity-20 h-48 m-auto"
                alt=""
              />
              <p className="flex justify-center font-medium opacity-20  text-sm text-[#6868c5]">
                Nothing Here yet!.
              </p>
            </div>
          </div>
          <div className=" my-3 sm:my-0 h-80 shadow-sm rounded-md border-gray-100 border-[1px] ">
            <p className="p-2 px-4 font-bold text-[16px]">Our Programs</p>
            <div className="px-4 my-2 cursor-pointer">
              {data?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex my-1 hover:bg-[#1b1bcba8] hover:text-white hover:rounded-md hover:px-2 justify-between h-12 items-center  border-gray-100 border-t-[1px]"
                  >
                    <div className="">
                      <h1 className="text-sm font-bold">{item.name}</h1>
                      <p className="text-[12px] text-gray-300">{item.tag}</p>
                    </div>
                    <div>
                      <BsArrowRight className="text-gray-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
