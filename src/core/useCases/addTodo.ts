import { ITodo } from '../interfaces/ITodo'
import { ITodoStore } from '../interfaces/ITodoStore'

//type AddTodoProvider = Pick<ITodoStore, 'todos' | 'addTodo' | 'setTodos'>
type AddTodoProvider = Pick<ITodoStore, 'todos' | 'setTodos'>

export const addTodoUseCase = (store: AddTodoProvider, newTask: ITodo) => {
    //store.addTodo(newTask)
    const { todos, setTodos } = store
    const newTodos = [newTask, ...todos]
    if (!newTask.text || /^\s*$/.test(newTask.text)) {
        return
    }

    if (newTodos.length !== 0) {
        let i = 1
        while (i < newTodos.length) {
            if (newTodos[i].text === newTask.text) {
                //setModalIsOpen(true)
            }
            i++
        }
    }
    setTodos(newTodos)
}
