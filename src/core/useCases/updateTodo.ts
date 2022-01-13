import { ITodo } from '../interfaces/ITodo'
import { ITodoStore } from '../interfaces/ITodoStore'

type UpdateTodoStore = Pick<ITodoStore, 'todos' | 'setTodos'>

export const updateTodoUseCase = (
    store: UpdateTodoStore,
    activeId: ITodo['id'],
    newTodo: ITodo
) => {
    const { todos, setTodos } = store
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
        return
    }
    const updatedTodos = todos.map(item => (item.id === activeId ? newTodo : item))
    setTodos(updatedTodos)
}
