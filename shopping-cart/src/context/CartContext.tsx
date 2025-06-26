import { createContext } from "react";
import type { CartContextType } from "../types/types";
import { useCartReducer } from "../hooks/useCartReducer";


export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    cleanCart: () => { },
    subtractFromCart: () => { }
});

export function CartProvider({ children }: { children: React.ReactNode }) {

    const { state, addToCart, removeFromCart, cleanCart, subtractFromCart } = useCartReducer()

    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, cleanCart, subtractFromCart }}>
            {children}
        </CartContext.Provider>
    );
}