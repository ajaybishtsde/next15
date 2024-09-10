import Image from "next/image";
import React from "react";

const Birthday = () => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-2xl text-sm flex flex-col gap-2">
        <div className="flex items-center justify-start font-medium">
          <span className="text-gray-500">Birthdays</span>
        </div>
        <div className="flex justify-between mt-4">
          {/* user img and name */}
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://images.unsplash.com/photo-1542385262-cdf06b302c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              }
              width={40}
              height={40}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">Kakashi Hatake</span>
          </div>
          {/* accept or reject icon */}
          <div className="flex gap-4 items-center">
            <button className="bg-blue-500 text-white rounded-md font-medium px-2 py-1 text-xs">
              Celebrate
            </button>
          </div>
        </div>
        <div className="bg-slate-100 p-4 flex items-center justify-between rounded-lg shadow-2xl">
          <div>
            <Image
              src={"/gift.png"}
              alt="gift"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
          <div className="text-sm font-medium flex flex-col cursor-pointer">
            <span className="text-gray-700">Upcomming Birthdays</span>
            <span className="text-gray-700 font-thin">
              See other 16 have upcomming birthdays
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Birthday;
