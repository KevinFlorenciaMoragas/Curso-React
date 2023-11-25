import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import {  useId } from 'react'
export function Filters() {
    const { filters, setFilters} = useFilters()
   // const [minPrice, setMinPrice] = useState(0) //estado local
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const handleChangeMinPrice = (event) => {
        //setMinPrice(event.target.value)
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
                <label htmlFor="price">Price</label>
                <input type='range' id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
                <span>€{filters.minPrice}</span>
            </div >
            <div>
                <label htmlFor="category">Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Moviles</option>
                    <option value='clothes'>Clothes</option>
                </select>
            </div>
        </section>
    )

}