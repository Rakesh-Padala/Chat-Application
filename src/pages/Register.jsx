import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../Backend/firebase";
function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    signup(username,email,password)    
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-700">
          Register
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
              id="username"
              type="text"
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={submitHandler}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
          <div className="mt-3">
            <p>Already have an account? <Link className="text-blue-700" to='/login'>Login here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;