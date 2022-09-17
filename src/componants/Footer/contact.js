import React from "react";

function Contact() {
  return (
    <div class="  lg:max-w-7xl  tails-selected-element" contenteditable="true">
      <form class="grid  gap-4  sm:grid-cols-2">
        <div>
          <input
            name="first-name"
            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="Name*"
          />
        </div>

        <div>
          <input
            name="last-name"
            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div class="sm:col-span-2">
          <input
            name="company"
            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div class="sm:col-span-2">
          <input
            name="email"
            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div class="sm:col-span-2">
          <input
            name="subject"
            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          />
        </div>

        <div class="sm:col-span-2">
          <textarea
            name="message"
            class="w-full h-32 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            placeholder="message*"
          ></textarea>
        </div>

        <div class="flex items-center justify-end sm:col-span-2">
          <button class="inline-block rounded-l px-8 py-3 text-sm  text-center text-white transition duration-100 bg-black ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
