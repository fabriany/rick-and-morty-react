import React from "react";
import { Todo as Todotype, TodoId, type listOfTodos } from "../types";
import { Todo } from "./Todo";

interface Props {
    todos: listOfTodos;
    onRemoveTodo: ( id  : TodoId) => void
    ontoCompleteTodo: ({ id, completed }: Pick<Todotype, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, ontoCompleteTodo }) => {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onRemoveTodo={onRemoveTodo}
                ontoCompleteTodo={ontoCompleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}