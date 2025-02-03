import React, { useState }  from "react"
import { Todos } from "./components/Todos"
import { FilterValue, Todo, TodoId, TodoTitle } from "./types"
import { TODO_FILTERS } from "./const"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn GraphQL',
    completed: false
  }
]

const App = () : JSX.Element => {
  const [todos, setTodos] = React.useState(mockTodos)
  const [filterSelects, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ( id : TodoId ) => {  
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ( 
    { id, completed }: Pick<Todo, 'id' | 'completed'>
  ): void  => {  
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    console.log(filterSelects)
    if (filterSelects === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelects === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = (title: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID().toString(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos  
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        ontoCompleteTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelects}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
   
   
  )
}

export default App
