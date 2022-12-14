import React from "react";
import Image from "next/image";
function Cardpurp({ role, name }) {
  return (
    <div className="bg-[#C096D6] p-8 m-4 rounded-xl">
      <div className="flex justify-center">
        <Image src={"/p2/logos/MLogo.svg"} width={150} height={150} />
      </div>
      <p className="p-8">
        {" "}
        “We are huge Placeable fans at Multiverse; they&apos;re a joy to partner
        with, and we&apos;ve made more Go To Market hires with them over the
        last year than through any other source. We have found their ways of
        working to be refreshing; they are thorough and reliable; candidates
        love and trust them; and they aren&apos;t afraid to challenge us in the
        right moments.”
      </p>
      <h3 className="py-4 lg:text-2xl text-xl font-bold">
        {role} | <br />
        <span>{name}</span>
      </h3>
    </div>
  );
}

export default Cardpurp;
