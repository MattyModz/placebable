import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#303030] px-4 py-8 lg:py-0 ">
      <div className="font-bold container  mb-8 text-[#D9D9D9] text-2xl">
        <Link href={"/"} passHref>
          Recruitment 2.0
        </Link>
      </div>
      <div className="flex container pb-8 text-[#FFF6E9]">
        <div className="w-1/2">
          <div className="flex justify-between">
            <div>
              {" "}
              <Link href={"/clientss"} passHref>
                Client
              </Link>
            </div>
            <div>
              {" "}
              <Link href={"/candidatess"} passHref>
                Candidate
              </Link>
            </div>
            <div>
              {" "}
              <Link href={"/joinus"} passHref>
                Join Us
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex justify-end px-8">
            <div className="mr-4">
              {" "}
              <Link href={"policy/privacy-policy"} passHref>
                Privacy
              </Link>
            </div>
            <div>
              {" "}
              <Link
                href={"https://www.linkedin.com/company/placeableconsulting"}
                passHref
              >
                IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
