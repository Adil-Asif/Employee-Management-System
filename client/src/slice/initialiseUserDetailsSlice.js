import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    userid: "",
    username: "",
    userrole: "",
    industry: "",
    picture: "",
    isLogin: false,
    phoneNumber: "",
    resumeDesc: "",
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.userid = action.payload.userid;
    },
    setUserDetails: (state, action) => {
      state.username = action.payload.username;
      state.userrole = action.payload.userrole;
      state.picture = action.payload.picture;
      state.isOnboard = action.payload.isOnboard;
      state.emailaddress = action.payload.emailaddress;
    },
    resetUserDetails: (state, action) => {
      state.isLogin = false;
      state.userid = "";
      state.username = "";
      state.userrole = "";
      state.picture = "";
      state.isOnboard = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogin, setUserDetails, resetUserDetails } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
