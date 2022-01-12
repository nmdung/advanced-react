import type { ITodoStore } from '../interfaces/ITodoStore'

type GetTodoStore = Pick<ITodoStore, 'getTodoList'>

export const getTodoList = (store: GetTodoStore) => {
    store.getTodoList()
}
