import React, { useEffect, useState } from "react";
import { ItemContext } from "../../context/store";
import NavComponent from "../Dashboard/navbar";
import { SettingsMenu } from "../../utils/menu";
import { RiEdit2Line } from "react-icons/ri";
import { BsFilter, BsSearch, BsArrowDown } from "react-icons/bs";
import InputComponent from "../../components/inputComponent";

const SettingsComponent = () => {
  const {
    setShowNav,
    setShowHeader,
    showHeader,
    setEmail,
    setPassword,
    setRegNumber,
  } = ItemContext();
  const [data, setData] = useState(SettingsMenu);

  useEffect(() => {
    setShowNav(true);
    setShowHeader(true);
  }, []);
  return (
    <section className="sm:w-[90%] border-l-[1px] border-gray-200 w-[100%] inter lg:w-[82%] bg-[#ffffff] ">
      {showHeader && <NavComponent />}
      <div className="wrapper px-7 my-2 ">
        <div className="mor">
          <div className="top hidden sm:grid mr-7">
            <div className="div flex my-8  justify-between ">
              <div className="flex items-center gap-2 ">
                {" "}
                <p className="font-bold text-lg ">Settings</p>
                <p className="text-[10px] font-bold text-[#3D3CC6]">12</p>
              </div>
            </div>

            {/* <nav>
              <ul className="flex text-[12px] font-bold gap-2 text-gray-400">
                {data.map((item, i) => {
                  return <li>{item.name}</li>;
                })}

              </ul>
            </nav> */}
          </div>
        </div>
        <div className="my-3">
          <h2
            className="font-bold text-[#3D3CC6] border-[#3d3cc6]  border-b-2 w-40
           mb-3 text-md"
          >
            Account Information
          </h2>
          <p className="text-[12px] font-bolsd text-gray-400">
            You can change and decide to change nd decide to change your account
            details nd decide to change your account details your account
            details nd decide to nd decide to change your account details
            nd decide to change your account details from this section right
            here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 my-4">
            <label className="lg:w-[412px] w-[320px]  sm:w-[300px]  font-bold ml-1 text-[12px]">
              <div className="flex justify-between item-center">
                <p>Email:</p>
                <RiEdit2Line className="text-gray-400 cursor-pointer" />
              </div>
              <InputComponent
                handleChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                className=""
              />
            </label>
            <label className="font-bold lg:w-[412px] w-[320px]  sm:w-[300px]  ml-1 text-[12px]">
              <div className="flex  justify-between item-center">
                <p>Password:</p>
                <RiEdit2Line className="text-gray-400 cursor-pointer" />
              </div>
              <InputComponent
                handleChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                className=""
              />
            </label>
            <label className="font-bold lg:w-[412px] w-[320px]  sm:w-[300px]  ml-1 text-[12px] sm:my-4">
              <div className="flex  justify-between item-center">
                <p>RegNumber:</p>
                <RiEdit2Line className="text-gray-400 cursor-pointer" />
              </div>
              <InputComponent
                handleChange={(e) => {
                  setRegNumber(e.target.value);
                }}
                name="regNumber"
                className=""
              />
            </label>
          </div>
        </div>
        <div className="bottom absolute top-48  opacity-30  left-0 sm:left-[20%] lg:left-[40%]">
          <img src="../bare.png" className=" " alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default SettingsComponent;
