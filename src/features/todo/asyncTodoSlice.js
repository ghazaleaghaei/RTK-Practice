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

export const addAsyncTodo = createAsyncThunk(
    'todo/addAsyncTodo',
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/todos", {
                title: payload.title,
                id: Date.now(),
                completed: false
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
)

export const deleteAsyncTodo = createAsyncThunk(
    'todo/deleteAsyncTodo',
    async (payload, thunkAPI) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${payload.id}`)
            return { id: payload.id }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
)

export const toggleAsyncTodo = createAsyncThunk(
    'todo/toggleAsyncTodo',
    async (payload, thunkAPI) => {
        try {
            const response = await axios.patch(`http://localhost:5000/todos/${payload.id}`, {
                completed: payload.completed
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
)

export const editAsyncTodo = createAsyncThunk(
    'todo/editAsyncTodo',
    async (payload, thunkAPI) => {
        try {
            const response = await axios.patch(`http://localhost:5000/todos/${payload.id}`, {
                title: payload.title
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
)

const asyncTodoSlice = createSlice({
    name: 'asyncTodo',
    initialState,
    reducers: {
        editTodo: (state, action) => {
            state.editedTodo = []
            state.editedTodo.push(state.todo.find(item => item.id === action.payload.id))
        },
    },
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
            }),
            builder.addCase(addAsyncTodo.pending, (state, action) => {
                state.loading = true;
            }),
            builder.addCase(addAsyncTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todo.push(action.payload)
            }),
            builder.addCase(deleteAsyncTodo.pending, (state, action) => {
                state.loading = true;
            }),
            builder.addCase(deleteAsyncTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todo = state.todo.filter(item => item.id !== action.payload.id)
            }),
            builder.addCase(toggleAsyncTodo.fulfilled, (state, action) => {
                const selectedTodo = state.todo.find(item => item.id === action.payload.id);
                selectedTodo.completed = action.payload.completed;
            }),
            builder.addCase(editAsyncTodo.pending, (state, action) => {
                state.loading = true;
            }),
            builder.addCase(editAsyncTodo.fulfilled, (state, action) => {
                state.loading = false;
                const selectedItem = state.todo.find(item => item.id === action.payload.id)
                selectedItem.title = action.payload.title
                state.editedTodo = []
            })


    },
})

export const { editTodo } = asyncTodoSlice.actions

export default asyncTodoSlice.reducer
