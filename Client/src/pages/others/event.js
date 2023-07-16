import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import axios from "axios";
import NavComponent from "../Dashboard/navbar";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiSaveUp1 } from "react-icons/ci";
import { BsFilter, BsSearch, BsArrowDown } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../../components/Button";
import { AccordionMenu } from "../../utils/menu";
import AccordionComponent from "../../components/Accordion";
import ModalComponent from "../../components/modal";
import CalendarComponent from "../../components/Calendar";

const EventComponent = () => {
  const {
    setShowNav,
    setShowHeader,
    showHeader,
    AccordionList,
    popup,
    setPopup,
    leave,
    setLeave,
    CreateAccordion,
    state: { accordionDetails },
  } = ItemContext();

  useEffect(() => {
    setShowNav(true);
    setShowHeader(true);
    AccordionList();
    // console.log(accordionDetails);
  }, []);
  const handleToSubmit = () => {
    CreateAccordion();
    setPopup(false)
    AccordionList();
  };

  return (
    <section className="sm:w-[90%] overflow-hidden border-l-[1px]  border-gray-200 w-full  inter lg:w-[82%] bg-[#ffffff] ">
      {popup && (
        <div>
          <ModalComponent
              onChange={(e) => {
              setLeave(e.target.value);
            }}
            handleSubmit={handleToSubmit}
            title="Write Request"
            field="Leave"
          />
        </div>
      )}
      {showHeader && <NavComponent />}
      <div className="sm:mx-7 flex-col  sm:flex-row pl-6 sm:pl-0 justify-center flex w-full sm:h-[88vh]">
        <div className="f-side sm:w-2/3 w-3/3 sm:h-full">
          <div className="top hidden sm:grid mr-7">
            <div className="div flex my-8  justify-between ">
              <div className="flex items-center gap-2 ">
                {" "}
                <p className="font-bold text-lg ">Requests</p>
                <p className="text-[10px] font-bold text-[#3D3CC6]">12</p>
              </div>
              <div className=" flex gap-4">
                <div className="flex rounded-md items-center bg-[#ffffff] border-[#3D3CC6] border-[1px] px-2 ">
                  <CiSaveUp1 className="text-[#3D3CC6]" />
                  <Button
                    title="Export"
                    className="h-7 rounded-md text-[12px] text-[#3D3CC6] font-light w-16 "
                  />
                </div>
                <div className="flex rounded-md items-center px-2 bg-[#3D3CC6] text-white ">
                  <IoMdAddCircleOutline className="" />
                  <Button
                    handleClick={() => {
                      setPopup(true);
                    }}
                    title="Add Request"
                    className="h-7 rounded-md text-[12px] font-light w-24  bg-[#3D3CC6]"
                  />
                </div>
              </div>
            </div>
            <nav>
              <ul className="flex text-sm font-bold gap-2 text-[#3D3CC6]">
                <li className="border-b-2 mt-2 sm:mt-0 border-[#3D3CC6]">
                  All Requests
                </li>
                {/* <li>Juniors</li>
              <li>Seniors</li> */}
              </ul>
            </nav>
            <div className="search flex px-5 justify-between border-gray-100 border-[1px] shadow-sm rounded-md my-2 p-2">
              <div className="flex gap-3 items-center ">
                <BsSearch size={12} className="" />
                <p className="text-[12px] font-medium">
                  Search for students by regnumber
                </p>
              </div>
              <div className="flex gap-3 items-center ">
                <BsFilter size={12} className="" />
                <p className="text-sm pr-3 font-medium">Filter</p>
              </div>
            </div>
          </div>

          <div className="tbl overflow-y-auto h-full my-1 sm:my-0 sm:h-[63vh] w-[96%]  mt-2 ">
            <h1 className="sm:hidden">Events</h1>
            {accordionDetails.map((item, i) => {
              return (
                <div key={i}>
                  <AccordionComponent data={item} index={i} />
                </div>
              );
            })}
            {!accordionDetails.length && (
              <div className="flex justify-center opacity-20">
                <img src="../bare.png" alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="s-side tbl hidden sm:grid sm:w-1/3 sm:h-full border-gray-300  sm:border-l-[1px]">
          <div className="top my-3 overflow-y-auto h-[32vh] sm:h-full">
            {/* <h1 className="font-bold flex justify-start text-lg ml-11 ">Calendar</h1> */}
            <div className=" wrap flex justify-center">
              <CalendarComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventComponent;
