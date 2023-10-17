import { React, useState, useEffect } from "react";
import { Menu } from "../../utils/menu";
import { HiLogout } from "react-icons/hi";
import {
  BsGrid,
  BsGridFill,
  BsCalendarEventFill,
  BsCalendarEvent,
} from "react-icons/bs";
import { HiUserGroup, HiOutlineUserGroup } from "react-icons/hi";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { RiSettings5Fill, RiSettings5Line } from "react-icons/ri";
import { useScrollDirection } from 'react-use-scroll-direction'
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, useData] = useState(Menu);
  const [it, setIt] = useState(null);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [actState, setActState] = useState(null);
  const [icon, setIcon] = useState(false);
  const toggle = (i) => {

    setActive(i);
    console.log(location.pathname);
  };


  return (
    <section className=" max-h-full">
      <div className="sm:flex sm:h-[100vh]">
        <div className={` w-full bottom-0  bg-white mt-2 sm:mt-0 fixed sm:relative border-gray-200 sm:border-t-0 border-t-2 `}>
          <div className="logo">
            <Link to={"/main"}>
              <img
                src="../purple.png"
                className=" lg:w-48 cursor-pointer hidden lg:flex h-24 -ml-2 bg-white mt-2 mb-6"
                alt="logo"
              />
              <img
                src="../bare.png"
                className="w-24 -ml-1 hidden sm:flex
         lg:hidden h-18 mt-5 mb-11"
                alt="logo"
              />
            </Link>
          </div>
          <ul className=" sm:relative sm:ml-5 flex justify-around sm:flex-col">
            <NavLink
              // key={}
              to={"/main"}
              onClick={() => (document.documentElement.scrollTop = 0)}
              className={({ isActive }) => {
                if (isActive) {
                  setActState("main");
                  return "sm:flex relative gap-5 p-3 sm:p-0 sm:w-full lg:w-60 rounded-l-md ";
                } else {
                  return "sm:flex gap-5 p-3 sm:p-0 text-black";
                }
              }}
            >
              <li className="flex gap-5 sm:my-2 text-center cursor-pointer">
                <div
                  className={
                    actState === "main"
                      ? "sm:flex relative gap-5 sm:bg-[#4a4ae42f] p-3 sm:w-[72px] transition-all lg:w-60 rounded-l-md sm:border-r-4 border-[#1C1BCB]"
                      : "sm:flex gap-5 p-3 text-black"
                  }
                >
                  <div
                    className={
                      actState === "main"
                        ? "text-[#1C1BCB]"
                        : "text-sm  lg:text-gray-400 text-[#1b1bcb54]"
                    }
                  >
                    {actState === "main" ? (
                      <BsGridFill size={20} />
                    ) : (
                      <BsGrid size={20} />
                    )}
                  </div>
                  <p
                    className={
                      actState === "main"
                        ? "text-[#1C1BCB] font-bold text-[15px] hidden lg:flex"
                        : "text-[15px] font-medium hidden lg:flex text-gray-400"
                    }
                  >
                    Dashboard
                  </p>
                </div>
              </li>
            </NavLink>

            <NavLink
              // key={}
              to={"/event"}
              onClick={() => (document.documentElement.scrollTop = 0)}
              className={({ isActive }) => {
                if (isActive) {
                  setActState("event");
                  return "sm:flex relative gap-5 p-3 sm:p-0 sm:w-full lg:w-60 rounded-l-md ";
                } else {
                  return "sm:flex gap-5 p-3 sm:p-0 text-black";
                }
              }}
            >
              <li className="flex gap-5 sm:my-2 text-center cursor-pointer">
                <div
                  className={
                    actState === "event"
                      ? "sm:flex relative gap-5 sm:bg-[#4a4ae42f] transition-all p-3 sm:w-[72px] lg:w-60 rounded-l-md sm:border-r-4 border-[#1C1BCB]"
                      : "sm:flex gap-5 p-3 text-black"
                  }
                >
                  <div
                    className={
                      actState === "event"
                        ? "text-[#1C1BCB]"
                        : "text-sm  lg:text-gray-400 text-[#1b1bcb54]"
                    }
                  >
                    {actState === "event" ? (
                      <BsCalendarEventFill size={19} />
                    ) : (
                      <BsCalendarEvent size={19} />
                    )}
                  </div>
                  <p
                    className={
                      actState === "event"
                        ? "text-[#1C1BCB] font-bold text-[15px] hidden lg:flex"
                        : "text-[15px] font-medium hidden lg:flex text-gray-400"
                    }
                  >
                    Events
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              // key={}
              to={"/user"}
              onClick={() => (document.documentElement.scrollTop = 0)}
              className={({ isActive }) => {
                if (isActive) {
                  setActState("user");
                  return "sm:flex relative gap-5 p-3 sm:p-0 sm:w-full lg:w-60 rounded-l-md ";
                } else {
                  return "sm:flex gap-5 p-3 sm:p-0 text-black";
                }
              }}
            >
              <li className="flex gap-5 sm:my-2 text-center cursor-pointer">
                <div
                  className={
                    actState === "user"
                      ? "sm:flex relative gap-5 sm:bg-[#4a4ae42f] transition-all p-3 sm:w-[72px] lg:w-60 rounded-l-md sm:border-r-4 border-[#1C1BCB]"
                      : "sm:flex gap-5 p-3 text-black"
                  }
                >
                  <div
                    className={
                      actState === "user"
                        ? "text-[#1C1BCB]"
                        : "text-sm lg:text-gray-400 text-[#1b1bcb54]"
                    }
                  >
                    {actState === "user" ? (
                      <HiUserGroup size={20} />
                    ) : (
                      <HiOutlineUserGroup size={20} />
                    )}
                  </div>
                  <p
                    className={
                      actState === "user"
                        ? "text-[#1C1BCB] font-bold text-[15px] hidden lg:flex"
                        : "text-[15px] font-medium hidden lg:flex text-gray-400"
                    }
                  >
                    Community
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              // key={}
              to={"/notification"}
              onClick={() => (document.documentElement.scrollTop = 0)}
              className={({ isActive }) => {
                if (isActive) {
                  setActState("notification");
                  return "sm:flex relative gap-5 p-3 sm:p-0 sm:w-full lg:w-60 rounded-l-md ";
                } else {
                  return "sm:flex gap-5 p-3 sm:p-0 text-black";
                }
              }}
            >
              <li className="flex gap-5 sm:my-2 text-center cursor-pointer">
                <div
                  className={
                    actState === "notification"
                      ? "sm:flex relative gap-5 sm:bg-[#4a4ae42f] p-3 sm:w-[72px] transition-all lg:w-60 rounded-l-md sm:border-r-4 border-[#1C1BCB]"
                      : "sm:flex gap-5 p-3 text-black"
                  }
                >
                  <div
                    className={
                      actState === "notification"
                        ? "text-[#1C1BCB]"
                        : "text-sm  lg:text-gray-400 text-[#1b1bcb54]"
                    }
                  >
                    {actState === "notification" ? (
                      <IoMdNotifications size={21} />
                    ) : (
                      <IoMdNotificationsOutline size={21} />
                    )}
                  </div>
                  <p
                    className={
                      actState === "notification"
                        ? "text-[#1C1BCB] font-bold text-[15px] hidden lg:flex"
                        : "text-[15px] font-medium hidden lg:flex text-gray-400"
                    }
                  >
                    Notifications
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              // key={}
              to={"/settings"}
              onClick={() => (document.documentElement.scrollTop = 0)}
              className={({ isActive }) => {
                if (isActive) {
                  setActState("settings");
                  return "sm:flex relative gap-5 p-3 sm:p-0 sm:w-full lg:w-60 rounded-l-md ";
                } else {
                  return "sm:flex gap-5 p-3 sm:p-0 text-black";
                }
              }}
            >
              <li className="flex gap-5 sm:my-2 text-center cursor-pointer">
                <div
                  className={
                    actState === "settings"
                      ? "sm:flex relative gap-5 sm:bg-[#4a4ae42f] p-3 sm:w-[72px] transition-all lg:w-60 rounded-l-md sm:border-r-4 border-[#1C1BCB]"
                      : "sm:flex gap-5 p-3 text-black"
                  }
                >
                  <div
                    className={
                      actState === "settings"
                        ? "text-[#1C1BCB]"
                        : "text-sm  lg:text-gray-400 text-[#1b1bcb54]"
                    }
                  >
                    {actState === "settings" ? (
                      <RiSettings5Fill size={21} />
                    ) : (
                      <RiSettings5Line size={21} />
                    )}
                  </div>
                  <p
                    className={
                      actState === "settings"
                        ? "text-[#1C1BCB] font-bold text-[15px] hidden lg:flex"
                        : "text-[15px] font-medium hidden lg:flex text-gray-400"
                    }
                  >
                    Settings
                  </p>
                </div>
              </li>
            </NavLink>
          </ul>
          {/* #1C1BCB #878888 #B0B0DA  */}
          <div
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="hidden text-grey-400 lg:ml-6 mx-5 sm:flex gap-5 mt-64 lg:w-48 transition-all rounded-xl p-3 justify-center hover:bg-[#1C1BCB] cursor-pointer text-white bg-[#4a4ae4]"
          >
            <p className="text-base font-semibold hidden lg:flex">Logout</p>
            <div>
              {" "}
              <HiLogout size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
