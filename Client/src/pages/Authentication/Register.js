import React from "react";
import { Link , useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemContext } from "../../context/store";
import InputComponent from "../../components/inputComponent";
import Button from "../../components/Button";

const RegisterComponent = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    regNumber,
    setRegNumber,
    password,
    setPassword,
    setShowNav,
    err,
    isLoading,
    setIsLoading,
    RegisterUser,
  } = ItemContext();

  useEffect(() => {
    setShowNav(false);
  }, []);
  const handleClick = () => {
    console.log("dey play.");
    RegisterUser();
  };
  return (
    <section className="grid lg:flex max-h-full inter">
      <div className="lg:w-1/2 relative">
        <img
          src="../bg.jpg"
          alt=""
          className="absolute h-48 lg:h-[100vh] w-full object-cover opacity-25"
        />
        <div className="absolute -z-10 bg-gradient-to-r lg:bg-gradient-to-b from-white via-slate-900 to-[#1b1bcbc0] h-48 lg:h-[100vh] w-full">
          <div className="logo mt-4 -ml-8 sm:-ml-0">
            {/* #1C1BCB #878888 #B0B0DA */}
            <img src="../purple.png" alt="logo" className="w-72 h-48 " />
          </div>
          <div className="flex-col justify-center ml-16 mt-56">
            <h2 className="font-semibold text-[40px] text-white my-3">
              Daysup{" "}
              <span className="text-white italic font-extrabold ">
                Schools.
              </span>
            </h2>
            <p className="text-white italic font-normal text-sm">
              Youth obey the clarion call, <br />
              Let's all us assume what i wrote makes <br />
              total sense.
            </p>
            <div className="pointer grid grid-flow-col my-7 w-64 ">
              <div className="on bg-white w-6 h-1"></div>
              <div className="on bg-white w-6 h-1"></div>
              <div className="on bg-white w-6 h-1"></div>
            </div>
          </div>
        </div>
      </div>
      <aside className="lg:w-1/2 h-[100vh]">
        <div className="logo absolute top-[30%] sm:top-[25%] lg:opacity-100 lg:relative lg:top-1 lg:left-0 lg:flex lg:justify-start  sm:opacity-50 opacity-20 sm:left-[48%] flex ml-14 lg:mb-3 lg:mt-12 ">
          <img src="../bare.png" className=" lg:w-24 w-96 lg:h-18" alt="" />
        </div>
        <div className="lg:ml-20 m-auto mt-56 sm:mt-64 lg:mt-4 ">
          <p className="font-semibold text-[12px] sm:text-sm flex justify-center items-center lg:justify-start sm:grid">
            Student Information should be filled with student's registration
            <br /> details and info accordingly.{" "}
          </p>

          <div className="flex justify-center lg:justify-start">
            <div className="wrap mt-3">
              <label className="font-bold ml-1 text-[12px]">
                Name:
                <InputComponent
                  handleChange={(e) => {
                    setName(e.target.value);
                  }}
                  name="name"
                  className=""
                />
              </label>
              <div className="more -ml-1 my-2 grid grid-cols-2 sm:flex w-[330px] sm:w-[405px] gap-6  sm:gap-2">
                <label className="font-bold ml-1 text-[12px] sm:w-1/2">
                  Email:
                  <InputComponent
                    handleChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    className=""
                  />
                </label>
                <label className="font-bold text-[12px] ml-1 sm:w-1/2">
                  RegNum:
                  <InputComponent
                    handleChange={(e) => {
                      setRegNumber(e.target.value);
                    }}
                    name="regnumber"
                    className=""
                  />
                </label>
              </div>
              <label className="font-bold ml-1 text-[12px]">
                Password:
                <InputComponent
                  handleChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                  className=""
                />
              </label>
            </div>
          </div>
          <div className="my-3 flex justify-center lg:justify-start">
            <Button
              handleClick={handleClick}
              disabled={
                !name ||
                !regNumber ||
                !email ||
                !password ||
                !email.includes("@") ||
                !email.includes(".")
              }
              title={isLoading ? "loading..." : "SignIn"}
              className={
                isLoading
                  ? "bg-[#3c3cc694]  text-gray-300   w-[350px] sm:w-[415px] rounded-lg h-9 "
                  : "bg-[#3D3CC6] disabled:text-gray-200 text-white disabled:bg-[#878888bd]  w-[350px] sm:w-[415px] rounded-lg h-9 "
              }
            />
          </div>
          {/* {!(email.includes("@") || email.includes(".")) && (
            <div className="flex justify-center text-[10px] text-red-500">
              <p>Incorrect email format.</p>
            </div>
          )} */}
          {err && (
            <p className="flex justify-center text-red-400 text-[10px]">
              {err}
            </p>
          )}
          <p className="text-[12px] cursor-pointer flex justify-center lg:justify-start ">
            Already own an account.?.{" "}
            <Link to={"/"}>
              <span
                className="italic font-bold
           text-[#3D3CC6]"
              >
                SignIn
              </span>
            </Link>
          </p>
        </div>
      </aside>
    </section>
  );
};

export default RegisterComponent;
