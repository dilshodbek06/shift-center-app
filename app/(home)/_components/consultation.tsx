import { Button } from "@/components/ui/button";

const Consultation = () => {
  return (
    <div className="relative pb-[20px]">
      <div className="absolute w-[350px] h-[350px] left-div -bottom-1 left-[-400px] rounded-full "></div>
      <div className="container max-w-6xl mx-auto px-2 md:px-3">
        <h1 className="text-white font-bold text-xl md:text-4xl">
          BEPUL KONSULTATSIYA OLING!
        </h1>
        <div className="mt-6 flex gap-5 flex-col md:flex-row">
          <div className="w-full hidden md:block md:w-3/5 border rounded-md bg-white"></div>
          <div className="w-full md:w-2/5 rounded-xl consul-div p-[15px] md:p-[38px]">
            <div className="min-h-[200px] bg-white rounded-xl"></div>
            <div className="mt-[30px]">
              <h1 className="text-white font-bold text-2xl">
                BEPUL KONSULTATSIYA
              </h1>
              <p className="text-white mt-1">
                Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq
                qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat
                qilamiz
              </p>
              <Button className="bg-[#31A8FF] hover:bg-[#219bf1] rounded-xl w-full mt-6 md:mt-7 py-5 flex items-center md:py-7 md:text-lg">
                SO’ROV QOLDIRISH!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
