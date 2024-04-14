import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    todo: [],
    editedTodo: [],
    loading: false,
    error: ""
}
export const getAsyncTodo = createAsyncThunk(
    'todo/getAsyncTodo',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:5000/todos")
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
)

const asyncTodoSlice = createSlice({
    name: 'asyncTodo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAsyncTodo.pending, (state, action) => {
            state.loading = true;
            state.todo = [];
            state.error = "";
        }),
            builder.addCase(getAsyncTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todo = action.payload;
                state.error = "";
            }),
            builder.addCase(getAsyncTodo.rejected, (state, action) => {
                state.loading = false;
                state.todo = [];
                state.error = action.payload;
            })
    },
})

export default asyncTodoSlice.reducer
