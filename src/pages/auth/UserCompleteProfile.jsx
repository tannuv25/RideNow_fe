import React, { useState } from "react";
import { MapPin, Upload } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
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
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!fullname || !email || !sourceAddress || !destinationAddress) {
      Swal.fire("Error", "All fields are required!", "error");
      return;
    }

    const token = localStorage.getItem("sessionkey");

    if (!token) {
      Swal.fire("Error", "Session expired. Login again.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("source_address", sourceAddress);
    formData.append("destination_address", destinationAddress);
    if (profileImage) formData.append("profile_image", profileImage);

    try {
      const res = await axios.post(
        "http://localhost:8000/users/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 🔥 CORRECT FIX
            // ❗ Do NOT manually set Content-Type; axios handles boundary
          },
        }
      );

      Swal.fire("Success!", "Profile updated successfully!", "success");
      navigate("/");
    } catch (error) {
      console.log("Error:", error.response?.data);
      Swal.fire(
        "Error",
        error.response?.data?.detail || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-5 py-10">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">
        Complete Your Profile
      </h1>

      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 border">

        {/* Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border">
            {preview ? (
              <img src={preview} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                No Image
              </div>
            )}
          </div>

          <label
            htmlFor="file"
            className="mt-3 px-4 py-2 bg-amber-500 text-white rounded-full cursor-pointer flex items-center gap-2"
          >
            <Upload size={18} /> Upload Photo
          </label>

          <input
            type="file"
            id="file"
            className="hidden"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label>Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full border px-3 py-2"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2"
          />
        </div>

        {/* Source */}
        <div className="mb-4">
          <label>Current Location</label>
          <input
            type="text"
            value={sourceAddress}
            onChange={(e) => setSourceAddress(e.target.value)}
            className="w-full border px-3 py-2"
          />
        </div>

        {/* Destination */}
        <div className="mb-6">
          <label>Destination Address</label>
          <input
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            className="w-full border px-3 py-2"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}
