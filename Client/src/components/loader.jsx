const LoaderComponent = () => {
  return (
    <>
      <div className="wrap flex gap-4 justify-center mt-72 w-full">
        <div className="w-8 h-8 sm:w-16 sm:h-16 bg-[#3D3CC6] animate-spin bg-gradient-to-t rounded-full opacity-20 from-[#6363ac2f] via-[#181888] to-[blue]"></div>
        <div className="w-12 h-12 sm:w-20 sm:h-20 bg-[#3D3CC6] bg-gradient-to-t animate-spin  item-center justify-center rounded-full opacity-20 from-[#6363ac2f] via-[#181888] to-[blue]">
          <div className="w-8 h-8 sm:w-12 sm:h-12 justify-center m-auto mt-2 sm:mt-4  bg-white rounded-full "></div>
        </div>
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#3D3CC6] animate-spin bg-gradient-to-t rounded-full opacity-20 from-[#6363ac2f] via-[#181888] to-[blue]"></div>
      </div>
    </>
  );
};

export default LoaderComponent;
