import React, { useState } from "react";
import { FaIdCard, FaFileUpload, FaUserShield } from "react-icons/fa";

export default function CaptainUploadDocs() {
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
    <div className="min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">

        {/* -------- PERSONAL DOCUMENTS -------- */}
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaUserShield className="text-amber-500" /> Personal Documents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Aadhaar Number */}
          <input
            type="number"
            placeholder="Aadhaar Number"
            className="border p-3 rounded-lg w-full"
          />

          {/* PAN Number */}
          <input
            type="text"
            placeholder="PAN Card Number"
            className="border p-3 rounded-lg w-full"
          />

          {/* Aadhaar Front Image */}
          <div>
            <label className="block font-medium mb-1">Aadhaar Front</label>
            <label className="cursor-pointer flex flex-col items-center border p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.aadhaar_front ? (
                <img
                  src={previews.aadhaar_front}
                  alt=""
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <FaFileUpload size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFilePreview(e, "aadhaar_front")}
              />
            </label>
          </div>

          {/* Aadhaar Rear */}
          <div>
            <label className="block font-medium mb-1">Aadhaar Back</label>
            <label className="cursor-pointer flex flex-col items-center border p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.aadhaar_rear ? (
                <img
                  src={previews.aadhaar_rear}
                  alt=""
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <FaFileUpload size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFilePreview(e, "aadhaar_rear")}
              />
            </label>
          </div>

          {/* PAN Image */}
          <div>
            <label className="block font-medium mb-1">PAN Card</label>
            <label className="cursor-pointer flex flex-col items-center border p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.pan ? (
                <img
                  src={previews.pan}
                  alt=""
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <FaFileUpload size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFilePreview(e, "pan")}
              />
            </label>
          </div>

          {/* Medical Certificate */}
          <div>
            <label className="block font-medium mb-1">Medical Certificate</label>
            <label className="cursor-pointer flex flex-col items-center border p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.medical ? (
                <img
                  src={previews.medical}
                  alt=""
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <FaFileUpload size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFilePreview(e, "medical")}
              />
            </label>
          </div>

          {/* Police Verification */}
          <div>
            <label className="block font-medium mb-1">Police Verification</label>
            <label className="cursor-pointer flex flex-col items-center border p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.police ? (
                <img
                  src={previews.police}
                  alt=""
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <FaFileUpload size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFilePreview(e, "police")}
              />
            </label>
          </div>
        </div>

        {/* -------- LICENSE DOCUMENTS -------- */}
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaIdCard className="text-amber-500" /> License Documents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <input
            type="text"
            placeholder="Driving License Number"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="date"
            placeholder="Expiry Date"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="number"
            placeholder="Driving Experience (Years)"
            className="border p-3 rounded-lg w-full"
          />

          {/* DL Front */}
          <div>
            <label className="block font-medium mb-1">DL Front</label>
            <label className="cursor-pointer flex flex-col items-center border p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.dl_front ? (
                <img
                  src={previews.dl_front}
                  alt=""
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <FaFileUpload size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFilePreview(e, "dl_front")}
              />
            </label>
          </div>

          {/* DL Back */}
          <div>
            <label className="block font-medium mb-1">DL Back</label>
            <label className="cursor-pointer flex flex-col items-center border p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
              {previews.dl_rear ? (
                <img
                  src={previews.dl_rear}
                  alt=""
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <FaFileUpload size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFilePreview(e, "dl_rear")}
              />
            </label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button className="bg-amber-500 hover:bg-amber-600 text-white w-full py-3 rounded-xl font-semibold text-lg">
          Upload Documents
        </button>
      </div>
    </div>
  );
}
