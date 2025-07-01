import type { JSX } from "react"

type RouteProps = {
    path: string
    component: ({ routeParams }: { routeParams: any }) => JSX.Element
}

export function Route({ path, component }: RouteProps) {
    void path;
    void component;
    return null
}