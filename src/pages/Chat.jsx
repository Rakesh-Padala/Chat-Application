import React from "react";
import { logout } from "../Backend/firebase";
import image from "../assets/image.png"
function Chat() {
  return (
    <div className="h-screen flex bg-slate-600">
      <div className="w-1/4 bg-gray-600 p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Contacts</h2>
        <ul className="space-y-4">
          <li className="hover:bg-slate-300 flex items-center space-x-4 p-2 bg-white rounded-lg shadow cursor-pointer">
            <img
              src={image}
              alt="Contact 1"
              className="w-10 h-10 rounded-full"
            />
            <span>Vishnu</span>
          </li>
          <li className="hover:bg-slate-300 flex items-center space-x-4 p-2 bg-white rounded-lg shadow cursor-pointer">
            <img
              src={image}
              alt="Contact 2"
              className="w-10 h-10 rounded-full"
            />
            <span>Contact 2</span>
          </li>
          <li className="hover:bg-slate-300 flex items-center space-x-4 p-2 bg-white rounded-lg shadow cursor-pointer">
            <img
              src={image}
              alt="Contact 3"
              className="w-10 h-10 rounded-full"
            />
            <span>Contact 3</span>
          </li>
        </ul>
      </div>

      <div className="w-1/2 bg-white flex flex-col">
        <div className="flex-grow p-4 overflow-y-auto">
          <div className="mb-4">
            <div className="p-3 bg-gray-200 rounded-lg inline-block">
              Hello! How are you?
            </div>
          </div>
          <div className="mb-4 text-right">
            <div className="p-3 bg-blue-500 text-white rounded-lg inline-block">
              I'm good, thank you! How about you?
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="w-1/4 bg-gray-100 p-4 border-l flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <p className="mb-2"><strong>Name:</strong> John Doe</p>
          <p className="mb-2"><strong>Email:</strong> john@example.com</p>
        </div>
        <button onClick={logout} className="bg-red-500 text-white py-2 px-4 rounded-lg self-start">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Chat;
