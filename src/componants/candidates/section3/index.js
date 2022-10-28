import React from "react";
// import Card from "./card";
import Image from "next/image";
// import { RoughNotation } from "react-rough-notation";
// import Card2 from "./cardpurp";
function Candidhow({}) {
  return (
    <div className="bg-[#303030]  lg:h-full  p-4 lg:p-32 ">
      <div className="grid   ">
        <div className="lg:flex justify-center  hidden   ">
          <Image src={"/p3/howit/bgasset.svg"} width={1100} height={700} />
          <div
            id="4"
            className="absolute   w-full lg:flex justify-end px-4 container hidden  "
          >
            {" "}
            <Image src={"/p3/howit/title.svg"} width={400} height={250} />
          </div>
        </div>
      </div>

      <div className="container -mt-36 mb-2 hidden lg:block ">
        <div className="">
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.4157 10.5036C15.2898 10.3777 15.0857 10.3777 14.9598 10.5036L12.1775 13.2859C10.4896 14.9738 10.0257 17.5318 11.0135 19.7049C14.6786 27.7682 21.141 34.2305 29.2042 37.8957C31.3774 38.8835 33.9353 38.4196 35.6233 36.7317L38.4056 33.9494C38.5315 33.8235 38.5315 33.6194 38.4056 33.4935L34.6628 29.7507C34.5647 29.6526 34.4148 29.6283 34.2907 29.6903L32.2135 30.7289C29.6554 32.0079 26.5658 31.5066 24.5435 29.4842L19.425 24.3657C17.4026 22.3434 16.9012 19.2538 18.1803 16.6956L19.2189 14.6185C19.2809 14.4944 19.2566 14.3445 19.1585 14.2464L15.4157 10.5036ZM12.1314 7.67516C13.8194 5.98719 16.5561 5.98718 18.2441 7.67516L21.9869 11.418C23.3025 12.7335 23.6286 14.7433 22.7966 16.4073L21.758 18.4845C21.2489 19.5027 21.4485 20.7324 22.2534 21.5373L27.3719 26.6558C28.1768 27.4607 29.4065 27.6603 30.4247 27.1512L32.5018 26.1126C34.1659 25.2806 36.1756 25.6067 37.4912 26.9223L41.234 30.6651C42.922 32.3531 42.922 35.0898 41.234 36.7778L38.4517 39.5601C35.5848 42.427 31.2401 43.2149 27.549 41.5371C18.6053 37.4718 11.4374 30.3038 7.37205 21.3602C5.69429 17.6691 6.48213 13.3244 9.34909 10.4575L12.1314 7.67516Z"
              fill="#F98D2B"
            />
          </svg>
        </div>
        <div className="underline  font-bold text-2xl text-[#FFF6E9]">
          Book in a chat
        </div>
      </div>
      <div className="lg:hidden md:flex justify-center mb-4  py-8">
        {" "}
        <Image src={"/icons/clients/howit/how.svg"} width={500} height={250} />
      </div>

      <div className="  pt-32 pb-32  bg-candidhowbgmob lg:hidden bg-no-repeat bg-center bg-contain">
        <section className="lg:hidden sm:blocks ">
          <div className="lg:flex ">
            <div className="lg:w-1/2 2xl:w-1/2 xl:w-1/2 lg:p-10 lg:ml-20">
              {" "}
              <div className="lg:flex lg:mb-0 ">
                {" "}
                <div className="lg:hidden md:flex justify-center ">
                  {" "}
                  <Image
                    src={"/p3/howit/1.svg"}
                    height={350}
                    width={500}
                  />{" "}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2  "></div>
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center ">
                <Image src={"/p3/howit/2.svg"} height={350} width={500} />{" "}
              </div>
            </div>
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center">
                <Image src={"/p3/howit/3.svg"} height={350} width={500} />{" "}
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2 lg:p-10 lg:mb-0 ">
              {" "}
              <div className="flex justify-center">
                <Image src={"/p3/howit/4.svg"} height={350} width={500} />{" "}
              </div>
              <div className="lg:hidden block lg:mb-0 ">
                <div className="flex justify-center">
                  <Image src={"/p3/howit/5.svg"} height={350} width={500} />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container md:hidden ">
        <div>
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.4157 10.5036C15.2898 10.3777 15.0857 10.3777 14.9598 10.5036L12.1775 13.2859C10.4896 14.9738 10.0257 17.5318 11.0135 19.7049C14.6786 27.7682 21.141 34.2305 29.2042 37.8957C31.3774 38.8835 33.9353 38.4196 35.6233 36.7317L38.4056 33.9494C38.5315 33.8235 38.5315 33.6194 38.4056 33.4935L34.6628 29.7507C34.5647 29.6526 34.4148 29.6283 34.2907 29.6903L32.2135 30.7289C29.6554 32.0079 26.5658 31.5066 24.5435 29.4842L19.425 24.3657C17.4026 22.3434 16.9012 19.2538 18.1803 16.6956L19.2189 14.6185C19.2809 14.4944 19.2566 14.3445 19.1585 14.2464L15.4157 10.5036ZM12.1314 7.67516C13.8194 5.98719 16.5561 5.98718 18.2441 7.67516L21.9869 11.418C23.3025 12.7335 23.6286 14.7433 22.7966 16.4073L21.758 18.4845C21.2489 19.5027 21.4485 20.7324 22.2534 21.5373L27.3719 26.6558C28.1768 27.4607 29.4065 27.6603 30.4247 27.1512L32.5018 26.1126C34.1659 25.2806 36.1756 25.6067 37.4912 26.9223L41.234 30.6651C42.922 32.3531 42.922 35.0898 41.234 36.7778L38.4517 39.5601C35.5848 42.427 31.2401 43.2149 27.549 41.5371C18.6053 37.4718 11.4374 30.3038 7.37205 21.3602C5.69429 17.6691 6.48213 13.3244 9.34909 10.4575L12.1314 7.67516Z"
              fill="#F98D2B"
            />
          </svg>
        </div>
        <div className="underline  font-medium text-[#FFF6E9]">
          Book in a chat
        </div>
      </div>
    </div>
  );
}

export default Candidhow;

//  <div className="lg:mr-12">
//    <div className=" bg-[#8CD87C]">
//      <div className="flex">
//        <div className="w-1/2">
//          no 1 <br />
//          <span>The Brief</span>
//        </div>
//        <div className="w-1/2"></div>
//      </div>
//      <div className="flex justify-center">
//        <div className="lg:w-1/3"></div>
//        <div className="lg:w-1/3">
//          {" "}
//          <p className="lg:w-1/3">
//            We’ll work together to make sure we understand exactly what you’re
//            looking for.
//          </p>
//        </div>

//        <div className="lg:w-1/3"></div>
//      </div>
//    </div>
//  </div>;
