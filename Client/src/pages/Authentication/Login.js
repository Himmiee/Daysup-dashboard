import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemContext } from "../../context/store";
import InputComponent from "../../components/inputComponent";
import Button from "../../components/Button";

const LoginComponent = () => {
  const {
    email,
    setEmail,
    password,
    isLoading,
    setIsLoading,
    setPassword,
    setShowNav,
    loginErr,
    popupMsg,
    setPopUpMsg,
    UserLogin,
  } = ItemContext();
  const handleClick = () => {
    setIsLoading(true);
    UserLogin();
  };
  useEffect(() => {
    setShowNav(false);
    if (popupMsg === true) {
      setTimeout(() => {
        setPopUpMsg(false);
      }, 3000);
    }
  }, []);
  return (
    <section className="grid lg:flex max-h-full inter">
      <div className="lg:w-1/2">
        <div className="logo absolute top-[30%] sm:top-[25%] lg:opacity-100 lg:relative lg:top-1 lg:left-0 lg:flex lg:justify-start  sm:opacity-50 opacity-20 sm:left-[48%] flex ml-14 lg:mb-3 lg:mt-12 ">
          <img src="../bare.png" className=" lg:w-24 w-96 lg:h-18" alt="" />
        </div>
        <div className="lg:ml-20  absolute top-0 sm:top-64 lg:top-0  w-[100%] sm:w-[80%]  lg:relative sm:ml-16  mt-56 sm:mt-0 lg:mt-4 ">
          <div className="w-full">
            <p className="text-sm font-bold sm:text-sm flex justify-center lg:justify-start sm:grid">
              Student's Information and details below.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div className="wrap mt-3">
              <label className="font-bold ml-1 text-[12px]">
                Email:
                <InputComponent
                  handleChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  className=""
                />
              </label>
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
              type="submit"
              disabled={
                !email ||
                !password ||
                !email.includes("@") ||
                !email.includes(".")
              }
              title={isLoading ? "Signing..." : "SignIn"}
              className={
                isLoading
                  ? "bg-[#3c3cc6cc]  text-gray-300  w-[350px] sm:w-[415px] rounded-lg h-9 "
                  : "bg-[#3D3CC6] disabled:text-gray-200 text-white disabled:bg-[#878888bd]  w-[350px] sm:w-[415px] rounded-lg h-9 "
              }
            />
          </div>
          {/* {!(email.includes("@") || email.includes(".")) && (
            <div className="flex lg:w-[415px]  justify-center text-[10px] text-red-500">
              <p>Incorrect email format.</p>
            </div>
          )} */}
          {loginErr && (
            <p className="flex  lg:w-[415px] justify-center  text-red-400 text-[10px]">
              {loginErr}
            </p>
          )}
          <p className="text-[12px] cursor-pointer flex justify-center lg:justify-start ">
            Don't have an account.?.{" "}
            <Link to={"/register"}>
              <span
                className="italic font-bold
           text-[#3D3CC6]"
              >
                SignUp
              </span>
            </Link>
          </p>
        </div>
      </div>
      <aside className="lg:w-1/2 relative ">
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
              Let's us lift our nation higher <br />
              total sense.
            </p>
            <div className="pointer grid grid-flow-col my-7 w-64 ">
              <div className="on bg-white w-6 h-1"></div>
              <div className="on bg-white w-6 h-1"></div>
              <div className="on bg-white w-6 h-1"></div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default LoginComponent;
