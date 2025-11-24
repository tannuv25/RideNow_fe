import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("user");
  const [otpSent, setOtpSent] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  // ➤ Handle Phone Number Input
  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-numbers

    if (countryCode === "+91") {
      value = value.slice(0, 10); // max 10 digits
    }

    setPhone(value);
  };

  // ➤ Handle OTP Input
  const handleOtpInput = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // only numbers
    value = value.slice(0, 6); // max 6 digits
    setOtp(value);
  };

  // ➤ Send OTP
  const handleSendOtp = () => {
    if (!phone || phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    setOtpSent(true);
  };

  // ➤ Verify OTP
  const handleVerifyOtp = () => {
    if (!otp || otp.length !== 6) {
      alert("OTP must be 6 digits");
      return;
    }

    if (role === "user") {
      navigate("/user/complete-profile");
    } else if (role === "captain") {
      navigate("/captain/profile");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Sign Up
        </h1>

        {/* Role Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setRole("user")}
            className={`px-5 py-2 rounded-l-full font-semibold transition-all duration-300 ${
              role === "user"
                ? "bg-amber-500 text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            Register as User
          </button>

          <button
            onClick={() => setRole("captain")}
            className={`px-5 py-2 rounded-r-full font-semibold transition-all duration-300 ${
              role === "captain"
                ? "bg-amber-500 text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            Register as Captain
          </button>
        </div>

        {/* Input Fields */}
        <form className="space-y-5">
          {/* Country Code */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Country Code
            </label>
            <input
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              placeholder="+91"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneInput}
              placeholder="Enter phone number"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {countryCode === "+91" && phone.length > 0 && phone.length < 10 && (
              <p className="text-red-500 text-xs mt-1">
                Phone must be 10 digits.
              </p>
            )}
          </div>

          {/* Send OTP */}
          {!otpSent && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md mt-2 transition-all duration-300 cursor-pointer"
            >
              Send OTP
            </button>
          )}

          {/* OTP Field */}
          {otpSent && (
            <>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpInput}
                  placeholder="Enter 6-digit OTP"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                {otp.length > 0 && otp.length < 6 && (
                  <p className="text-red-500 text-xs mt-1">
                    OTP must be 6 digits.
                  </p>
                )}
              </div>

              {/* Verify OTP */}
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-md mt-2 transition-all duration-300 cursor-pointer"
              >
                Verify OTP
              </button>
            </>
          )}
        </form>

        {/* Message / Info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-amber-500 font-semibold hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
