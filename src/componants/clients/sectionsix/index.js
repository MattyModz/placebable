import React from "react";
import Card from "./card";
import Image from "next/image";
// import { RoughNotation } from "react-rough-notation";
import Card2 from "./cardpurp";
function Sectionsix({}) {
  return (
    <div className="bg-[#1E1E1E]  lg:h-full lg:p-16 p-4 ">
      <div className="  lg:bg-p2btmbg bg-no-repeat lg:h-screen relative bg-contain  container ">
        <div className=" ">
          <div className="lg:flex-col-2 s:flex-col-reverse  lg:flex ">
            <div className="2xl:w-2/3 xl:w-2/3 lg:w-1/1 text-7xl  text-white"></div>
            <div className="2xl:w-1/3 xl:w-1/3   xl:block 2xl:block grid-cols-reverse  ">
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
      <div className="container -mt-32 hidden lg:block ">
        <div>
          <Image src={"/Phone.svg"} height={50} width={50} />{" "}
        </div>
        <div className="underline  font-medium text-[#FFF6E9]">
          Schedule your
          <br />
          discovery call
        </div>
      </div>
      <section className="lg:hidden sm:blocks">
        <div className="lg:flex ">
          <div className="lg:w-1/2 2xl:w-1/2 xl:w-1/2 lg:p-10 lg:ml-20">
            {" "}
            <div className="lg:flex lg:mb-0 mb-4">
              <Card
                title={"The Brief"}
                src={"/p2/How It Works Icons/Brief.svg"}
                description={
                  "We’ll work together to make  sure we understand exactly what you’re looking for."
                }
                no={"1"}
              />
            </div>
          </div>
          <div className="lg:w-1/2  "></div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:p-10 lg:mb-0 mb-4">
            {" "}
            <Card2
              title={"The Search"}
              src={"/p2/How It Works Icons/Search.svg"}
              description={
                "We’ll draw on our extensive database to identify a first set of compatible candidates."
              }
              no={"2"}
            />
          </div>
          <div className="lg:w-1/2 lg:p-10 lg:mb-0 mb-4">
            {" "}
            <Card2
              title={"The Brief"}
              src={"/p2/How It Works Icons/Science.svg"}
              description={
                "We’ll begin our unrivalled, data-led vetting process to determine the final shortlist."
              }
              no={"3"}
            />
          </div>
        </div>
        <div className="lg:flex ">
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2 lg:p-10 lg:mb-0 mb-4">
            {" "}
            <Card2
              title={"The Interviews"}
              src={"/p2/How It Works Icons/Interviews.svg"}
              description={
                "We’ll guide applicants during your interview process through to offer, and make sure they’re set-up for success."
              }
              no={"4"}
            />
            <div className="lg:hidden block lg:mb-0 mt-4">
              <Card
                title={"The Feedback"}
                src={"/p2/How It Works Icons/Feedback.svg"}
                description={
                  "We'll provide you with real-time and post-hire insights to support your next recruitment drive"
                }
                no={"5"}
              />
            </div>
          </div>
        </div>
      </section>
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
