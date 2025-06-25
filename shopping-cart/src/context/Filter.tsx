import { createContext, useState } from "react";
import type { Filters } from "../types/types";

type FiltersContextType = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};


// 1. Creation of the context
// We can consume in all app
export const FiltersContext = createContext<FiltersContextType>({
    filters: { price: 0, category: 'all' },
    setFilters: () => { }
})

// 2. Creation of the provider
export function FiltersProvider({ children }: { children: React.ReactNode }) {
    const [filters, setFilters] = useState<Filters>({
        price: 0,
        category: 'all'
    });

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    );
}