import type { FromLanguage, Language } from "../types";

interface Props {
    text: string,
    fromLanguage: FromLanguage,
    toLanguage: Language
}

export async function Translator({ text, fromLanguage, toLanguage }: Props) {
    if (text == null || text === '') return;
    try {
        const res = await fetch('http://localhost:5000/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                q: text,
                source: fromLanguage,
                target: toLanguage,
                format: 'text'
            }),
        });

        return await res.json();

    } catch (error) {
        console.error('Error al traducir:', error);
    } finally {
        // setLoading(false);
    }
}