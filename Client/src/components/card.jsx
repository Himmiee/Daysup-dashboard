import { IoMdFlame } from "react-icons/io"
const cardComponent = (props) => {
    const{name,number,className} = props
    return (
        <div className="card flex items-center  gap-6 w-40 sm:w-56  shadow-md border-[1px] border-gray-100 rounded-md h-20  sm:my-4">
        <div className={className}>
          <IoMdFlame size={24}/>
        </div>
        <div className="">
          <p className="text-[12px] text-gray-300">{name}</p>
          <p className="text-base text-black font-bold">{number}</p>
        </div>
      </div>
    )
}

export default cardComponent
