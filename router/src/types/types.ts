import { type FC } from 'react'

export type Route = {
    path: string
    component: FC
}

export type RouterProps = {
    routes: Route[]
    defaultComponent?: any
}