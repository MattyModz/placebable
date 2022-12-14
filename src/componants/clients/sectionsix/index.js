import React from "react";
// import Card from "./card";
import Image from "next/image";
// import { RoughNotation } from "react-rough-notation";
// import Card2 from "./cardpurp";
function Sectionsix({}) {
  return (
    <div className="bg-[#303030]  lg:h-full lg:p-32 p-4 ">
      <div id="4" className="grid   ">
        <div className="lg:flex justify-center  py-4 hidden   ">
          <Image
            src={"/icons/clients/howit/all.svg"}
            width={1100}
            height={700}
          />
          <div className="absolute    w-full lg:flex justify-end px-4 container hidden  ">
            {" "}
            <Image
              src={"/icons/clients/howit/how.svg"}
              width={400}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="container -mt-32 hidden lg:block ">
        <div>
          <Image src={"/Phone.svg"} height={50} width={50} />{" "}
        </div>
        <a href="#5">
          <div className="underline  font-medium text-[#FFF6E9]">
            Schedule your
            <br />
            discovery call
          </div>
        </a>
      </div>
      <div className="lg:hidden md:flex justify-center mb-4 py-8">
        {" "}
        <Image src={"/icons/clients/howit/how.svg"} width={500} height={250} />
      </div>
      <div className="  pt-32 pb-32  bg-clihowbgassetmob lg:hidden bg-no-repeat bg-center bg-contain">
        <section className="lg:hidden sm:blocks ">
          <div className="lg:flex ">
            <div className="lg:w-1/2 2xl:w-1/2 xl:w-1/2 lg:p-10 lg:ml-20">
              {" "}
              <div className="lg:flex lg:mb-0 ">
                <div className="flex justify-center">
                  <Image
                    src={"/icons/clients/howit/1.svg"}
                    height={350}
                    width={500}
                  />{" "}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2  "></div>
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center ">
                <Image
                  src={"/icons/clients/howit/2.svg"}
                  height={350}
                  width={500}
                />{" "}
              </div>
            </div>
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center">
                <Image
                  src={"/icons/clients/howit/3.svg"}
                  height={350}
                  width={500}
                />{" "}
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center">
                <Image
                  src={"/icons/clients/howit/4.svg"}
                  height={350}
                  width={500}
                />{" "}
              </div>
              <div className="lg:hidden block lg:mb-0 ">
                <div className="flex justify-center">
                  <Image
                    src={"/icons/clients/howit/5.svg"}
                    height={350}
                    width={500}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container md:hidden ">
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
//            We???ll work together to make sure we understand exactly what you???re
//            looking for.
//          </p>
//        </div>

//        <div className="lg:w-1/3"></div>
//      </div>
//    </div>
//  </div>;
