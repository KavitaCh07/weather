import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

//action
// export const fetchWeather = createAsyncThunk(
//     'weather/fetch', async () =>  {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=b9a7b22ff1d3c701a8eb51c9e36548af`);
//             if(response.ok){
//                 const data = await response.json();  
//             return {data}; 
//         }
//         });


// //slice
 
// export const weatherSlice = createSlice({
//     name: "weather",
//     initialState: {},
//     reducers:{
//         weather
//     },
//     extraReducers: {
//         [fetchWeather.fulfilled]: (state: any, action: any) => {
//             return action.payload.data
//         }
//     }});
    
