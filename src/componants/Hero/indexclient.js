import React from "react";
import Nav from "../Header/nav";
// import Modal from "../Modal/Modal";
import Image from "next/image";
function Indexclient() {
  return (
    <>
      <header className="relative flex items-center justify-center w-full xl:h-screen 2xl:h-screen lg:h-screen h-screen overflow-hidden px-4 bg-black  ">
        <div className=" relative w-full z-30   h-full ">
          <Nav />
          <section className="container   ">
            <div className="   lg:w-1/2 justify-start flex">
              <Image src={"/icons/clients/head.svg"} width={700} height={400} />
            </div>
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
                    Discover what Placeable can offer instead
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

export default Indexclient;

// <div className="">
//                   <p className="text-3xl text-[#FFF6E9]">
//                     Dragging searches, irrelevant metrics, ghost candidates…{" "}
//                     <br />
//                     It’s everything you shouldn&apos;t have to expect when
//                     turning
//                     <br />
//                     to a recruiter to help fill your roles. So don’t.
//                   </p>
//                   <div className="text-3xl text-white font-bold py-8">
//                     <p>So don&apos;t</p>
//                   </div>
//                 </div>
//               </div>
