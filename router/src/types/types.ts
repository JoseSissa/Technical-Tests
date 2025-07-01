import type { FC, ReactNode } from "react"

export type RouteType = {
    path: string
    component: FC<any>
}

export type RouterProps = {
    routes: RouteType[]
    defaultComponent?: any
    children: ReactNode
}