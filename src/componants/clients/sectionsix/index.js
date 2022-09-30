import React from "react";
import Card from "./card";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Card2 from "./cardpurp";
function Sectionsix({}) {
  return (
    <div className="bg-[#1E1E1E]    ">
      <div className="  bg-p2btmbg bg-no-repeat h-screen relative bg-contain  container ">
        <div className=" ">
          <div className="lg:flex-col-2 s:flex-col-reverse  lg:flex ">
            <div className="2xl:w-2/3 xl:w-2/3 lg:w-1/1 text-7xl  text-white"></div>
            <div className="2xl:w-1/3 xl:w-1/3  hidden xl:block 2xl:block grid-cols-reverse  ">
              <Image
                src={"/icons/clients/howit/how.svg"}
                width={500}
                height={500}
              />
              <div className=" sm:block  lg:p-10 ml-8 flex  items-stretch ">
                <div className="flex items-center "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <Image src={"/Phone.svg"} height={50} width={50} />{" "}
        </div>
        <div className="underline  font-medium text-[#FFF6E9]">
          Schedule your
          <br />
          discovery call
        </div>
      </div>
    </div>
  );
}

export default Sectionsix;

//  <div className="lg:mr-12">
//    <div className=" bg-[#8CD87C]">
//      <div className="flex">
//        <div className="w-1/2">
//          no 1 <br />
//          <span>The Brief</span>
//        </div>
//        <div className="w-1/2"></div>
//      </div>
//      <div className="flex justify-center">
//        <div className="lg:w-1/3"></div>
//        <div className="lg:w-1/3">
//          {" "}
//          <p className="lg:w-1/3">
//            We’ll work together to make sure we understand exactly what you’re
//            looking for.
//          </p>
//        </div>

//        <div className="lg:w-1/3"></div>
//      </div>
//    </div>
//  </div>;
