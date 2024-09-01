"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="lg:p-16 lg:pb-12 p-6">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">Contact</h1>
          <Image width={211} height={15} src="/images/line.jpg" alt="line" />
        </div>

        <div className="bg-[#F8FBFB] px-8 py-16 rounded-lg mt-8">
          <h1 className="text-3xl text-gray-600 mb-4">
            I'm always open to discussing produuct
          </h1>
          <h2 className="text-2xl font-bold">design work or partnerships.</h2>

          <div className="mt-8">
            <form className="space-y-12">
              <div className="flex flex-col">
                <label>Name *</label>
                <input
                  type="text"
                  name="fullname"
                  required
                  className="border-b border-gray-300 focus:border-rose-500 duration-300 bg-[#F8FBFB] outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border-b border-gray-300 focus:border-green-500 duration-300 bg-[#F8FBFB] outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Message *</label>
                <textarea
                  type="text"
                  name="message"
                  required
                  rows={4}
                  className="border-b border-gray-300 focus:border-indigo-500 duration-300 bg-[#F8FBFB] outline-none"
                />
              </div>

              <div className="">
                <button className="border border-black px-8 py-3 rounded-lg hover:border-blue-500 hover:text-white hover:bg-blue-500 duration-300 font-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-8 bg-[#F8FBFB]">
        <p className="text-center text-gray-500">
          © 2024 All Rights Reserved by elite-themes24.
        </p>
      </div>
    </div>
  );
};

export default Contact;
