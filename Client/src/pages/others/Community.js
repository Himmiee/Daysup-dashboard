import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import NavComponent from "../Dashboard/navbar";
import Button from "../../components/Button";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiSaveUp1 } from "react-icons/ci";
import { BsFilter, BsSearch, BsArrowDown } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserCard from "../../components/usercard";
import { StudentModal } from "../../components/modal";

const UsersComponent = () => {
  const {
    setShowNav,
    setShowHeader,
    showHeader,
    popup,
    popErr,
    setPopup,
    getStudents,
    RegisterStudents,
    state: { studentDetails },
  } = ItemContext();
  const handleScroll = () => {
    document.getElementById("scroll").scrollTop += 100;
  };
  const is_admin = localStorage.getItem("is_admin");
  const admin = JSON.parse(is_admin);
  const handleToSubmit = () => {
    RegisterStudents();
    getStudents();
  };
  const [search, setSearch] = useState("");
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
        {popup && (
          <StudentModal
            handleSubmit={handleToSubmit}
            title="Add Student"
            field="Email"
            field2="Details"
            field3="Name"
          />
        )}
        <div className="top hidden sm:grid">
          <div className="div flex my-8 justify-between ">
            <div className="flex items-center gap-2 ">
              {" "}
              <p className="font-bold text-lg ">Students</p>
              <p className="text-[10px] font-bold text-[#3D3CC6]">
                {studentDetails?.length}
              </p>
            </div>
            <div className=" flex gap-4">
              <div className="flex rounded-md items-center text-[#3D3CC6] bg-white  border-[#3D3CC6] border-[1px] px-2 ">
                <CiSaveUp1 className="" />
                <Button
                  title="Export"
                  className="h-7 rounded-md text-[12px] font-light w-16 "
                />
              </div>
              <div
                className={
                  admin
                    ? "flex rounded-md items-center px-2 bg-[#1c1bcb] hover:bg-[#1b1bcbdc] text-white "
                    : "flex rounded-md font-thin italic items-center px-2 bg-gray-200 text-gray-400 "
                }
              >
                <IoMdAddCircleOutline className="" />
                <Button
                  handleClick={admin ? () => setPopup(true) : () => setPopup(false)}
                  title="Add Student"
                  className="h-7 rounded-md text-[12px] font-light w-24  "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <nav>
            <ul className="flex text-sm font-bold gap-2 text-[#3D3CC6]">
              <li className="border-b-2 text-base sm:text-sm mt-2 sm:mt-0 border-[#3D3CC6]">
                All Students
              </li>
              {/* <li>Juniors</li>
              <li>Seniors</li> */}
            </ul>
          </nav>
          <div className="search flex px-5 justify-between border-gray-100 border-[1px] shadow-sm rounded-md my-2 p-2">
            <label htmlFor="" className="flex items-center gap-2">
              <BsSearch size={12} className="" />
              <input
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search for students"
                className="text-[12px] w-64 outline-none font-medium text-black"
              />
            </label>
            {/* <div className="flex gap-3 items-center ">
              <BsSearch size={12} className="" />
              <p className="text-[12px] font-medium">
                Search for students by regnumber
              </p>
            </div> */}
            <div className="flex gap-3 items-center ">
              <BsFilter size={12} className="" />
              <p className="text-sm font-medium hidden sm:flex">Filter</p>
            </div>
          </div>
          <div className="tbl sm:hidden overflow-y-auto h-[70vh] ">
            {studentDetails
              .filter((item) => {
                return search.toLowerCase() === " "
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((items, id) => {
                return <UserCard data={items} key={id} />;
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
                  <th>S-Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="">
                <div
                  id="scroll"
                  className="tbl h-[410px] mt-2  overflow-y-auto"
                >
                  {studentDetails
                    .filter((item) => {
                      return search.toLowerCase() === " "
                        ? item
                        : item.name.toLowerCase().includes(search);
                    })
                    .map((item, index) => {
                      return (
                        <tr className="flex  border-gray-200 border-b-[1px] bg-white w-full justify-between text-[12px] text-gray-400 h-10 items-center px-5 ">
                          {" "}
                          <td className="h-10 w-24 flex items-center justify-start">
                            {item.name}
                          </td>
                          <td className="h-10  w-32 items-center flex justify-start">
                            {item.email}
                          </td>
                          <td className="h-10 w-24 items-center flex justify-start">
                            {item.regNumber}
                          </td>
                          <td className="h-10 w-24 items-center  flex justify-start">
                            ...
                          </td>
                          <td className="h-10 w-24 items-center flex justify-start">
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
