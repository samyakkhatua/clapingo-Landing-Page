import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="px-32">
      <nav class="bg-white border-gray-200 py-2.5 rounded">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          
          {/* logo */}
          <a href="" class="flex items-center">
            <img
              src="https://raw.githubusercontent.com/samyakkhatua/clapingo-Landing-Page/main/src/components/Navbar/clapingoLogo.png"
              class="h-6 mr-3 sm:h-9"
              alt="Clapingo Logo"
            />
          </a>

          {/* Login buttton */}
          <div class="flex md:order-2">
            <button
              type="button"
              class="flex items-center justify-center text-white px-[10px] py-[14px] w-[126px] rounded-[80px] bg-gradient-to-b from-teal-500 to-teal-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <Link to="/login">Login</Link>
              {/* Login */}
            </button>
          </div>

          {/* menu list  */}
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col p-4 mt-4 md:flex-row  font-medium">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-black"
                  aria-current="page"
                >
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-black">
                  Teach with Us
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-black">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-black">
                  Kids
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
