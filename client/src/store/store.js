import { configureStore } from "@reduxjs/toolkit";
import initialiseUserDetailsSlice from "../slice/initialiseUserDetailsSlice";


const store = configureStore({
  reducer: {
    userDetails: initialiseUserDetailsSlice,
  },
});

export default store;