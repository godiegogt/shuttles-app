import { createSlice } from '@reduxjs/toolkit'

export const configurationsSlice = createSlice({
  name: 'configurations',
  initialState: {
    userData:{

    },
    isAuth:false
  },
  reducers: {
    SignIn: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.isAuth = true;
      state.userData = action.payload;
    },
    SignOut: (state) => {
      state.userData={};
      state.isAuth=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SignIn,SignOut } = configurationsSlice.actions

export default configurationsSlice.reducer