import type { ITodo } from './ITodo'

interface ITodoStore {
    todos: ITodo[]
    setTodos(todos: ITodo[]): void
}

export type { ITodoStore }
