import React from "react";
import Image from "next/image";

function Sectionfive() {
  return (
    <div className="bg-cfund bg-cover  text-[#FFF6E9] lg:px-4 p-4  xl:flex ">
      <div className=" container overflow-hidden ">
        <div className="">
          <Image src={"/icons/clients/fund.svg"} width={1000} height={300} />
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
                <div className="text-2xl font-bold ">Reduced time (& cost)</div>

                <div>
                  <p className=" text-xl">
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
                <div className="text-2xl font-bold ">
                  Superior compatibility
                </div>
                <div>
                  <p className=" text-xl">
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
                <div className="text-2xl font-bold ">
                  Inclusion at the forefront
                </div>
                <div>
                  <p className=" text-xl">
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
                <div className="text-2xl font-bold ">
                  Real-time search insights{" "}
                </div>

                <div>
                  <p className=" text-xl">
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
                <div className="text-2xl font-bold ">A personal touch</div>
                <div>
                  <p className=" text-xl">
                    You’ll benefit from a dedicated account manager – from the
                    initial brief through to post-hire support.
                  </p>
                </div>
              </div>
              <div className="">
                {" "}
                <div>
                  {" "}
                  <img src={"/icons/S3icon2.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold ">A personal touch</div>
                <div>
                  <p className=" text-xl">
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
