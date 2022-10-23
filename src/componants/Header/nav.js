import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  // const router = useRouter;

  const [Menu, showMenu] = useState(false);
  return (
    <nav className=" w-full select-none shadow-sm container ">
      <div className="flex items-center justify-between h-20  py-2 container md:h-24 sm:box-content">
        <div className="flex items-center ">
          <a
            href="#_"
            className="flex items-center order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
          >
            <span className=" pt-2 text-xl font-black leading-none text-gray-900 select-none logo">
              <Link href={"/"} passHref>
                <div className="">
                  <Image
                    src={"/Logo.svg"}
                    width={150}
                    height={200}
                    alt="Logo"
                  />
                </div>
              </Link>
            </span>
          </a>
        </div>
        <div>
          <div className="py-2 text-white font-bold cursor-pointer sm:block md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none">
            <svg
              onClick={() => showMenu((state) => !Menu)}
              aria-haspopup="true"
              aria-label="Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 "
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
          </div>
          <div className={`${Menu ? "" : "hidden md:block lg:block "}`}>
            <div className="fixed  top-0 z-30 block text-gray-500 cursor-pointer pt-7 sm:pt-8 md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none">
              <svg
                onClick={() => showMenu((state) => !Menu)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <ul className="bg-gray-500 lg:bg-gray-50/0 md:bg-gray-50/0 fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center py-8 space-y-8 text-3xl md:space-y-0 md:bg-none md:text-base md:flex md:flex-row md:relative">
              <li
                className="text-white font-bold cursor-pointer hover:text-gray-400 md:ml-10"
                onClick={() => showMenu((state) => !Menu)}
              >
                <Link href={"/clients"} passHref>
                  Client
                </Link>
              </li>

              <li
                className="text-white font-bold cursor-pointer hover:text-gray-400 md:ml-10"
                onClick={() => showMenu((state) => !Menu)}
              >
                <Link href={"/candidates"} passHref>
                  Candidate
                </Link>
              </li>
              {/* <li
                className="text-white font-bold cursor-pointer hover:text-gray-400 md:ml-10"
                onClick={() => showMenu((state) => !Menu)}
              >
                <Link href={"/contact"} passHref>
                  Join us
                </Link>
              </li> */}
              <li
                className="text-white font-bold cursor-pointer hover:text-gray-400 md:ml-10"
                onClick={() => showMenu((state) => !Menu)}
              >
                <Link href={"#5"} passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
