import React, { useState } from "react";
import { FaCarSide, FaFileUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CaptainVehicle() {
  const navigate = useNavigate();
  const [previews, setPreviews] = useState({});

  const handleFilePreview = (e, key) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviews((prev) => ({
        ...prev,
        [key]: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 py-10 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl">

        {/* -------- VEHICLE INFORMATION -------- */}
        <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaCarSide className="text-amber-500" /> Vehicle Information
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input type="text" placeholder="Vehicle Type" className="border p-2.5 rounded-lg text-sm" />
          <input type="text" placeholder="Fuel Type" className="border p-2.5 rounded-lg text-sm" />
          <input type="text" placeholder="Owner Name" className="border p-2.5 rounded-lg text-sm" />
          <input type="date" placeholder="Registration Date" className="border p-2.5 rounded-lg text-sm" />
          <input type="text" placeholder="Model" className="border p-2.5 rounded-lg text-sm" />
          <input type="text" placeholder="Make" className="border p-2.5 rounded-lg text-sm" />
          <input type="number" placeholder="Luggage Capacity" className="border p-2.5 rounded-lg text-sm" />
          <input type="number" placeholder="Seats Count" className="border p-2.5 rounded-lg text-sm" />
          <input type="text" placeholder="Vehicle Number" className="border p-2.5 rounded-lg text-sm" />
        </div>

        {/* -------- VEHICLE DOCUMENT IMAGES -------- */}
        <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaFileUpload className="text-amber-500" /> Vehicle Documents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

          {/* RC Certificate */}
          <div>
            <label className="block text-sm mb-1 font-medium">RC Certificate</label>
            <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.rc ? (
                <img src={previews.rc} className="w-full h-28 object-cover rounded" />
              ) : (
                <FaFileUpload size={26} className="text-gray-500" />
              )}
              <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "rc")} />
            </label>
          </div>

          {/* Insurance Number */}
          <input
            type="text"
            placeholder="Insurance Number"
            className="border p-2.5 rounded-lg text-sm w-full"
          />

          {/* Insurance Document */}
          <div>
            <label className="block text-sm mb-1 font-medium">Insurance Document</label>
            <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.insurance ? (
                <img src={previews.insurance} className="w-full h-28 object-cover rounded" />
              ) : (
                <FaFileUpload size={26} className="text-gray-500" />
              )}
              <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "insurance")} />
            </label>
          </div>

          {/* Insurance Expiry Date */}
          <input
            type="date"
            placeholder="Insurance Expiry Date"
            className="border p-2.5 rounded-lg text-sm w-full"
          />

          {/* Vehicle Permit */}
          <div>
            <label className="block text-sm mb-1 font-medium">Vehicle Permit</label>
            <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.permit ? (
                <img src={previews.permit} className="w-full h-28 object-cover rounded" />
              ) : (
                <FaFileUpload size={26} className="text-gray-500" />
              )}
              <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "permit")} />
            </label>
          </div>

          {/* Fitness Certificate */}
          <div>
            <label className="block text-sm mb-1 font-medium">Fitness Certificate</label>
            <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.fitness ? (
                <img src={previews.fitness} className="w-full h-28 object-cover rounded" />
              ) : (
                <FaFileUpload size={26} className="text-gray-500" />
              )}
              <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "fitness")} />
            </label>
          </div>

          {/* Pollution Under Control */}
          <div>
            <label className="block text-sm mb-1 font-medium">PUC (Pollution)</label>
            <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.puc ? (
                <img src={previews.puc} className="w-full h-28 object-cover rounded" />
              ) : (
                <FaFileUpload size={26} className="text-gray-500" />
              )}
              <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "puc")} />
            </label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
        onClick={() => navigate("/")} 
        className="bg-amber-500 hover:bg-amber-600 text-white w-full py-2.5 rounded-lg font-medium text-base">
          Upload Vehicle Documents
        </button>
      </div>
    </div>
  );
}
