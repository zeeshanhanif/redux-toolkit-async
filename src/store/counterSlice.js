import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const counterUpdate = createAsyncThunk(
    "counter/counterUpdate",
    async (value, thunkAPI)=>{
        
        const resposne = await fetch("http://localhost:3001/api/updatecounter",
        {
            method: "post",
            body: {name: "hello"}
        });
        const data = await resposne.json();
        return data;
    }    
);



export const counterSlice = createSlice({
    name: "Counter",
    initialState : {
        count: 0,
        isLoading: false,
        error: "",
    },
    reducers: {
        increment: (state)=>{
            state.count++
        },
        decrement: (state)=> {
            state.count--;
        },
        incrementByAmount: (state,action)=> {
            state.count+=action.payload
        }
    },
    extraReducers: {
        [counterUpdate.fulfilled]: (state, action)=>{
            state.count+=action.payload;
            state.isLoading = false;
        },
        [counterUpdate.pending]: (state)=>{
            state.isLoading = true;
        },
        [counterUpdate.rejected]: (state,action)=>{
            console.log("rejected ",action);
            state.isLoading =  false;
            state.error = "Error in Update counter";
        },
    }
});

export const { increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;