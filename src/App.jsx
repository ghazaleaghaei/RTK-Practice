import React from "react"
import { Provider } from "react-redux"
import { store } from "./features/store"
import { LocalIndex, AsyncIndex } from "./components/Exports"
import { Route, Routes } from "react-router-dom"

function App() {

    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<LocalIndex />} />
                <Route path="asyncTodo" element={<AsyncIndex />} />
            </Routes>
        </Provider >
    )
}

export default App
