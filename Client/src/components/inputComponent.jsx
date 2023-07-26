import { useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const InputComponent = (props) => {
  const { label, type, name, className, handleChange } = props;
  const [value, setValue] = useState("");
  const [pwdState, setPwdState] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="flex relative">
      <input
        type={type}
        onChange={handleChange}
        ref={inputRef}
        placeholder={name}
        className="border-grey-600 outline-none border-[1px] h-8 w-[350px] sm:w-[415px] text-black my-2 px-2  rounded-lg text-[11px] font-medium inter"
      />
      {type === "password" && (
        <button
          className="text-gray-600 absolute left-[320px] sm:left-[379px] top-[18px]"
          onClick={() => {
            inputRef.current.type === "password"
              ? (inputRef.current.type = "text")
              : (inputRef.current.type = "password");
            setPwdState(!pwdState);
          }}
        >
          {!pwdState ? <BsEyeSlash /> : <BsEye />}
        </button>
      )}
    </div>
  );
};

export default InputComponent;
