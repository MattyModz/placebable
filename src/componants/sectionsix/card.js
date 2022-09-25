import React from "react";
import Image from "next/image";
function Card({ src, title, description, no }) {
  return (
    <div className="bg-[#8CD87C] md:p-0 p-0 lg:p-6 rounded-xl">
      <div className="flex ">
        <div className="w-1/2 text-2xl  flex justify-start">
          <div className="block lg:p-0 p-4">
            <div>Step {no}</div>
            <div className="font-bold text-3xl">{title}</div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end lg:p-0 p-4">
          <Image src={src} height={"80"} width={"80"} />
        </div>
      </div>
      <div className="  text-xl p-8 lg:p-0 text-black container flex justify-center">
        {description}
      </div>
    </div>
  );
}

export default Card;

// md:block hidden
