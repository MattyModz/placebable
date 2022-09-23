import React from "react";
import Image from "next/image";
function Card2({ src, title, description, no }) {
  return (
    <div className="bg-[#C096D6] md:p-0 p-0 lg:p-6 rounded-xl">
      <div className="flex justify-center">
        <div className="w-1/2 text-2xl  flex justify-center">
          <div className="block">
            <div>Step {no}</div>
            <div className="font-bold text-3xl">{title}</div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={src} height={"80"} width={"80"} />
        </div>
      </div>
      <div className="text-left md:block hidden text-xl py-4 text-black container">
        {description}
      </div>
    </div>
  );
}

export default Card2;
