import { CartContext } from "./cartContex"
import { useReducer } from "react"

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const initialState = []
const reducer = (state, action) => {
    const { type, payload } = action

    
    switch(type) {
        case CART_ACTIONS_TYPES.ADD_TO_CART : {
            const { id } = payload
            console.log('id',id)
            console.log('state',state)

            const productInCartIndex = state.findIndex(item => item.id === id)
            console.log('productInCartIndex',productInCartIndex)

            

            if(productInCartIndex >= 0) {
                const newCart = structuredClone(state)
                newCart[productInCartIndex].quantity += 1
                return newCart
            }

            return [
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
                
            ]
        }

        case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
            const { id } = payload

            return state.filter(item => item.id !== id)
        }

        case CART_ACTIONS_TYPES.CLEAR_CART: {
            return initialState
        }
    }
}

export function CartProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const addToCart = product => dispatch({
        type: CART_ACTIONS_TYPES.ADD_TO_CART,
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = () => dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART })

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}