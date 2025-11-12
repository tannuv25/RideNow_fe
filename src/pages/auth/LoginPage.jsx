import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Login
        </h1>

        {/* Input Fields */}
        <form className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Country Code
            </label>
            <input
              type="text"
              placeholder="+91"
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
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {!otpSent && (
            <button
              type="button"
              onClick={() => setOtpSent(true)}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md mt-2 transition-all duration-300"
            >
              Send OTP
            </button>
          )}

          {otpSent && (
            <>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Enter OTP
                </label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-md mt-2 transition-all duration-300"
              >
                Verify & Continue
              </button>
            </>
          )}
        </form>

        {/* Message / Info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-amber-500 font-semibold hover:underline"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
