import React, { useState } from "react";
import { MapPin, Upload } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function UserCompleteProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const navigate = useNavigate();


  const handleImage = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-5 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-black mb-6 text-center">
        Complete Your Profile
      </h1>

      {/* Card */}
      <div className="w-full max-w-lg bg-white shadow-2xl border border-gray-200 rounded-2xl p-6">

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border border-gray-300">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                No Image
              </div>
            )}
          </div>

          <label
            htmlFor="profile-upload"
            className="mt-3 px-4 py-2 bg-amber-500 text-white rounded-full flex items-center gap-2 cursor-pointer hover:bg-amber-600 transition"
          >
            <Upload size={18} />
            Upload Photo
          </label>

          <input
            type="file"
            id="profile-upload"
            className="hidden"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Source Address */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700">
            Your Current Location
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 gap-2 bg-gray-50">
            <MapPin className="text-amber-500" size={20} />
            <input
              type="text"
              value={sourceAddress}
              onChange={(e) => setSourceAddress(e.target.value)}
              placeholder="Enter pickup location"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Destination Address */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-700">
            Destination Address
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 gap-2 bg-gray-50">
            <MapPin className="text-black" size={20} />
            <input
              type="text"
              value={destinationAddress}
              onChange={(e) => setDestinationAddress(e.target.value)}
              placeholder="Enter destination location"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all cursor-pointer"
          type="button"
          onClick={() => navigate("/")}
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}
