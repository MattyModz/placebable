import React from "react";
import Image from "next/image";
function Card2({ src, title, description, no }) {
  return (
    <div className="bg-[#C096D6] md:p-0 p-0 lg:p-6 rounded-xl">
      <div className="flex ">
        <div className="w-1/2 text-2xl  flex justify-start">
          <div className="block lg:p-0 p-4">
            <div>Step {no}</div>
            <div className="font-bold text-2xl">{title}</div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end lg:p-0 p-4">
          <Image src={src} height={"80"} width={"80"} />
        </div>
      </div>
      <div className="text-left  text-xl py-4 text-black container flex justify-center  px-10">
        {description}
      </div>
    </div>
  );
}

export default Card2;
