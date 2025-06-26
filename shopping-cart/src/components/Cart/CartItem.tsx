import type { ProductInCart } from "../../types/types";

export function CartItem({ product, addToCart, subtractFromCart }: { product: ProductInCart, addToCart: () => void, subtractFromCart: () => void }) {
    const { title, thumbnail, price, quantity } = product
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <button onClick={subtractFromCart}>-</button>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}