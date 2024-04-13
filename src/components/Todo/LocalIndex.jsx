import { Link } from "react-router-dom"
import { Form, List } from "../Exports"

function LocalIndex() {
    return (
        <section class="text-center m-5 max-w-sm mx-auto lg:max-w-md">
            <Link to="asyncTodo">asyncTodo</Link>
            <h1 class="text-2xl font-bold text-sky-900">CRUD with RTK</h1>
            <p class="text-sky-900">local state</p>
            <Form />
            <List />
        </section>
    )
}
export default LocalIndex
