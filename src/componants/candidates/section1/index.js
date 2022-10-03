import React from "react";
// import { RoughNotation } from "react-rough-notation";

import Image from "next/image";
function S1candid() {
  return (
    <section className=" lg:h-screen bg-[#FFF6E9] pb-4 ">
      <div className="md:flex justify-end bg-center   lg:h-screen md:h-full lg:bg-candidsaybg bg-no-repeat bg-contain container ">
        {" "}
        <div className="px-4">
          {" "}
          <Image src={"/p3/say/title.svg"} width={500} height={400} />
        </div>
      </div>
      <div className="  hidden sm:block">
        <div className=" hidden md:block sm:hidden lg:hidden">
          {" "}
          <div className="-mt-32">
            <Image src={"/p3/say/bgassetmd.svg"} width={800} height={500} />
          </div>
        </div>
      </div>
      <div className="h-full   justify-center md:hidden bg-p3bgassetsmsay bg-no-repeat bg-contain container bg-center ">
        {" "}
        <div className=" py-8 ">
          {" "}
          <Image src={"/p3/say/green.svg"} width={500} height={500} />
          <Image src={"/p3/say/orange.svg"} width={500} height={500} />
        </div>
      </div>
    </section>
  );
}

export default S1candid;

// “We are huge Placeable fans at Multiverse; they&apos;re a joy to partner
//     with, and we&apos;ve made more Go To Market hires with them over the
//     last year than through any other source. We have found their ways of
//     working to be refreshing; they are thorough and reliable; candidates
//     love and trust them; and they aren&apos;t afraid to challenge us in the
//     right moments.”

// Founder & MD at Thirdfort | <br />
// <span>Olly Thornton-Berry</span>

//  <div className="bg-[#8CD87C] p-8 m-4 rounded-xl">
//    <p>
//      “We are huge Placeable fans at Multiverse; they&apos;re a joy to
//      partner with, and we&apos;ve made more Go To Market hires with them
//      over the last year than through any other source. We have found
//      their ways of working to be refreshing; they are thorough and
//      reliable; candidates love and trust them; and they aren&apos;t
//      afraid to challenge us in the right moments.”
//    </p>
//    <h3 className="py-4 text-2xl font-bold">
//      Founder & MD at Thirdfort | <br />
//      <span>Olly Thornton-Berry</span>
//    </h3>
//  </div>;

// <div className="container font-bold">
//   <div className="px-4">
//     {" "}
//     <img src={"./S1Arrow.svg"} width={50} height={50} />
//   </div>
//   <div className="  text-xl">
//     <div className="lg:w-1/2 px-4 text-black underline">
//       {" "}
//       Explore our fundamentals
//     </div>
//   </div>
// </div>;
