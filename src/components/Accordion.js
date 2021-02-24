import React, { useState, useEffect, useRef } from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const ref = useRef()

    const onTitleClick = (index) => {
        activeIndex !== index ? setActiveIndex(index) : setActiveIndex(null)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    {item.content}
                </div>
            </React.Fragment>
        )
    })

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return
            }
            setActiveIndex(null)
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])



    return (
        <div ref={ref} className="ui styled accordion">
            {renderedItems}
        </div>

    )
}

export default Accordion