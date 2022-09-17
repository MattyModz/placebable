import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
function Sectiontwo() {
  return (
    <div className="bg-hero bg-cover text-[#FFF6E9] lg:px-4 ">
      <div className="h-full container ">
        <div className="max-w-6xl">
          <div className="text-9xl font-bold text-[#FFF6E9] px-4">
            If its{" "}
            <span>
              {" "}
              <RoughNotation
                type="underline"
                show={true}
                color="#C096D6"
                padding={"-6px"}
                strokeWidth={"14px"}
              >
                broken,{" "}
              </RoughNotation>
            </span>
            <br />
            <span>
              {" "}
              <RoughNotation
                type="circle"
                show={true}
                color="#8CD87C"
                padding={"0px"}
                strokeWidth={"16px"}
              >
                fix{" "}
              </RoughNotation>
            </span>{" "}
            it.
          </div>
          <p className="text-4xl p-4">
            Why{" "}
            <span>
              {" "}
              <RoughNotation
                type="underline"
                show={true}
                color="#8CD87C"
                padding={"-6px"}
                strokeWidth={"14px"}
              >
                Placeable{" "}
              </RoughNotation>
            </span>
          </p>
        </div>
        <div className="lg:flex lg:items-center py-16">
          <div className="lg:w-1/4"></div>
          <div className="lg:w-3/4">
            <div className="lg:flex justify-between">
              <div className="p-4">
                <div>
                  {" "}
                  <img src={"/icons/S3icon1.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold py-4">Crystal Clarity</div>

                <div>
                  <p className="py-4 text-xl">
                    First thing’s first: we listen. We’ll work with you to
                    understand what you need from us, as well as what we need
                    from you. This way we’ll not only get the best result, we’ll
                    get to it quickly.
                  </p>
                </div>
              </div>
              <div className="p-4">
                {" "}
                <div>
                  {" "}
                  <img src={"/icons/S3icon2.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold py-4">
                  Uncompromising Quality
                </div>
                <div>
                  <p className="py-4 text-xl">
                    Throw mud at the wall and see what sticks? Not a chance. We
                    don’t make concessions when it comes to people’s futures. We
                    hone our data and our process to deliver outstanding results
                    – every time.
                  </p>
                </div>
              </div>
              <div className="p-4">
                {" "}
                <div>
                  {" "}
                  <img src={"/icons/S3icon3.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold py-4">
                  Wholehearted honesty
                </div>
                <div>
                  <p className="py-4 text-xl">
                    Doing what’s right for you is incredibly important to us.
                    That’s why you can count on us to give honest and open
                    advice throughout the process if you ever need our help to
                    reach a decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <div>
            <div className="flex justify-end">
              <img src={"/icons/S3Arrow.svg"} height={50} width={50} />
            </div>
            <div>
              <p className="underline text-right text-xl font-bold cursor">
                Learn how Placeable
                <br /> can help you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectiontwo;
