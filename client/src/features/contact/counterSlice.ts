import { createSlice, PayloadAction } from "@reduxjs/toolkit";;

interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: "YARC (yet another redux counter"
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => { state.data += action.payload },
        decrement: (state, action: PayloadAction<number>) => { state.data -= action.payload }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;