import React from "react";
import Image from "next/image";
function Card({ role, name }) {
  return (
    <div className="bg-[#8CD87C] p-8 m-4 rounded-xl">
      <div className="flex justify-center">
        <Image src={"/p2/logos/TFLogo.svg"} width={250} height={150} />
      </div>
      <p className="p-8">
        {" "}
        “What has impressed me most though is their ability to get highest
        caliber candidates excited about the opportunity, alongside their desire
        to be data driven which gives great insight into where we can
        collectively improve.”
      </p>
      <h3 className="py-4 text-2xl font-bold">
        {role} | <br />
        <span>{name}</span>
      </h3>
    </div>
  );
}

export default Card;
