import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sessionLength: 25,
    breakLength: 5,
    mode: "Session",
    timeLeft: 25.00,
    on: false,
}

export const timeSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        start_pause: (state, _) => {
            let on = !state.on
            return {...state, on: on}
        },
        reset: (state, _) => {
            return initialState;
        },
        increase: (state, action) => {
            let interval = action.payload;
            let newState = {...state};
            newState[interval] += 1;
            if (action.payload == "sessionLength" && newState.mode == "Session") {
                newState.timeLeft = newState[interval];
            }
            else if (action.payload == "breakLength" && newState.mode == "break") {
                newState.timeLeft = newState[interval];
            }
            return newState
        },
        decrease: (state, action) => {
            let interval = action.payload;
            let newState = {...state};
            newState[interval] = Math.max(newState[interval]-1, 0);
            newState.sessionLength = Math.max(newState.sessionLength, 1);
            if (action.payload == "sessionLength" && newState.mode == "Session") {
                newState.timeLeft = newState[interval];
            }
            else if (action.payload == "breakLength" && newState.mode == "break") {
                newState.timeLeft = newState[interval];
            }
            return newState
        },
        changeMode: (state, _) => {
            let newMode = state.mode == "Session" ? "Break" : "Session";
            return {...state, mode: newMode}
        },
        second: (state, _) => {
            let newTime = state.timeLeft;
            let newMode = state.mode;
            if (newTime == 0) {
                if (state.mode == "Session") {
                    newTime = state.breakLength
                }
                else {
                    newTime = state.sessionLength
                }
                newMode = state.mode == "Session" ? "Break" : "Session";
            }
            else {
                // If the seconds in newTime are 0
                if (newTime - Math.floor(newTime) == 0) {
                    newTime -= 1;
                    newTime += 0.59
                }
                else {
                    newTime = (newTime - 0.01)
                }
            }
            return {...state, timeLeft: newTime.toFixed(2), mode: newMode}
        },
    }
})

export const { start_pause, reset, increase, decrease, changeMode, second } = timeSlice.actions;

export default timeSlice.reducer;