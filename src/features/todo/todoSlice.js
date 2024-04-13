import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: [],
    editedTodo: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (!action.payload.edit) {
                const newTodo = {
                    id: Date.now(),
                    title: action.payload.title,
                    completed: false,
                }
                state.todo.push(newTodo)
            } else if (action.payload.edit) {
                const edited = state.todo.find(item => item.id === action.payload.id)
                edited.title = action.payload.title
                state.todo.map(item => item.id === edited.id ? edited : item)
                state.editedTodo = []

            }
        },
        toggleTodo: (state, action) => {
            const selectedTodo = state.todo.find(item => item.id === action.payload.id)
            selectedTodo.completed = !selectedTodo.completed
            state.todo.map(item => item.id === selectedTodo.id ? selectedTodo : item)

        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(item => item.id !== action.payload.id)
        },
        editTodo: (state, action) => {
            state.editedTodo = []
            state.editedTodo.push(state.todo.find(item => item.id === action.payload.id))
        },
    },
})


export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
