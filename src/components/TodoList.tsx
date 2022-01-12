import React, { FC, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Modal from "react-modal";
import { ITodo } from "../core/interfaces/ITodo";
import { useTodos } from "../core/hooks/useTodos";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
}

const TodoList: FC<Props> = ({ className }) => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const { addTodo, updateTodo, removeTodo, completeTodo } = useTodos({
        todos,
        setTodos
    })

    return (
        <div>
            <h1>What's the task for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Ooops!</h2>
                <p>It's look like you already add this task...</p>
                <button onClick={() => setModalIsOpen(false)}>I Know</button>
            </Modal>
        </div>
    );
};

export default TodoList;
