import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action)
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
            state.todo.push(newTodo)
        },
        toggleTodo: (state, action) => {
            const selectedTodo = state.todo.find(item => item.id === action.payload.id)
            selectedTodo.completed = !selectedTodo.completed
            state.todo.map(item => item.id === selectedTodo.id ? selectedTodo : item)

        },
        deleteTodo: (state, action) => {
            console.log(action)
            state.todo = state.todo.filter(item => item.id !== action.payload.id)
        },
    },
})


export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
