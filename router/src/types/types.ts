import type { JSX } from "react"

export type Route = {
    path: string
    component: ({ routeParams }: { routeParams: any }) => JSX.Element
}

export type RouterProps = {
    routes: Route[]
    defaultComponent?: any
}