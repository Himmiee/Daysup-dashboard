import React, { useEffect, useState } from "react";
import { AccordionMenu } from "../utils/menu";
import Button from "./Button";
import { BsX, BsCheck2 } from "react-icons/bs";
import { ItemContext } from "../context/store";

const AccordionComponent = ({ data, i }) => {
  const is_admin = localStorage.getItem("is_admin");
  const admin = JSON.parse(is_admin);
  const { setTheId, ApproveRequest, theId, DeleteRequest, leaveList } =
    ItemContext();
  const [active, setActive] = useState(null);
  const name = localStorage.getItem("name");

  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };
  useEffect(() => {}, []);

  return (
    <ul className="w-full h-full">
      <li className="wrapper  ">
        <div
          className={
            active === i
              ? " border-gray-200 border-[1px] rounded-t-lg w-full  mt-3"
              : "border-gray-200 border-[1px] rounded-lg w-full  mt-3"
          }
        >
          <div className=" flex justify-between items-center h-20">
            <div className="flex px-3 gap-3">
              <div className="wrap bg-[#DEDEFA] flex justify-center items-center w-10 h-10 rounded-full">
                <div className="dp bg-[#3D3CC6] w-8 h-8 items-center flex justify-center rounded-full">
                  <p className="text-white font-semibold">{name.charAt(0)}</p>
                </div>
              </div>
              {admin ? (
                <div
                  onClick={() => {
                    toggle(i);
                  }}
                  className="middle cursor-pointer "
                >
                  <div className="flex gap-3 items-center">
                    <p className="text-[14px] font-bold">{data?.name}</p>
                    <div className="text-[10px] bg-gray-100 w-14 h-4 flex justify-center font-bold text-gray-400 rounded-md">
                      {data?.status}
                    </div>
                  </div>
                  <div className="text-[10px] lg:text-[12px]  text-gray-400">
                    {data?.email}
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    toggle(i);
                  }}
                  className="flex items-center cursor-pointer "
                >
                  <h1 className="text-sm font-semibold text-gray-700">
                    My Request
                  </h1>
                </div>
              )}
            </div>
            {admin && data?.status === "pending" ? (
              <div className="hidden sm:flex other">
                <Button
                  title="Approve"
                  handleClick={() => {
                    setTheId(data?._id);
                    console.log(theId);
                    ApproveRequest();
                    leaveList();
                  }}
                  className=" bg-gray-300 border-gray-300 cursor-pointer border-[1px] text-gray-500 hover:bg-black hover:text-white text-[12px] p-2 sm:w-20 lg:w-24 rounded-sm"
                />
                <Button
                  handleClick={() => {
                    setTheId(data?._id);
                    console.log(data?.status);
                    DeleteRequest();
                    leaveList();
                  }}
                  title="Revoke"
                  className=" mx-4 border-red-500 border-[1px] text-[12px] cursor-pointer  text-red-500 hover:bg-red-500 hover:text-white p-2 sm:w-20 lg:w-24 rounded-sm"
                />
              </div>
            ) : (
              <div className="mx-6 w-20 rounded-full  h-8 text-gray-400 bg-gray-200 ">
                <p className="text-[12px] flex items-center pt-2 justify-center">
                  {data?.status}
                </p>
              </div>
            )}
            {admin && data?.status == "pending" ? (
              <div className="other  flex sm:hidden px-3">
                <div
                  onClick={() => {
                    setTheId(data?._id);
                    console.log(data?.status);
                    ApproveRequest();
                    leaveList();
                  }}
                  className="w-10 cursor-pointer   flex justify-center items-center h-10 hover:bg-black hover:text-white rounded-full ml-4 text-gray-600 bg-gray-200"
                >
                  <BsCheck2 size={24} />
                </div>
                <div
                  onClick={() => {
                    setTheId(data?._id);
                    console.log(data?.status);
                    DeleteRequest();
                    leaveList();
                  }}
                  className="w-10 cursor-pointer   flex justify-center items-center h-10 rounded-full ml-4 hover:bg-red-600 hover:text-white text-red-600 bg-red-200"
                >
                  <BsX size={24} />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={
            active === i
              ? "info border-gray-300 rounded-b-md border-t-0 border-[1px]"
              : "hidden"
          }
        >
          <div className="text-[12px] p-4 text-gray-700">{data?.leave}</div>
        </div>
      </li>
    </ul>
  );
};

export default AccordionComponent;
