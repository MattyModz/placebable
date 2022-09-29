import Link from "next/link";
import Contact from "./contact";
const Footer = () => {
  return (
    <div className="bg-[#303030] h-screen lg:h-full text-[#FFF6E9] p-4">
      <section class=" py-8  container px-4 lg:px-0">
        <div className="flex">
          <div className="lg:w-1/2">
            <div className="font-bold text-7xl mb-8 text-[#C096D6]">
              Get In Touch
            </div>
            <div className="text-4xl text-[#FFF6E9]">
              To Reach Us, Fill Out The Contact Form And We&apos;ll Get Right
              Back To You.
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2">
              <div className="bg-gray-300 "></div>
            </div>
          </div>
        </div>
        <div className="flex py-16">
          <div className="lg:w-1/4"></div>
          <div className="lg:w-3/4 w-full">
            {" "}
            <Contact />
          </div>
        </div>

        <div>
          <div className="font-bold mb-8 text-[#D9D9D9] text-2xl">
            <Link href={"/"} passHref>
              Recruitment 2.0
            </Link>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <div className="flex justify-between">
                <div>
                  {" "}
                  <Link href={"/client"} passHref>
                    Client
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link href={"/candidate"} passHref>
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
                  <Link href={"/privacy"} passHref>
                    Privacy
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={
                      "https://www.linkedin.com/company/placeableconsulting"
                    }
                    passHref
                  >
                    IN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
