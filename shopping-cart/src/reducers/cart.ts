import type { Product, ProductInCart, CartAction } from "../types/types"

export const cartInitialState: ProductInCart[] = window.localStorage.getItem('cart')
    ? JSON.parse(window.localStorage.getItem('cart') as string)
    : []

export const cartReducer = (state: ProductInCart[], action: CartAction) => {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case 'ADD_TO_CART': {
            const indexProductInCart = state.findIndex((p) => p.id === actionPayload.id)
            if (indexProductInCart >= 0) {
                // With map function
                // return state.map((elem, i) => {
                //     if (indexProductInCart === i) {
                //         elem.quantity = elem.quantity + 1
                //     }
                //     return elem
                // })

                // With slice function
                return [
                    ...state.slice(0, indexProductInCart),
                    { ...state[indexProductInCart], quantity: state[indexProductInCart].quantity + 1 },
                    ...state.slice(indexProductInCart + 1)
                ]

            } else {
                return [...state, { ...actionPayload, quantity: 1 }]
            }
        }

        case 'REMOVE_FROM_CART': {
            return state.filter((p) => p.id !== actionPayload.id);
        }

        case 'CLEAN_CART': {
            return [];
        }

        case 'SUBTRACT_FROM_CART': {
            const indexProductInCart = state.findIndex((p) => p.id === actionPayload.id)
            if (indexProductInCart >= 0) {
                if (state[indexProductInCart].quantity > 1) {
                    return state.map((elem, i) => {
                        if (indexProductInCart === i) {
                            elem.quantity = elem.quantity - 1
                        }
                        return elem
                    })
                } else {
                    return state.filter((p) => p.id !== actionPayload.id)
                }
            }
        }
    }
    return state
}