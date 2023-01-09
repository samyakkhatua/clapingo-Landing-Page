import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // store the user in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/user");
  };

  return (
    <div className="mt-64">
      <div className="container mx-auto lg:px-96">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">Login</h1>

        <form onSubmit={handleSubmit}>
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
              onChange={({ target }) => setUsername(target.value)}
              //   required
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
              onChange={({ target }) => setPassword(target.value)}
              //   required
            />
          </div>

          <button
            type="submit"
            class="text-white bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            {/* <Link to="/user">Login</Link> */}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
