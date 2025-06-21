import { useState } from "react";
import { API_URL } from "../config";

export function useFetchFacto() {
    const [facto, setFacto] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getFacto = async () => {
        try {
            setLoading(true);
            const res = await fetch(API_URL.CAT_FACT);
            const data = await res.json();
            setFacto(data.fact);
        } catch (error) {
            console.error(error);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            error instanceof Error
                ? setError(error.message)
                : setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    return { facto, error, loading, getFacto };
}