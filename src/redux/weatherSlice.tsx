import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";
//createAsyncThunk helps in creating async functions (it take 2 parameters 1.actionType and 2. action which makes call to external api)
//create action function now
//payload is data which we are sending to api

export interface CounterState {
    place: string;
}

const initialState = {
    place: [],
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        AddPlace: (state: any, action: any) => {
            state.place = action.payload;
            console.log("2", state.place)
        },
    },
    // extraReducers: {
    //     [getWeatherData.fulfilled]: (state : any, action: any) =>{
    //         return action.payload.weather;
    //     }
    // }
});

export const { AddPlace } = weatherSlice.actions;
export default weatherSlice.reducer;