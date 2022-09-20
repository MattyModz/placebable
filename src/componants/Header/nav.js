import Link from "next/link";

export default function Nav() {
  // const router = useRouter;

  return (
    <>
      <div className="bg-[#898989] ">
        <div
          class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row l tails-selected-element "
          contenteditable="true"
        >
          <a
            href="#_"
            class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >
            <div className="flex lg:justify-center sm:justify-start">
              <Link href={"/"} passHref>
                <img src={"/Logo.svg"} height={150} width={200} />
              </Link>
            </div>
          </a>
          <div className=" w-1/2 hidden lg:block">
            <nav class=" pt-3 font-bold pb-5 mb-4 text-base border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3  md:pb-0 flex justify-between">
              <Link
                href="/clients"
                class="mr-6 font-bold text-xl leading-6 text-[#FFF6E9] hover:text-gray-900"
              >
                Client
              </Link>
              <a
                href="#_"
                class="mr-6 font-bold text-xl leading-6 text-[#FFF6E9] hover:text-gray-900"
              >
                Candidate
              </a>
              <a
                href="#_"
                class="mr-6 font-bold text-xl leading-6 text-[#FFF6E9] hover:text-gray-900"
              >
                Join Us
              </a>
              <a
                href="#_"
                class="font-bold text-xl leading-6 text-[#FFF6E9] md:mr-6 hover:text-gray-900"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
