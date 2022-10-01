import React from "react";
import { RoughNotation } from "react-rough-notation";
import Card from "./card";
import Cardpurp from "./cardpurple";
import Image from "next/image";
function Sectionfour() {
  return (
    <section className=" h-screen  px-4  ">
      <div className="flex justify-end bg-center h-full  lg:bg-p2topbg bg-no-repeat bg-contain container">
        {" "}
        <Image src={"/icons/clients/sub.svg"} width={600} height={400} />
      </div>
      <div className="hidden">
        {" "}
        <Card
          role={"Founder & MD at Thirdfort"}
          name={"Olly Thornton-Berry"}
          className="-8 "
        />
        ;
        <Cardpurp
          role={"Founder & MD at Thirdfort"}
          name={"Olly Thornton-Berry"}
        />
      </div>

      <div className=" border  container hidden ">
        <div className="xl:flex  ">
          <div className="2xl:w-2/3 xl:w-1/2 lg:w-1/1 ">
            <div className="2xl:flex   ">
              <div className="text-8xl text-right font-bold xl:hidden 2xl:hidden block ">
                <div className="py-8 border hidden lg:visible">
                  <Image src={"/p2/head.svg"} width={500} height={250} />
                </div>
              </div>
              <div className="2xl:w-1/2 flex justify-center ">
                {" "}
                <Image
                  src={"/icons/clients/olly.svg"}
                  width={600}
                  height={600}
                />
              </div>
              <div className="2xl:w-1/2  2xl:block xl:hidden sm:hidden   flex items-stretch  ">
                {" "}
                <div className="self-end flex items-end ">
                  <Image
                    src={"/icons/clients/libby.svg"}
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-1/3 xl:w-1/2 lg:w-1/1  ">
            <div className="2xl:hidden lg:visible flex justify-center  ">
              <Image
                src={"/icons/clients/libby.svg"}
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionfour;

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
