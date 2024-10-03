import { createSlice } from "@reduxjs/toolkit";

const initialStateLocal = localStorage.getItem("userSliceData");

const initialState = initialStateLocal
  ? JSON.parse(initialStateLocal)
  : {
      loginInfo: {
        username: "Qader Majali",
        emailOrPhone: "qader@gamil.com",
        password: "1234",
        address: "Jordan, Amman",
        isSignIn: true,
      },
      signedUpUsers: [
        {
          username: "Qader Majali",
          emailOrPhone: "qader@gamil.com",
          password: "1234",
        },
      ],
    };

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    newSignUp: (state, { payload }) => {
      state.signedUpUsers = payload;
      state.loginInfo.isSignIn = true;
    },
    setLoginData: (state, { payload }) => {
      state.loginInfo = { ...payload };
      state.loginInfo.isSignIn = true;
    },
    signOut: (state) => {
      const guestData = {
        username: "",
        emailOrPhone: "",
        password: "",
      };
      state.loginInfo = guestData;
      state.loginInfo.isSignIn = false;
    },
    updateUserData: (state, { payload }) => {
      Object.assign(state.loginInfo, payload.updatedUserData);
    },
  },
});

export const { newSignUp, setLoginData, signOut, updateUserData } =
  userSlice.actions;
export default userSlice.reducer;
