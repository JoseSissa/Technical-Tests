import { createContext, useEffect, useState } from "react";
import type { Product, ProductInCart, CartContextType } from "../types/types";


export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    cleanCart: () => { },
    subtractFromCart: () => { }
});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<ProductInCart[]>(
        window.localStorage.getItem('cart')
            ? JSON.parse(window.localStorage.getItem('cart') as string)
            : []
    );

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    const addToCart = (product: Product) => {
        // Search if product is already in cart
        const indexProductInCart = cart.findIndex((p) => p.id === product.id)
        // If product is not in cart, add it
        if (indexProductInCart >= 0) {
            const updatedCart = cart.map((elem, i) => {
                if (indexProductInCart === i) {
                    elem.quantity = elem.quantity + 1
                }
                return elem
            })
            setCart(updatedCart)
        } else {
            // If product is in cart, update quantity
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }])
        }
    }

    const cleanCart = () => setCart([]);

    const removeFromCart = (product: Product) => {
        const newCart = cart.filter((p) => p.id !== product.id);
        setCart(newCart);
    }

    const subtractFromCart = (product: Product) => {
        const indexProductInCart = cart.findIndex((p) => p.id === product.id)
        if (indexProductInCart >= 0) {
            if (cart[indexProductInCart].quantity > 1) {
                const updatedCart = cart.map((elem, i) => {
                    if (indexProductInCart === i) {
                        elem.quantity = elem.quantity - 1
                    }
                    return elem
                })
                setCart(updatedCart)
            } else {
                removeFromCart(product)
            }
        }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cleanCart, subtractFromCart }}>
            {children}
        </CartContext.Provider>
    );
}