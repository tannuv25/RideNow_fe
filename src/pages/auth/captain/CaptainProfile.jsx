import React from "react";
import { FaUserCircle, FaMapMarkerAlt, FaCarSide, FaIdCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CaptainProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">

        <div className="flex flex-col items-center mb-8">
          <FaUserCircle className="text-gray-400" size={120} />
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg mt-3">
            Upload Photo
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <FaIdCard /> Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-lg w-full" />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
        </div>

        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <FaMapMarkerAlt /> Location Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="Latitude" className="border p-3 rounded-lg w-full" />
          <input type="text" placeholder="Longitude" className="border p-3 rounded-lg w-full" />
          <input type="text" placeholder="Country" className="border p-3 rounded-lg w-full" />
          <input type="text" placeholder="State" className="border p-3 rounded-lg w-full" />
          <input type="text" placeholder="City" className="border p-3 rounded-lg w-full" />
          <input type="text" placeholder="Pin Code" className="border p-3 rounded-lg w-full" />
        </div>

        <input type="text" placeholder="Full Address" className="border p-3 rounded-lg w-full mb-6" />

        {/* SUBMIT */}
        <button
          onClick={() => navigate("/captain/documents")}
          className="bg-amber-500 hover:bg-amber-600 text-white w-full py-3 rounded-xl font-semibold"
        >
          Save Profile
        </button>

      </div>
    </div>
  );
}
