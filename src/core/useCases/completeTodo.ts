import { ITodo } from '../interfaces/ITodo'
import { ITodoStore } from '../interfaces/ITodoStore'

type CompleteTodoStore = Pick<ITodoStore, 'todos' | 'setTodos'>

export const completeTodoUseCase = (store: CompleteTodoStore, activeId: ITodo['id']) => {
    const { todos, setTodos } = store
    let updatedTodos = todos.map(todo => {
        if (todo.id === activeId) {
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos)
}
