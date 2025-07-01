import { useState, useEffect } from 'react'
import { EVENT } from '../config/const'
import type { RouterProps } from '../types/types'
import { NotFoundPage } from '../pages/404'
import { match } from 'path-to-regexp'

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

    let routeParams = {}
    // We used path-to-regexp
    // to find dinamics routes such as /search/:query
    const Page = routes.find((route) => {
        if (route.path === currentPath) return true

        const matcherUrl = match(route.path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false
        // We get and save the dinamic params from the route
        // if the route is /search/:query and the current path is /search/react
        // then matched.params.query === 'react'
        routeParams = matched.params // { query: 'react' }
        return true
    })?.component

    return Page
        ? <Page routeParams={routeParams} />
        : <DefaultComponent />
}