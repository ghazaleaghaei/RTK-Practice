import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

function Form() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        if (!value) return;
        dispatch(addTodo({ title: value }))
        setValue("")
    }
    return (
        <form
            class="flex flex-col text-start gap-4 justify-start text-lg"
            onSubmit={submitHandler}
        >
            <label>name</label>
            <input
                class="outline-none border border-gray-500 rounded-lg px-2 py-1 placeholder:text-gray-400"
                type="text"
                placeholder="add todo ..."
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <button
                type="submit"
                class="w-fit bg-sky-700 text-white px-2 py-1 rounded-lg">
                submit
            </button>
        </form>
    )
}
export default Form
