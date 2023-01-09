import React from "react";

export default function Login() {
  return (
    <div className="mt-64">
      <div className="container mx-auto md:px-96">
        <form>
          <div class="mb-6">
            <label
              for="first_name"
              class="block mb-2 text-lg font-medium text-gray-900"
            >
              User Id
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Samyak"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-lg font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div>

          <button
            type="submit"
            class="text-white bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
