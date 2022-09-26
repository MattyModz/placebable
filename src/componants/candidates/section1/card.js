import React from "react";
import Image from "next/image";
function Card({ role, name }) {
  return (
    <div className="bg-[#F98D2B] p-8 m-4 rounded-xl">
      <p className="p-8">
        {" "}
        “What has impressed me most about the team was that they were not pushy
        at all and made me feel in control of the process. Toby and Joey were
        extremely helpful by providing feedback often and prepared me for each
        step of the process. They checked in often as well! What has stood out
        vs other agencies is trust and communication - I felt like I was able to
        be honest with the team and felt like they had my best interest in mind.
        The process felt very collaborative rather than the agency having their
        own agenda. It was refreshing!”
      </p>
      <h3 className="py-4 text-2xl font-bold">
        {role} | <br />
        <span>{name}</span>
      </h3>
    </div>
  );
}

export default Card;
