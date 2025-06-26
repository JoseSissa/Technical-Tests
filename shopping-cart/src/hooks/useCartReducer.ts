import { useEffect, useReducer } from "react";
import type { Product } from "../types/types"
import { cartInitialState, cartReducer } from "../reducers/cart";


export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(state))
    }, [state])

    const addToCart = (product: Product) => dispatch({ type: 'ADD_TO_CART', payload: product })

    const cleanCart = () => dispatch({ type: 'CLEAN_CART', payload: null })

    const removeFromCart = (product: Product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })

    const subtractFromCart = (product: Product) => dispatch({ type: 'SUBTRACT_FROM_CART', payload: product })

    return { state, addToCart, cleanCart, removeFromCart, subtractFromCart }
}