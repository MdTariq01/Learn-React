import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status_ : false ,
  userData : null
}

const authSlice = createSlice({
  name : 'auth' ,
  initialState ,
  reducers : {
    login : (state, action) => {
      state.status_ = true;
      state.userData = action.payload.userData;
    } ,
    logout : (state) => {
      state.status_ = false ;
      state.userData = null;
    }
  }
})

export const { login , logout } = authSlice.actions;
export default authSlice.reducer;