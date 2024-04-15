import { Link } from "react-router-dom"
import { Form, List } from "../Exports"

function LocalIndex() {
    return (
        <>
            <Link
                class="flex justify-start my-10 max-w-28 mx-5 bg-fuchsia-400 px-4 py-2 rounded-lg text-white duration-300 hover:bg-fuchsia-900"
                to="asyncTodo"
            >
                asyncTodo
            </Link>
            <section class="text-center m-5 max-w-sm mx-auto lg:max-w-md">
                <h1 class="text-2xl font-bold text-sky-900">CRUD with RTK</h1>
                <p class="text-sky-900">local state</p>
                <Form />
                <List />
            </section>
        </>
    )
}
export default LocalIndex
