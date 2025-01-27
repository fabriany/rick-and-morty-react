import {  useId } from "react"
import { useFilter } from "../hooks/useFilters"
import "./filters.css"
export function Filters () {
    const {filters, setFilters} = useFilter()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                  type="range"
                  id={minPriceFilterId}
                  min='0'
                  max='1000'
                  onChange={handleChangeMinPrice}
                />
                <span>${filters?.minPrice}</span>
            </div>

            <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>All</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>
            </div>

        </section>
    )
}