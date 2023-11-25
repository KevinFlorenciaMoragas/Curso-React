import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
export function Footer(){
    const { filters } = useFilters()
    const { cart } = useCart()
    return(
        <footer className="footer">
           {
           JSON.stringify(filters, null, 2)
           
           
           /* <h4>Prueba tecnica de React * </h4>
           <span>Kevin</span>
           <h5>Shopping Cart useContect & useReducer</h5> */
           }
           {
              JSON.stringify(cart, null, 2)
           }

        </footer>
    )
}