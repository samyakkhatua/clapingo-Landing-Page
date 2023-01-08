import React from "react";

export default function Hero() {
  return (
    <div className="flex pt-16">
      {/* Headline */}
      <div className="w-[60%]">
        <h1 class="mb-4 text4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Hone your english <br /> speaking skills over <br />
          <span class="text-teal-600 "> one-on-one </span>
          video call
        </h1>
        <p class="mb-6 text-lg font-normal text-black w-[80%]">
          Practice english conversation with excellent communuicators across the
          country and speak like a PRO 😎.
        </p>

        {/* hero buttons */}
        <button
          type="button"
          class="text-white bg-red-400 rounded-full text-sm px-5 py-2.5 text-center mr-6 mb-2 "
        >
          Book a trial
        </button>
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm text-red-400 focus:outline-none bg-white rounded-full border border-red-400 hover:bg-gray-100 "
        >
          Download our app
        </button>
      </div>

      {/* Hero image */}
      <div className="ml-24 mt-10">
        <img
          class="h-auto max-w-lg rounded-xl w-[400px]"
          src="src/components/Hero/hero image.jpeg"
          alt="hero image"
        />
      </div>
    </div>
  );
}
