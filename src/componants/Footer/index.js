import Link from "next/link";
import Contact from "./contact";
const Footer = () => {
  return (
    <section class="bg-white px-8 lg:px-24 mb-8">
      <div className="flex">
        <div className="lg:w-1/2">
          <div className="font-bold text-7xl mb-8">Get In Touch</div>
          <div className="text-4xl">
            To Reach Us, Fill Out The Contact Form And We&apos;ll Get Right Back
            To You.
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
        <div className="mb-8">Placeable</div>
        <div className="font-bold mb-8">Recruitment 2.0</div>
        <div className="flex">
          <div className="w-1/2">
            <div className="flex justify-between">
              <div>
                {" "}
                <Link href={""} passHref>
                  Client
                </Link>
              </div>
              <div>
                {" "}
                <Link href={""} passHref>
                  Candidate
                </Link>
              </div>
              <div>
                {" "}
                <Link href={""} passHref>
                  Join Us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-end px-8">
              <div className="mr-4">
                {" "}
                <Link href={""} passHref>
                  Privacy Policy
                </Link>
              </div>
              <div>
                {" "}
                <Link href={""} passHref>
                  IN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
