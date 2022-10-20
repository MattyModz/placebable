import React from "react";

function Contact() {
  return (
   <>
   <div>

   </div>
   
   
   
    <div
      className="  lg:max-w-7xl  tails-selected-element"
      contenteditable="true"
    >
      <form className="grid  gap-4  sm:grid-cols-2 ">
        <div>
          <input
            name="first-name"
            className="w-full  px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="Name*"
          />
        </div>

        <div>
          <input
            name="last-name"
            className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="Enquiry*"
          />
        </div>

        <div className="">
          <input
            name="Phone*"
            className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="Email"
          />
        </div>

        <div className="">
          <input
            name="email*"
            className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="Phone"
          />
        </div>

        <div className="sm:col-span-2">
          <input
            name="subject"
            className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="Business Name"
          />
        </div>

        <div className="sm:col-span-2">
          <textarea
            name="message"
            className="w-full h-32 px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="message*"
          ></textarea>
        </div>

        <div className="flex items-center justify-end sm:col-span-2">
          <button className="inline-block rounded-l px-8 py-3 text-sm  text-center text-white transition duration-100 bg-[#C096D6] ">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Contact;
