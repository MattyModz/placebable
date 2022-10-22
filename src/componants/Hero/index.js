import React from "react";
import Nav from "../Header/nav";
import Modal from "../Modal/Modal";
// import Image from "next/image";
import { useState } from "react";
// import { RoughNotation } from "react-rough-notation";
function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="relative flex items-center justify-center w-full h-full    overflow-hidden px-4">
        <div className="relative w-full z-30  h-full  ">
          <Nav />
          <section className=" container grid grid-rows-2 ">
            <div className=" 2xl:text-6xl xl:text-6xl lg:5xl py-8 text-5xl">
              <div className=" font-bold text-white  ">Recruitment 2.0</div>
              <div className="py-4 ">
                <h1 className="font-bold text-[#FFF6E9] text-5xl">
                  The job market has
                  <br />
                  evolved. Career <br />
                  expectations have <br />
                  changed
                </h1>
              </div>
            </div>

            <div className="flex justify-end">
              {" "}
              <div className="font-bold text-[#FFF6E9] text-5xl text-right">
                But recruiters?
                <br />
                They&apos;re <span className="border-b-4">still the same</span>
                <br />
                <div className="font-semi-bold text-[#FFF6E9] text-2xl">
                  Unless your one step ahead how can you
                  <br />
                  trust they&apos;ll find what you&apos;re really after?
                </div>
              </div>
            </div>
            <div className="lg:flex  ">
              <div className="lg:w-1/3">
                {" "}
                <div className="">
                  {" "}
                  <a href="#1">
                    <img src={"./S1Arrow.svg"} width={50} height={50} />
                  </a>
                </div>
                <div className="  text-xl">
                  <div className="w-1/2 py-4 text-[#FFF6E9] underline">
                    {" "}
                    <a href="#1">
                      Discover why its time to give Placeable a shot
                    </a>
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
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  {" "}
                  Watch the full video
                </div>
              </div>
              <div className="lg:w-1/3"></div>
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
