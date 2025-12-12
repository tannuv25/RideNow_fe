import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { requestOtp, verifyOtp } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("user");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, isOtpSent } = useSelector((state) => state.auth);

  // Phone input
  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (countryCode === "+91") value = value.slice(0, 10);
    setPhone(value);
  };

  // OTP input
  const handleOtpInput = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
  };

  // Send OTP
  const handleSendOtp = async () => {
    if (phone.length !== 10) {
      Swal.fire("Invalid Number", "Phone must be 10 digits", "error");
      return;
    }

    Swal.fire({ title: "Sending OTP...", showConfirmButton: false, didOpen: () => Swal.showLoading() });

    const endpoint = role === "captain" ? "/captain/request-otp" : "/users/request-otp";

    const res = await dispatch(
      requestOtp({
        phone,
        country_code: countryCode,
        role,
        endpoint,
      })
    );

    Swal.close();

    if (res.meta.requestStatus === "fulfilled") {
      Swal.fire("OTP sent!", "Check your phone.", "success");
    } else {
      Swal.fire("Error", res.payload?.message || "Failed to send OTP", "error");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      Swal.fire("Invalid OTP", "OTP must be 6 digits", "error");
      return;
    }

    Swal.fire({ title: "Verifying OTP...", showConfirmButton: false, didOpen: () => Swal.showLoading() });

    const endpoint = role === "captain" ? "/captain/verify-otp" : "/users/verify-otp";

    const res = await dispatch(verifyOtp({ phone, otp, endpoint }));

    Swal.close();

    if (res.meta.requestStatus === "fulfilled") {
      const token = res.payload.sessionkey;

      // ⭐ Save token in localStorage
      localStorage.setItem("sessionkey", token);

      // ⭐ Save user role also
      localStorage.setItem("role", role);

      Swal.fire("Success!", "OTP Verified", "success");

      // Redirect
      if (role === "user") {
        navigate("/user/complete-profile");
      } else {
        navigate("/captain/profile");
      }
    } else {
      Swal.fire("Error", res.payload?.message || "Invalid OTP", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-black mb-8">Sign Up</h1>

        {/* Role toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setRole("user")}
            className={`px-5 py-2 rounded-l-full ${role === "user" ? "bg-amber-500 text-white" : "bg-gray-100 text-black"}`}
          >
            Register as User
          </button>

          <button
            onClick={() => setRole("captain")}
            className={`px-5 py-2 rounded-r-full ${role === "captain" ? "bg-amber-500 text-white" : "bg-gray-100 text-black"}`}
          >
            Register as Captain
          </button>
        </div>

        <form className="space-y-5">
          {/* Country Code */}
          <div>
            <label>Country Code</label>
            <input type="text" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="w-full border px-3 py-2" />
          </div>

          {/* Phone */}
          <div>
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneInput}
              className="w-full border px-3 py-2"
              placeholder="Enter phone number"
            />
          </div>

          {/* Send OTP */}
          {!isOtpSent && (
            <button className="w-full bg-amber-500 text-white py-2" type="button" onClick={handleSendOtp}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          )}

          {/* OTP */}
          {isOtpSent && (
            <>
              <div>
                <label>OTP</label>
                <input type="text" value={otp} onChange={handleOtpInput} className="w-full border px-3 py-2" placeholder="Enter OTP" />
              </div>

              <button className="w-full bg-black text-white py-2" type="button" onClick={handleVerifyOtp}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
