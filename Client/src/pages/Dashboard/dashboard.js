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
import { useScrollDirection } from "react-use-scroll-direction";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState(Menu);
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
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [NavLink]);
  const currentRoute = location.pathname;
  const activeMenuItem = menuItems.find((item) =>
    currentRoute.startsWith(item.route)
  );
  const activeIndex = activeMenuItem ? menuItems.indexOf(activeMenuItem) : -1;

  const handleNavLinkClick = (route, index) => {
    setActState(index);
    navigate(route);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <section className=" max-h-full">
      <div className="sm:flex sm:h-[100vh]">
        <div className=" w-full bottom-0  bg-white mt-2 sm:mt-0 fixed sm:relative border-gray-200 sm:border-t-0 border-t-2 ">
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
            {menuItems.map((menuItem, index) => (
              <li
                key={menuItem.label}
                className="flex gap-5 sm:my-2 text-center cursor-pointer"
              >
                <NavLink
                  to={menuItem.route}
                  onClick={() => handleNavLinkClick(menuItem.route, index)}
                  className={
                    activeIndex === index
                      ? "sm:flex relative gap-5 sm:bg-[#4a4ae42f] p-3 sm:w-[72px] transition-all lg:w-60 rounded-l-md sm:border-r-4 border-[#1C1BCB]"
                      : "sm:flex gap-5 p-3 text-black"
                  }
                >
                  <div
                    className={
                      activeIndex === index
                        ? "text-[#1C1BCB]"
                        : "text-sm lg:text-gray-400 text-[#1b1bcb54]"
                    }
                  >
                    {activeIndex === index ? menuItem.filled : menuItem.icon}
                  </div>
                  <p
                    className={
                      activeIndex === index
                        ? "text-[#1C1BCB] font-bold text-[15px] hidden lg:flex"
                        : "text-[15px] font-medium hidden lg:flex text-gray-400"
                    }
                  >
                    {menuItem.label}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            onClick={handleLogout}
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
