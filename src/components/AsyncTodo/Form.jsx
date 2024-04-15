import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAsyncTodo, editAsyncTodo } from "../../features/todo/asyncTodoSlice"

function Form() {
    const [value, setValue] = useState("")
    const { loading, editedTodo } = useSelector((state) => state.asyncTodo)
    const dispatch = useDispatch()

    useEffect(() => {
        editedTodo.length && setValue(editedTodo[0].title)
    }, [editedTodo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (!value || value.match(/^\s*$/)) return;
        editedTodo.length ?
            dispatch(editAsyncTodo({ title: value, id: editedTodo[0].id })) :
            dispatch(addAsyncTodo({ title: value }))
        setValue("")
    }
    return (
        <form
            class={`flex flex-col text-start gap-4 justify-start text-lg ${loading ? "opacity-50" : "opacity-100"}`}
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
                disabled={loading}
                type="submit"
                class="w-fit bg-sky-700 text-white px-2 py-1 rounded-lg"
            >
                {editedTodo.length ? "edit" : "submit"}
            </button>
        </form>
    )
}
export default Form
