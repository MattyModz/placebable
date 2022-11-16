import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const { register, handleSubmit } = useForm();
  const [formStatus, setFormStatus] = useState(false);
  async function onSubmitForm(values) {
    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/mail`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);

      if (response.status == 200) {
        setFormStatus(true);
      }
    } catch (err) {}
  }

  return (
    <>
      <div></div>

      <div
        className="  lg:max-w-7xl  tails-selected-element"
        contenteditable="true"
      >
        <form
          className="grid  gap-4  sm:grid-cols-2 "
          onSubmit={handleSubmit(onSubmitForm)}
          style={formStatus ? { display: "none" } : { display: "" }}
        >
          <div>
            <input
              name="first-name"
              {...register("firstName", { required: true })}
              className="w-full  px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              placeholder="Name*"
            />
          </div>

          <div>
            <input
              name="last-name"
              {...register("LastName", { required: true })}
              className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              placeholder="Enquiry*"
            />
          </div>

          <div className="">
            <input
              name="Phone*"
              {...register("Phone", { required: true })}
              className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              placeholder="Email"
            />
          </div>

          <div className="">
            <input
              name="email*"
              {...register("Email", { required: true })}
              className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              placeholder="Phone"
            />
          </div>

          <div className="sm:col-span-2">
            <input
              name="subject"
              {...register("Subject", { required: true })}
              className="w-full px-3 py-2 text-gray-800 transition duration-100  rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              placeholder="Business Name"
            />
          </div>

          <div className="sm:col-span-2">
            <textarea
              name="message"
              {...register("Message", { required: true })}
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
      <div style={formStatus ? { display: "" } : { display: "none" }}>
        <motion.h2
          className="text-white text-5xl font-bold flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.55 },
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-3xl">Thankyou we will be in touch!</h2>
        </motion.h2>
      </div>
    </>
  );
}

export default Contact;
