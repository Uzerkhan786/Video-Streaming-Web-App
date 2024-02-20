import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
    name: 'app',
    initialState: {
        flag: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.flag = !state.flag
        }
    }
})
export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;