import React, { FC, useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { ITodo, ITodoEdit } from '../core/interfaces/ITodo'

//type TodoProps = {}
//const Todo: FC<TodoProps> = ({ todos, completeTodo, removeTodo, updateTodo }) => {

// @ts-ignore
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, editTodo] = useState<ITodoEdit>({
        id: null,
        value: ''
    })

    const submitUpdate = (value: ITodo) => {
        if (edit.id) {
            updateTodo(edit.id, value)
        }
        editTodo({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    const todoElements = todos.map(({ id, text, isComplete }: ITodo, index: number) => (
        <div className={isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={id} onClick={() => completeTodo(id)}>
                {text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeTodo(id)} className='delete-icon' />
                <TiEdit
                    onClick={() => editTodo({ id: id, value: text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ))
    return (
        <React.Fragment>
            {todoElements}
        </React.Fragment>
    )
}

export default Todo
