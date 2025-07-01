import type { FC, ReactNode } from "react"

export type RouteType = {
    path: string
    component: FC<any>
}

export type RouterProps = {
    routes: RouteType[]
    defaultComponent?: any
    children?: ReactNode
}

export type I18nType = {
    [key: string]: {
        title: string
        description: string
        home: string
        info: string
    }
}