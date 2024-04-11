import { useSelector } from "react-redux"
import { Items } from "./Exports"

function List() {
    const todo = useSelector((state) => state.todo)
    return (
        <div>
            <strong>TodoList</strong>
            <ul>{todo.todo?.map(item =>
                <Items key={item.id} {...item} />
            )}
            </ul>
        </div>
    )
}
export default List
