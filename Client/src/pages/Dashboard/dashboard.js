import { React, useState, useEffect } from "react";
import { Menu } from "../others/menu";
import { HiLogout } from "react-icons/hi";

const Dashboard = () => {
  const [data, useData] = useState(Menu);
  const [active, setActive] = useState(0);
  const [icon, setIcon] = useState(false);
  return (
    <section className=" max-h-full">
      <div className="sm:flex sm:h-[100vh]">
        <div className="sm:w-[12%] lg:w-[18%] w-[100%] bottom-0 absolute sm:relative border-gray-200 sm:border-t-0 border-t-2">
          <div className="logo">
            <img
              src="../purple.png"
              className="lg:w-44 hidden lg:flex h-24 -ml-2 mt-2 mb-6"
              alt="logo"
            />
            <img
              src="../bare.png"
              className="w-28 -ml-2 hidden sm:flex
             lg:hidden h-18 mt-5 mb-[30px]"
              alt="logo"
            />
          </div>
          <ul className=" sm:relative sm:ml-5 flex justify-around sm:flex-col">
            {data.map((item, idx) => {
              return (
                <li
                  className="flex gap-5 sm:my-2 text-center cursor-pointer"
                  onClick={() => {
                    setActive(idx);
                    setIcon(!icon);
                  }}
                  key={idx}
                >
                  <div

                    className={
                      active === idx
                        ? "sm:flex relative gap-5 sm:bg-[#4a4ae42f] p-3 sm:w-full lg:w-60 rounded-l-md sm:border-r-4 border-[#1C1BCB]"
                        : "sm:flex gap-5 p-3 text-black"
                    }
                  >
                    <div
                      className={
                        active === idx
                          ? "text-[#1C1BCB]"
                          : "text-sm text-gray-400"
                      }
                    >
                      {item.icon}
                      {/* { active === idx ? `${item.icon} `: `${item.filled}`} */}
                    </div>
                    <p
                      className={
                        active === idx
                          ? "text-[#1C1BCB] font-bold text-[15px] hidden lg:flex"
                          : "text-[15px] font-medium hidden lg:flex text-gray-400"
                      }
                    >
                      {item.label}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* #1C1BCB #878888 #B0B0DA  */}
          <div className="hidden text-grey-400 lg:ml-6 mx-5 sm:flex gap-5 mt-40 lg:w-44 rounded-xl p-3 justify-center hover:bg-[#1C1BCB] cursor-pointer text-white bg-[#4a4ae4]">
            <p className="text-base font-semibold hidden lg:flex">Logout</p>
            <div>
              {" "}
              <HiLogout size={24} />
            </div>
          </div>
        </div>
        <aside className="sm:w-[88%] lg:w-[82%] bg-[#f3f3f3]">
          <div>side</div>
        </aside>
      </div>
    </section>
  );
};

export default Dashboard;
