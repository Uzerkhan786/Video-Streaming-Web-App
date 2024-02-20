import { createSlice } from "@reduxjs/toolkit";
let item = ''
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        item
    },
    reducers: {
        searchItem: (state, action) => {
            state.item = action.payload
        }
    }
})
export const { searchItem } = searchSlice.actions;
export default searchSlice.reducer;