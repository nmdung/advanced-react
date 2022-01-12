import { ITodo } from '../interfaces/ITodo'
import { ITodoStore } from '../interfaces/ITodoStore'

type UpdateTodoProvider = Pick<ITodoStore, 'todos' | 'setTodos'>

export const updateTodoUseCase = (
    store: UpdateTodoProvider,
    activeId: ITodo['id'],
    newTask: ITodo
) => {
    const { todos, setTodos } = store
    if (!newTask.text || /^\s*$/.test(newTask.text)) {
        return
    }
    const updatedTodos = todos.map(item => (item.id === activeId ? newTask : item))
    setTodos(updatedTodos)
}
