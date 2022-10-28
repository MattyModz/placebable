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
      <header className="relative flex items-center justify-center w-full      overflow-hidden px-4">
        <div className="relative w-full z-30    ">
          <Nav />
          <section className=" container grid grid-rows-2 ">
            <div className=" 2xl:text-5xl xl:text-5xl lg:4xl text-4xl">
              <div className=" font-bold text-[#FFF6E9] ">Recruitment 2.0</div>
              <div className="py-4 -ml-4">
                <Image
                  src={"/lines/index/thejob.svg"}
                  width={450}
                  height={220}
                />
              </div>
            </div>

            <div className="flex justify-end   ">
              {" "}
              <Image src={"/lines/index/sub.svg"} width={450} height={220} />
            </div>
            <div className="lg:flex    container">
              <div className="lg:w-1/3">
                {" "}
                <div className="">
                  {" "}
                  <a href="#1">
                    <img src={"./S1Arrow.svg"} width={50} height={100} />
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
          class="absolute z-10 absolute z-10 w-auto w-full "
        >
          <source src="/Landing page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>

      <Modal
        content={"https://www.youtube.com/embed/3LKskVWLKcQ"}
        open={showModal}
        onClose={() => setShowModal(false)}
      ></Modal>
    </>
  );
}

export default Hero;
