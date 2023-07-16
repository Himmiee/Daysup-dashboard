const UserCard = ({data}) => {
  return (
    <section className="border-gray-100 w-[100%] my-2 h-24  border-[1px] shadow-sm">
      <div className="container h-24 px-4  border-[#3D3CC6] border-l-4">
        <div className="flex justify-between pt-4 pb-2 text-sm font-medium text-gray-500 border-gray-200 border-b-[1px]">
          <p>Pending</p>
          <p>{data.regNumber}</p>
        </div>
        <div className="flex justify-between items-center font-bold pt-2 text-sm">
          <p>{data.name}</p>
          <div className="bg-red-200 text-red-500 w-10 justify-center p-2 rounded-md h-3 text-[10px] items-center flex">active</div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
