const OurLocation = () => {
  return (
    <div className="relative pt-[20px]  pb-[20px] ">
      <div className="absolute w-[350px] h-[350px] left-div -bottom-1 left-[-400px] rounded-full "></div>
      <div className="container max-w-6xl mx-auto px-3">
        <h1 className="text-white font-bold text-4xl">
        BIZNING MANZIL
        </h1>
        <div className="mt-6 flex gap-5 flex-col md:flex-row">
          <div className="w-full hidden md:block md:w-3/5 border rounded-md bg-white"></div>
          <div className="w-full md:w-2/5 rounded-xl consul-div p-[28px]">
            <h1 className="text-white font-bold text-2xl mb-2">BUXORO</h1>

            <div className="min-h-[200px] bg-white rounded-xl"></div>
            <div className="mt-[30px]">
              <h1 className="text-white font-bold text-2xl">MO’LJAL</h1>
              <p className="text-white mt-1">BUXORO KITOB OLAMI YONIDA</p>
              <hr className="py-[1.2px] bg-white mt-4" />
              <h3 className="text-white font-bold text-2xl mt-6">ISH VAQTI</h3>
              <p className="text-white mt-1">09:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
