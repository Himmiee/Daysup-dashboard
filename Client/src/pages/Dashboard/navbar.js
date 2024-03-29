import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ItemContext } from "../../context/store";

const NavComponent = () => {
  const {
    state: { loginDetails },
  } = ItemContext();
  const name = localStorage.getItem("name");
  const is_admin = localStorage.getItem("is_admin");
  const admin = JSON.parse(is_admin);
  return (
    <section className="">
      <div className="wrapper  justify-start sm:justify-between  border-gray-200  border-b-[1px]  h-20  flex sm:py-6 w-full px-6 item-center">
        <div className="w-36 -ml-6 h-12 sm:hidden">
          <img src="../purple.png" alt="" />
        </div>
        <div className="hidden sm:flex w-96 gap-2 h-8 items-center text-gray-300 text-sm font-medium bg-gray-100 px-4 rounded-md">
          <BsSearch size={12} />
          <p>search</p>
        </div>
        <div className=" hidden sm:flex px-6 gap-3 items-center">
          <div>
            <IoMdNotificationsOutline size={23} className="text-gray-400" />
          </div>
          <div className="wrap bg-[#DEDEFA] flex justify-center items-center w-10 h-10 rounded-full">
            <div
              // onClick={() => console.log(loginDetails.name)}
              className="dp bg-[#3D3CC6] w-8 h-8 items-center flex justify-center rounded-full"
            >
              <p className="text-white font-semibold">{name.charAt(0)}</p>
            </div>
          </div>
          <div className="">
            <p className="text-[12px]  text-gray-400 ">{name}</p>
            <p className="text-[12px] text-gray-600 font-bold">
              {admin ? "Admin" : "Student"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavComponent;
