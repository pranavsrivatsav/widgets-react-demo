import React from 'react'
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" >Accordion</Link>
            <Link href="/search" >Search</Link>
            <Link href="/dropdown" >Dropdown</Link>
            <Link href="/translate" >Translate</Link>
        </div>
    )
}

export default Header