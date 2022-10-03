import React from "react";
import Nav from "../Header/nav";
import Modal from "../Modal/Modal";
import Image from "next/image";
import { useState } from "react";
// import { RoughNotation } from "react-rough-notation";
function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="relative flex items-center justify-center w-full   overflow-hidden px-4">
        <div className="relative w-full z-30  h-full  ">
          <Nav />
          <section className="h-full container   ">
            <div className=" 2xl:text-6xl xl:text-6xl lg:5xl text-5xl">
              <div className=" font-bold text-white  py-8">Recruitment 2.0</div>
              <div className="py-8 ">
                <Image
                  src={"/lines/index/thejob.svg"}
                  width={500}
                  height={250}
                />
              </div>
            </div>
            <div className="flex justify-end">
              {" "}
              <Image src={"/lines/index/sub.svg"} width={500} height={250} />
            </div>
          </section>
          <div className="lg:flex  ">
            <div className="lg:w-1/3">
              {" "}
              <div className="">
                {" "}
                <img src={"./S1Arrow.svg"} width={50} height={50} />
              </div>
              <div className="  text-xl">
                <div className="w-1/2 py-4 text-[#FFF6E9] underline">
                  {" "}
                  Discover why its time to give Placeable a shot
                </div>
              </div>
            </div>
            <div className="lg:w-1/3  justify-center">
              <div className="flex justify-center">
                {" "}
                <img src={"./S1play.svg"} width={50} height={50} />
              </div>
              <div
                className="flex underline justify-center text-xl py-6 text-[#FFF6E9]"
                // onClick={() => {
                //   setShowModal(true);
                // }}
              >
                {" "}
                Watch the full video
              </div>
            </div>
            <div className="lg:w-1/3"></div>
          </div>
          <section className="container">
            <div className="lg:flex">
              {/* <div className="lg:w-1/2">test</div> */}
              <div className="lg:w-1/2"> </div>
            </div>
          </section>
        </div>
        <video
          autoPlay
          loop
          muted
          class="absolute z-10 absolute z-10 w-auto min-w-full  max-w-none "
        >
          <source src="/Landing page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>

      <Modal open={showModal} onClose={() => setShowModal(false)}></Modal>
    </>
  );
}

export default Hero;

// <div className="text-6xl xl:text-6xl lg:5xl font-bold max-w-xl text-[#FFF6E9]">
//             The Job market has{" "}
//             <span>
//               <RoughNotation
//                 type="circle"
//                 show={true}
//                 color="#F98D2B"
//                 padding={"2px"}
//                 strokeWidth={"10px"}
//                ={"1"}
//               >
//                 evolved.{" "}
//               </RoughNotation>
//             </span>
//             Career expectations have{" "}
//             <span>
//               {" "}
//               <RoughNotation
//                 type="underline"
//                 show={true}
//                 color="#8CD87C"
//                 padding={"2px"}
//                 strokeWidth={"10px"}
//                ={"2"}
//               >
//                 changed.{" "}
//               </RoughNotation>
//             </span>
//           </div>
//           <div className=""></div>

//  But Recruiters?
//                 <br /> They&apos;re
//                 <span>
//                   {" "}
//                   <RoughNotation
//                     type="underline"
//                     show={true}
//                     color="#F98D2B"
//                     padding={"2px"}
//                     strokeWidth={"10px"}
//                    ={"3"}
//                   >
//                     still the same.{" "}
//                   </RoughNotation>
//                 </span>
//               </div>
//             </div>
//             <div className="  flex justify-end">
//               <div className="w-1/2"></div>
//               <div className="w-1/2  text-2xl   max-w-xl lg:text-right text-[#FFF6E9]">
//                 <p>
//                   Unless You&apos;re{" "}
//                   <span>
//                     {" "}
//                     <RoughNotation
//                       type="underline"
//                       show={true}
//                       color="#E3CCE1"
//                       padding={"-px"}
//                       strokeWidth={"5px"}
//                      ={"4"}
//                     >
//                       one step ahead{" "}
//                     </RoughNotation>
//                   </span>{" "}
//                   how can you trust
//                   <br /> they&apos;ll find what you&apos;re really after?
//                 </p>
//               </div>
