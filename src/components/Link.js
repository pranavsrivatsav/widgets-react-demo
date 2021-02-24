import React from 'react'

const Link = ({ children, href }) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) return

        e.preventDefault()
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return <a
        className="item"
        href={href}
        onClick={onClick}
    >
        {children}
    </a>
}

export default Link