import React  from "react"
import { TodoTitle } from "../types"

interface Props {
    saveTodo: ( title : TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ( {saveTodo} ) => {
    const [inputValue, setInputValue] = React.useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        saveTodo(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="new-todo"
                value={inputValue}
                onChange={(event) => {setInputValue(event.target.value)}}
                onKeyDown={() => {}}
                placeholder="What needs to be done?"
                autoFocus
            />
        </form>
    )
}
