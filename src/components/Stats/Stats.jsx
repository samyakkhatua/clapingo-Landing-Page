import React from "react";

export default function Stats() {
  return (
    <div className="mt-20 px-32 flex bg-slate-200 bg-gradient-to-r from-teal-500 via-white to-white">
      {/* stats boxes */}
      <div className="flex flex-wrap w-[50%] my-20 mr-20">
        <div className="flex gap-6 mb-6">
          <div>
            <a
              href="#"
              class="w-[200px] px-4 py-2 rounded-xl bg-stone-700 flex flex-col items-center justify-center "
            >
              <p class="mb-2 text-3xl font-bold text-white">
                50K
                <span className="text-teal-500">+</span>
              </p>
              <p class="font-light text-white">Mobile Downloads</p>
            </a>
          </div>

          <div>
            <a
              href="#"
              class="w-[200px] px-4 py-2 rounded-xl bg-stone-700 flex flex-col items-center justify-center "
            >
              <p class="mb-2 text-3xl font-bold text-white">
                80K<span className="text-teal-500">+</span>
              </p>
              <p class="font-light text-white">Happy Learners</p>
            </a>
          </div>
        </div>

        <div className="flex gap-6 ml-6">
          <div>
            <a
              href="#"
              class="w-[200px] px-4 py-2 rounded-xl bg-stone-700 flex flex-col items-center justify-center "
            >
              <p class="mb-2 text-3xl font-bold text-white">
                53K<span className="text-teal-500">+</span>
              </p>
              <p class="font-light text-white">Sessions per month</p>
            </a>
          </div>

          <div>
            <a
              href="#"
              class="w-[200px] py-2 rounded-xl bg-stone-700 flex flex-col items-center justify-center "
            >
              <p class="mb-2 text-3xl font-bold text-white">
                200<span className="text-teal-500">+</span>
              </p>
              <p class="font-light text-white">Speakers around the globe</p>
            </a>
          </div>
        </div>
      </div>

      {/* content */}
      <div>
        <p className="text-teal-500 font-semibold">Book a trial</p>
        <h2 class="text-4xl font-extrabold">
          Start your English <br /> speaking journey today!
        </h2>
        <p class="my-4 text-lg text-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
          pellentesque praesent vitae sit sagittis venenatis.
        </p>
        <button
          type="button"
          class="text-white bg-red-400 rounded-full text-sm px-5 py-2.5 text-center mr-6 mb-2 "
        >
          Book a trial
        </button>
      </div>
    </div>
  );
}
