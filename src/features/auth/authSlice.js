import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Backend Base URL
const BASE_URL = "http://localhost:8000";

// 1️⃣ Request OTP (Login + Signup)
export const requestOtp = createAsyncThunk(
  "auth/requestOtp",
  async ({ phone, country_code, role, endpoint }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}${endpoint}`, {
        phone,
        country_code,
        role,
      });

      return res.data; // success
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to send OTP");
    }
  }
);

// 2️⃣ Verify OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ phone, otp, endpoint }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}${endpoint}`, {
        phone,
        otp,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "OTP verification failed");
    }
  }
);

// ----------------------
// AUTH SLICE
// ----------------------
const authSlice = createSlice({
  name: "auth",

  initialState: {
    phone: "",
    role: "",
    loading: false,
    isOtpSent: false,
    isVerified: false,
    sessionkey: null,
    error: null,

    // After OTP verify:
    userTypes: [],
    isProfileCompleted: [],
    isNewUser: false, // ⭐ Auto-register flag
  },

  reducers: {
    logout: (state) => {
      state.phone = "";
      state.role = "";
      state.loading = false;
      state.isOtpSent = false;
      state.isVerified = false;
      state.sessionkey = null;
      state.userTypes = [];
      state.isProfileCompleted = [];
      state.isNewUser = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // -------------------------------
      // REQUEST OTP
      // -------------------------------
      .addCase(requestOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.isOtpSent = true;
        state.phone = action.meta.arg.phone;
        state.role = action.meta.arg.role;
      })
      .addCase(requestOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        // ⭐ If API response says "User Not Found → Create new one"
        if (action.payload?.code === "USER_NOT_FOUND") {
          state.isNewUser = true;
        }
      })

      // -------------------------------
      // VERIFY OTP
      // -------------------------------
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.isVerified = true;

        state.sessionkey = action.payload.sessionkey;
        state.userTypes = action.payload.user_type || [];
        state.isProfileCompleted = action.payload.is_profile_completed || [];

        // If backend says "new account created"
        state.isNewUser = action.payload.is_new_user || false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
