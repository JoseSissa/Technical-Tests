import { EVENT, BUTTONS } from '../config/const'

type LinkProps = {
    target?: '_blank' | '_self' | '_parent' | '_top'
    to: string
    children: React.ReactNode
}

export function navigate(href: string) {
    // Change the URL
    window.history.pushState({}, '', href)
    // Creeate a new event
    const navigation = new Event(EVENT.PUSHSTATE)
    // Send the event
    window.dispatchEvent(navigation)
}

// targat can be _blank, _self, _parent, _top
// to === destination
// props === attributes like className, id, etc
export function Link({ target = '_self', to, ...props }: LinkProps) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {

        const isMainEvent = e.button === BUTTONS.primary // primary click
        const isManageableEvent = target === '_self'
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey // modifier click

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            e.preventDefault()
            navigate(to) // Navigation with SPA
        }
    }

    return (
        <a onClick={handleClick} href={to} target={target} {...props} />
    )
}