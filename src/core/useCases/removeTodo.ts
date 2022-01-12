import { ITodo } from '../interfaces/ITodo'
import { ITodoStore } from '../interfaces/ITodoStore'

type RemoveTodoProvider = Pick<ITodoStore, 'todos' | 'setTodos'>

export const removeTodoUseCase = (store: RemoveTodoProvider, removeId: ITodo['id']) => {
    const { todos, setTodos } = store
    const removeArr = [...todos].filter(todo => todo.id !== removeId)

    setTodos(removeArr)
}
