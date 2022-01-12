export interface ITodo {
    id: number
    text: string
    isComplete?: boolean
}

export interface ITodoEdit {
    id: number | null
    value: string
}
