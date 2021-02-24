import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ label, options, selected, onSelectedChange, demoMode }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    const renderedOptions = options.map((option) => {
        if (option !== selected) {
            return (
                <div
                    key={option.value}
                    className="item"
                    onClick={
                        () => {
                            onSelectedChange(option)
                        }
                    }
                >
                    {option.label}
                </div>
            )
        }
    })

    const demo = () => {
        if (demoMode) {
            return (
                <h2
                    className="ui segment"
                    style={{ color: selected.value }}
                >
                    { `The text is ${selected.label}`}
                </h2>
            )
        }
    }

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return
            }

            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick, { capture: true })

        return () => document.body.removeEventListener('click', onBodyClick, { capture: true })
    }, [])

    return (
        <div ref={ref} className="ui container">
            {demo()}
            <div className="ui form segment">
                <div className="field">
                    <div className="label">
                        <label>{label}</label>
                    </div>
                    <div
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                        onClick={() => {
                            setOpen(!open)
                        }}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dropdown