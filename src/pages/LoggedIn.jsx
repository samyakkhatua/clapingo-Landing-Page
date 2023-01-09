import React from "react";

export default function LoggedIn() {
  return (
    <div className="flex flex-col justify-center items-center mt-96">
      <div className=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        You are logged In!
      </div>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        You are a user.
      </p>
      <a
        href="/"
        class="font-medium text-teal-500 dark:text-teal-400 hover:underline"
      >
        Go Back to Home
      </a>
    </div>
  );
}
