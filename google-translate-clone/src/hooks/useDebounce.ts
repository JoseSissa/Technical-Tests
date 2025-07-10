import { useEffect, useState } from "react";

// <T> --> Means that we pass the type from props
export function useDebounce<T>({ value, delay = 500 }: { value: T, delay?: number }) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}