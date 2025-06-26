export type Product = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export type ProductInCart = Product & {
    quantity: number
}

export type Filters = {
    price: number,
    category: string
}

export type CartContextType = {
    cart: ProductInCart[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    cleanCart: () => void;
    subtractFromCart: (product: Product) => void;
};

export type FiltersContextType = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: Product }
    | { type: 'CLEAN_CART'; payload: null }
    | { type: 'SUBTRACT_FROM_CART'; payload: Product }