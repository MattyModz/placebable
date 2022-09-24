import React from "react";
import Nav from "../Header/nav";
import Modal from "../Modal/Modal";

function indexclient() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="relative flex items-center justify-center  h-full  ">
        <div className=" relative w-full z-30  lg:h-screen p-6  ">
          <Nav />
          <section className="  grid items-stretch h-full container   ">
            <div>
              <div className="flex py-12">
                <div className="text-6xl  font-bold text-white ">Clients</div>
              </div>
              <div className="   lg:w-1/2 justify-start flex">
                <div className="">
                  <p className="text-3xl text-[#FFF6E9]">
                    Dragging searches, irrelevant metrics, ghost candidates…{" "}
                    <br />
                    It’s everything you shouldn&apos;t have to expect when
                    turning
                    <br />
                    to a recruiter to help fill your roles. So don’t.
                  </p>
                  <div className="text-3xl text-white font-bold py-8">
                    <p>So don&apos;t</p>
                  </div>
                </div>
              </div>
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
          poster=""
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/Landing page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      <Modal open={showModal} onClose={() => setShowModal(false)}></Modal>
    </>
  );
}

export default indexclient;
