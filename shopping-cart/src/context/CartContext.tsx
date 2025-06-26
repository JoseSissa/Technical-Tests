import { createContext, useState } from "react";
import type { Product, ProductInCart, CartContextType } from "../types/types";


export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    cleanCart: () => { }
});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<ProductInCart[]>([]);

    const addToCart = (product: Product) => {
        // Search if product is already in cart
        const indexProductInCart = cart.findIndex((p) => p.id === product.id)
        // If product is not in cart, add it
        if (indexProductInCart >= 0) {
            setCart(
                [
                    ...cart.slice(0, indexProductInCart),
                    { ...product, quantity: cart[indexProductInCart].quantity + 1 }
                ])
        } else {
            // If product is in cart, update quantity
            setCart([...cart, { ...product, quantity: 1 }])
        }
    };

    const cleanCart = () => setCart([]);

    const removeFromCart = (product: Product) => {
        const newCart = cart.filter((p) => p.id !== product.id);
        console.log({ newCart });

        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cleanCart }}>
            {children}
        </CartContext.Provider>
    );
}