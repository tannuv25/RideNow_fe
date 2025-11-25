import React, { useState } from "react";
import { FaIdCard, FaFileUpload, FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CaptainUploadDocs() {
   const navigate = useNavigate();
  const [previews, setPreviews] = useState({});

  const handleFilePreview = (e, key) => {
    const file = e.target.files[0];
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

    {/* Personal Docs */}
    <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
      <FaUserShield className="text-amber-500" /> Personal Documents
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

      <input
        type="number"
        placeholder="Aadhaar Number"
        className="border p-2.5 rounded-lg text-sm w-full"
      />

      <input
        type="text"
        placeholder="PAN Card Number"
        className="border p-2.5 rounded-lg text-sm w-full"
      />

      {/* Aadhaar Front */}
      <div>
        <label className="block text-sm mb-1 font-medium">Aadhaar Front</label>
        <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          {previews.aadhaar_front ? (
            <img src={previews.aadhaar_front} className="w-full h-28 object-cover rounded" />
          ) : (
            <FaFileUpload size={26} className="text-gray-500" />
          )}
          <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "aadhaar_front")} />
        </label>
      </div>

      {/* Aadhaar Back */}
      <div>
        <label className="block text-sm mb-1 font-medium">Aadhaar Back</label>
        <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          {previews.aadhaar_rear ? (
            <img src={previews.aadhaar_rear} className="w-full h-28 object-cover rounded" />
          ) : (
            <FaFileUpload size={26} className="text-gray-500" />
          )}
          <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "aadhaar_rear")} />
        </label>
      </div>

      {/* PAN */}
      <div>
        <label className="block text-sm mb-1 font-medium">PAN Card</label>
        <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          {previews.pan ? (
            <img src={previews.pan} className="w-full h-28 object-cover rounded" />
          ) : (
            <FaFileUpload size={26} className="text-gray-500" />
          )}
          <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "pan")} />
        </label>
      </div>

      {/* Medical */}
      <div>
        <label className="block text-sm mb-1 font-medium">Medical Certificate</label>
        <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          {previews.medical ? (
            <img src={previews.medical} className="w-full h-28 object-cover rounded" />
          ) : (
            <FaFileUpload size={26} className="text-gray-500" />
          )}
          <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "medical")} />
        </label>
      </div>
    </div>

    {/* License Docs */}
    <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
      <FaIdCard className="text-amber-500" /> License Documents
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <input
        type="text"
        placeholder="Driving License Number"
        className="border p-2.5 rounded-lg text-sm w-full"
      />

      <input
        type="date"
        className="border p-2.5 rounded-lg text-sm w-full"
      />

      <input
        type="number"
        placeholder="Driving Experience (Years)"
        className="border p-2.5 rounded-lg text-sm w-full"
      />

      {/* DL Front */}
      <div>
        <label className="block text-sm mb-1 font-medium">DL Front</label>
        <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          {previews.dl_front ? (
            <img src={previews.dl_front} className="w-full h-28 object-cover rounded" />
          ) : (
            <FaFileUpload size={26} className="text-gray-500" />
          )}
          <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "dl_front")} />
        </label>
      </div>

      {/* DL Back */}
      <div>
        <label className="block text-sm mb-1 font-medium">DL Back</label>
        <label className="cursor-pointer flex flex-col items-center border p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          {previews.dl_rear ? (
            <img src={previews.dl_rear} className="w-full h-28 object-cover rounded" />
          ) : (
            <FaFileUpload size={26} className="text-gray-500" />
          )}
          <input type="file" className="hidden" onChange={(e) => handleFilePreview(e, "dl_rear")} />
        </label>
      </div>
    </div>

    <button 
    onClick={() => navigate("/captain/vehicle")}
    className="bg-amber-500 hover:bg-amber-600 text-white w-full py-2.5 rounded-lg font-medium text-base">
      Upload Documents
    </button>
  </div>
</div>

  );
}
