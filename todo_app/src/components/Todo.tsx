import React from 'react';
import { TodoId, type Todo as TodoType } from '../types';

interface Props extends TodoType {
    onRemoveTodo: ( id : TodoId) => void
    ontoCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, ontoCompleteTodo }) => {
    return (
        <div>
            <input 
                type="checkbox" 
                defaultChecked={completed}
                className='toggle'
                onChange={(event) => {
                    ontoCompleteTodo({
                        id,
                        completed: event.target.checked
                    })
                }} 
            />
            <label>{title}</label>
            <button 
                className='destroy' 
                onClick={() => {onRemoveTodo(id)}}
            />
        </div>
    )
}