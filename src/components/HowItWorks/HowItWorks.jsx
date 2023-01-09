import React from "react";

export default function HowItWorks() {
  return (
    <div className="mt-[100px] mb-96 px-32">
      <p className="text-4xl font-extrabold">How it works?</p>

      <div className="flex gap-4 mt-24 justify-between items-center">
        {/* col 1 */}
        <div className="">
          <a
            href="#"
            class="block max-w-sm px-6 py-8 mb-24 bg-white border border-gray-200 rounded-lg shadow-[32px_32px_32px_5px_#00000024]"
          >
            <h5 class="mb-4 text-2xl font-bold tracking-tight text-black">
              1. Create Account
            </h5>
            <p class="font-normal text-black">
              Create your account using phone number or email and take a free
              trial at ₹1.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm px-6 py-8 bg-white border border-gray-200 rounded-lg shadow-[32px_32px_32px_5px_#00000024]"
          >
            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              3. Select time slot
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Subscribe & select any time slot between 10 AM to 12 midnight.
            </p>
          </a>
        </div>

        {/* col 2 - image */}
        <div className="flex items-center ">
          <div className="absolute w-64 left-[700px] bg-teal-500 rounded-full h-64 z-[-1] shadow-[0px_0px_150px_100px_#38b2ac]"></div>
          <div className="absolute left-[690px]">
            <img
              className="w-[300px] pt-16"
              src="src/components/HowItWorks/clapingoAppScreenshot.png"
              alt="clapingo App Screenshot"
            />
          <div className="absolute bg-white w-[350px] h-24 z-10 blur-xl left-[0px] bottom-[-30px]"></div>
          </div>
        </div>

        {/* col 3 */}
        <div className="">
          <a
            href="#"
            class="block max-w-sm px-6 py-8 mb-24 bg-white border border-gray-200 rounded-lg shadow-[32px_32px_32px_5px_#00000024]"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              2. Subscribe
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Choose your preferred duration and select subscription package for
              your sessions.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm px-6 py-8 bg-white border border-gray-200 rounded-lg shadow-[32px_32px_32px_5px_#00000024]"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              4. You are done
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              That’s it! Start practicing and reach your learning goal in
              speaking.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
