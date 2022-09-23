import React from "react";
import { RoughNotation } from "react-rough-notation";
function Sectionthree() {
  return (
    <div className="bg-[#303030]">
      <div className=" bg-[#303030] h-full container">
        <div className="lg:h-screen lg:flex flex-row-reverse container py-16 pb-16  ">
          <div className="lg:w-4/5 container font-bold text-6xl lg:text-9xl text-white h-full ">
            <div className="grid items-center h-full">
              <div className="flex justify-end ">
                <h2 className="text-right p-4 ">
                  How <br />{" "}
                  <span>
                    {" "}
                    <RoughNotation
                      type="circle"
                      show={true}
                      color="#C096D6"
                      padding={"-6px"}
                      strokeWidth={"14px"}
                    >
                      Placeable{" "}
                    </RoughNotation>
                  </span>
                  <br /> can{" "}
                  <span>
                    {" "}
                    <RoughNotation
                      type="underline"
                      show={true}
                      color="#F98D2B"
                      padding={"-6px"}
                      strokeWidth={"14px"}
                    >
                      help{" "}
                    </RoughNotation>
                  </span>{" "}
                  you
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 mt-8 lg:mt-0  h-full grid font-bold text-2xl text-white text-left ">
            <div className=" bg-gray-50 lg:p-0 p-24  bg-clients bg-cover  mt-2 grid items-center text-3xl ">
              <div className="ml-16 "> Client</div>
            </div>
            <div
              className=" bg-gray-50 lg:p-0 p-24 bg-candidate 
          bg-cover  mt-2 grid items-center text-3xl"
            >
              <div className="ml-16 text-white"> Candiate</div>
            </div>
            <div className=" bg-gray-50 bg-join  lg:p-0 p-24 bg-cover mt-2 grid items-center text-3xl ">
              <div className="ml-16"> Join us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionthree;
