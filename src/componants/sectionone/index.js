import React from "react";

function Sectionone() {
  return (
    <div className="h-screen bg-[#FFF6E9] grid items-center p-4">
      <div className="flex ">
        <div className="lg:w-1/3"></div>
        <div className="lg:w-1/3  ">
          <div className="text-center lg:p-24 ">
            <div className="font-bold text-3xl">Joey and Toby</div>
            <div className="font-bold text-3xl">Placeable, Co-Founders</div>
            <br></br>
            <br></br>
            <div className="text-center text-xl">
              “You can’t. Businesses and candidates are people, not numbers.
              Great recruitment can never be a transaction.
              <br />
              <br /> And that’s why we founded Placeable. <br />
              <br />
              Every business, every person, has potential. If things line up, We
              know you’ll fly. <br />
              <br />
              We listen. We analyse. We compare. Because if we don’t, what value
              are we really adding? <br />
              <br />
              We work to find only the candidates and opportunities that are
              specifically suited to you. Because whether you’re building a team
              or joining one, good enough shouldn’t ever cut it.
              <br />
              <br />
            </div>
            {/* <div className="text-center">
              Find out how we're doing things differently
            </div> */}
          </div>
        </div>
        <div className="lg:w-1/3"></div>
      </div>
    </div>
  );
}

export default Sectionone;
