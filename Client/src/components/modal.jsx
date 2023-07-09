import InputComponent from "./inputComponent";
import Button from "./Button";
import { BsArrowDownCircle } from "react-icons/bs";
const ModalComponent = () => {
  const { title, field } = props;
  const handleSubmit = () => {
    console.log("Modal");
  };

  return (
    <div className="overlap fixed  inset-0  w-full h-full bg-gray-200 bg-opacity-50">
      <div className="flex absolute bottom-0 sm:relative justify-center sm:pt-44 ">
        <div className="container w-screen  sm:w-[450px]  sm:rounded-xl h-64 sm:h-48">
          <div className="header hidden w-full h-12 bg-[#4343ac] sm:flex justify-start items-center rounded-t">
            <p className="text-white px-4">{title}</p>
          </div>
          <div className="body bg-white h-72 sm:h-36 rounded-t-3xl sm:rounded-t-none sm:rounded-b-md pt-5 sm:pt-4">
            <p className="sm:hidden flex justify-center font-bold text-[#4343ac] text-lg">
              Title
            </p>
            <div className="flex justify-center sm:hidden my-4">
              <BsArrowDownCircle size={24} className="text-[#4343ac]" />
            </div>
            <div className="flex justify-center sm:mt-0">
              <label>
                <p className="text-[12px] font-bold">{field}:</p>
                <InputComponent />
              </label>
            </div>
            <div className="btn flex justify-center pt-3">
              <Button
                title="submit"
                handleClick={handleSubmit}
                className="w-24 h-7 text-sm rounded-lg bg-[#a2a2e4] hover:bg-[#4343ac]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;

{
  /* #1C1BCB #878888 #B0B0DA */
}
