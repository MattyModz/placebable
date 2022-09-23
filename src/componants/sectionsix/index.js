import React from "react";
import Card from "./card";
// import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Card2 from "./cardpurp";
function Sectionsix({}) {
  return (
    <div className="bg-[#1E1E1E] py-8 h-full ">
      <div className="  lg:bg-p2btmbg bg-no-repeat relative h-full lg:h-screen container">
        <div className=" ">
          <div className="lg:flex-col-2 s:flex-col-reverse  lg:flex ">
            <div className="lg:w-2/3    text-7xl  h-screen text-white">
              <div className="grid h-full items-stretch">
                {" "}
                <div className="lg:flex ">
                  <div className="lg:w-1/3"></div>
                  <div className="lg:w-1/3  ">
                    <div className="lg:flex ">
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
                  <div className="lg:w-1/3"></div>
                </div>
                <div className="lg:flex">
                  <div className="lg:w-1/2 lg:p-8 lg:mt-8">
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
                  <div className="lg:w-1/2 lg:p-12 py-12 ">
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
                  <div className="lg:w-1/2 ">
                    {" "}
                    <Card2
                      title={"The Interviews"}
                      src={"/p2/How It Works Icons/Interviews.svg"}
                      description={
                        "We’ll guide applicants during your interview process through to offer, and make sure they’re set-up for success."
                      }
                      no={"4"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 grid-cols-reverse grid items-stretch ">
              <p className="text-9xl text-right text-white font-bold">
                How it
                <br />
                <span>
                  {" "}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#8CD87C"
                    padding={"-6px"}
                    strokeWidth={"30px"}
                  >
                    works
                  </RoughNotation>
                </span>
              </p>
              <div className="p-8 sm:block hidden">
                <Card
                  title={"The Feedback"}
                  src={"/p2/How It Works Icons/Feedback.svg"}
                  description={
                    "We’ll guide applicants during your interview process through to offer, and make sure they’re set-up for success."
                  }
                  no={"5"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {" "}
        <div>{/* <Image src={"/"} /> */}</div>
        <div className="underline font-medium text-[#FFF6E9]">
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
