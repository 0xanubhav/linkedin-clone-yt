import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    counter:null,
    },
 
  reducers: {
    login: (state, action) => {
      
      state.user = action.payload;
    },
    logout: (state ) => {
      state.user = null;
    },
  },
});

export const { login , logout } = userSlice.actions;
//selectors
export const selectUser = (state) => state.counter.user;
export const selectcounter = (state) => state.counter;

export default userSlice.reducer;
