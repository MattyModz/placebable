import React from "react";
// import Card from "./card";
import Image from "next/image";
// import { RoughNotation } from "react-rough-notation";
// import Card2 from "./cardpurp";
function Candidhow({}) {
  return (
    <div className="bg-[#1E1E1E]  p-8 ">
      <div className=" h-full  p-8">
        <div className="  lg:bg-candidhowbg  bg-no-repeat lg:h-screen relative bg-contain  container  ">
          <div className=" ">
            <div className="lg:flex-col-2 s:flex-col-reverse  md:justify-end lg:flex ">
              <div className=" xl:block 2xl:block w-full lg:block   ">
                <div className="grid lg:grid-rows-2  w-full">
                  <div className="flex justify-end -mt-8">
                    {" "}
                    <Image
                      src={"/p3/howit/title.svg"}
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className="grid items-end">
                    <div>
                      <div className="container  hidden lg:block  ">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="lg:hidden sm:blocks p-8 bg-candidhowbgmob bg-no-repeat  bg-center h-full  ">
          <div className="lg:flex ">
            <div className="lg:w-1/2 2xl:w-1/2 xl:w-1/2 lg:p-10 lg:ml-20">
              {" "}
              <div className="lg:flex lg:mb-0 ">
                <div className="flex justify-center">
                  <Image src={"/p3/howit/1.svg"} height={350} width={500} />{" "}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2  "></div>
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center">
                <Image src={"/p3/howit/2.svg"} height={350} width={500} />{" "}
              </div>
            </div>
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center">
                <Image src={"/p3/howit/3.svg"} height={350} width={500} />{" "}
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center">
                <Image src={"/p3/howit/4.svg"} height={350} width={500} />{" "}
              </div>
              <div className="lg:hidden block lg:mb-0 ">
                <div className="flex justify-center">
                  <Image src={"/p3/howit/5.svg"} height={350} width={500} />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Candidhow;

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
