import React from "react";
import { RoughNotation } from "react-rough-notation";
function Sectionfour() {
  return (
    <div className="bg-[#FFF6E9]  h-full overflow-hidden">
      <div className=" relative h-full container  lg:bg-p2topbg bg-no-repeat bg-[#FFF6E9] ">
        <div className="container  p-4">
          <div className="lg:flex  container">
            <div className="lg:w-1/2"></div>

            <div className="lg:w-1/2  text-right text-7xl py-4">
              <div className="lg:text-9xl font-bold">
                What our <br />
                <span>
                  {" "}
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#C096D6"
                    padding={"-px"}
                    strokeWidth={"25px"}
                  >
                    clients
                  </RoughNotation>
                </span>{" "}
                <br />
                say
              </div>
            </div>
          </div>
          <div className="lg:flex  justify-center max-w-8xl lg:-mt-48">
            <div className="lg:w-1/3">
              {" "}
              <div className="bg-[#8CD87C] p-8 m-4 rounded-xl">
                <p>
                  “We are huge Placeable fans at Multiverse; they&apos;re a joy
                  to partner with, and we&apos;ve made more Go To Market hires
                  with them over the last year than through any other source. We
                  have found their ways of working to be refreshing; they are
                  thorough and reliable; candidates love and trust them; and
                  they aren&apos;t afraid to challenge us in the right moments.”
                </p>
                <h3 className="py-4 text-2xl font-bold">
                  Reginoal director at Multiverse | <br />
                  <span>Libby Derbyshire</span>
                </h3>
              </div>
            </div>
            <div className="lg:w-1/3"></div>
            <div className="lg:w-1/3"></div>
          </div>
          <div className="flex -8 justify-center">
            <div className="lg:w-1/3"></div>
            <div className="lg:w-1/3">
              <div className="bg-[#C096D6] rounded-xl p-8 lg:-mt-24 m-4">
                <p>
                  “We are huge Placeable fans at Multiverse; they&apos;re a joy
                  to partner with, and we&apos;ve made more Go To Market hires
                  with them over the last year than through any other source. We
                  have found their ways of working to be refreshing; they are
                  thorough and reliable; candidates love and trust them; and
                  they aren&apos;t afraid to challenge us in the right moments.”
                </p>
                <h3 className="py-4 text-2xl font-bold">
                  Reginal director at Multiverse | <br />
                  <span>Libby Derbyshire</span>
                </h3>
              </div>
            </div>
            <div className="lg:w-1/3"></div>
          </div>
          <div className="lg:flex ">
            <div className="lg:lg:w-1/3">
              {" "}
              <div className="px-4">
                {" "}
                <img src={"./S1Arrow.svg"} width={50} height={50} />
              </div>
              <div className="  text-xl">
                <div className="lg:w-1/2 px-4 text-black underline">
                  {" "}
                  Explore our fundamentals
                </div>
              </div>
            </div>
            <div className="lg:lg:w-1/3  justify-center"></div>
            <div className="lg:lg:w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionfour;
