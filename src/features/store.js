import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/todoSlice'
import asyncTodoReducer from './todo/asyncTodoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        asyncTodo: asyncTodoReducer,
        //add another reducer here
    },
})
