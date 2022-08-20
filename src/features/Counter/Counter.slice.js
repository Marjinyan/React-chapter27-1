import { createSlice } from '@reduxjs/toolkit'

const counterInitialState = {
    number:0
}
const counterSlice = createSlice({
    name:'counter',
    initialState:counterInitialState,
    reducers:{
        increment: (state) => {
            state.number +=1
        },
        decrement:(state) => {
            state.number -= 1
        },
        incByAmount:(state, action)=>{
            state.number += action.payload
        },
        decByAmount:(state, action)=>{
            state.number -= action.payload
        }
    }
})

export const {increment, decrement, incByAmount, decByAmount} = counterSlice.actions
export default counterSlice.reducer