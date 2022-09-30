// import Link from "next/link";
import Contact from "./contact";
const Contactform = () => {
  return (
    <div className="bg-[#303030] h-screen  text-[#FFF6E9] p-4">
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
      </section>
    </div>
  );
};

export default Contactform;
