import { useState, useEffect } from 'react'
import { EVENT } from '../config/const'
import type { RouterProps } from '../types/types'
import { NotFoundPage } from '../pages/404'


export function Router({ routes = [], defaultComponent: DefaultComponent = NotFoundPage }: RouterProps) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        // Listener for next navigation
        window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
        // Listener for back navigation
        window.addEventListener(EVENT.POPSTATE, onLocationChange)
        // Cleanup function to avoid memory leaks
        return () => {
            window.removeEventListener(EVENT.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENT.POPSTATE, onLocationChange)
        }
    }, [])

    const Page = routes.find((route) => route.path === currentPath)?.component
    return Page ? <Page /> : <DefaultComponent />
}