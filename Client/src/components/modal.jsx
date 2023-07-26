import InputComponent from "./inputComponent";
import Button from "./Button";
import { BsArrowDownCircle } from "react-icons/bs";
import { ItemContext } from "../context/store";
const ModalComponent = (props) => {
  const { title, field, handleSubmit, onChange } = props;
  const { popup, setPopup ,popErr} = ItemContext();

  return (
    <div className="overlap fixed z-10 inset-0 ">
      <div
        onClick={() => setPopup(false)}
        className="overlap cursor-pointer fixed w-full h-full bg-gray-200 bg-opacity-50 inset-0 "
      ></div>
      <div className="flex absolute bottom-0 sm:relative justify-center sm:pt-44 ">
        <div className="container w-screen  sm:w-[450px]  sm:rounded-xl h-64 sm:h-48">
          <div className="header hidden w-full h-12 bg-[#4343ac] sm:flex justify-start items-center rounded-t">
            <p className="text-white px-4">{title}</p>
          </div>
          <div className="body bg-white h-72 sm:h-44 rounded-t-3xl sm:rounded-t-none sm:rounded-b-md pt-5 sm:pt-4">
 
            <p className="sm:hidden flex justify-center font-bold text-[#4343ac] text-lg">
              EXIAT
            </p>
            <div className="flex justify-center sm:hidden my-4">
              <BsArrowDownCircle size={24} className="text-[#4343ac]" />
            </div>
            <div className="flex justify-center sm:mt-0">
              <label>
                <p className="text-[12px] font-bold">{field}:</p>
                <textarea
                  onChange={onChange}
                  className="text-[12px] outline-none p-2 border-[1px] mt-1 border-gray-200"
                  name="Details"
                  placeholder="minimum of 12 letters"
                  id=""
                  cols="40"
                  rows="2"
                ></textarea>
              </label>
            </div>
            {popErr && (
            <p className="flex justify-center text-red-700 text-[10px]">
              {popErr}
            </p>
          )}
            <div className="btn flex justify-center pt-3">
              <Button
                title="submit"
                handleClick={handleSubmit}
                className="w-24 text-white h-7 text-sm rounded-lg bg-[#a2a2e4] hover:bg-[#4343ac]"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;

export const StudentModal = (props) => {
  const { title, field, field2, field3, handleSubmit, onChange } = props;
  const { popup, setPopup ,setName, setEmail, setRegNumber, popErr} = ItemContext();

  return (
    <div className="overlap fixed z-10 inset-0 ">
      <div
        onClick={() => setPopup(false)}
        className="overlap cursor-pointer fixed w-full h-full bg-gray-200 bg-opacity-50 inset-0 "
      ></div>
      <div className="flex absolute bottom-8 sm:relative justify-center sm:pt-44 ">
        <div className="container w-screen  sm:w-[450px]  sm:rounded-xl h-64 sm:h-48">
          <div className="header hidden w-full h-12 bg-[#4343ac] sm:flex justify-start items-center rounded-t">
            <p className="text-white px-4">{title}</p>
          </div>
          <div className="body bg-white h-96 sm:h-52 rounded-t-3xl sm:rounded-t-none sm:rounded-b-md pt-5 sm:pt-4">
            <p className="sm:hidden flex justify-center font-bold text-[#4343ac] text-lg">
              {title}
            </p>
            <div className="flex justify-center sm:hidden my-4">
              <BsArrowDownCircle size={24} className="text-[#4343ac]" />
            </div>
            <div className="grid justify-center sm:mt-0">
              <label>
                <p className="text-[12px] font-bold">{field}:</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="my-2 outline-none text-[10px] p-2 w-80 sm:w-96 h-8 rounded-md border-[1px] mt-1 border-gray-200"
                  name="Details"
                  placeholder="email"
                />
              </label>
              <div className="flex gap-8">
                <label>
                  <p className="text-[12px] font-bold">{field2}:</p>
                  <input
                    onChange={(e) => setRegNumber(e.target.value)}
                    className="my-2 outline-none text-[10px] p-2 w-36 sm:w-44 h-8 rounded-md border-[1px] mt-1 border-gray-200"
                    name="Details"
                    placeholder="regNum"
                  />
                </label>
                <label>
                  <p className="text-[12px] font-bold">{field3}:</p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="my-2 outline-none text-[10px] p-2 w-36 sm:w-44 h-8 rounded-md border-[1px] mt-1 border-gray-200"
                    name="name"
                    placeholder="name"
                  />
                </label>
              </div>
            </div>
            <div className="btn flex justify-center pt-3">
              <Button
                title="submit"
                handleClick={handleSubmit}
                className="w-24  text-white h-7 text-sm rounded-lg bg-[#a2a2e4] hover:bg-[#4343ac]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
