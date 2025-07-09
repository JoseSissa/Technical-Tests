import { useReducer } from 'react';
import type { Action, FromLanguage, Language, State } from '../types';
import { AUTO_LANGUAGE } from '../const';

const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    isLoading: false,
}

const reducer = (state: State, action: Action) => {
    const { type } = action

    if (type === 'INTERCHANGE_LANGUAGES') {
        if (state.fromLanguage === AUTO_LANGUAGE) return state
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage,
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {
        return {
            ...state,
            fromLanguage: action.payload,
        }
    }

    if (type === 'SET_TO_LANGUAGE') {
        return {
            ...state,
            toLanguage: action.payload,
        }
    }

    if (type === 'SET_FROM_TEXT') {
        return {
            ...state,
            isLoading: true,
            fromText: action.payload,
            result: '',
        }
    }

    if (type === 'SET_TO_TEXT') {
        return {
            ...state,
            isLoading: false,
            result: action.payload,
        }
    }

    return state
}

export const useStorage = () => {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        isLoading
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguage = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }

    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguage = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }

    const setToText = (payload: string) => {
        dispatch({ type: 'SET_TO_TEXT', payload })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        isLoading,
        interchangeLanguage,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setToText,
    }
}