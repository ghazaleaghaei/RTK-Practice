import { useDispatch, useSelector } from "react-redux"
import { Items } from "../Exports"
import { useEffect } from "react"
import { getAsyncTodo } from "../../features/todo/asyncTodoSlice"

function List() {
    const { todo, loading, error } = useSelector((state) => state.asyncTodo)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAsyncTodo())
    }, [])
    return (
        <div>
            <strong>TodoList</strong>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>{todo?.map(item =>
                    <Items key={item.id} {...item} />
                )}
                </ul>
            )}
        </div>
    )
}
export default List
