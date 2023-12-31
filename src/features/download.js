import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name:"product",
    initialState : {
        value : {
            back : true
        },
    },
    reducers : {
        show : (state , action ) => {
            state.value = action.payload
        }
    }
})
export default product.reducer
export const {show} = product.actions