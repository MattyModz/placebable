import React from "react";
import { RoughNotation } from "react-rough-notation";
function Sectionthree() {
  return (
    <div className=" bg-[#303030] m">
      <div className="h-screen lg:flex container py-16 pb-16  ">
        <div className="lg:w-1/5 grid-cols-1  h-full grid font-bold text-2xl text-white text-left ">
          <div className=" bg-gray-50 bg-clients bg-cover  mt-2 grid items-center text-3xl ">
            <div className="ml-16"> Client</div>
          </div>
          <div
            className=" bg-gray-50 bg-candidate
          bg-cover  mt-2 grid items-center text-3xl"
          >
            <div className="ml-16"> Candiate</div>
          </div>
          <div className=" bg-gray-50 bg-join  bg-cover mt-2 grid items-center text-3xl ">
            <div className="ml-16"> Join us</div>
          </div>
        </div>
        <div className="lg:w-4/5 font-bold text-9xl text-white ">
          <div className="grid items-center h-full">
            <div className="flex justify-end ">
              <h2 className="text-right ">
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
      </div>
    </div>
  );
}

export default Sectionthree;
