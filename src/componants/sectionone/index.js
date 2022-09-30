import React from "react";

function Sectionone() {
  return (
    <div className="bg-[#FFF6E9] h-full lg:h-screen xl:h-screen 2xl:h-screen grid content-center">
      <div className="lg:h-screen h-full bg-[#FFF6E9] ">
        <div className="flex h-full ">
          <div className="lg:w-1/3"></div>
          <div className="lg:w-1/3   grid items-center">
            <div className="text-center bg-JT p-12 bg-center bg-cover ">
              <div className="font-bold text-3xl">Joey and Toby</div>
              <div className="font-bold text-3xl">Placeable, Co-Founders</div>
              <br></br>
              <br></br>
              <div className="text-center text-xl ">
                “You can’t. Businesses and candidates are people, not numbers.
                Great recruitment can never be a transaction.
                <br />
                <br /> And that’s why we founded Placeable. <br />
                <br />
                Every business, every person, has potential. If things line up,
                We know you’ll fly. <br />
                <br />
                We listen. We analyse. We compare. Because if we don’t, what
                value are we really adding? <br />
                <br />
                We work to find only the candidates and opportunities that are
                specifically suited to you. Because whether you’re building a
                team or joining one, good enough shouldn’t ever cut it.
                <br />
                <br />
                <div className="flex justify-center">
                  <img src={"/icons/S3Arrow.svg"} height={50} width={50} />
                </div>
                <div>
                  <p className="underline text-center text-xl font-bold cursor">
                    Find out how we&apos;re doing
                    <br /> things differently
                  </p>
                </div>
              </div>

              {/* <div className="text-center">
              Find out how we're doing things differently
            </div> */}
            </div>
          </div>

          <div className="lg:w-1/3"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Sectionone;

//  <video autoplay loop muted>
//    <source src="Landing page.mp4" type="video/mp4" />
//    Your browser does not support the video tag.
//  </video>;
