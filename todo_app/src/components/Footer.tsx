import React  from "react"
import { Filter } from "./Filter"
import { FilterValue } from "../types"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
    activeCount = 0 ,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tereas pendientes
            </span>
            
            <Filter
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
                onClearCompleted={onClearCompleted}
            />

            {
                completedCount > 0 && ( 
                    <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                    >
                        Clear completed ({completedCount})          
                    </button> 
                )
            }
        </footer>
    )
}