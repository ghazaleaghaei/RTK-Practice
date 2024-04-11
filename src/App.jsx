import { Provider } from "react-redux"
import { Form, List } from "./components/Exports"
import { store } from "./features/store"

function App() {

    return (
        <Provider store={store}>
            <section class="text-center m-5 max-w-sm mx-auto lg:max-w-md">
                <h1 class="text-2xl font-bold text-sky-900">CRUD with RTK</h1>
                <Form />
                <List />
            </section>
        </Provider >
    )
}

export default App
