import React from "react";
import Image from "next/image";

function Candidfive() {
  return (
    <div className="bg-cpromise bg-cover h-full text-[#FFF6E9] lg:px-4 p-4  xl:flex ">
      <div className=" container overflow-hidden ">
        <div id="3" className="">
          <Image src={"/p3/promise/title.svg"} width={500} height={300} />
        </div>
        <div className=" lg:grid grid-cols-3">
          <div className="">
            {" "}
            <div className="p-4">
              <div>
                {" "}
                <img src={"/p3/promise/1.svg"} height={50} width={50} />
              </div>
              <div className="text-2xl font-bold ">Lets talk</div>

              <div>
                <p className=" text-xl">
                  How can we find you the right role if we haven’t taken the
                  time to learn what makes you really tick?
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="p-4">
              {" "}
              <div>
                {" "}
                <img src={"/p3/promise/2.svg"} height={50} width={50} />
              </div>
              <div className="text-2xl font-bold ">
                Leave the hard work to us
              </div>
              <div>
                <p className=" text-xl">
                  Once we know what you’re all about, kick back and relax.
                  Finding brilliant roles is what we’re all about.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="p-4">
              {" "}
              <div>
                {" "}
                <img src={"/p3/promise/3.svg"} height={50} width={50} />
              </div>
              <div className="text-2xl font-bold ">Quality over quantity</div>
              <div>
                <p className=" text-xl">
                  We could nudge you towards roles that need filling, but we
                  won’t. You’ll only hear from us when we’re on to a winner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="  lg:py-16 lg:grid grid-cols-3">
          <div className="grid-cols-1">
            <div className="lg:flex justify-between">
              <div className="p-4">
                <div>
                  {" "}
                  <img src={"/p3/promise/4.svg"} height={50} width={50} />
                </div>
                <div className="text-2xl font-bold ">Impartial advice</div>

                <div>
                  <p className=" text-xl">
                    If we don’t think something is in your best interests, we’ll
                    tell you. Honesty is the cornerstone of our approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid-cols-1">
            {" "}
            <div className="p-4">
              {" "}
              <div>
                {" "}
                <img src={"/p3/promise/5.svg"} height={50} width={50} />
              </div>
              <div className="text-2xl font-bold ">
                {" "}
                You’re not another pay cheque{" "}
              </div>
              <div>
                <p className=" text-xl">
                  Earning commission is great. But it’s nothing compared to the
                  rush of helping you land your perfect job.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex justify-end py-16">
              <div>
                <div className="flex justify-end">
                  <a href="#4">
                    <img src={"/icons/S3Arrow.svg"} height={50} width={50} />
                  </a>
                </div>
                <div>
                  <a href="#4">
                    <p className="underline text-right text-xl font-bold cursor">
                      Learn how Placeable
                      <br /> can help you
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidfive;

//  <div className=""></div>
//         <div className="">

//             </div>

//             <div className="">
//               {" "}
//               <div></div>
//               <div className="hidden">
//                 {" "}
//                 <img src={"/icons/S3icon2.svg"} height={50} width={50} />
//               </div>
//               <div className="text-2xl font-bold hidden">
//                 A personal touch
//               </div>
//               <div>
//                 <p className=" text-xl hidden">
//                   You’ll benefit from a dedicated account manager – from the
//                   initial brief through to post-hire support.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
