import { TODO_FILTERS } from '../utils/const'
import { useTodo } from '../hooks/useTodo'


export const Footer: React.FC = () => {
    const { deleteTodoCompleted, filterAllTodos, filterActiveTodos, filterCompletedTodos } = useTodo()
    return (
        <footer>
            <div>
                <button onClick={() => filterAllTodos()}>{TODO_FILTERS.ALL}</button>
                <button onClick={() => filterActiveTodos()}>{TODO_FILTERS.ACTIVE}</button>
                <button onClick={() => filterCompletedTodos()}>{TODO_FILTERS.COMPLETED}</button>
                <button onClick={() => deleteTodoCompleted()}>Clear completed</button>
            </div>
        </footer>
    )
}