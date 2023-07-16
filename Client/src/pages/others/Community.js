import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import NavComponent from "../Dashboard/navbar";
import Button from "../../components/Button";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiSaveUp1 } from "react-icons/ci";
import { BsFilter, BsSearch, BsArrowDown } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserCard from "../../components/usercard";

const UsersComponent = () => {
  const {
    setShowNav,
    setShowHeader,
    showHeader,
    getStudents,
    state: { studentDetails },
  } = ItemContext();
  const handleScroll = () => {
    document.getElementById("scroll").scrollTop += 100;
  };
  useEffect(() => {
    setShowNav(true);
    setShowHeader(true);
    getStudents();
    // console.log(studentDetails);
  }, []);
  return (
    <section className="sm:w-[90%] border-l-[1px] border-gray-200 w-[100%] inter lg:w-[82%] bg-[#ffffff] ">
      {showHeader && <NavComponent />}
      <div className="ml-7 pr-9">
        {" "}
        <div className="top hidden sm:grid">
          <div className="div flex my-8 justify-between ">
            <div className="flex items-center gap-2 ">
              {" "}
              <p className="font-bold text-lg ">Students</p>
              <p className="text-[10px] font-bold text-[#3D3CC6]">100</p>
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
                  handleClick={() => "dey play"}
                  title="Add Student"
                  className="h-7 rounded-md text-[12px] font-light w-24  bg-[#3D3CC6]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <nav>
            <ul className="flex text-sm font-bold gap-2 text-[#3D3CC6]">
              <li className="border-b-2 mt-2 sm:mt-0 border-[#3D3CC6]">
                All Students
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
              <p className="text-sm font-medium">Filter</p>
            </div>
          </div>
          <div className="tbl sm:hidden overflow-y-auto h-[70vh] ">
            {studentDetails.map((items, id) => {
              return (
                <UserCard data={items} key={id} />
              )
            })}
          </div>
          <div className="mt-3 sm:flex hidden shadow-md  rounded-lg h-[500px]">
            <table className=" w-full">
              <thead className="">
                <tr className="flex  bg-gray-100 justify-between text-[12px] rounded-t-md h-10 items-center px-5 ">
                  <th>Name</th>
                  <th>Email</th>
                  <th>RegNumber</th>
                  <th>Faculty</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className=" ">
                <div
                  id="scroll"
                  className="tbl h-[410px] mt-2  overflow-y-auto"
                >
                  {studentDetails.map((item, index) => {
                    return (
                      <tr className="flex  bg-white w-full justify-between text-[12px] text-gray-400 h-10 items-center px-5 ">
                        {" "}
                        <td className="h-10 w-24 flex justify-start">
                          {item.name}
                        </td>
                        <td className="h-10 w-24  flex justify-start">
                          {item.email}
                        </td>
                        <td className="h-10 w-24 flex justify-start">
                          {item.regNumber}
                        </td>
                        <td className="h-10 w-24  flex justify-start">
                          Processing
                        </td>
                        <td className="h-10 w-24  flex justify-start">
                          active
                        </td>
                        <td className="text-black">
                          {" "}
                          <BsThreeDotsVertical />
                        </td>
                      </tr>
                    );
                  })}
                </div>
              </tbody>
            </table>
            {!studentDetails.length && (
              <div className="absolute left-[38%] top-[40%]">
                <img src="../bare.png" className="opacity-20" alt="" />
              </div>
            )}
            <div
              onClick={handleScroll}
              // text-[#3D3CC6]
              className="text-gray-400 cursor-pointer absolute bottom-12 right-12  font-medium justify-end px-5 gap-4 flex text-sm items-center"
            >
              <p>Scroll</p>
              <BsArrowDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersComponent;
