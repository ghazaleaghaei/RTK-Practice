import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../features/todo/todoSlice"

function Items({ id, title, completed }) {
    const dispatch = useDispatch()
    return (
        <li
            class="w-full border inline-flex my-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300"
        >
            <input
                type="checkbox"
                class=""
                checked={completed}
                onChange={() => { dispatch(toggleTodo({ id })) }}

            />
            <span>{title}</span>
            <button
                class="ms-auto bg-red-500 px-2 py-1 rounded-lg text-white"
                onClick={() => { dispatch(deleteTodo({ id })) }}
            >
                Delete
            </button>
        </li>
    )
}
export default Items
