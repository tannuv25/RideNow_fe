import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestOtp, verifyOtp } from "../../features/auth/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isOtpSent, error, isVerified } = useSelector(
    (state) => state.auth
  );

  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    if (!phone) {
      Swal.fire("Error", "Please enter phone number.", "error");
      return;
    }

    const res = await dispatch(
      requestOtp({
        phone,
        country_code: countryCode,
        role: "user", // or "captain"
      })
    );

    if (res.meta.requestStatus === "fulfilled") {
      Swal.fire("Success", "OTP sent successfully!", "success");
    } else {
      Swal.fire("Error", res.payload?.message || "Failed to send OTP", "error");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      Swal.fire("Error", "Please enter OTP.", "error");
      return;
    }

    const res = await dispatch(
      verifyOtp({
        phone,
        otp,
        country_code: countryCode,
        role: "user",
      })
    );

    if (res.meta.requestStatus === "fulfilled") {
      Swal.fire("Success", "Login Successful!", "success");

      setTimeout(() => {
        navigate("/");
      }, 1200);
    } else {
      Swal.fire("Error", res.payload?.message || "OTP verification failed", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Login
        </h1>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Country Code
            </label>
            <input
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {!isOtpSent && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md mt-2 transition-all duration-300"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          )}

          {isOtpSent && (
            <>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Enter OTP
                </label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <button
                type="button"
                onClick={handleVerifyOtp}
                className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-md mt-2 transition-all duration-300"
              >
                {loading ? "Verifying..." : "Verify & Continue"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
