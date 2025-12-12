import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// BASE URL
const API_URL = "http://localhost:8000";

// THUNK: Upload Profile
export const uploadProfile = createAsyncThunk(
  "user/uploadProfile",
  async ({ fullname, email, source_address, destination_address, profile_image, token }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("email", email);
      formData.append("source_address", source_address);
      formData.append("destination_address", destination_address);

      if (profile_image) {
        formData.append("profile_image", profile_image);
      }

      const response = await axios.post(
        `${API_URL}/users/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,  // Very important
          }
        }
      );

      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || { message: "Something went wrong" });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    resetUserState: (state) => {
      state.error = null;
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(uploadProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(uploadProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { resetUserState } = userSlice.actions;

export default userSlice.reducer;
