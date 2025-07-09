import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from './const';

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
    fromLanguage: string,
    toLanguage: string,
    fromText: string,
    result: string,
    isLoading: boolean,
}

export type Action =
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_FROM_LANGUAGE', payload: string }
    | { type: 'SET_TO_LANGUAGE', payload: string }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_TO_TEXT', payload: string }
