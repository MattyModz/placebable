import React from "react";
import { RoughNotation } from "react-rough-notation";
function Sectionfive() {
  return (
    <div className="bg-hero bg-cover  text-[#FFF6E9] lg:px-4 p-4 ">
      <div className="h-full container overflow-hidden ">
        <div className="max-w-6xl">
          <div className="lg:text-9xl text-6xl font-bold text-[#FFF6E9] ">
            The
            <br />
            <span className="">
              {" "}
              <RoughNotation
                type="underline"
                show={true}
                color="#C096D6"
                padding={"-6px"}
                strokeWidth={"10px"}
              >
                fundamentals{" "}
              </RoughNotation>
            </span>
          </div>
        </div>
        <div className="lg:flex lg:items-center py-16">
          <div className=""></div>
          <div className="">
            <div className="lg:flex justify-between">
              <div className="p-4">
                <div>
                  {" "}
                  <img src={"/icons/S3icon1.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold py-4">
                  Reduced time (& cost)
                </div>

                <div>
                  <p className="py-4 text-xl">
                    An in-depth, upfront brief means we’re able to identify
                    high-quality candidates for you, quicker.
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
                  Superior compatibility
                </div>
                <div>
                  <p className="py-4 text-xl">
                    With pre-defined quality gates in place, you’ll see only the
                    best-suited candidates advance through the process.
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
                  Inclusion at the forefront
                </div>
                <div>
                  <p className="py-4 text-xl">
                    We have a duty to reach everyone. That’s why our search
                    strategy targets talent pools as diverse as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center py-16">
          <div className=""></div>
          <div className="">
            <div className="lg:flex justify-between">
              <div className="p-4">
                <div>
                  {" "}
                  <img src={"/icons/S3icon1.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold py-4">
                  Real-time search insights{" "}
                </div>

                <div>
                  <p className="py-4 text-xl">
                    What’s ours is yours: by sharing our search data trends you
                    can always stay one step ahead of the market.
                  </p>
                </div>
              </div>
              <div className="p-4">
                {" "}
                <div>
                  {" "}
                  <img src={"/icons/S3icon2.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold py-4">A personal touch</div>
                <div>
                  <p className="py-4 text-xl">
                    You’ll benefit from a dedicated account manager – from the
                    initial brief through to post-hire support.
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

export default Sectionfive;
