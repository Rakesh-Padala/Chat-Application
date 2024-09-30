import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full py-6 bg-blue-600 text-white text-center text-3xl font-bold">
        ChatApp
      </header>
      <main className="flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Connect with Friends and Family
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay connected with your loved ones through seamless messaging.
        </p>
        <Link to="/signup">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-500 transition">
            Get Started
          </button>
        </Link>
      </main>
      <footer className="py-6 bg-gray-800 text-white text-center w-full">
        © 2024 ChatApp, All Rights Reserved.
      </footer>
    </div>
  );
}

export default Home;
