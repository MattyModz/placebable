import React from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
function Hero() {
  return (
    <>
      <div className="bg-[#898989] p-4 ">
        <section className="h-full container py-16 bg-[#898989] ">
          <div className="flex ">
            <div className="text-6xl font-bold">Recruitment 2.0</div>
            <div className=""></div>
          </div>
          <div className="  py-8 lg:w-1/2 justify-start flex">
            <div className="text-6xl font-bold max-w-xl text-[#FFF6E9]">
              The Job market has{" "}
              <span>
                <RoughNotation
                  type="circle"
                  show={true}
                  color="#F98D2B"
                  padding={"2px"}
                  strokeWidth={"10px"}
                >
                  evolved.{" "}
                </RoughNotation>
              </span>
              Career expectations have{" "}
              <span>
                {" "}
                <RoughNotation
                  type="underline"
                  show={true}
                  color="#8CD87C"
                  padding={"2px"}
                  strokeWidth={"10px"}
                >
                  changed.{" "}
                </RoughNotation>
              </span>
            </div>
            <div className=""></div>
          </div>
          <div className="  py-8  flex -mt-12 justify-end">
            <div className="w-1/2"></div>
            <div className="w-1/2 text-5xl py-8 font-bold max-w-xl lg:text-right  text-[#FFF6E9]">
              But Recruiters?
              <br /> They're
              <span>
                {" "}
                <RoughNotation
                  type="underline"
                  show={true}
                  color="#F98D2B"
                  padding={"2px"}
                  strokeWidth={"10px"}
                >
                  still the same.{" "}
                </RoughNotation>
              </span>
            </div>
          </div>
          <div className="  flex justify-end">
            <div className="w-1/2"></div>
            <div className="w-1/2  text-2xl   max-w-xl lg:text-right text-[#FFF6E9]">
              <p>
                Unless You're{" "}
                <span>
                  {" "}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#E3CCE1"
                    padding={"-px"}
                    strokeWidth={"5px"}
                  >
                    one step ahead{" "}
                  </RoughNotation>
                </span>{" "}
                how can you trust
                <br /> they'll find what you're really after?
              </p>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="w-1/3">
              {" "}
              <div className="">
                {" "}
                <img src={"./S1Arrow.svg"} width={50} height={50} />
              </div>
              <div className="  text-xl">
                <div className="w-1/2 py-4 text-[#FFF6E9] underline">
                  {" "}
                  Discover what Placeable can offer instead
                </div>
              </div>
            </div>
            <div className="w-1/3  justify-center">
              <div className="flex justify-center">
                {" "}
                <img src={"./S1play.svg"} width={50} height={50} />
              </div>
              <div className="flex underline justify-center text-xl py-6 text-[#FFF6E9]">
                {" "}
                Watch the full video
              </div>
            </div>
            <div className="w-1/3"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
