import React from "react";

function indexclient() {
  return (
    <div className="bg-[#898989] p-6 h-screen ">
      <section className="h-full container py-16 bg-[#898989] ">
        <div className="flex ">
          <div className="text-6xl font-bold">Clients</div>
          <div className=""></div>
        </div>
        <div className="  py-8 lg:w-1/2 justify-start flex">
          <div className="">
            <p>
              Dragging searches, irrelevant metrics, ghost candidates… It’s
              everything you shouldn&apos;t have to expect when turning to a
              recruiter to help fill your roles. So don’t.
            </p>
          </div>
        </div>

        <div className="lg:flex ">
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
            <div className="flex underline justify-center text-xl py-6 text-[#FFF6E9]">
              {" "}
              Watch the full video
            </div>
          </div>
          <div className="lg:w-1/3"></div>
        </div>
      </section>
    </div>
  );
}

export default indexclient;
