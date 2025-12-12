import { configureStore } from "@reduxjs/toolkit";
// import captainReducer from "../features/captain/captainSlice";
// import vehicleReducer from "../features/vehicle/vehicleSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    // captain: captainReducer,
    // vehicle: vehicleReducer,
    auth: authReducer,
    user: userReducer,
  },
});
