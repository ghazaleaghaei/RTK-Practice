import { Form, List } from "../Exports"

function AsyncIndex() {
    return (
        <section class="text-center m-5 max-w-sm mx-auto lg:max-w-md">
            <h1 class="text-2xl font-bold text-sky-900">CRUD with RTK</h1>
            <p class="text-sky-900"> async state</p>
            <Form />
            <List />
        </section>
    )
}
export default AsyncIndex
