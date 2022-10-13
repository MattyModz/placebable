import React from "react";
import Nav from "../Header/nav";
import Image from "next/image";
function Indexcandid() {
  return (
    <>
      <header className="relative flex items-center  justify-center w-full  overflow-hidden px-4 bg-black lg:h-screen ">
        <div className=" relative w-full z-30   h-full ">
          <Nav />
          <section className="container   h-screen   ">
            <div className="grid grid-rows-2 items-stretch">
              <div className="   lg:w-1/2 justify-start flex ">
                <Image src={"/p3/hero/head.svg"} width={900} height={500} />
              </div>
              <div className="     items-end flex">
                {" "}
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
            </div>
          </section>
        </div>
        <video
          autoPlay
          poster=""
          loop
          muted
          class="absolute z-10 w-auto min-w-full  max-w-none"
        >
          <source src="/Landing page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      {/* <Modal open={showModal} onClose={() => setShowModal(false)}></Modal> */}
    </>
  );
}

export default Indexcandid;
