import { useState } from "react"
import { FiltersContext } from "./productsContex"

export function FiltersProvider({ children }){

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 500
    })        
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}