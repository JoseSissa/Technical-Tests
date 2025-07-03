import { TODO_FILTERS } from '../utils/const'

interface Props {
    handleFilter: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void
    deleteTodoCompleted: () => void
}

export const Footer: React.FC<Props> = ({ handleFilter, deleteTodoCompleted }) => {
    return (
        <footer>
            <div>
                <button onClick={() => handleFilter(TODO_FILTERS.ALL)}>{TODO_FILTERS.ALL}</button>
                <button onClick={() => handleFilter(TODO_FILTERS.ACTIVE)}>{TODO_FILTERS.ACTIVE}</button>
                <button onClick={() => handleFilter(TODO_FILTERS.COMPLETED)}>{TODO_FILTERS.COMPLETED}</button>
                <button onClick={() => deleteTodoCompleted()}>Clear completed</button>
            </div>
        </footer>
    )
}