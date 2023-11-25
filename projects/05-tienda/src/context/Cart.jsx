import { createContext, useReducer } from "react";

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case 'ADD_TO_CART': {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            if (productInCartIndex >= 0) {
                //una forma de hacerlo es usando structuredClone
                const newState = structuredClone(cart)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]  
        }

        case 'REMOVE_FROM_CART':{
            const { id } = actionPayload
            return state.filter(item => item.id !== id)
        }
        case 'CLEAR_CART':{
            return initialState
        }

    }
}
    export function CartProvider({ children }) {
        const [state, dispatch] = useReducer(reducer, initialState)
        const addToCart = (product) => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
        const removeFromCart = (product) => dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
        const clearCart = () => dispatch({
            type: 'CLEAR_CART'
        })

        //FORMA DE HACERLO SIN USAR EL REDUCER
        // const [cart, setCart] = useState([])
        // const addToCart = (product) => {
        //     //        setCart(prevState => prevState.filter(item => item.id !== product.id))
        //     const productInCartIndex = cart.findIndex(item => item.id === product.id)
        //     if (productInCartIndex >= 0) {
        //         //una forma de hacerlo es usando structuredClone
        //         const newCart = structuredClone(cart)
        //         newCart[productInCartIndex].quantity += 1
        //         return setCart(newCart)
        //     }
        //     setCart(prevState => ([
        //         ...prevState,
        //         {
        //             ...product,
        //             quantity: 1
        //         }
        //     ]))
        // }
        // const removeFromCart = (product) => {
        //     //        setCart(prevState => prevState.filter(item => item.id !== product.id))
        //     const productInCartIndex = cart.findIndex(item => item.id === product.id)
        //     if (productInCartIndex >= 0) {
        //         //una forma de hacerlo es usando structuredClone
        //         const newCart = structuredClone(cart)
        //         newCart[productInCartIndex].quantity -= 1
        //         if (newCart[productInCartIndex].quantity === 0) {
        //             newCart.splice(productInCartIndex, 1)
        //         }
        //         return setCart(newCart)
        //     }
        // }
        // const clearCart = () => {
        //     setCart([])
        // }
        return (<CartContext.Provider value={{
            cart:state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
        )
    }