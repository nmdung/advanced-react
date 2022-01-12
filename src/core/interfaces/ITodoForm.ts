import { ITodo, ITodoEdit } from './ITodo'

export interface ITodoForm {
    edit?: ITodoEdit
    onSubmit: (todo: ITodo) => void
}
