import { ITodo } from '../interfaces/ITodo'
import { ITodoStore } from '../interfaces/ITodoStore'

type AddTodoStore = Pick<ITodoStore, 'todos' | 'setTodos'>

export const addTodoUseCase = (store: AddTodoStore, newTodo: ITodo) => {
    const { todos, setTodos } = store
    const newTodos = [newTodo, ...todos]
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
        return
    }

    if (newTodos.length !== 0) {
        let i = 1
        while (i < newTodos.length) {
            if (newTodos[i].text === newTodo.text) {
                // Todo: set model open
                //setModalIsOpen(true)
            }
            i++
        }
    }
    setTodos(newTodos)
}
