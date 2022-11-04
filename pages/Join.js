import React from "react";
// import Nav from "../Header/nav";
// import Modal from "../Modal/Modal";
import Image from "next/image";
import Link from "next/link";
function indexjoin() {
  return (
    <>
      <section className=" grid grid-cols-1 content-center bg-[#303030] h-screen">
        <div className="">
          <div className="align-middle flex justify-center text-8xl font-inter font-bold text-white">
            Coming Soon
          </div>
          <div className=" flex justify-center text-white text-3xl">
            Whoops no content here!
          </div>
          <div className="flex justify-center py-4">
            <Link href={"/"} passHref>
              <button className="font-interr btnPrimary rounded-xl text-l text-white py-2 p-2">
                Return Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default indexjoin;

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
