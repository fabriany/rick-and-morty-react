import React  from "react"
import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ( title : TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header>
            <h1>Todo List <img
                style={{ width: '60px', height: 'auto' }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" />
            </h1>
            <CreateTodo saveTodo={onAddTodo} />
        </header>
    )
    
}