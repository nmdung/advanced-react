import React from 'react'
import { ITodo } from '../interfaces/ITodo'
import { ITodoStore } from '../interfaces/ITodoStore'
import { addTodoUseCase } from '../useCases/addTodo'
import { completeTodoUseCase } from '../useCases/completeTodo'
import { removeTodoUseCase } from '../useCases/removeTodo'
import { updateTodoUseCase } from '../useCases/updateTodo'

export const useTodos = (store: ITodoStore) => {
    const addTodo = React.useCallback(
        (newTask: ITodo) => {
            addTodoUseCase(
                {
                    todos: store.todos,
                    setTodos: store.setTodos
                },
                newTask
            )
        },
        [store.todos, store.setTodos]
    )

    const completeTodo = React.useCallback(
        (activeId: ITodo['id']) => {
            completeTodoUseCase(
                {
                    todos: store.todos,
                    setTodos: store.setTodos
                },
                activeId
            )
        },
        [store.todos, store.setTodos]
    )

    const updateTodo = React.useCallback(
        (activeId: ITodo['id'], newTask: ITodo) => {
            updateTodoUseCase({ todos: store.todos, setTodos: store.setTodos }, activeId, newTask)
        },
        [store.todos, store.setTodos]
    )

    const removeTodo = React.useCallback(
        (activeId: ITodo['id']) => {
            removeTodoUseCase(
                {
                    todos: store.todos,
                    setTodos: store.setTodos
                },
                activeId
            )
        },
        [store.todos, store.setTodos]
    )

    return {
        todos: store.todos,
        addTodo,
        completeTodo,
        removeTodo,
        updateTodo
    }
}
