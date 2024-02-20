import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        msg: []
    },
    reducers: {
        addChat: (state, action) => {
            state.msg.splice(30, 1)
            state.msg.unshift(action.payload)
        }
    }
})
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;