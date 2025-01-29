import { EVENT } from "./const"

export function navigate(href) {
    window.history.pushState(null, null, href);
    const navigateEvent = new Event(EVENT.PUSHSTATE)
    window.dispatchEvent(navigateEvent)
}

export function Link ({target, to, ...props}) {
    const handleClick = (event) => {
        const isMainEvent = event.button === 0
        const isModifiesEvent = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
        const isManageableEvent = target === undefined || target === 'self'

        if (isMainEvent && isManageableEvent && !isModifiesEvent) {
            event.preventDefault()
            navigate(to)
        }
    }
    return <a onClick={handleClick} href={to} target={target} {...props} />
}